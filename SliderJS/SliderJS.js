let flage = 0;
function controller(num){
    flage = flage+num;
    slideshow(flage);
}
slideshow(flage);
function slideshow(num){
    let slides = document.getElementsByClassName("slide");
    if(num==slides.length){
        num=0;
        flage=0;
    }
    if(num<0){
        num = slides.length-1;
        flage=slides.length-1;

    }
    for(let y of slides){
        y.style.display = "none";
    }
    slides[num].style.display = "block";
}