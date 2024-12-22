import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router,  } from "react-router";
import store from "./app/store.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
    <StrictMode>
            <Router>
            <Provider store={store}>
                <App />
                <ToastContainer/>
            </Provider>
            </Router>
        
    </StrictMode>
);
