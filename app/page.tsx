import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";
import Menu from "../components/menu";
import Sobre from "../components/sobre";
import Projetos from "../components/projetos";

export default function Home() {
  return (
    <main className="bg-base-300">
      <header>
        <Menu />
        <Cabecalho />
      </header>
      <section>
        <Sobre />
        <Projetos />
      </section>
      <footer>
        <Rodape />
      </footer>
    </main>
  );
}
