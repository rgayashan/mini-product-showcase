// Utility functions for fetching product data

/**
 * Fetch all products from the API
 * Used for Static Site Generation (SSG)
 */
export async function getAllProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products', {
      // Add timeout to prevent hanging
      signal: AbortSignal.timeout(5000)
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }
    
    const data = await response.json();
    return {
      success: true,
      data: data
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      success: false,
      error: error instanceof TypeError && error.message === 'fetch failed' 
        ? 'Unable to connect to the server. Please check your internet connection.'
        : 'Failed to load products. Please try again later.'
    };
  }
}

/**
 * Fetch a single product by ID
 * Used for Server-Side Rendering (SSR)
 */
export async function getProductById(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      // Add timeout to prevent hanging
      signal: AbortSignal.timeout(5000)
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch product with ID ${id}: ${response.status}`);
    }
    const data = await response.json();
    return {
      success: true,
      data: data
    };

  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    return {
      success: false,
      error: error instanceof TypeError && error.message === 'fetch failed' 
        ? 'Unable to connect to the server. Please check your internet connection.'
        : 'Failed to load product. Please try again later.'
    };
  }
}

/**
 * Get all product IDs for generating static paths
 */
export async function getAllProductIds() {
  const result = await getAllProducts();
  if (!result.success) return [];
  return result.data.map(product => ({
    id: String(product.id)
  }));
}