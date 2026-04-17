import Image from "next/image";
import styles from "./page.module.css";
import OlaMundo from "./componentes/OlaMundo";
import Saudacao from "./componentes/Saudacao";
import Contador from "./componentes/Contador";

// Functions
export default function Home() {
  // Usando as funções
  return (
    <section>
      <OlaMundo />
      <Saudacao nome="Catarina" />
      <Contador />
    </section>
  );
}
