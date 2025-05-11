import Link from 'next/link';

/**
 * The Home component renders the homepage of the Product Showcase application.
 *
 * This component displays a welcoming message and provides links to view
 * products and contact the company. It is styled with a centered layout 
 * and includes a heading, subheading, and two buttons for navigation.
 *
 * @returns A JSX element representing the homepage content.
 */

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Product Showcase</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Browse our latest products and discover amazing deals.
      </p>
      <div className="flex gap-4">
        <Link 
          href="/products" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          View Products
        </Link>
        <Link 
          href="/contact" 
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}