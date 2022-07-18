import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";


import Success from "./pages/Success";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";

import ProductListed from "./pages/productList/ProductListed.jsx";
import ProductSet from "./pages/product/Product.jsx";
import NewProduct from "./pages/newProduct/NewProduct";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/products/:category" element={<ProductList />}/>
        <Route path="/products" element={<ProductList />}/>
        <Route path="/product/:id" element={<Product />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/success" element={<Success />}/>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}/>
        <Route path="/productlist" element={<ProductListed />}/>
        <Route path="/productset/:productId" element={<ProductSet />}/>
        <Route path="/newproduct" element={<NewProduct />}/>
        <Route path="/admin" element={<Admin />}/>  
      </Routes>
    </Router>
  );
};

export default App;