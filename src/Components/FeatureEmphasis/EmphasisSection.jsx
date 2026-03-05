import Emphasis from "./Emphasis";
import "./EmphasisSection.css";
import supremeImg from "../../assets/camisa-supreme.png";
import adidasImg from "../../assets/colecao-adidas.png";
import headsetImg from "../../assets/headset.png";

export default function EmphasisSection() {
  return (
    <section className="emphasis-section">
      <h2 className="emphasis-title-section">Coleções em destaque</h2>
      <div className="emphasis-row">
        <Emphasis
          title={<>Novo drop<br />Supreme</>}
          image={supremeImg}
          imageClass="supreme"
        />
        <Emphasis
          title={<>Coleção<br />Adidas</>}
          image={adidasImg}
          imageClass="adidas"
        />
        <Emphasis
          title={<>Novo Beats<br />Bass</>}
          image={headsetImg}
          imageClass="beats"
        />
      </div>
    </section>
  );
}