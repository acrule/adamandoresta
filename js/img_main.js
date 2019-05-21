$(document).ready(function() {
  $("#hero_img").fadeOut(100, function() {
      var imgsNums = [1, 3, 9, 10];
      var imgNum = imgsNums[Math.floor(Math.random()*imgsNums.length)];
      var imgName = "img/hero_" + imgNum.toString() + ".jpg";
      console.log(imgName);
      $(this).attr("src", imgName);
  }).fadeIn(500);
    return false;
});
