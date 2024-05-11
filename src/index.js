import React from "react";
import ReactDOM from "react-dom/client";
import './styles/index.css';
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "reduxToolkit";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "reduxToolkit/api";

const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,// ✅ REST API calling from here...
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});

setupListeners(store.dispatch);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
   
  </React.StrictMode>
);
