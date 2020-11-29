// $('.drop-i').click(() => {
//     var path = $(this).find('img').attr('src');
//     console.log(path);
//     $("body").css("background-image","url('./images/first.jpg')");
// })

// var n = document.querySelectorAll(".drop-i").length;
// for(var i=0;i<n;i++){
//     document.querySelectorAll(".drop-i")[i].addEventListener('click',(event) => {
//         $("body").css("background-image",`url(${event.target.getAttribute("src")})`);
//     })
// }

var modal = document.getElementById("myModal");


var img = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for(var i=0;i<img.length;i++){
    img[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }
}


var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
  modal.style.display = "none";
}
