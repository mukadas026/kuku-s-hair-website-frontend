import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CenterLoader } from "../utils/loaders";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import Checkout from "../pages/checkout/Checkout";
import ConfirmCheckout from "../pages/checkout/ConfirmCheckout";
import { IPaymentMethod } from "../components/checkout/PaymentMethods";

const SignUp = React.lazy(() => import("../pages/SignUp"));
const SignIn = React.lazy(() => import("../pages/Login"));

function RouterConfig() {
  // correct this when you get your internet connection back
  const [paymentMethod, setPaymentMethod] = useState<IPaymentMethod | null>(null)

  return (
    <React.Fragment>
      <BrowserRouter>
        <React.Suspense fallback={CenterLoader()}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="shop" element={<Shop />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product" element={<Product />} />
            <Route path="checkout" element={<Checkout paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod}/>} />
            <Route path="/checkout/confirm-checkout" element={<ConfirmCheckout paymentMethod={paymentMethod}/>} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </React.Fragment>
  );
}

export { RouterConfig };
