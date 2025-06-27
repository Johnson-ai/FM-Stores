import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsByCollection, getCategoriesForCollection, filterProductsByCategory } from '../data/productUtils';

const NeonStreetwear = () => {
  // Get streetwear products from your actual data
  const streetwearProducts = getProductsByCollection('STREETWEAR');
  const categories = getCategoriesForCollection('STREETWEAR');
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProducts = filterProductsByCategory(streetwearProducts, selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white font-techno">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-cyan-400/20 to-pink-500/20 py-20">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 mb-4 animate-pulse">
            Neon Streetwear
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Illuminated clothing that makes you stand out in the urban jungle. 
            Experience the future of street fashion with our LED-enhanced collection.
          </p>
          <div className="mt-8">
            <Link 
              to="/" 
              className="text-pink-500 hover:text-cyan-400 transition-colors font-semibold"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-400 to-pink-500 text-black'
                  : 'bg-black/60 text-white border border-cyan-400/30 hover:border-cyan-400/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-black/60 backdrop-blur-sm rounded-lg overflow-hidden border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4 text-sm">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-cyan-400">${product.price}</span>
                  <button className="bg-gradient-to-r from-pink-500 to-cyan-400 text-black px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl">No products found in this category.</p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-cyan-400/10 to-pink-500/10 py-16 mt-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Light Up the Streets?
          </h2>
          <p className="text-gray-300 mb-8">
            Join thousands of cyberpunk fashion enthusiasts who've upgraded their style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/products" 
              className="bg-gradient-to-r from-cyan-400 to-pink-500 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all inline-block"
            >
              View All Products
            </Link>
            <Link 
              to="/tech-accessories" 
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all inline-block"
            >
              Tech Accessories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeonStreetwear;