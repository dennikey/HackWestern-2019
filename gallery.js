
var chinaSequence = 0;
var chinaSlides = document.getElementsByClassName('carousel-item');
console.log("ran");

//General
function showSlide(slides, slideNumber){
    for(counter = 0; counter < slides.length; counter++){
        slides[counter].style.display ="none"
    }
    slides[slideNumber].style.display = "block";
}

//Graduation
showSlide(chinaSlides, chinaSequence);

function titleIncreaseOne(){
    if (chinaSequence + 1 < chinaSlides.length){
        showSlide(chinaSlides, chinaSequence+=1);
    }
    else{
        showSlide(chinaSlides, chinaSequence=0);
    }
}

function titleDecreaseOne(){
    if(chinaSequence - 1 > -1){
        showSlide(chinaSlides, chinaSequence-=1)
    }
    else{
        showSlide(chinaSlides, chinaSequence = chinaSlides.length-1);
    }
}