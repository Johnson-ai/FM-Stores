import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-20 relative">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl font-extrabold text-black dark:text-white dark:text-glow"
      >
        Discover the Future of Fashion
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 max-w-xl text-gray-800 dark:text-white/70"
      >
        Shop the latest trends with a touch of neon and innovation.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-6 py-3 bg-black text-white dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-600 font-semibold rounded-xl shadow-lg hover:shadow-neon transition-all"
      >
        Shop Now
      </motion.button>
    </section>
  );
};

export default Hero;
