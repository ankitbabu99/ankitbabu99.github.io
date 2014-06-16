

var a=100; 
var rand;
var num=new Array("0");
var num3=new Array("0");
var rand;
var f=0; 
var guess=document.myForm.password.value;

function score2(){ 

			if(a<20)
					document.getElementById("full").innerHTML="game over";

			else{
			a=a-10;
			rand=Math.floor((Math.random() * 20) + 1);
			
			while(num.indexOf(rand)>-1)
				{rand=Math.floor((Math.random() * 20) + 1);}

					
			num.push(rand);



var c="pi"+rand;
document.getElementById("score").innerHTML=a;
document.getElementById(c).style.zIndex=0;
document.getElementBy(c).style.zIndex=0;
}

 }
 
 function score3(){

			if(a<20)
					document.getElementById("full").innerHTML="game over";

			else{
			rand=Math.floor((Math.random()*30) + 1);
			

			while(1)	{		
						if(!((num3.indexOf(rand)>-1)))
						{    
						if(rand==1) {if(!((num3.indexOf(rand+1)>-1)||(num3.indexOf(rand+5)>-1))) {f=1;break;}}
						else	if(rand==5) {if(!((num3.indexOf(rand-1)>-1)||(num3.indexOf(rand+5)>-1))) {f=1;break;}}
						else	if(rand==26) {if(!((num3.indexOf(rand+1)>-1)||(num3.indexOf(rand-5)>-1))) {f=1;break;}}
						else	if(rand==30) {if(!((num3.indexOf(rand-1)>-1)||(num3.indexOf(rand-5)>-1))) {f=1;break;}}
						else	if((rand>1) &&(rand<5)) {if(!((num3.indexOf(rand+1)>-1)||(num3.indexOf(rand-1)>-1)||(num3.indexOf(rand+5)>-1))) {f=1;break;}}
						else	if((rand>26) &&(rand<30)) {if(!((num3.indexOf(rand+1)>-1)||(num3.indexOf(rand-1)>-1)||(num3.indexOf(rand-5)>-1))) break;}
						else	if((rand==6)||(rand==11)||(rand==16)||(rand==21)) {if(!((num3.indexOf(rand+1)>-1)||((num3.indexOf(rand+5)>-1)||(num3.indexOf(rand-5)>-1)))) {f=1;break;}}
						else	if((rand==10)||(rand==15)||(rand==20)||(rand==25)) {if(!((num3.indexOf(rand-1)>-1)||((num3.indexOf(rand+5)>-1)||(num3.indexOf(rand-5)>-1)))) {f=1;break;}}
						else	if((rand==7)||(rand==8)||(rand==9)||(rand==12)||(rand==13)||(rand==14)||(rand==17)||(rand==18)(rand==19)||(rand==22)||(rand==23)||(rand==24)){if(!((num3.indexOf(rand-1)>-1)||((num3.indexOf(rand+1)>-1)||((num3.indexOf(rand+5)>-1)||(num3.indexOf(rand-5)>-1))))) {f=1;break;}}
							rand=Math.floor((Math.random()*30) + 1);
						}
						else rand=Math.floor((Math.random()*30) + 1);
				 }
				
		
  
a=a-10;num3.push(rand);
var c="pi"+rand;
document.getElementById("score").innerHTML=a;
document.getElementById(c).style.zIndex=0;
document.getElementBy(c).style.zIndex=0;
}

 }
 
 
function score4(){

			if(a<20)
					document.getElementById("full").innerHTML="game over";

			else{
			rand=Math.floor((Math.random()*30) + 1);
			

			while(1)	{		
						if(!((num3.indexOf(rand)>-1)))
						{    
						if(rand==1) {if(!((num3.indexOf(rand+1)>-1)||(num3.indexOf(rand+5)>-1))) {f=1;break;}}
						else	if(rand==5) {if(!((num3.indexOf(rand-1)>-1)||(num3.indexOf(rand+5)>-1))) {f=1;break;}}
						else	if(rand==26) {if(!((num3.indexOf(rand+1)>-1)||(num3.indexOf(rand-5)>-1))) {f=1;break;}}
						else	if(rand==30) {if(!((num3.indexOf(rand-1)>-1)||(num3.indexOf(rand-5)>-1))) {f=1;break;}}
						else	if((rand>1) &&(rand<5)) {if(!((num3.indexOf(rand+1)>-1)||(num3.indexOf(rand-1)>-1)||(num3.indexOf(rand+5)>-1))) {f=1;break;}}
						else	if((rand>26) &&(rand<30)) {if(!((num3.indexOf(rand+1)>-1)||(num3.indexOf(rand-1)>-1)||(num3.indexOf(rand-5)>-1))) break;}
						else	if((rand==6)||(rand==11)||(rand==16)||(rand==21)) {if(!((num3.indexOf(rand+1)>-1)||((num3.indexOf(rand+5)>-1)||(num3.indexOf(rand-5)>-1)))) {f=1;break;}}
						else	if((rand==10)||(rand==15)||(rand==20)||(rand==25)) {if(!((num3.indexOf(rand-1)>-1)||((num3.indexOf(rand+5)>-1)||(num3.indexOf(rand-5)>-1)))) {f=1;break;}}
						else	if((rand==7)||(rand==8)||(rand==9)||(rand==12)||(rand==13)||(rand==14)||(rand==17)||(rand==18)(rand==19)||(rand==22)||(rand==23)||(rand==24)){if(!((num3.indexOf(rand-1)>-1)||((num3.indexOf(rand+1)>-1)||((num3.indexOf(rand+5)>-1)||(num3.indexOf(rand-5)>-1))))) {f=1;break;}}
							rand=Math.floor((Math.random()*30) + 1);
						}
						else rand=Math.floor((Math.random()*30) + 1);
				 }
				
		
  
a=a-15;num3.push(rand);
var c="pi"+rand;
document.getElementById("score").innerHTML=a;
document.getElementById(c).style.zIndex=0;
}

 }
 
 
 
 var TimeToFade = 1000.0;

function fade(eid)
{
  var element = document.getElementById(eid);
  if(element == null)
    return;
    
   
  if(element.FadeState == null)
  {
    if(element.style.opacity == null || element.style.opacity == '' 
       || element.style.opacity == '1')
      element.FadeState = 2;
    else
      element.FadeState = -2;
  }
    
  if(element.FadeState == 1 || element.FadeState == -1)
  {
    element.FadeState = element.FadeState == 1 ? -1 : 1;
    element.FadeTimeLeft = TimeToFade - element.FadeTimeLeft;
  }
  else
  {
    element.FadeState = element.FadeState == 2 ? -1 : 1;
    element.FadeTimeLeft = TimeToFade;
    setTimeout("animateFade(" + new Date().getTime() + ",'" + eid + "')", 33);
  }  
}

