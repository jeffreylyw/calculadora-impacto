import React, { useState } from "react";
import Calculo from "./Calculo";

function Calculadora(prop) {
  const [valor, setValor] = useState("");
  const [calculo, setCalculo] = useState("");
  const [isShow, setIsShow] = useState(false);

  const estiloBotao = {
    backgroundColor: prop.botao ? "gray" : null,
    cursor: prop.botao ? "not-allowed" : "pointer"
  };

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSubmitted();
    }
  }

  function handleSubmittedZero() {
    setCalculo(0);
    setValor("");
    setIsShow(false);
    prop.changeBotao(true);
  }

  function handleSubmitted() {
    setCalculo(valor);
    setIsShow(true);
  }

  function handleChange(e) {
    setValor(e.target.value);
    prop.changeBotao(false);
  }

  return (
    <>
      <input
        onChange={handleChange}
        type="number"
        min="0"
        className="sem-setas"
        placeholder={`Insira um valor ${prop.medida}`}
        value={valor}
        onKeyPress={handleKeyPress}
      ></input>
      <button className="button1" onClick={handleSubmittedZero}>
        Zerar
      </button>
      <button
        disabled={prop.botao}
        style={estiloBotao}
        className="button2"
        onClick={handleSubmitted}
      >
        Calcular
      </button>
      {isShow && <Calculo nCalculo={calculo} alterar={prop.alterar} />}
    </>
  );
}

export default Calculadora;
