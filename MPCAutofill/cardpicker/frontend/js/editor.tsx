import * as React from "react";
import App from "./editor/App";
import store from "./editor/store";
import { Provider } from "react-redux";
import * as ReactDOMClient from "react-dom/client";

const root = ReactDOMClient.createRoot(
  document.getElementById("app") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
