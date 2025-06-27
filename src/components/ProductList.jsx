import { useState } from "react";
import { useCart } from "../context/CartContext";
import products from "../data/products";
import ProductModal from "./ProductModal";
import { motion } from "framer-motion";

const ProductList = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Our Latest Drops</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(236, 72, 153, 0.2)" }}
            onClick={() => setSelectedProduct(product)}
            className="cursor-pointer rounded-xl p-6 bg-white/10 dark:bg-white/5 border border-white/10 backdrop-blur-md shadow-lg transition-all"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">{product.title}</h3>
            <p className="text-pink-400 text-lg mb-1">${product.price.toFixed(2)}</p>
            <p className="text-sm text-green-400">In stock</p>
          </motion.div>
        ))}
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />
    </div>
  );
};

export default ProductList;
