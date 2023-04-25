import React from "react";
import ReactDOM from "react-dom/client";
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import { TourProvider } from "@reactour/tour";
import steps from "./Steps";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParallaxProvider>
      <BrowserRouter>
        <Provider store={store}>
          <TourProvider steps={steps}>
            <App />
          </TourProvider>
        </Provider>
      </BrowserRouter>
    </ParallaxProvider>
  </React.StrictMode>
);
