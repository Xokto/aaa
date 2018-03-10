var startRadius = 130;  
var elem = (document.compatMode === "CSS1Compat") ? document.documentElement : document.body;
var height = elem.clientHeight;
var width = elem.clientWidth;

function play(){ 
	
	levelRadius = startRadius;
	svg = document.getElementById('svg');
	svg.style.height = height - 5;
	svg.style.width = width;	
    myVar = setInterval(att, 900);
	timer = setInterval(Timer, 80);
	t_inicial = new Date();
    var tmp;
   // myTimer();
 }

function Timer(){

   var t_atual = new Date();
   document.getElementById('tempo').innerHTML = tmp = ((t_atual.getTime() - t_inicial.getTime())/1000).toFixed(1);;	 
   
	 
 }
 

function att() {
    			
					
	var randCoord = randXY(levelRadius);		
	svg = document.getElementById('svg');
    svg.innerHTML = '<text id="tempo" x="0" y="23" fill="red" style="font-size:200%"d></text> <circle cx="' + randCoord.X + '" cy="' + randCoord.Y +  '" r="'+ (levelRadius - 5) + '" stroke="black" stroke-width="4" fill="' + '#' + Math.random().toString(16).slice(2, 8)+ '" onclick="this.remove(); levelRadius -= 5; checafim();"/>' 
    
}

function checafim(){
	
	if(levelRadius <= 10){ 
	  
	  var btn = document.getElementById('playBt')
	  btn.style.display = "inline";
	  alert("Parabéns, seu tempo foi: " + tmp + "s");
	  svg.innerHTML = "";
	  clearInterval(myVar); 
	  clearInterval(timer);
	  }	  	
} 
  
function randXY(radius){

	var randCoord = {X:0, Y:0};
	
	randCoord.X = Math.floor(Math.random() * (width - (2 * radius))) + radius;
	randCoord.Y = Math.floor(Math.random() * (height - (2 * radius))) + radius;

	return randCoord;
	
}

