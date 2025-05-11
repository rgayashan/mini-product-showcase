import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SplashScreen from '../components/SplashScreen';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Product Showcase - Modern E-commerce Experience',
  description: 'Discover our cutting-edge product showcase built with Next.js 14 and Tailwind CSS v4. Experience seamless shopping with static and server-side rendering, responsive design, dark mode, and modern UI/UX practices.',
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