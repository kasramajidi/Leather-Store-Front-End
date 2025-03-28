import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/header";
import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";
import Blog from "./pages/blog/blog";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Account from "./pages/account/account";
import Cart from "./pages/cart/cart";

export default function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}
