import { useState, useRef } from "react";

export default function BotaoTempo() {
  const [timer, setTimer] = useState(0);
  const parar = useRef();

  function iniciarContagem() {
    parar.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  }

  function pararContagem() {
    clearInterval(parar.current);
  }

  return (
    <div>
      <h2>{timer}</h2>
      <button onClick={iniciarContagem}>Iniciar</button>
      <button onClick={pararContagem}>Parar</button>
    </div>
  );
}
