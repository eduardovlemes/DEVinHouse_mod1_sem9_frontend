import "./style.css";
export default function Frutas({ value }) {
  return (
    <div className="frutas">
      <h3>Fruta: {value.nome}</h3>
      <img src={value.foto} className="img"></img>
    </div>
  );
}
