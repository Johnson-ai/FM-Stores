import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address) {
      alert("Please fill out all fields.");
      return;
    }

    // Proceed to mock payment
    navigate("/payment", {
      state: {
        name: form.name,
        email: form.email,
        address: form.address,
        total,
        items: cartItems,
      },
    });
  };

  return (
    <div className="min-h-screen pt-20 px-6 py-12 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Customer Info Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Checkout Details</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full p-3 rounded-lg bg-white dark:bg-white/10 border dark:border-white/20 text-black dark:text-white"
            />
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full p-3 rounded-lg bg-white dark:bg-white/10 border dark:border-white/20 text-black dark:text-white"
            />
            <textarea
              name="address"
              autoComplete="street-address"
              placeholder="Shipping Address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              required
              className="w-full p-3 rounded-lg bg-white dark:bg-white/10 border dark:border-white/20 text-black dark:text-white"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:opacity-90 transition"
            >
              Proceed to Payment
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-4">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Qty: {item.qty}
                    </p>
                  </div>
                  <p className="font-semibold">
                    ${(item.price * item.qty).toFixed(2)}
                  </p>
                </div>
              ))
            )}
          </div>

          {/* Total */}
          <div className="mt-6 text-lg font-bold flex justify-between border-t pt-4">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
