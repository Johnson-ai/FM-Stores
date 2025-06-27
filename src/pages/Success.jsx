import { useLocation, Link } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const { name, total } = location.state || {};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-white dark:bg-black text-black dark:text-white text-center">
      <div className="bg-white/20 dark:bg-white/10 p-10 rounded-xl border dark:border-white/10 shadow-xl max-w-md w-full">
        <h2 className="text-3xl font-bold mb-4">🎉 Payment Successful</h2>
        <p className="text-lg mb-4">
          Thank you <span className="font-semibold">{name || "Customer"}</span> for your purchase!
        </p>
        <p className="text-lg mb-6">
          Total Paid: <span className="font-bold">${total?.toFixed(2) || "0.00"}</span>
        </p>

        <Link
          to="/"
          className="inline-block mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:opacity-90 transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Success;
