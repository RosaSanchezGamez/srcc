const formTermino = document.querySelector("form#terminos");

var checkForm = function(formTermino) {
      
  if(!formTermino.terms.checked) {
    alert("Por favor aceptar los terminos y condiciones");
    formTermino.terms.focus();
    return false;
  }
  return true;
};