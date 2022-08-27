export default function ExemploClass({ foto, nome, email }) {
  return (
    <div style={{ display: "flex", displayDirection: "row" }}>
      <div>
        <img src={foto} style={{ width: 100 }} />
      </div>

      <div>
        <p>{nome}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}
