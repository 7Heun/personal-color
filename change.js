var bigPic1 = document.querySelector(".big1"); // 큰 사진
var bigPic2 = document.querySelector(".big2");
var smallPics = document.querySelectorAll(".small"); // 작은 사진(여러개)

bigPic1.onclick = changepic;
bigPic2.onclick = changepic;

function changepic() {
  //사진 바꾸는 함수
  bigPicAtrribute1 = bigPic1.getAttribute("src");
  bigPicAtrribute2 = bigPic2.getAttribute("src");
  var smallPicsAttribute = [];
  for (i = 0; i < smallPics.length; i++) {
    smallPicsAttribute[i] = smallPics[i].getAttribute("src");
  }
  bigPic1.setAttribute("src", smallPicsAttribute[0]);
  bigPic2.setAttribute("src", smallPicsAttribute[1]);
  smallPics[0].setAttribute("src", smallPicsAttribute[2]);
  smallPics[1].setAttribute("src", smallPicsAttribute[3]);
  smallPics[2].setAttribute("src", bigPicAtrribute1);
  smallPics[3].setAttribute("src", bigPicAtrribute2);
}
