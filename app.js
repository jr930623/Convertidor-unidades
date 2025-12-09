document.getElementById("btnConvertir").addEventListener("click", convertir);

function convertir() {
  let valor = parseFloat(document.getElementById("valor").value);
  let entrada = document.getElementById("unidadEntrada").value;
  let salida = document.getElementById("unidadSalida").value;
  let resultado = document.getElementById("resultado");

  if (isNaN(valor)) {
    resultado.textContent = "Ingresa un número válido.";
    return;
  }

  // Conversión a metros como base
  const factores = {
    m: 1,
    km: 1000,
    cm: 0.01,
    mm: 0.001,
    ft: 0.3048,
    in: 0.0254,
  };

  // Convertir la entrada a metros
  let metros = valor * factores[entrada];

  // Convertir de metros a la unidad de salida
  let final = metros / factores[salida];

  resultado.textContent = `${valor} ${entrada} = ${final.toFixed(4)} ${salida}`;
}
