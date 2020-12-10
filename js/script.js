let label = document.querySelector("label");
let input = document.querySelector("input");
let button = document.querySelector("button");
let bigPic = document.querySelector(".displayed-img");
let thumb = document.querySelector("#thumb-bar");

function displayPic(pic) {
    console.log(pic)
    bigPic.src = pic.src
    if (label.style.visibility == "hidden"){
        label.style.visibility = "visible";
        input.style.visibility = "visible";
        button.style.visibility = "visible";
    }
}

function submit() {
    console.log(button.value)
    if (button.value == "blur"){
        console.log(bigPic.src)
    }
    else {
        alert("w0t")
    }
    button.value = ""
}


function main() {
    label.style.visibility = "hidden"
    input.style.visibility = "hidden"
    button.style.visibility = "hidden"
    let imgList = [];
    for (i = 0; i < 5; i++) {
        imgList[i] = document.createElement("img");
        imgList[i].src = `images/pic${i+1}.jpg`;
        thumb.appendChild(imgList[i])
    }
    thumb.addEventListener("mouseover", function(){displayPic(this);}, false);
}

main()
