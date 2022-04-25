import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import combineReducers from './store/Reducers';

const store = configureStore({reducer: combineReducers, middleware: [thunk]});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("snappfood")
);

serviceWorker.unregister();
