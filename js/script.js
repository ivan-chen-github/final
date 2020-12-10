function displayPic(pic) {
    let bottom = document.querySelector(".bottom");
    let bigPic = document.querySelector(".displayed-img");
    bigPic.src = pic.target.src
    if (bottom.style.visibility == "hidden") {
        bottom.style.visibility = "visible";
    }
}


function submit() {
    let input = document.querySelector("#effect");
    bigPic = document.querySelector(".displayed-img");
    if (input.value == "blur") {
        bigPic.src = bigPic.src.slice(-15, -4) + "b" + ".jpg";
    }
    else {
        alert("Error: Unknown Effect");
    }
    input.value = "";
}


function main() {
    let bottom = document.querySelector(".bottom");
    let thumb = document.querySelector("#thumb-bar");
    bottom.style.visibility = "hidden";
    let imgList = [];
    for (i = 0; i < 5; i++) {
        imgList[i] = document.createElement("img");
        imgList[i].src = `images/pic${i+1}.jpg`;
        thumb.appendChild(imgList[i]);
    }
    thumb.addEventListener("mouseover", function(e){displayPic(e);}, false);
}


main()
