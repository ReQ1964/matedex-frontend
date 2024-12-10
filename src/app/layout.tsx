import React, { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Navbar from '@/components/layout/Navbar/Navbar';
import Providers from '@/utils/Providers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: 'Matedex',
  description: 'Tomemos uno?',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-neutral-500'>
        <Theme accentColor='orange'>
          <div className='min-h-screen bg-gray-50'>
            <Providers>
              <Navbar />
              {children}
              <ToastContainer />
            </Providers>
          </div>
        </Theme>
      </body>
    </html>
  );
}
