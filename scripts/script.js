$(document).ready(function () {
   $("#addBtn").on("click", function () {
      if ($("#note__text").val() !== "/font-size") {
         $("#notes__container").append(`<p class="note">${$("#note__text").val()}</p>`)
      } else {
         let userFontSize = prompt("Font size (default: 1)")
         $("*").css("font-size", `${userFontSize}rem`)
      } 
      $(".note").click(function () {
         $(this).css("transform", "scale(0)");
         setTimeout(() => {$(this).remove()}, 100);
      })
   })
})
