import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cartItems.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 backdrop-blur-md p-4 rounded-xl w-80 shadow-lg z-50 border border-pink-600">
      <h3 className="text-lg font-bold mb-4 neon-text">Shopping Cart</h3>

      <div className="max-h-60 overflow-y-auto mb-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-3 border-b border-pink-700 pb-2">
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-pink-400">Qty: {item.qty}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-bold">${(item.price * item.qty).toFixed(2)}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-400 font-bold"
                aria-label={`Remove ${item.title} from cart`}
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center font-bold mb-4 neon-text">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <div className="flex justify-between gap-3">
        <button
          onClick={clearCart}
          className="flex-grow bg-red-600 hover:bg-red-700 py-2 rounded-lg transition neon-text"
        >
          Clear Cart
        </button>
        <Link
          to="/checkout"
          className="flex-grow bg-pink-600 hover:bg-pink-700 py-2 rounded-lg text-center neon-text transition"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartDrawer;
