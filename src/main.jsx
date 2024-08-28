import React from "react";
import "./index.css";
import router from "./router";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { TWThemeProvider } from "./Providers/ThemeProvider";
import { ContextProvider } from "./Providers/ContextsProvider";
import TranslationProvider from "./Providers/TranslationProvider";
import LocationProvider from "./Providers/LocationProvider";
import CategoryBrandProvider from "./Providers/CategoryBrandProvider";
import { CompanyInfoProvider } from "./Providers/CompanyInfoProvider";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TranslationProvider>
      <LocationProvider>
        <CategoryBrandProvider>
          <CompanyInfoProvider>
            <ContextProvider>
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
              />
                <TWThemeProvider>
                  <RouterProvider router={router} />
                </TWThemeProvider>
            </ContextProvider>
          </CompanyInfoProvider>
        </CategoryBrandProvider>
      </LocationProvider>
    </TranslationProvider>
  </React.StrictMode>
);
