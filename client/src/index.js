import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { cartStore } from "./redux/Store/cardStore";
import "react-loading-skeleton/dist/skeleton.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={cartStore}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
