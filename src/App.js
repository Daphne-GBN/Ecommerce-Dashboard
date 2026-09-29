import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
     <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container">
    <Link className="navbar-brand" to="/"> My Store
    </Link>
    <div className="navbar-nav">
      <Link className="nav-link" to="/">
        Home </Link>
      <Link className="nav-link" to="/products">
        Products
      </Link>
      <Link className="nav-link" to="/cart">
        Cart
      </Link>
    </div>
  </div>
</nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;