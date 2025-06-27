import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQty } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
        <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-400">Add some products to get started!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-pink-500">Shopping Cart</h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-zinc-900 rounded-lg p-4 shadow-md border border-pink-600"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-pink-400">${item.price.toFixed(2)}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <input
                type="number"
                min={1}
                value={item.qty}
                onChange={(e) =>
                  updateQty(item.id, Math.max(1, Number(e.target.value)))
                }
                className="w-16 p-1 text-black rounded-md"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center border-t border-pink-600 pt-6 text-2xl font-bold text-pink-400">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
