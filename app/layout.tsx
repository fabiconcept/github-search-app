import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';

const inter = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'GitHub Repository Explorer',
    description: 'Generated by create next appGitHub Repository Explorer is a web application developed with TypeScript and Next.js',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <NextTopLoader
                    color='#22c55e'
                 />
            </body>
        </html>
    )
}