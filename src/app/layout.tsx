import type { Metadata } from 'next';
import './globals.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Navbar from '@/components/layout/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'Matedex',
  description: 'Tomemos uno?',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-neutral-500'>
        <Theme>
          <div className='min-h-screen bg-gray-50'>
            <Navbar />
            {children}
          </div>
        </Theme>
      </body>
    </html>
  );
}
