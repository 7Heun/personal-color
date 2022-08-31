$(document).ready(function () {
  var docWidth = $("#third").width() - 0; // 문서 가로값

  var docHeight = $("#third").height() - 0; // 문서 세로값

  // 설정값

  var maxRox = 0; // random offset x 최대값

  var maxRoh = 0; // random offset y 최대값

  var minRox = 0; // random offset x 최소값

  var minRoh = 0; // random offset y 최소값

  var imgWidth = 209; // 이미지 가로 크기

  var imgHeight = 111; // 이미지 세로 크기

  var imgPath = new Array();

  imgPath.push("http://img.sonyunara.com/event/893/1.png");

  imgPath.push("http://img.sonyunara.com/event/893/2.png");

  imgPath.push("http://img.sonyunara.com/event/893/3.png");

  imgPath.push("http://img.sonyunara.com/event/893/4.png");

  imgPath.push("http://img.sonyunara.com/event/893/5.png");

  var rox = Math.floor(Math.random() * docWidth + 1) - 0; // random offset x

  var roh = Math.floor(Math.random() * docHeight + 1) - 0; // random offset y

  // offset이 화면 밖으로 넘어가지 않도록

  if (rox + imgWidth > docWidth) {
    rox = docWidth - imgWidth;
  } else if (rox - imgWidth < 0) {
    rox = 0;
  }

  if (roh + imgHeight > docHeight) {
    roh = docHeight - imgHeight;
  } else if (roh - imgHeight < 0) {
    roh = 0;
  }

  // 최소 최대 영역이 있다면

  if (rox < minRox && minRox != 0) {
    rox = minRox;
  } else if (rox > maxRox && maxRox != 0) {
    rox = maxRox;
  }

  if (roh < minRoh && minRoh != 0) {
    roh = minRoh;
  } else if (roh > maxRoh && maxRoh != 0) {
    roh = maxRoh;
  }

  var randNum = Math.floor(Math.random() * imgPath.length);

  var imgPath = imgPath[randNum];

  var html =
    "<img src='" +
    imgPath +
    "' style='position: absolute; left:" +
    rox +
    "px; top:" +
    roh +
    "px; z-index:1000;' class='evt893' />";

  $("body").prepend(html);
});
