import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white font-techno overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-pink-500/10"></div>
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}
        ></div>
      </div>

      {/* Glitch Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Footer Content (Brand, Links, Support, Newsletter) */}
        {/* ... [Same content as before] */}
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2025 NEON FASHION. All rights reserved in the metaverse.
          </div>
          <div className="flex space-x-6 text-xs text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>SYSTEM ONLINE</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span>NEURAL LINK ACTIVE</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
              <span>FASHION.EXE RUNNING</span>
            </div>
          </div>
        </div>

        {/* Terminal Note */}
        <div className="mt-8 p-4 bg-black/80 rounded-lg border border-gray-800 font-mono text-xs text-green-400">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-cyan-400">user@neon-fashion:~$</span>
            <span className="animate-pulse">_</span>
          </div>
          <div className="text-gray-500">
            // Thank you for choosing NEON FASHION - where style meets cyberpunk //
          </div>
        </div>
      </div>

      {/* Animation Style */}
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
