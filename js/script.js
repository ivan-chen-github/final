let label = document.querySelector("label");
let input = document.querySelector("input");
let button = document.querySelector("button");
let bigPic = document.querySelector(".displayed-img");
let thumb = document.querySelector("#thumb-bar");

function displayPic(pic) {
    console.log(pic.target)
    bigPic.src = pic.target.src
    console.log(bigPic)
    if (label.style.visibility == "hidden"){
        label.style.visibility = "visible";
        input.style.visibility = "visible";
        button.style.visibility = "visible";
    }
}

function submit() {
    console.log(input.value)
    if (input.value == "blur"){
        console.log(bigPic.src)
        console.log(typeof bigPic.src)
        bigPic.src = bigPic.src.slice(-7, -1) + "b" + ".jpg"
        
        console.log(bigPic.src)
    }
    else {
        alert("Error: Unknown Command")
    }
    input.value = ""
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
    thumb.addEventListener("mouseover", function(e){displayPic(e);}, false);
}

main()
