$(document).ready(function() {
  $(".classdiv").on("click", function() {
    $(".classdiv").not(this).removeClass("clicked");
    $(this).toggleClass("clicked");
  });

});
