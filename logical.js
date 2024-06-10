function insert(num) {
  var numero = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = numero + num;
}

function clean() {
  document.getElementById("resultado").innerHTML = "";
}

function back() {
  var resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resultado.substring( 0, resultado.length - 1);
}

function result() {
  var resultado = document.getElementById("resultado").innerHTML;
  if (resultado) {
    document.getElementById("resultado").innerHTML = eval(resultado);
  } else {
    document.getElementById("resultado").innerHTML = "";
  }
}

function brackets() {
  var resultado = document.getElementById("resultado").innerHTML;{ 
    if (
      resultado.indexOf("(") == -1 ||
      resultado.indexOf("(") != -1 &&  
      resultado.indexOf(")") != -1 && 
      resultado.lastIndexOf("(") < resultado.lastIndexOf(")")
    ){
      resultado += "(";
    } else if (
      resultado.indexOf("(") != -1 &&
      resultado.indexOf(")") == -1 ||  
      resultado.indexOf("(") != -1 && 
      resultado.indexOf(")") != -1 && 
      resultado.lastIndexOf("(") > resultado.lastIndexOf(")")
  ){
      resultado += ")";
  }
}
}