import { useEffect, useState } from "react";
import Frutas from "../../components/Frutas";

export default function ListaFrutas() {
  const frutasDisponiveis = [
    {
      id: 0,
      nome: "banana",
      foto: "https://www.infoescola.com/wp-content/uploads/2010/04/banana_600797891.jpg",
    },
    {
      id: 1,
      nome: "maça",
      foto: "https://d3ugyf2ht6aenh.cloudfront.net/stores/746/397/products/maca-argentina1-a86acef532d11addf315221676880019-1024-1024.jpg",
    },
    {
      id: 2,
      nome: "kiwi",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg/280px-Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg",
    },
    {
      id: 3,
      nome: "melancia",
      foto: "https://img-21.ccm2.net/042iHAewS5QhDxJuNauCwI_x864=/728x/aad4dd876b7546b8b4415552846789f4/ccm-faq/uti_123rf_31404789_Katerina_Kovaleva.jpg",
    },
    {
      id: 4,
      nome: "manga",
      foto: "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia10908/manga-cursos-cpt.jpg",
    },
  ];

  const [nome, setNome] = useState("todas");
  const [selecionado, setSelecionado] = useState();

  useEffect(() => {
    setSelecionado(frutasDisponiveis);
  }, []);

  useEffect(() => {
    if (nome === "todas") {
      setSelecionado(frutasDisponiveis);
      return;
    }
    setSelecionado(frutasDisponiveis.filter((item) => item.nome === nome));
  }, [nome]);
  return (
    <div className="content">
      <div className="nft">
        <h4>Frutas Store</h4>
        <div className="nome">
          <button
            onClick={() => {
              setNome("todas");
            }}
          >
            Todas
          </button>
        </div>
      </div>
      <div className="lista">
        {selecionado?.map((selecionado) => {
          return <Frutas id={selecionado.nome} value={selecionado} />;
        })}
        {selecionado?.length === 0 ? "Nâo existem essa fruta para mostrar" : ""}
      </div>
    </div>
  );
}
