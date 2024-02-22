import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Visit from "./Pages/Visit";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Cart from "./Pages/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./store";
import AuthProvider from "./Components/contexts/authContext";
import Login from "./Components/auth/login"
import Register from "./Components/auth/register";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <Header />
          <ToastContainer />
          <main>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/visit" element={<Visit />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

            </Routes>
          </main>
          <Footer />
        </AuthProvider>
      </Provider>
    </>
  );
};

export default App;
