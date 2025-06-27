import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");

  const { name, email, address, total, items } = location.state || {};

  useEffect(() => {
    if (!name || !total || !items) {
      // redirect back if accessed directly
      navigate("/");
    }
  }, [name, total, items, navigate]);

  const handlePay = (e) => {
    e.preventDefault();
    if (cardNumber.length < 8) {
      alert("Please enter a valid card number.");
      return;
    }

    navigate("/receipt", {
      state: {
        name,
        email,
        address,
        total,
        items,
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-md w-full bg-white/20 dark:bg-white/10 p-8 rounded-xl border dark:border-white/10 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Payment Details</h2>
        <form onSubmit={handlePay} className="space-y-4">
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            autoComplete="cc-number"
            className="w-full p-3 rounded-lg bg-white dark:bg-white/10 border dark:border-white/20 text-black dark:text-white"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:opacity-90 transition"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
