import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Sidebar from '@/components/sidebar';
import React from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`flex flex-nowrap ${inter.className}`}>
                <Sidebar />
                <main className="md:ml-[294px] w-full bg-[#1D1D1D]">{children}</main>
            </body>
        </html>
    );
}
