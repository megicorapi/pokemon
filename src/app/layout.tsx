import * as React from 'react';
import { Metadata } from 'next';

import Navbar from '@/components/Navbar';
import { siteConfig } from '@/constant/config';

import '@/styles/globals.css';
import { TeamProvider } from '@/app/context/TeamContext';

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },

  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <TeamProvider>
          <Navbar />
          {children}
        </TeamProvider>
      </body>
    </html>
  );
}
