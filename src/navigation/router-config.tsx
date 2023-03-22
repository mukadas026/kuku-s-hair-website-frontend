import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CenterLoader } from "../utils/loaders";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
const SignUp = React.lazy(() => import("../pages/SignUp"));
const SignIn = React.lazy(() => import("../pages/Login"));

function RouterConfig() {
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
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </React.Fragment>
  );
}

export { RouterConfig };
