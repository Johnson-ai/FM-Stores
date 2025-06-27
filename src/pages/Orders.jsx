import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  // Mock initial orders data - replace with real data or context/API later
  const [orders, setOrders] = useState([
    {
      id: 1,
      date: "2025-06-25",
      total: 120.5,
      items: [
        { id: 101, title: "Cyberpunk Jacket", qty: 1, price: 89.99 },
        { id: 102, title: "Neon Glasses", qty: 1, price: 30.51 },
      ],
      status: "Processing",
    },
    {
      id: 2,
      date: "2025-06-20",
      total: 99.99,
      items: [{ id: 103, title: "Techwear Hoodie", qty: 1, price: 99.99 }],
      status: "Shipped",
    },
  ]);

  const navigate = useNavigate();

  // Cancel order handler: removes order from list
  const cancelOrder = (orderId) => {
    if (
      window.confirm("Are you sure you want to cancel this order?")
    ) {
      setOrders((prev) => prev.filter((order) => order.id !== orderId));
    }
  };

  return (
    <div className="min-h-screen px-6 py-12 bg-black text-white">
      <h1 className="text-3xl font-bold mb-8 text-pink-500">My Orders</h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-400">You have no orders yet.</p>
      ) : (
        <div className="space-y-8 max-w-4xl mx-auto">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-zinc-900 rounded-lg p-6 shadow-lg border border-pink-600"
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-semibold text-lg">
                    Order #{order.id}
                  </p>
                  <p className="text-sm text-gray-400">
                    Date: {order.date}
                  </p>
                  <p className="text-sm text-gray-400">
                    Status:{" "}
                    <span
                      className={`font-semibold ${
                        order.status === "Processing"
                          ? "text-yellow-400"
                          : order.status === "Shipped"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {order.status}
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => cancelOrder(order.id)}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition"
                >
                  Cancel Order
                </button>
              </div>

              <div className="border-t border-pink-700 pt-4">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-gray-300 mb-2"
                  >
                    <span>{item.title} (x{item.qty})</span>
                    <span>${(item.price * item.qty).toFixed(2)}</span>
                  </div>
                ))}

                <div className="flex justify-between font-bold text-pink-400 mt-4">
                  <span>Total:</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
