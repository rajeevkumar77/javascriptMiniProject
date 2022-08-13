let hr = 0;
let min =0;
let sec = 0;
let count = 0;
let flag = false;
function start(){
   flag = true; 
   stopwatch();
}
function stop(){
    flag = false;
}
function reset(){
    flag = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById("count").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00"
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hr").innerHTML = "00";

}
function stopwatch(){
    count+=1;
    if(count == 100){
        sec += 1;
        count = 0;
    }
    if(sec == 60){
        min += 1;
        sec = 0;

    }
    if(min==60){
        hr +=1;
        min = 0;
    }

    let hrString = hr;
    let minString = min;
    let secString = sec;
    let countString = count;
    if(hr<10){
        hrString = "0" + hr;
    }
    if(min<10){
        minString = "0" + min;
    }
    if(sec<10){
        secString = "0" + sec;
    }
    if(count<10){
        countString = "0" + count;
    }



    document.getElementById("count").innerHTML = countString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("hr").innerHTML = hrString;


    if(flag == true){
        setTimeout("stopwatch()",10);
    }
}