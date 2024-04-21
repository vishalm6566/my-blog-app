import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import LoginUser from "./pages/login";
import RegisterUser from "./pages/register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar";
import Cart from "./pages/cart";
import AddProperty from "./pages/addProperty";
import PropertyDetails from "./pages/propertyDetails";
import Checkout from "./pages/checkout";
import { useSelector } from "react-redux";
import EditBlog from "./components/EditBlog";
import Categories from "./components/categories";
import EditCategory from "./components/EditCategory";
import MyBlogs from "./components/MyBlogs";
import AddNewBlog from "./components/AddNewBlog";

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="container-fluid">
      {/* if user is logged in then only render the navbar */}
      {/* {user.loginStatus && <Navbar />} */}
      <Navbar />
      <div className="container">
        <h2 className="page-title">Blog app</h2>
        <Routes>
          <Route path="/" element={<LoginUser />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/add-property" element={<AddProperty />} />
          <Route
            path="/property-details/:propertyId"
            element={<PropertyDetails />}
          />
          <Route path="/editBlog" element={<EditBlog />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/editcat" element={<EditCategory />} />
          <Route path="/myblog" element={<MyBlogs />} />
          <Route path="/addnewblog" element={<AddNewBlog />} />
        </Routes>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
