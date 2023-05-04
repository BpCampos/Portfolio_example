import "./App.css";
import Competencias from "./components/Competencias";
import Contato from "./components/Contato";
import Header from "./components/Header";
import Projetos from "./components/Projetos";
import Seta from "./components/Seta";
import SobreMim from "./components/SobreMim";

function App() {
  return (
    <div>
      <Header />
      <main>
        <SobreMim />
        <Competencias />
        <Projetos />
        <Contato />
      </main>
      <Seta />
    </div>
  );
}

export default App;
