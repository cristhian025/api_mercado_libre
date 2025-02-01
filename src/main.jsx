import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CountryProvider } from "./context/CountryContext";
import App from "./App";
import { Home, ProductDetail, SelectCountry } from "./pages";
import { VerifyCountry } from "./verifyCountry";
import ThemeInitializer from "./ThemeInitializer";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CountryProvider>
      <Router>
        <ThemeInitializer /> {/* Inicializa el tema */}
        <Routes>
          <Route path="/seleccion-pais" element={<SelectCountry />} />
          <Route path="/" element={<Navigate to="/home" replace />} />

          <Route element={<VerifyCountry />}>
            <Route path="/home" element={<App />}>
              <Route index element={<Home />} />
              <Route path="product/:id" element={<ProductDetail />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </CountryProvider>
  </React.StrictMode>
);