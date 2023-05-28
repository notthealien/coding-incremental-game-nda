let a = 0;

function clickH1(){
    a++;
    if(a<10){
        document.getElementById("tutorial1").innerHTML = "Click on the heading element "+(10-a)+" times to unlock next level!";
    } else{
        document.getElementById("tutorial1").innerHTML = "You have unlocked the next headings!<br\><br\>See you soon!"+
        "<h2 title='<h2></h2>' id='headinghtml'>1. HTML</h2>"+
        "<h2 title='<h2></h2>' id='headingcss'>2. CSS</h2>"+
        "<h2 title='<h2></h2>' id='headingjs'>3. JS</h2>"+
        "<h2 title='<h2></h2>' id='headingcompile'>4. Compile</h2>";
    }    
  }