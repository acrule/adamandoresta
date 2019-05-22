$(document).ready(function() {
  $("#hero_img").fadeOut(100, function() {
      var imgsNums = [1, 9, 10, 11];
      var imgNum = imgsNums[Math.floor(Math.random()*imgsNums.length)];
      var imgName = "img/hero_" + imgNum.toString() + ".jpg";
      console.log(imgName);
      $(this).attr("src", imgName);
  }).fadeIn(500);
    return false;
});
