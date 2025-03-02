$(document).ready(function () {
   $("#addBtn").on("click", function () {
      if ($("#note__text").val() != "/fz2") {
         $("#notes__container").append(`<p class="note">${$("#note__text").val()}</p>`)
      } else {
         $("*").css("font-size", "1.2rem")
      }
      $(".note").click(function () {
         $(this).css("transform", "scale(0)");
         setTimeout(() => {$(this).remove()}, 100);
      })
   })
})
