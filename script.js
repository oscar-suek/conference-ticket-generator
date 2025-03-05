const dropArea =  document.getElementById("drop-area")
const inputFile =  document.getElementById("input-file")
const imageView =  document.getElementById("img-view")
const compView = document.getElementById("comp-view")
const finImg = document.getElementById("fin-img")
const removeImage = document.getElementById("btn1")
const changeImage = document.getElementById("btn2")
const imageHolder = document.getElementById("image-holder")
const someDiv = document.getElementById("some-div")
const submitButton = document.getElementById("b1")
const firstInput = document.getElementById("input1")
const secondInput = document.getElementById("input2")
const thirdInput = document.getElementById("input3")
const inputVd1 = document.getElementById("vd1")
const inputVd2 = document.getElementById("vd2")
const inputVd3 = document.getElementById("vd3")
const nameSpan = document.getElementById("name-span")
const emailSpan = document.getElementById("email-span")
const proPic = document.getElementById("pro-pic")
const custName = document.getElementById("cust-name")
const gitHandle = document.getElementById("git-handle")
const main = document.getElementById("main")
const section1 = document.getElementById("section1")
var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

inputFile.addEventListener("change", uploadImage);

function uploadImage(){
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    console.log(imgLink)
    dropArea.style.display = "none"
    /* imageView.style.backgroundImage = `url(${imgLink})`; */
    /* imageView.textContent = ""; */
    dropArea.style.backgroundColor = "";
    imageHolder.style.display = "block"
    finImg.style.backgroundImage = `url(${imgLink})`;
}

dropArea.addEventListener("dragover", function(e){
    e.preventDefault();
});

dropArea.addEventListener("drop", function(e){
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
})

imageHolder.addEventListener("dragover", function(e){
    e.preventDefault();
});

imageHolder.addEventListener("drop", function(e){
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
})

removeImage.addEventListener("click", function(){
    imageHolder.style.display = "none"
    dropArea.style.display = "block"
})

submitButton.addEventListener("click", function(){
    if(finImg.style.backgroundImage == ""){
        document.getElementById("text1").innerHTML ="<span>&#9432;</span> No picture selected."
        document.getElementById("text1").style.color = "hsl(7, 71%, 60%)"
        document.getElementById("text1").style.marginRight = "340px"
    }
    else if (firstInput.value == ""){
        inputVd1.style.display = "block"
    }
    else if(secondInput.value == "" || !regex.test(secondInput.value)){
        inputVd2.style.display = "block"
    }
    else if (thirdInput.value == ""){
        inputVd3.style.display = "block"
    }
    else if (inputFile.files[0].size > 500000){
        document.getElementById("text1").innerHTML ="<span>&#9432;</span> File too large, please upload a file less than 500kb."
        document.getElementById("text1").style.color = "hsl(7, 71%, 60%)"
        document.getElementById("text1").style.marginRight = "130px"
    }
    else{
        main.style.display = "none"
        section1.style.display = "block"
        nameSpan.innerHTML = firstInput.value
        emailSpan.innerHTML = secondInput.value
        proPic.style.backgroundImage = finImg.style.backgroundImage
        custName.innerHTML = firstInput.value
        gitHandle.innerHTML = thirdInput.value
    }
   console.log(inputFile.files[0].size)
})