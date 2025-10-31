function calcular(tipo) {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  let resultado;

  // Validación de datos
  if (isNaN(n1) || isNaN(n2)) {
    resultado = "Por favor ingrese ambos números.";
  } else {
    // Selección de operación
    switch (tipo) {
      case 'suma':
        resultado = n1 + n2;
        break;
      case 'resta':
        resultado = n1 - n2;
        break;
      case 'multiplicacion':
        resultado = n1 * n2;
        break;
      case 'division':
        resultado = (n2 !== 0) ? (n1 / n2).toFixed(2) : "Error: división por cero";
        break;
      case 'potencia':
        resultado = Math.pow(n1, n2);
        break;
      default:
        resultado = "Operación no válida";
    }
  }

  // Mostrar resultado en pantalla (manipulación del DOM)
  document.getElementById("resultado").textContent = resultado;
}

