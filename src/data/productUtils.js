// productUtils.js - Clean utility functions for product management
import products from './products'; // Your existing products file

// Define which categories belong to which collection
export const COLLECTION_CATEGORIES = {
  STREETWEAR: ['Jackets', 'Hoodies', 'T-Shirts', 'Pants', 'Shorts'],
  ACCESSORIES: ['Accessories', 'Shoes', 'Watches', 'Bags', 'Eyewear', 'Jewelry', 'Gloves', 'Belts']
};

// Get products by collection
export const getProductsByCollection = (collection) => {
  const categories = COLLECTION_CATEGORIES[collection] || [];
  return products.filter(product => 
    categories.includes(product.category)
  );
};

// Get all unique categories from your products
export const getAllCategories = () => {
  const categories = [...new Set(products.map(product => product.category))];
  return ['All', ...categories];
};

// Get categories for a specific collection
export const getCategoriesForCollection = (collection) => {
  const collectionProducts = getProductsByCollection(collection);
  const categories = [...new Set(collectionProducts.map(product => product.category))];
  return ['All', ...categories];
};

// Filter products by category within a collection
export const filterProductsByCategory = (products, category) => {
  if (category === 'All') return products;
  return products.filter(product => product.category === category);
};

// Get featured products (first 3 products from each collection)
export const getFeaturedProducts = () => {
  const streetwear = getProductsByCollection('STREETWEAR').slice(0, 3);
  const accessories = getProductsByCollection('ACCESSORIES').slice(0, 3);
  return { streetwear, accessories };
};