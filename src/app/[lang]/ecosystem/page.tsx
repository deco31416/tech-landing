/* eslint-disable unicorn/prevent-abbreviations */

import clsx from 'clsx';

import Footer from '../../../components/Footer/Footer';
import { LinkList } from '../../../components/LinkList/LinkList';
import { Navbar } from '../../../components/Navbar/Navbar';
import { Language } from '../../../i18n/settings';
import { useTranslation } from '../../../i18n/useTranslation';
import ui from '../../../styles/ui.module.css';
import styles from './page.module.css';

export default async function Home({
    params,
}: {
    params: { lang: Language };
    searchParams?: any;
}) {
    const { t } = await useTranslation(params.lang, 'translation');

    return (
        <div className="page">
            <Navbar t={t} lang={params.lang} />
            <header
                className={clsx(
                    ui['flex'],
                    ui['flex-center'],
                    ui['flex-col'],
                    styles.header
                )}
            >
                <div>{t('ecosystem.hero.tag')}</div>
                <h1 className={styles.h1}>{t('ecosystem.hero.title')}</h1>
                <p className={styles.p}>{t('ecosystem.hero.text')}</p>
            </header>

            <div className={clsx(ui.sub1, ui['w-page'])}>
                Ready for integration?
            </div>

            <LinkList
                links={[
                    {
                        title: 'Robust Web3 Foundation',
                        href: '',
                        description:
                            'Gain access to a built-in audience, establishing your brand as a key player in the new internet era.',
                    },
                    {
                        title: 'Unparalleled Trust',
                        href: '',
                        description:
                            // eslint-disable-next-line quotes
                            "Trust isn't a buzzword, it's our foundation. As a non-profit, DAO-governed protocol, we're committed to security and integrity.",
                    },
                    {
                        title: 'Need more resources?',
                        href: '',
                        description:
                            'ENS is more powerful than you think. See below for more resources on how to integrate ENS into your organization.',
                    },
                ]}
            />

            <div className={clsx(ui.sub2, ui['w-page'])}>
                exploring a partnership?
            </div>

            <div className={clsx(ui.sub3, ui['w-page'])}>featured partners</div>

            <Footer />
        </div>
    );
}

export { generateStaticParams } from '../../../utils/getStatic';
