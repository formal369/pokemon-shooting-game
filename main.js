// == 캔버스 세팅 ==
let canvas;
let ctx;  // 이미지 그리는 것을 도와줄 변수
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas);

let backgroundImage, bulbasaurImage, leafImage, koffingImage, gameOverImage;

// 이상해씨 좌표
let bulbasaurX = canvas.width/2-32;
let bulbasaurY = canvas.height-64;

const loadImage = () => {
  backgroundImage = new Image();
  backgroundImage.src = "/images/background.jpg";

  bulbasaurImage = new Image();
  bulbasaurImage.src = "/images/bulbasaur.png";

  leafImage = new Image();
  leafImage.src = "/images/leaf.png";

  koffingImage = new Image();
  koffingImage.src = "/images/koffing.webp";

  gameOverImage = new Image();
  gameOverImage.src = "/images/gameover.png";
}

const render = () => {
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height)
  ctx.drawImage(bulbasaurImage, bulbasaurX, bulbasaurY)
}

const main = () => {
  render()
  requestAnimationFrame(main)
}

loadImage();
main();