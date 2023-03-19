import React from "react";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position={"top-center"}
        reverseOrder={false}
        toastOptions={{
          // Define default options
          className: "",
          style: {
            margin: "40px",
            background: "#363636",
            // background: "#00e676",
            color: "#fff",
            zIndex: 1,
            // width: "28vh",
          },
          duration: 5000,
          // Default options for specific types
          success: {
            duration: 8000,
          },
          error: {
            style: {
              background: "#f44336",
            },
            duration: 8000,
          },
        }}
      />
      <Home />
    </>
  );
}

export default App;
