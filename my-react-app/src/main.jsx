import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./Componentes/Header/Header.jsx";

import Footer from "./Componentes/Footer/Footer.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);
