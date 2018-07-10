var images = ["./assets/images/jumbotron_1.jpg", "./assets/images/jumbotron_2.jpg", "./assets/images/jumbotron_3.jpg", "./assets/images/jumbotron_4.jpg", "./assets/images/jumbotron_5.jpg", "./assets/images/jumbotron_6.jpg", "./assets/images/jumbotron_7.jpg", "./assets/images/jumbotron_8.jpg", "./assets/images/jumbotron_9.jpg", "./assets/images/jumbotron_10.jpg"];
nextImage = 0;

setInterval(function () {
  if (nextImage === images.length) {
    nextImage = 0
  }
  console.log(images[nextImage]);
  $("#jumboPic").attr("src", images[nextImage], width='200px')
  nextImage++;
}, 5000)