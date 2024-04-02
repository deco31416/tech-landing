import 'normalize.css';

export const metadata = {
    title: 'Next.js',
    description: 'Generated by Gatsby',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
