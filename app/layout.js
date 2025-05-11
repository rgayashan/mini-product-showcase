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

/**
 * The RootLayout component serves as the primary layout for the application.
 *
 * This component wraps the entire application in a consistent layout structure,
 * providing global styling and elements such as the header, footer, and splash screen.
 * It ensures that the main content of each page is centered and responsive.
 *
 * @param {Object} props - The properties for the component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the main layout.
 * @returns A JSX element representing the root layout structure of the application.
 */

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