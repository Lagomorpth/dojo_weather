function eraser(element){
    console.log(element);
    element.remove();
}

function cityClick(){
    alert("Loading weather report");
}

function tempConvert(element){
    console.log(element.value);
    for(var i=1; i < 9; i++){
        var temp = document.querySelector("#temp" + i);
        var tempNum = parseInt(temp.innerText);
        if(element.value === "C"){
            temp.innerText = convert2C(tempNum) + "°";
        } else if(element.value === "F"){
            temp.innerText = convert2F(tempNum) + "°";
        } else{
            alert("ERROR! YOU HAVE BROKEN THE INTERNET");
        }
    }
}

function convert2C(temp){
    // var temp = id.innerText;
    // temp = temp.substring(0, temp.length - 1);
    return Math.round(5 / 9 * (temp - 32));
}

function convert2F(temp){
    // var temp = id.innerText;
    // temp = temp.substring(0, temp.length - 1);
    return Math.round(9 / 5 * temp + 32);
}

