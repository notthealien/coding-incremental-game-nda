const currentVersion = 20230531;

const savedValues = getAllCookieValues();

const savedMoney = savedValues.money;
const savedClicks = savedValues.clicks;
const savedMps = savedValues.mps;
const savedVersion = savedValues.version;

let money = savedMoney ? parseFloat(savedMoney) : 0.00;
let a = savedClicks ? parseFloat(savedClicks) : 0;
let mps = savedMps ? parseFloat(savedMps) : 0.01;
const loadedSavegameVersion = savedVersion ? parseFloat(savedVersion) : 20230531;

document.addEventListener("DOMContentLoaded", function(event) {
   document.cookie = "version=" + currentVersion + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
   if (a > 0) {
      clickH1();
  }
});

function writeCookie() {
    document.cookie = "money=" + money + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    document.cookie = "clicks=" + click + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    document.cookie = "mps=" + mps + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}

function getAllCookieValues() {
    const cookies = document.cookie.split(';');
    const cookieValues = {};
  
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      const [name, value] = cookie.split('=');
      cookieValues[name] = value;
    }
  
    return cookieValues;
  }

// dublicated code
// function getCookieValue(cookieName) {
//     const cookies = document.cookie.split(';');
//     for (let i = 0; i < cookies.length; i++) {
//       const cookie = cookies[i].trim();
//       if (cookie.startsWith(cookieName + '=')) {
//         return cookie.substring(cookieName.length + 1);
//       }
//     }
//     return null; // Cookie not found
//   }

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
        document.getElementById("tutorial1b").innerHTML = "Very good! Keep clicking. You have only "+(10-a)+" left!<br\><br\>"+
        "You also see a progression bar filling up.<br\>"+
        "Your money in the top right corner is increasing.<br\><br\><br\>";

        draw(progress);
    } else{
        document.getElementById("tutorial1").innerHTML = "You have unlocked the next headings!<br\>From now on you will earn money every second.<br\>"+
        "<br\>"+
        "I'm curious what you will do with your money.<br\><br\>"+
        "Learning more HTML? Maybe saving up to style everything with CSS?!<br\>"+
        "<br\>"+
        "Please tell me! As I don't have more content to offere right now<br\>"+
        "<br\>"+
        "See you soon!"+
        "<h2 title='<h2></h2>' id='headinghtml'>1. HTML</h2>"+
        "<h2 title='<h2></h2>' id='headingcss'>2. CSS</h2>"+
        "<h2 title='<h2></h2>' id='headingjs'>3. JS</h2>"+
        "<h2 title='<h2></h2>' id='headingcompile'>4. Compile</h2>";  
        
        document.getElementById("menu").innerHTML += "<br\>"+
        "Buy<br\>"+
        "Upgrade<br\>"+
        "Research<br\>";
        document.getElementById("firstButton").onclick = clickButton;

        window.setInterval(function(){
            addmoney(mps);
        }, 1000);        
    }    
    
    document.cookie = "money=" + money + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    document.cookie = "clicks=" + a + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    document.cookie = "mps=" + mps + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";    
  }