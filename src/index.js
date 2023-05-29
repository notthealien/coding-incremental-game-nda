let money = 0.00;
let a = 0;

function draw(progress){
    const ctx = progress.getContext('2d');        
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, a*40, 30);
    ctx.fillStyle = "black";
  }

function addmoney(step){
    money += step;
    document.getElementById("money").innerHTML = "Money: "+money.toFixed(2);
}


function clickButton(){
    addmoney(0.10);
}

function clickH1(){
    a++;
    addmoney(0.01);
    if(a<10){
        document.getElementById("tutorial1").innerHTML = "Click on the heading element "+(10-a)+" times to unlock next level!";
        draw(progress);
    } else{
        document.getElementById("tutorial1").innerHTML = "You have unlocked the next headings!<br\><br\>See you soon!"+
        "<h2 title='<h2></h2>' id='headinghtml'>1. HTML</h2>"+
        "<h2 title='<h2></h2>' id='headingcss'>2. CSS</h2>"+
        "<h2 title='<h2></h2>' id='headingjs'>3. JS</h2>"+
        "<h2 title='<h2></h2>' id='headingcompile'>4. Compile</h2>";  
        
        document.getElementById("menu").innerHTML += "<br\>"+
        "Buy<br\>"+
        "Upgrade<br\>"+
        "Research<br\>"+
        "Buy<br\>";
        document.getElementById("firstButton").onclick = clickButton;
    }    
  }