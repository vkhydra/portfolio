import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";
import Menu from "../components/menu";

export default function Home() {
  return (
    <main className="bg-base-300">
      <header>
        <Menu />
        <Cabecalho />
      </header>
      <section></section>
      <footer>
        <Rodape />
      </footer>
    </main>
  );
}
