import { Suspense } from 'react';
import { getAllProducts } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorDisplay from '@/components/ErrorDisplay';

// This page uses Static Site Generation
export const revalidate = 3600; // Revalidate at most once per hour

async function ProductList() {
  const result = await getAllProducts();
  
  if (!result.success) {
    throw new Error(result.error);
  }

  if (result.data.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600">No products found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {result.data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Our Products
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our curated collection of high-quality products. Each item is carefully selected to ensure the best experience for our customers.
        </p>
      </div>

      {/* Filters Section - You can expand this later */}
      <div className="mb-8 flex flex-wrap gap-4 justify-center">
        <button className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
          All Products
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors">
          Electronics
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors">
          Jewelry
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors">
          Men's Clothing
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors">
          Women's Clothing
        </button>
      </div>

      {/* Loading State */}
      <Suspense 
        fallback={
          <div className="flex items-center justify-center min-h-[400px]">
            <LoadingSpinner />
          </div>
        }
      >
        <ProductList />
      </Suspense>
    </div>
  );
}