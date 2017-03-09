function pulsarMenu(menu){
	pulsado=document.getElementById(menu);
	if (pulsado.style.display=="block") {
		pulsado.style.display="none";
	}
	else{
		pulsado.style.display="block";
	}
}
function manual(){
	ventanaManual=window.open('manual.html','','width=1000,height=500');
}