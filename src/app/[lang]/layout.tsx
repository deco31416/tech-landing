import 'normalize.css';

import { dir } from 'i18next';

import { Language } from '../../settings';

export const metadata = {
    title: 'Next.js',
    description: 'Generated by Gatsby',
};

export default function RootLayout({
    children,
    params,
}: {
    // eslint-disable-next-line no-undef
    children: React.ReactNode;
    params: { lang: Language };
}) {
    return (
        <html lang={params.lang} dir={dir(params.lang)}>
            <body>{children}</body>
        </html>
    );
}
