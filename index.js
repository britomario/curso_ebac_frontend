const campoA = document.getElementById("campoA");
const campoB = document.getElementById("campoB");
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const message = document.querySelector(".message");
  const sucess = "Formulário submetido com sucesso!";
  const error =
    "Error: número B deve ser maior que o número A";
  if (campoB.value > campoA.value) {
    message.style.display = "block";
    message.classList.add("sucess");
    message.classList.remove("error");
    message.innerHTML = sucess;
    campoA.value = "";
    campoB.value = "";
  } else {
    message.style.display = "block";
    message.classList.add("error");
    message.classList.remove("sucess");
    message.innerHTML = error;
    campoA.value = "";
    campoB.value = "";
  }
});
