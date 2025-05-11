import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SplashScreen from '../components/SplashScreen';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Product Showcase',
  description: 'A mini product showcase application built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SplashScreen />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}