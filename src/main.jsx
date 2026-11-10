// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import { store } from "./Redus/Store";

import App from "./App.jsx";

import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")
)

.render(
  <Provider store={store}>
    <App />
  </Provider>
);