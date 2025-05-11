import Image from 'next/image';
import Link from 'next/link';

/**
 * A React component that renders a product card with detailed information.
 * 
 * The card includes an image, title, category, rating, price, and a link to the product's detail page.
 * It displays a sale badge and applies various hover effects for visual enhancement.
 * 
 * Props:
 * - product: An object containing product details such as id, image, title, category, rating, and price.
 * 
 * @param {Object} props - The props for the component.
 * @param {Object} props.product - The product data to display in the card.
 * @param {string} props.product.id - The unique identifier for the product.
 * @param {string} props.product.image - The URL of the product image.
 * @param {string} props.product.title - The title of the product.
 * @param {string} props.product.category - The category of the product.
 * @param {Object} props.product.rating - The rating of the product.
 * @param {number} props.product.rating.rate - The average rating score of the product.
 * @param {number} props.product.rating.count - The total number of ratings.
 * @param {number} props.product.price - The price of the product.
 */

export default function ProductCard({ product }) {
  return (
    <Link 
      href={`/products/${product.id}`}
      className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full"
    >
      {/* Sale badge */}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full transform rotate-3">
          Sale!
        </div>
      </div>

      {/* Image container */}
      <div className="relative h-64 w-full bg-white">
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-0" />
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-6 transition-transform duration-300 group-hover:scale-110"
          priority={false}
        />
      </div>
      
      {/* Content container */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category */}
        <div className="mb-2">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 capitalize">
            {product.category}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200 text-gray-500">
          {product.title}
        </h2>
        
        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ${
                  index < Math.round(product.rating.rate)
                    ? 'text-yellow-400'
                    : 'text-gray-500'
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            ))}
          </div>
          <span className="text-gray-600 text-sm ml-2">
            ({product.rating.count})
          </span>
        </div>

        {/* Price */}
        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-semibold">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}