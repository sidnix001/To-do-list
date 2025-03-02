$(document).ready(function () {
   $("#addBtn").on("click", function () {
      $("#notes__container").append(`<p class="note">${$("#note__text").val()}</p>`)
      $(".note").click(function () {
         $(this).css("transform", "scale(0)");
         setTimeout(() => {$(this).remove()}, 100);
      })
   })
})