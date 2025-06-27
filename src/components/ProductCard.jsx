import { motion } from "framer-motion";

const ProductCard = ({ product, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="bg-white dark:bg-white/10 rounded-2xl p-4 shadow-md backdrop-blur-md border border-white/10 hover:shadow-neon transition-all cursor-pointer"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-60 object-cover rounded-xl mb-4"
      />
      <h2 className="text-lg font-semibold text-black dark:text-white mb-1">
        {product.title}
      </h2>
      <p className="text-sm text-gray-700 dark:text-white/60 mb-1">
        ${product.price}
      </p>
      <p className="text-xs text-gray-500 dark:text-white/40">
        {product.category}
      </p>
    </motion.div>
  );
};

export default ProductCard;
