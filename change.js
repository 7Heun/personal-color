var bigPic1 = document.querySelector(".big1"); // 큰 사진
var bigPic2 = document.querySelector(".big2");
var smallPics = document.querySelectorAll(".small"); // 작은 사진(여러개)

bigPic1.addEventListener("click", changepic);
bigPic2.addEventListener("click", changepic);

function changepic() {
  thisAtr = this == bigPic1 ? bigPic2 : bigPic1;
  thisAtr.style.filter = "brightness(0.5)";
  thisAtr.style.transition = "0.7s";
  setTimeout(function () {
    thisAtr.style.filter = "brightness(1)";
    thisAtr.style.transition = null;
    //사진 바꾸는 함수
    bigPicAtrribute1 = bigPic1.getAttribute("src");
    bigPicAtrribute2 = bigPic2.getAttribute("src");
    var smallPicsAttribute = [];
    for (i = 0; i < smallPics.length; i++) {
      smallPicsAttribute[i] = smallPics[i].getAttribute("src");
    }
    bigPic1.setAttribute("src", smallPicsAttribute[0]);
    bigPic2.setAttribute("src", smallPicsAttribute[1]);
    for (k = 0; k < 4; k++) {
      smallPics[k].setAttribute("src", smallPicsAttribute[k + 2]);
    }
    smallPics[4].setAttribute("src", bigPicAtrribute1);
    smallPics[5].setAttribute("src", bigPicAtrribute2);
  }, 900);
}
