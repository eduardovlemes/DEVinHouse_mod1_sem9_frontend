import "../../App.css";
import { useState } from "react";

export default function Exercicio03() {
  const [b, setB] = useState(0);

  return (
    <div className="App">
      <div>
        Estado: {b} <br />
        <button onClick={() => setB((prevB) => prevB + 1)}>
          Click para contar
        </button>
      </div>
    </div>
  );
}
