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
      <body>
        <Theme>
          <Navbar />
          {children}
        </Theme>
      </body>
    </html>
  );
}
