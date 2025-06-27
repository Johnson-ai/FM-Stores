import { motion, AnimatePresence } from "framer-motion";

const ProductModal = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          className="bg-white dark:bg-zinc-900 text-black dark:text-white p-6 rounded-xl max-w-md w-full shadow-2xl relative"
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-xl hover:text-pink-500"
          >
            ✖
          </button>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-60 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-bold">{product.title}</h3>
          <p className="text-pink-400 text-lg mb-2">${product.price.toFixed(2)}</p>
          <p className="text-sm mb-4 text-gray-400">
            Explore our exclusive collection of futuristic fashion.
          </p>
          <button
            onClick={() => {
              onAddToCart(product);
              onClose();
            }}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:opacity-90 transition"
          >
            Add to Cart
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;
