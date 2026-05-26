import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Monarch | Filmmaker & Content Creator',
  description:
    'I create videos that inspire and impact. Join me on my journey in filmmaking, productivity, and building a life of purpose.',
  icons: {
    icon: [
      {
        url: '/lightlogo.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo.svg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} bg-background scroll-smooth`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
