function toggleVoteContainer() {
var voteContainer = document.getElementById("vote-container");
if(voteContainer.style.display === ""); {
if(voteContainer.style.display = "block");
  }
}


function increaseLikes(element) {
  var likes = element.innerText;
  likes = parseInt(likes);
  likes += 1;
  element.innerText = likes;

  var scores = document.getElementByCLassName("score");
  var score = scores[0];
  score.style.color = "orange";

}


var catImages = ["https://infostormer.com/wp-content/uploads/2017/12/gray-kitten.jpg", "https://img.memey.com/1/2/cute-kitten-3.jpg", "https://welovecatsandkittens.com/wp-content/uploads/2013/10/cat-in-a-hat-2.jpg"]
var dogImages = ["https://i.pinimg.com/originals/a3/58/ab/a358ab32098ed5c5d02eb10415c3d2f1.jpg" , "https://secure.img2-fg.wfcdn.com/im/89764267/resize-h490-w490%5Ecompr-r85/3670/36706785/Teacup+Pug+Puppy+Statue.jpg" , "http://petattack.com/wp-content/uploads/2014/08/feat32.jpg"]

function changeImage(element) {
  console.log(element.id);

  var animals=[];

  if(element.id === "cats-carousel") {
    animals = catImages;
  } else {
    animals = dogImages;
  }

  var carousel = document.getElementById(element.id);
  var image = carousel.getElementsByTagName('img')[0];
  var imageUrl = image.getAttribute('src');
  var imageIndex = animals.indexOf(imageUrl);
  if(imageIndex === animals.length - 1){
    imageIndex = 0;
  } else {
    imageIndex += 1;
  }

  imageUrl = animals[imageIndex];
  image.src = imageUrl;

  console.log(imageIndex);


}
