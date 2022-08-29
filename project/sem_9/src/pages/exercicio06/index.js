import { useState } from "react";

const contacts = [
  {
    id: 1,
    name: "clamed",
    msg: "texto da última msg 1",
  },
  {
    id: 2,
    name: "quimidrol",
    msg: "texto da última msg 2",
  },
  {
    id: 3,
    name: "catarinense",
    msg: "texto da última msg 3",
  },
  {
    id: 4,
    name: "preço popular",
    msg: "texto da última msg 4",
  },
];

const count = 4;

export default function Exercicio06() {
  const [user, setUser] = useState(contacts);

  function addUser() {
    count++;
    const newContact = {
      id: count,
      name: `name ${count}`,
      msg: `msg ${count}`,
    };

    return setUser((prevContact) => [...prevContact, newContact]);
  }

  return (
    <>
      <ul>
        <button onClick={addUser}>New text</button>
        {contacts.map((contact) => {
          const { id, name, msg } = contact;
          return (
            <li key={id}>
              <div>
                <h4>{name}</h4>
                <span>{msg}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
