import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  //   function zoomin(){
  //     var myImg = document.getElementById("sky");
  //     var currWidth = myImg.clientWidth;
  //     if(currWidth == 500){
  //         alert("Maximum zoom-in level reached.");
  //     } else{
  //         myImg.style.width = (currWidth + 50) + "px";
  //     }
  // }
  // function zoomout(){
  //     var myImg = document.getElementById("sky");
  //     var currWidth = myImg.clientWidth;
  //     if(currWidth == 50){
  //         alert("Maximum zoom-out level reached.");
  //     } else{
  //         myImg.style.width = (currWidth - 50) + "px";
  //     }
  // }

  // let value = document.querySelector(".image");
  // //console.log(value);

  // value.addEventListener("click", () => {
  //   value.style.transform = scale(2);
  // });

  // let value = document.querySelector(".image");

  // function enlargeImg() {
  //   // Set image size to 1.5 times original
  //   value.style.transform = "scale(2)";
  //   // Animation effect
  //   value.style.transition = "transform 0.25s ease";
  // }

  let value = document.querySelector(".image");
  value.addEventListener("click", () => {
    value.style.transform = "scale(2)";
  });

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
