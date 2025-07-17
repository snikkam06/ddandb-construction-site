import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DD&B Construction, Inc. – Commercial General Contractors | Building Quality Since 1981',
  description:
    'Ground up commercial builders and general contractors with the expertise and financial stability to complete the project every time. DD&B Construction\'s legacy for almost 40 years. Specializing in hotel construction, multi-family construction, schools, churches, retail centers and office buildings.',
  keywords:
    'commercial construction, general contractors, hotel construction, multi-family construction, high-rise construction, modular construction, civic construction, Maryland contractors, Mid-Atlantic construction',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-50 text-slate-800 antialiased`}
      >
        <Header />
        <main className="min-h-[calc(100vh-theme(spacing.48))]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
