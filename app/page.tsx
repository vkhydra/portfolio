import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";
import Menu from "../components/menu";

export default function Home() {
  return (
    <main>
      <header className="bg-base-100 h-screen">
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
