import { FaSun, FaMoon, FaShoppingCart, FaTshirt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = ({ theme, setTheme }) => {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Count total items in cart
  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="fixed top-0 w-full h-16 flex items-center justify-between px-6 bg-black/80 dark:bg-white/10 backdrop-blur-md z-50">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-pink-500 hover:text-pink-400">
        FM Stores
      </Link>

      <div className="flex items-center gap-6">
        {/* Products (shirt) icon */}
        <button
          onClick={() => navigate("/products")}
          aria-label="Products"
          className="text-2xl text-pink-500 hover:text-pink-400 transition"
        >
          <FaTshirt />
        </button>

        {/* Shopping cart icon */}
        <button
          onClick={() => navigate("/cart")}
          className="relative text-2xl text-pink-500 hover:text-pink-400 transition"
          aria-label="Shopping Cart"
        >
          <FaShoppingCart />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-pink-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
              {totalItems}
            </span>
          )}
        </button>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="text-xl text-yellow-400 dark:text-purple-400 hover:text-yellow-300 dark:hover:text-purple-300 transition"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
