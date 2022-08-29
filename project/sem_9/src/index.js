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
import Exercicio05 from "./pages/exercicio05";
import DownloadSoftware from "./pages/exercicio07";
import Exercicio09 from "./pages/exercicio09";
import Exercicio10 from "./pages/exercicio10";
import ListaFrutas from "./pages/exercicio01";
import Exercicio2 from "./pages/exercicio02";
import Exercicio03 from "./pages/exercicio03";

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
    {/* <GithubIntegration /> */}
    {/* <Exercicio05 /> */}
    {/* <DownloadSoftware /> */}
    {/* <Exercicio09 /> */}
    {/* <Exercicio10 /> */}
    {/* <ListaFrutas /> */}
    {/* <Exercicio2 /> */}
    <Exercicio03 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
