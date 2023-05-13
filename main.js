$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    const toDo = $(".to-do").val();
    const newToDo = $(`<li class="to-do-list">${toDo}</li>`);
    $(toDo).appendTo(newToDo);
    $(newToDo).appendTo("ul");

    $(newToDo).on("click", function () {
      $(this).addClass("checked");
    });
  });
});
