import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NFTStore from "./pages/NFTstorePage/index";
import StarWars from "./pages/StarWarsPage/index";
import Case1 from "./pages/case1/index";
import Home from "./pages/home/index";
import BotaoTempo from "./pages/botaoTempo";
import GithubIntegration from "./pages/githubIntegration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Descomente/Comente o componente (página) que você deseja visualizar/ocultar */}
    {/* <App /> */}
    {/* <Home /> */}
    {/* <StarWars /> */}
    {/* <Case1 /> */}
    {/* <NFTStore /> */}
    {/* <BotaoTempo /> */}
    <GithubIntegration />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
