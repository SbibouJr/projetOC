// **************************************
// ****** SCRIPT DE DEPLACEMENT DU ******
// ********* BOUTON DEMONIAQUE **********
// ***** ET CHANGEMENT DE COULEUR *******
// ************** DE FOND ***************
// **************************************

// On definit nos variables
var contenuElt = document.getElementById("corpsPage");
var boutonElt = contenuElt.getElementsByTagName("button")[0];
var directionH = "droite";
var directionV = "bas";
var colors = ["green","red","purple","black","white","blue","yellow","cyan"];
var iColor = 0;
var idBoutonMove = 0;
var idBoutonColorMove = 0;
var go = false;

// On regle notre bouton demoniaque
boutonElt.style.borderRadius = "100px";
boutonElt.style.position = "absolute";
boutonElt.style.width ="100px";
boutonElt.style.height = "100px";

boutonElt.addEventListener("mousedown",function(){

	if(go){
		clearInterval(idBoutonMove);
		clearInterval(idBoutonColorMove);
		alert("Un grand bravo a toi, tu as des nerf d'acier !\nFelicitaion!");
		go = false;
	}else{
		idBoutonMove = setInterval(function(){
			if(directionV === "bas"){
				if(boutonElt.offsetTop + 20 + 100 > contenuElt.clientHeight){
					directionV = "haut";
				}
				else{
					boutonElt.style.top = (boutonElt.offsetTop+30)+"px";			
				}
			}
			else{
				if(boutonElt.offsetTop <= 0){
					directionV = "bas";
				}
				else{
					boutonElt.style.top = (boutonElt.offsetTop-30)+"px";			
				}
			}
			if(directionH === "droite"){
				if(boutonElt.offsetLeft + 20 + 100 > contenuElt.clientWidth){
					directionH = "gauche";
				}
				else{
					boutonElt.style.left = (boutonElt.offsetLeft+20)+"px";			
				}
			}
			else{
				if(boutonElt.offsetLeft <= 0){
					directionH = "droite";
				}
				else{
					boutonElt.style.left = (boutonElt.offsetLeft-20)+"px";			
				}
			}
		},10);
		idBoutonColorMove = setInterval(function(){
			if(iColor < colors.length-1){
				iColor++;
			}
			else{
				iColor = 0;
			}
			contenuElt.style.backgroundColor = colors[iColor];
		},400);
		go = true;
	}
});
