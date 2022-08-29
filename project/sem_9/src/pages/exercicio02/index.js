import { useState, useEffect } from "react";

export default function Exercicio2() {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <div>
      <h2>Digite alguma coisa {text}</h2>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="digite aqui."
      ></input>
    </div>
  );
}
