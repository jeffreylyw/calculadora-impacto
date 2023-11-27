import "./styles.css";
import React, { useState } from "react";
import Input from "./components/Input";

function App() {
  const [trocarImpacto, setTrocarImpacto] = useState("");
  return (
    <div className="tela1">
      <img
        src="https://www.sintrop.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-branco.b65c236c.png&w=384&q=100"
        alt="Logo Sintrop"
      />
      <h1>Calculadora de Impacto</h1>
      <Input alterar={trocarImpacto} setAlterar={setTrocarImpacto} />
    </div>
  );
}

export default App;
