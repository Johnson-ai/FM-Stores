import { useLocation, Link } from "react-router-dom";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Receipt = () => {
  const location = useLocation();
  const receiptRef = useRef();

  // Fallback if user accesses /receipt directly
  const { name, email, address, total, items } = location.state || {
    name: "John Doe",
    email: "johndoe@example.com",
    address: "123 Default Street",
    total: 0,
    items: [],
  };

  const now = new Date().toLocaleString();

  const handlePrint = useReactToPrint({
    content: () => receiptRef.current,
    documentTitle: `FM_Stores_Receipt_${Date.now()}`,
    removeAfterPrint: true,
  });

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="w-full max-w-2xl">
        {/* Printable Section */}
        <div
          ref={receiptRef}
          className="bg-white/20 dark:bg-white/10 p-8 rounded-xl border dark:border-white/20 shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">🧾 Receipt</h2>

          <div className="space-y-2 text-sm sm:text-base mb-6">
            <p><strong>Customer:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Address:</strong> {address}</p>
            <p><strong>Date:</strong> {now}</p>
          </div>

          <hr className="my-4 border-gray-400 dark:border-white/20" />

          <div className="space-y-4">
            {items.length > 0 ? (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center text-sm sm:text-base"
                >
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Qty: {item.qty}
                    </p>
                  </div>
                  <p>${(item.qty * item.price).toFixed(2)}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-sm">No items found in order.</p>
            )}
          </div>

          <div className="mt-6 text-lg font-bold flex justify-between border-t pt-4">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:opacity-90 transition"
          >
            Back to Home
          </Link>

          <button
            onClick={handlePrint}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-black dark:bg-purple-600 text-white font-semibold hover:opacity-80 transition"
          >
            Download Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
