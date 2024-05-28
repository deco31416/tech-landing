'use client';

import { clsx } from 'clsx';

import { Carousel } from '~/components/Carousel/Carousel';
import { ColorCards } from '~/components/ColorCards/ColorCards';
import { FeaturePreview } from '~/components/FeaturePreview/FeaturePreview';
import { Footer } from '~/components/Footer/Footer';
import { Header } from '~/components/Header/Header';
import { DappsAnimation } from '~/components/home/animations/DappsAnimation/DappsAnimation';
import { MessageAnimation } from '~/components/home/animations/MessageAnimation/MessageAnimation';
import { OwnershipAnimation } from '~/components/home/animations/OwnershipAnimation/OwnershipAnimation';
import { HeroContent } from '~/components/home/header/HeroContent/HeroContent';
import { Navbar } from '~/components/Navbar/Navbar';
import { SearchInput } from '~/components/SearchInput/SearchInput';
import { TwoCol } from '~/components/TwoCol/TwoCol';
import { fallbackLng, Language } from '~/i18n/settings';
import { useTranslation } from '~/i18n/useTranslation';

import ui from '~/styles/ui.module.css';
import styles from './page.module.css';
import { PartnersList } from '~/components/home/PartnersList/PartnersList';
import { PartnerEntry } from '~/utils/types';
import { StatsCounter } from '~/components/home/animations/StatsCounter/StatsCounter';
import Link from 'next/link';
import { getLangPrefix } from '~/i18n/langPrefix';

const partners: PartnerEntry[] = [
    /* temporary */
    {
        name: 'Coinbase Wallet',
        icon: 'coinbase.svg',
        category: 'wallet',
    },
    {
        name: 'Rainbow',
        icon: 'rainbow.svg',
        category: 'wallet',
    },
    {
        name: 'Brave',
        icon: 'brave.svg',
        category: 'browser',
    },
    {
        name: 'GoDaddy',
        icon: 'godaddy.svg',
        category: 'service',
    },
    {
        name: 'Etherscan',
        icon: 'etherscan.svg',
        category: 'service',
    },
    {
        name: 'Uniswap',
        icon: 'uniswap.svg',
        category: 'dApp',
    },
];

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home({ params: { lang = fallbackLng } }: { params: { lang?: Language } }) {
    const { t } = await useTranslation(lang, 'translation');

    return (
        <main>
            <Navbar t={t} lang={lang} />
            <Header
                title={t('home.hero.title')}
                subtitle={t('home.hero.subtitle')}
                description={t('home.hero.text')}
            >
                <HeroContent />
            </Header>
            <SearchInput t={t} />
            <section className={clsx(ui['page'])}>
                <div>
                    <div className={clsx(ui.flex, ui['flex-col'], styles.title)}>
                        <h2>{t('home.features.title')}</h2>
                        <p>{t('home.features.text')}</p>
                    </div>
                    <Carousel>
                        <FeaturePreview
                            title={t('home.features.farewell.title')}
                            text={t('home.features.farewell.text')}
                            textColor="ens-blue"
                            backgroundColor="ens-light-blue"
                            indicatorColor="ens-white"
                            position={0}
                            gridSrc="blue-grid.svg"
                        >
                            <MessageAnimation t={t} />
                        </FeaturePreview>
                        <FeaturePreview
                            title={t('home.features.consistent.title')}
                            text={t('home.features.consistent.text')}
                            textColor="ens-magenta"
                            backgroundColor="ens-light-magenta"
                            indicatorColor="ens-white"
                            position={1}
                            gridSrc="magenta-grid.svg"
                        >
                            <DappsAnimation t={t} />
                        </FeaturePreview>
                        <FeaturePreview
                            title={t('home.features.ownership.title')}
                            text={t('home.features.ownership.text')}
                            textColor="ens-green"
                            backgroundColor="ens-light-green"
                            indicatorColor="ens-white"
                            position={2}
                            gridSrc="green-grid.svg"
                        >
                            <OwnershipAnimation />
                        </FeaturePreview>
                    </Carousel>
                </div>
                <div>
                    <div className={clsx(
                        ui.flex,
                        ui['flex-col'],
                        ui['h3-section'],
                    )}
                    >
                        <h3>{t('home.gyow.title')}</h3>
                        <p className={clsx(ui['max-w-text'], ui.serif)}>
                            {t('home.gyow.description')}
                        </p>
                    </div>
                    <div className={styles.trainTrack}>{/* TODO: Train Tracks */}</div>
                    <ColorCards
                        cards={[
                            {
                                title: t('home.gyow.ens-app.title'),
                                description: t('home.gyow.ens-app.description'),
                                color: 'ens-blue',
                                link: 'https://app.ens.domains',
                            },
                            {
                                title: t('home.gyow.ens-dao.title'),
                                description: t('home.gyow.ens-dao.description'),
                                color: 'ens-green',
                                link: 'https://discuss.ens.domains',
                            },
                            {
                                title: t('home.gyow.docs.title'),
                                description: t('home.gyow.docs.description'),
                                color: 'ens-magenta',
                                link: 'https://docs.ens.domains',
                            },
                        ]}
                    />
                    <div>{/* TODO: Train Tracks */}</div>
                </div>
                <div
                    className={clsx(

                        ui.flex,
                        ui['flex-col'],
                        styles.gtwSection,
                    )}
                >
                    <div className={clsx(
                        ui.flex,
                        ui['flex-col'],
                        ui['h3-section'],
                    )}
                    >
                        <h3>{t('home.gateway.title')}</h3>
                        <p className={clsx(ui['max-w-text'], ui.serif)}>
                            {t('home.gateway.description')}
                        </p>
                    </div>

                    <div className={clsx(ui.flex, ui['flex-col'], styles.partnersContainer)}>
                        <div className={ui['body-sm']}>{t('home.partners.tag')}</div>

                        <p className={clsx(ui['max-w-text'], ui.serif)}>
                            {t('home.partners.description')}
                        </p>
                        <PartnersList partners={partners} />

                        <Link href={`${getLangPrefix(lang)}/ecosystem`} className={ui.button}>
                            {t('home.partners.button')}
                        </Link>
                    </div>
                </div>
                <TwoCol
                    cols={[
                        {
                            tag: t('home.extra.governance.tag'),
                            title: t('home.extra.governance.title'),
                            description: t(
                                'home.extra.governance.description',
                            ),
                            button: t('home.extra.governance.button'),
                            buttonVariant: 'secondary',
                            href: '/',
                        },
                        {
                            tag: t('home.extra.community.tag'),
                            title: t('home.extra.community.title'),
                            description: t(
                                'home.extra.community.description',
                            ),
                            button: t('home.extra.community.button'),
                            buttonVariant: 'secondary',
                            href: '/',
                        },
                    ]}
                />
                <StatsCounter t={t} />
            </section>
            <Footer t={t} />
        </main>
    );
}
