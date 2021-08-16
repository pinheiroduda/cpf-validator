function cpfValidation(cpf) {
  if (cpf.length != 11) {
    return false;
  } else {

    var numbers = cpf.substring(0, 9);
    var digits = cpf.substring(9);

    var sum = 0;
    for (var i = 10; i > 1; i--) {
      sum += numbers.charAt(10 - i) * i;
    }

    var result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

    // validação do primeiro dígito //
    if (result != digits.charAt(0)) {
      return false;
    }

    sum = 0;
    numbers = cpf.substring(0, 10);

    for (var k = 11; k > 1; k--) {
      sum += numbers.charAt(11 - k) * k;
    }

    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

    // validação do segundo dígito //
    if (result != digits.charAt(1)) {
      return false;
    }
    return true;
  }
}

function validation() {
  console.log("starting cpf validation");
  document.getElementById('success').style.display = 'none';
  document.getElementById('error').style.display = 'none';

  var cpf = document.getElementById('typed_cpf').value;
  
  // verificando se o cpf é válido //
  var validationResult = cpfValidation(cpf);
  if (validationResult) {
    document.getElementById('success').style.display = 'block';
  } else {
    document.getElementById('error').style.display = 'block'
  }
}