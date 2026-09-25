let stage = 0;
function changePhoto() {
    if (stage === 0) {
    document.getElementById("buttonText").innerHTML="See my cat?";
    document.querySelector(".pictures").src="mainPhoto.png";
    stage = 1;
    } else if (stage === 1) {
       document.getElementById("buttonText").innerHTML="See my logo?";
       document.querySelector(".pictures").src="rosie.jpeg"; 
       stage = 2;
    } else if (stage == 2){
        document.getElementById("buttonText").innerHTML="See me?";
        document.querySelector(".pictures").src="placeholderImg.png";
        stage = 0;
    }
}