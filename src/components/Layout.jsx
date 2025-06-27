import { Outlet, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartDrawer from "./CartDrawer";

const Layout = () => {
  const { cartItems, setIsOpen } = useCart();

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tight text-white hover:text-purple-400 transition">
            FM Stores
          </Link>

          <nav className="flex gap-6 items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="relative text-sm hover:text-pink-400 transition"
            >
              🛒 Cart
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-pink-500 text-xs rounded-full px-2 py-0.5 text-white">
                  {cartItems.length}
                </span>
              )}
            </button>
          </nav>
        </div>
      </header>

      <CartDrawer />
      <main className="pt-10 pb-20 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
