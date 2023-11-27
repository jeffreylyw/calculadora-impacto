import React, { useState } from "react";
import Calculadora from "./Calculadora";

function Input(prop) {
  const [title, setTitle] = useState("Selecione um item");
  const [placeholder, setPlaceholder] = useState("");
  const [isBotaoDesabilitado, setIsBotaoDesabilitado] = useState(true);

  function handleChange(e) {
    const x = e.target.value;
    switch (x) {
      case "0":
        setTitle("Carne");
        setPlaceholder("em kg");
        break;
      case "1":
        setTitle("Gasolina");
        setPlaceholder("em litros");
        break;
      default:
        setTitle("Selecione um item");
        setPlaceholder("");
        break;
    }
    prop.setAlterar(x);
    e.preventDefault();
  }

  return (
    <>
      <h2>{title}</h2>
      <select className="selector" value={prop.alterar} onChange={handleChange}>
        <option>Selecione</option>
        <option value={0}>Carne</option>
        <option value={1}>Gasolina</option>
      </select>

      <Calculadora
        alterar={prop.alterar}
        medida={placeholder}
        botao={isBotaoDesabilitado}
        changeBotao={setIsBotaoDesabilitado}
      />
    </>
  );
}
export default Input;
