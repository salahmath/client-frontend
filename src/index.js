import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store";

// Création de la racine avec ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendu de l'application à l'intérieur de la racine avec le fournisseur Redux
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

