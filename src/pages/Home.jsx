import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import heroVideo from "../assets/videos/hero-video.mp4";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen font-techno text-white">
      {/* 🔁 Fixed Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🟣 Glass Overlay */}
      <div className="fixed inset-0 bg-black/50" />

      {/* ✨ Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-screen px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cyan-400 drop-shadow-lg animate-pulse">
          Discover the Future of Fashion
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
          Shop the latest neon-infused styles. Where streetwear meets techwear.
        </p>

        <div className="mt-10">
          <Link 
            to="/products"
            className="bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-pink-500/50 transition-all transform hover:scale-105"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Additional Scrollable Content */}
      <div className="relative z-20 bg-black/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto p-8">
          <section className="py-16">
            <h2 className="text-4xl font-bold mb-6 text-cyan-400">
              Featured Collections
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Explore our latest cyberpunk-inspired fashion pieces that blend technology with style.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <h3 className="text-2xl font-semibold mb-4 text-pink-500">Neon Streetwear</h3>
                <p className="text-gray-300 mb-4">
                  Illuminated clothing that makes you stand out in the urban jungle.
                </p>
                <Link 
                  to="/neon-streetwear"
                  className="text-cyan-400 hover:text-pink-500 transition-colors font-semibold inline-flex items-center group-hover:translate-x-2 duration-300"
                >
                  Explore Collection →
                </Link>
              </div>
              
              <div className="bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 group">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Tech Accessories</h3>
                <p className="text-gray-300 mb-4">
                  Futuristic accessories that blend form with function.
                </p>
                <Link 
                  to="/tech-accessories"
                  className="text-pink-500 hover:text-cyan-400 transition-colors font-semibold inline-flex items-center group-hover:translate-x-2 duration-300"
                >
                  Explore Collection →
                </Link>
              </div>
            </div>
          </section>

          <section className="py-16">
            <h2 className="text-4xl font-bold mb-6 text-pink-500">
              Why Choose Us?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Premium Quality", desc: "High-tech materials that last", icon: "💎" },
                { title: "Unique Designs", desc: "Exclusive cyberpunk aesthetics", icon: "🎨" },
                { title: "Fast Shipping", desc: "Get your gear in 2-3 days", icon: "🚀" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-black/40 backdrop-blur-sm p-6 rounded-lg text-center border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-16">
            <h2 className="text-4xl font-bold mb-6 text-cyan-400">Newsletter</h2>
            <div className="bg-black/60 backdrop-blur-sm p-8 rounded-lg border border-white/10">
              <p className="text-lg text-gray-300 mb-6 text-center">
                Stay updated with the latest cyberpunk fashion trends
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 p-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <button className="bg-gradient-to-r from-cyan-400 to-pink-500 text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </section>

          {/* Quick Links Section */}
          <section className="py-16">
            <h2 className="text-4xl font-bold mb-6 text-pink-500 text-center">
              Explore More
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/products"
                className="bg-gradient-to-r from-cyan-400/20 to-pink-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-400/30 text-cyan-400 hover:border-cyan-400/60 hover:bg-cyan-400/10 transition-all font-semibold"
              >
                All Products
              </Link>
              <Link 
                to="/orders"
                className="bg-gradient-to-r from-pink-500/20 to-cyan-400/20 backdrop-blur-sm px-6 py-3 rounded-full border border-pink-500/30 text-pink-500 hover:border-pink-500/60 hover:bg-pink-500/10 transition-all font-semibold"
              >
                Track Orders
              </Link>
              <Link 
                to="/checkout"
                className="bg-gradient-to-r from-cyan-400/20 to-pink-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 text-white hover:border-white/60 hover:bg-white/10 transition-all font-semibold"
              >
                Checkout
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;