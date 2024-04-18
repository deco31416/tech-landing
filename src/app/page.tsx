import clsx from 'clsx';

import { Navbar } from '../components/Navbar/Navbar';
import { SearchInput } from '../components/SearchInput/SearchInput';
import { useTranslation } from '../i18n/useTranslation';
import ui from '../styles/ui.module.css';
import styles from './page.module.css';

/* eslint-disable unicorn/prevent-abbreviations */
export default async function Home() {
    const { t } = await useTranslation('en', 'translation');

    return (
        <main>
            <Navbar t={t} />
            <header
                className={clsx(
                    ui['flex'],
                    ui['flex-center'],
                    ui['flex-col'],
                    styles.header
                )}
            >
                <h1 className={styles.h1}>
                    {t('home.hero.title')}
                    <br />
                    <span className={styles.feelBetter}>
                        {t('home.hero.subtitle')}
                    </span>
                </h1>
                <p className={styles.p}>{t('home.hero.text')}</p>
                <SearchInput t={t} />
            </header>
        </main>
    );
}
