import { useState } from "react";

export default function ChangeTitle() {
  const [buttonValue, setButtonValue] = useState("");

  return (
    <>
      <span>Button clicked: {buttonValue}</span>
      <div>
        <br />
        <button
          onClick={(event) => {
            setButtonValue("Title 1");
            document.title = " Title 1";
          }}
        >
          {" "}
          Title 1
        </button>
        <button
          onClick={(event) => {
            setButtonValue("Title 2");
            document.title = " Title 2";
          }}
        >
          {" "}
          Title 2
        </button>
      </div>
    </>
  );
}
