$(document).ready(function() {
  $("#hero_img").fadeOut(100, function() {
      var num = Math.round(Math.random()*3)+1;
      var imgName = "img/hero_" + num.toString() + ".jpg";
      $(this).attr("src", imgName);
  }).fadeIn(500);
    return false;
});
