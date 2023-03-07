import React from "react";
import ReactDom from "react-dom/client";
import App from "./app";
import "~/styles/index.scss";
import "~/styles/tailwind.css";

const root = document.getElementById("root");

ReactDom.createRoot(root).render(<App />);
