import { createRoot } from "react-dom/client";

import App from "./App";

import Global from "./components/Wrappers/Global";
import './index.css'

const rootEl = document.getElementById("root") as HTMLElement;

const root = createRoot(rootEl);

root.render(
  <Global>
    <App />
  </Global>
);
