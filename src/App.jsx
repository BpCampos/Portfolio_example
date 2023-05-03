import "./App.css";
import Competencias from "./components/Competencias";
import Contato from "./components/Contato";
import Header from "./components/Header";
import Projetos from "./components/Projetos";
import SobreMim from "./components/SobreMim";

function App() {
  return (
    <>
      <Header />
      <main>
        <SobreMim />
        <Competencias />
        <Projetos />
        <Contato />
      </main>
    </>
  );
}

export default App;
