import React from "react";
import { unidades, valoresTokens } from "../valores";

function Entry(prop) {
  let somatorioValoresTokens = 0;
  let maiorValorCalculado = Number.NEGATIVE_INFINITY;
  let keyMaiorValor = null;

  const entries = Object.entries(prop.valores || {}).map(([key, value]) => {
    const valorCalculado = (prop.nInput * value) / valoresTokens[key];
    somatorioValoresTokens += valorCalculado;

    if (valorCalculado > maiorValorCalculado) {
      maiorValorCalculado = valorCalculado;
      keyMaiorValor = key;
    }

    return (
      <p className="resultado" key={key}>
        A quantidade impactada de {key}: {prop.nInput * value}
        {unidades[key]} ⇨ Valores para cada unidade de token:{" "}
        {valorCalculado.toFixed(2)} RCT
      </p>
    );
  });

  entries.push(
    <p className="resultadoToken" key="somatorioTotal">
      <hr />
      <br />
      Valores somados de tokens: {somatorioValoresTokens.toFixed(2)} RCT
    </p>
  );

  entries.push(
    <p className="resultadoToken" key="maiorValorCalculado">
      Maior valor foi de {keyMaiorValor}: {maiorValorCalculado.toFixed(2)} RCT
    </p>
  );

  return entries;
}

export default Entry;
