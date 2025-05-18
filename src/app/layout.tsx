import type { Metadata } from 'next';
import { Geist } from 'next/font/google'; // Using Geist Sans directly
import './globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { Toaster } from "@/components/ui/sonner";

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SoftSell - Resell Your Software Licenses Easily',
  description: 'SoftSell provides a simple, secure, and profitable platform to resell your unused software licenses. Turn idle assets into instant cash.',
  keywords: 'software resale, sell software license, license marketplace, unused software, SoftSell',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
