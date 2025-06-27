import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import FloatingTech from "./components/FloatingTech";
import FloatingGlow from "./components/FloatingGlow";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Payment from "./pages/Payment";
import Receipt from "./pages/Receipt";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";

// Collection Pages - ADD THESE IMPORTS
import NeonStreetwear from "./pages/NeonStreetwear";
import TechAccessories from "./pages/TechAccessories";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen relative bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      {/* Background Effects */}
      <FloatingTech /> {/* Lottie animation */}
      <FloatingGlow /> {/* Neon ambient glow */}
      <div className="cyber-bg fixed inset-0 -z-10" />

      {/* Navbar */}
      <Navbar theme={theme} setTheme={setTheme} />

      {/* Page Content */}
      <main className="pt-16 px-6 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/receipt" element={<Receipt />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Footer" element={<Footer />} />
          
          {/* ADD THESE TWO NEW ROUTES */}
          <Route path="/neon-streetwear" element={<NeonStreetwear />} />
          <Route path="/tech-accessories" element={<TechAccessories />} />
        </Routes>
      </main>

      {/* Slide-in Drawer for Quick Cart View */}
      <CartDrawer />
      <Footer />
    </div>
  );
};

export default App;