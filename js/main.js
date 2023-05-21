$(document).ready(function () {
  $("form").validate({
    rules: {
      nomeCompleto: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      cpf: {
        required: true,
      },
      enderecoCompleto: {
        required: true,
      },
      cep: {
        required: true,
      },
    },
    submitHandler: function () {
      alert("Formulário enviado com sucesso!");
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    },
  });
  $("#cpf").mask("000.000.000-00");
  $("#phone").mask("(00) 0000-0000");
  $("#cel").mask("(00) 00000-0000");
  $("#cep").mask("00000-000");

  $('input[type="radio"]').click(function () {
    let checkedRadio = $('input[name="opcao"]:checked').val();
    if (checkedRadio == "2") {
      $(".campo-celular").removeClass("d-none");
      $(".campo-telefone").addClass("d-none");
    } else {
      $(".campo-telefone").removeClass("d-none");
      $(".campo-celular").addClass("d-none");
    }
  });
});
