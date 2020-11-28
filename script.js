// $('.drop-i').click(() => {
//     var path = $(this).find('img').attr('src');
//     console.log(path);
//     $("body").css("background-image","url('./images/first.jpg')");
// })

var n = document.querySelectorAll(".drop-i").length;
for(var i=0;i<n;i++){
    document.querySelectorAll(".drop-i")[i].addEventListener('click',(event) => {
        $("body").css("background-image",`url(${event.target.getAttribute("src")})`);
    })
}

