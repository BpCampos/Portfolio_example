import "./App.css";
import React, { useState } from "react";
import BotaoIdioma from "./components/BotaoIdioma";
import Competencias from "./components/Competencias";
import Contato from "./components/Contato";
import Header from "./components/Header";
import Projetos from "./components/Projetos";
import Seta from "./components/Seta";
import SobreMim from "./components/SobreMim";

function App() {
  const [checked, setChecked] = useState({ Brasil: true, USA: false });

  function changeRadio(e) {
    setChecked(() => {
      return {
        Brasil: false,
        USA: false,
        [e.target.value]: true,
      };
    });
  }

  return (
    <div>
      <Header checked={checked} />
      <BotaoIdioma checked={checked} changeRadio={changeRadio} />
      <main>
        <SobreMim checked={checked} />
        <Competencias checked={checked} />
        <Projetos checked={checked} />
        <Contato checked={checked} />
      </main>
      <Seta />
    </div>
  );
}

export default App;
