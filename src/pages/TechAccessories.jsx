import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsByCollection, getCategoriesForCollection, filterProductsByCategory } from '../data/productUtils';

const TechAccessories = () => {
  // Get accessories from your actual data
  const accessoryProducts = getProductsByCollection('ACCESSORIES');
  const categories = getCategoriesForCollection('ACCESSORIES');
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProducts = filterProductsByCategory(accessoryProducts, selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white font-techno">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-pink-500/20 to-cyan-400/20 py-20">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-pink-500 mb-4 animate-pulse">
            Tech Accessories
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Futuristic accessories that blend form with function. 
            Enhance your cyberpunk aesthetic with cutting-edge wearable technology.
          </p>
          <div className="mt-8">
            <Link 
              to="/" 
              className="text-cyan-400 hover:text-pink-500 transition-colors font-semibold"
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
                  ? 'bg-gradient-to-r from-pink-500 to-cyan-400 text-black'
                  : 'bg-black/60 text-white border border-pink-500/30 hover:border-pink-500/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-black/60 backdrop-blur-sm rounded-lg overflow-hidden border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-pink-500/80 text-white p-2 rounded-full hover:bg-pink-500 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">{product.name}</h3>
                <p className="text-gray-400 mb-3 text-sm line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-pink-500">${product.price}</span>
                  <button className="bg-gradient-to-r from-cyan-400 to-pink-500 text-black px-3 py-1.5 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-cyan-400/30 transition-all">
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
            <p className="text-gray-400 text-xl">No accessories found in this category.</p>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-r from-pink-500/10 to-cyan-400/10 py-16 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Why Choose Our Tech Accessories?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced Technology",
                description: "Cutting-edge components with the latest innovations",
                icon: "⚡"
              },
              {
                title: "Cyberpunk Aesthetic",
                description: "Designed for the future, available today",
                icon: "🤖"
              },
              {
                title: "Premium Materials",
                description: "Durable construction that withstands daily use",
                icon: "💎"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm p-6 rounded-lg text-center border border-white/10 hover:border-pink-500/30 transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-pink-500">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto text-center px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-4">
          Upgrade Your Cyber Arsenal
        </h2>
        <p className="text-gray-300 mb-8">
          Complete your cyberpunk look with our premium tech accessories collection.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/products" 
            className="bg-gradient-to-r from-pink-500 to-cyan-400 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all inline-block"
          >
            View All Products
          </Link>
          <Link 
            to="/neon-streetwear" 
            className="border border-pink-500 text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-500 hover:text-black transition-all inline-block"
          >
            Neon Streetwear
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TechAccessories;