function calcular() {
  let salario = parseFloat(
    document
      .getElementById("salario")
      .value.replace(/\./g, "")
      .replace(",", ".")
  );
  let percentual = parseFloat(
    document
      .getElementById("percentual")
      .value.replace("%", "")
      .replace(",", ".")
  );

  if (isNaN(salario) || isNaN(percentual)) {
    alert("Os valores informados são inválidos!");
    return;
  } else if (salario === 0 || percentual === 0) {
    alert("Os valores informados não podem ser zero!");
    return;
  }

  let aumento = (salario * percentual) / 100;
  let novosalario = salario + aumento;

  document.getElementById("salario-atual").innerHTML = salario
    .toFixed(2)
    .replace(".", ",");
  document.getElementById("percentual-aumento").innerHTML = percentual
    .toFixed(2)
    .replace(".", ",");
  document.getElementById("aumento-total").innerHTML = aumento
    .toFixed(2)
    .replace(".", ",");
  document.getElementById("novo-salario").innerHTML = novosalario
    .toFixed(2)
    .replace(".", ",");

  document.getElementById("resultado-container").style.display = "block";
}

function limpar() {
  document.getElementById("salario").value = "";
  document.getElementById("percentual").value = "";
  document.getElementById("salario-atual").innerHTML = "";
  document.getElementById("percentual-aumento").innerHTML = "";
  document.getElementById("aumento-total").innerHTML = "";
  document.getElementById("novo-salario").innerHTML = "";

  document.getElementById("resultado-container").style.display = "none";
}

function inicializar() {
  document.getElementById("resultado-container").style.display = "none";

  new Cleave("#salario", {
    numeral: true,
    numeralThousandsGroupStyle: "thousand",
    delimiter: ".",
    numeralDecimalMark: ",",
  });

  new Cleave("#percentual", {
    numeral: true,
    numeralDecimalMark: ",",
    suffix: "%",
  });
}

window.onload = inicializar;
