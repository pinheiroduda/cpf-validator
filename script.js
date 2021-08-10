function cpfValidation(cpf) {
  return false;
}

function validation() {
  console.log("starting cpf validation");

  var cpf = document.getElementById('typed_cpf').value;
  
  // verificando se o cpf é válido //
  var validationResult = cpfValidation(cpf);
  if (validationResult) {
    document.getElementById('success').style.display = 'block';
  } else {
    document.getElementById('error').style.display = 'block'
  }
}