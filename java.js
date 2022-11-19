var num1=0;
var num2=0;
var num3=0;
var num4=0;
var HorL = 0;
function reloadhorl(){
    var numtitle = document.getElementById("numtitle");
    if(Math.random()>0.5){
        HorL=1;
    }else{
        HorL=0;
    };
    if(HorL==1){
        numtitle.innerText="What is the highest number";
    }else{
        numtitle.innerText="What is the lowest number";
    };
};
reloadhorl();
function randomNumber(){
    num1=Math.floor(Math.random()*18+18);
    num2=Math.floor(Math.random()*18+18);
    num3=Math.floor(Math.random()*18+18);
    num4=Math.floor(Math.random()*700+400);
};
function reloadnumber(){
    document.getElementById("btn1").innerText=num1;
    document.getElementById("btn2").innerText=num2;
    document.getElementById("btn3").innerText=num3;
    document.getElementById("btn4").innerText="√"+num4;
}
function mouseover(elem){
    elem.style=elem.style+";background-color: #094f8b;"
};
function mouseout(elem){
    elem.style=elem.style+";background-color: #0D6CBE;"
};
randomNumber();
reloadnumber();
function get_min(){
    return Math.min(num1,num2,num3,Math.sqrt(Math.abs(num4)));
};
function get_max(){
    return Math.max(num1,num2,num3,Math.sqrt(Math.abs(num4)));
};
function showanswer(){
    answer_text=document.getElementById("answer_text");
    if(HorL==0){
        answer_text.innerText="the lowest number is " + get_min() ;
    } else{
        answer_text.innerText="the highest number is " + get_max() ;
    };
};
function on_click(elem){
    console.log(typeof elem.innerText);
    var answer = elem.innerText;
    if(answer.length > 2){
            answer=Math.sqrt(Math.abs(num4));
    };
    if(answer == get_min() && HorL==0||answer == get_max() && HorL==1){
        alert("Your Right!");
        showanswer();
        randomNumber();
        reloadnumber();
        reloadhorl();
        get_min();
        get_max();
    } else{
        alert("Your Wrong!");
    };
    console.log(answer);
};