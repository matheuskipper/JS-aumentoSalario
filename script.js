function calcular() {
  let salario = parseFloat(document.getElementById("salario").value);
  let percentual = parseFloat(document.getElementById("percentual").value);

  if (isNaN(salario) || isNaN(percentual)) {
    alert("Os valores informados são inválidos!");
    return;
  }

  let aumento = (salario * percentual) / 100;
  let novosalario = salario + aumento;

  document.getElementById("salario-atual").innerHTML = salario.toFixed(2);
  document.getElementById("percentual-aumento").innerHTML =
    percentual.toFixed(2);
  document.getElementById("aumento-total").innerHTML = aumento.toFixed(2);
  document.getElementById("novo-salario").innerHTML = novosalario.toFixed(2);

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
}

window.onload = inicializar();
