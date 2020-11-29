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


//Marker.js



let markerArea;

function showApiMarker(img) {
    markerArea = new markerjs.MarkerArea(img);
    markerArea.open();
    document.getElementById('markerActivator').style.display = 'none';
    document.getElementById('markerControls').style.display = '';
}

function addArrow() {
    if (markerArea) {
        markerArea.addMarker(markerjs.ArrowMarker);
    }
}
function deleteMarker() {
    if (markerArea) {
        markerArea.deleteActiveMarker();
    }
}
function render() {
    if (markerArea) {
        markerArea.render((dataUrl) => {
            const res = document.getElementById("img01");
            res.src = dataUrl;
            res.style.display = "";
        });
    }
}
function closeMarkerArea() {
    if (markerArea) {
        markerArea.close();
    }
    document.getElementById('markerActivator').style.display = '';
    document.getElementById('markerControls').style.display = 'none';
}