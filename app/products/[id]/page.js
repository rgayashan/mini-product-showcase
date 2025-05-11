import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { getProductById } from '@/lib/products';
import { notFound } from 'next/navigation';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorDisplay from '@/components/ErrorDisplay';

// This page uses Server-Side Rendering
export const dynamic = 'force-dynamic';

async function ProductDetails({ id }) {
  const result = await getProductById(id);
  
  if (!result.success) {
    throw new Error(result.error);
  }

  const product = result.data;
  
  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 z-0" />
          
          {/* Sale Badge */}
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-red-500 text-white text-sm font-bold px-4 py-1 rounded-full transform rotate-2 shadow-lg">
              Sale!
            </div>
          </div>

          {/* Main Image */}
          <div className="relative h-[500px] w-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-12 hover:scale-110 transition-transform duration-500"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col h-full">
          {/* Category */}
          <div className="mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1.5 rounded-full">
              {product.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center mb-6">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${
                    index < Math.round(product.rating.rate)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
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
            <span className="text-gray-600 ml-2 text-lg">
              {product.rating.rate} ({product.rating.count} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center mb-8">
            <p className="text-4xl font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </p>
            <span className="ml-4 text-green-600 font-medium bg-green-100 px-3 py-1 rounded-full text-sm">
              In Stock
            </span>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-auto space-y-4">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <span>Add to Cart</span>
            </button>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Add to Wishlist</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function ProductPage({ params }) {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <Link 
        href="/products" 
        className="inline-flex items-center mb-8 text-blue-600 hover:text-blue-800 font-medium group"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
            clipRule="evenodd" 
          />
        </svg>
        Back to Products
      </Link>
      
      <Suspense 
        fallback={
          <div className="flex items-center justify-center min-h-[600px]">
            <LoadingSpinner />
          </div>
        }
      >
        <ProductDetails id={params.id} />
      </Suspense>
    </div>
  );
}