import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./rotas/Home";
import { createGlobalStyle } from "styled-components";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./componentes/Header";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import Favoritos from "./rotas/Favoritos";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px 0px;
    
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  li {
    list-style: none;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Menu />
      <Routes>
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  </React.StrictMode>
);
