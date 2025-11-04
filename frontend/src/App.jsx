import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import './App.css';
import ProductCard from "./components/ProductCard";
import About from "./pages/About";
import InfoPage from "./pages/infopage";
import ContactPage from "./pages/Contact";
import AccountPage from "./pages/Account";
import ProductPage from "./pages/Product";
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productc" element={<ProductCard />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<InfoPage />} />
          <Route path="/shipping" element={<InfoPage />} />
          <Route path="/returns" element={<InfoPage />} />
          <Route path="/privacy-policy" element={<InfoPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/account" element={<AccountPage/>} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
