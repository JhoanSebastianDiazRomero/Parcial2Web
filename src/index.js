import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { IntlProvider } from "react-intl";
import localeEsText from "./locales/es.json";
import localeEnText from "./locales/en.json";
import localeDeText from "./locales/de.json";

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale="de" messages={localeDeText}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
