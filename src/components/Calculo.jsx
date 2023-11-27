import React from "react";
import { valoresImpacto } from "../valores";
import Entry from "./Entry";

function Calculo(prop) {
  const valores = valoresImpacto[prop.alterar];

  // const totalCarne = co2 / 102.1 + agua / 0.2;
  // const totalGas = co2 / 102.1 + agua / 0.2 + solo / 3 + bio / 1;

  return (
    <>
      <Entry valores={valores} nInput={prop.nCalculo} />
    </>
  );
}

export default Calculo;
