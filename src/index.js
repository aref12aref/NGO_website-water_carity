import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import WindowContext from "./context/screenContext";
import MenuContext from "./context/menuContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WindowContext>
      <MenuContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MenuContext>
    </WindowContext>
  </React.StrictMode>
);
