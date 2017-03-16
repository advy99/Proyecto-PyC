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
function ejSumaMatrices(){
	ventanaSumaMatrices=window.open('ejercicios/ejSumaMatrices.html','','width=700,height=500')
}
function rellenarMatrices(){
	//cogemosla matriz a y la rellenamos de numeros aleatorios
	document.getElementsByClassName("a1")[0].innerHTML=Math.trunc((Math.random()*100));
	document.getElementsByClassName("a1")[1].innerHTML=Math.trunc((Math.random()*100));
	document.getElementsByClassName("a1")[2].innerHTML=Math.trunc((Math.random()*100));
	document.getElementsByClassName("a2")[0].innerHTML=Math.trunc((Math.random()*100));
	document.getElementsByClassName("a2")[1].innerHTML=Math.trunc((Math.random()*100));
	document.getElementsByClassName("a2")[2].innerHTML=Math.trunc((Math.random()*100));
	
	//cogemosla matriz b y la rellenamos de numeros aleatorios

	document.getElementsByClassName("b1")[0].innerHTML=Math.trunc((Math.random()*100));
	document.getElementsByClassName("b1")[1].innerHTML=Math.trunc((Math.random()*100));
	document.getElementsByClassName("b1")[2].innerHTML=Math.trunc((Math.random()*100));
	document.getElementsByClassName("b2")[0].innerHTML=Math.trunc((Math.random()*100));
	document.getElementsByClassName("b2")[1].innerHTML=Math.trunc((Math.random()*100));
	document.getElementsByClassName("b2")[2].innerHTML=Math.trunc((Math.random()*100));

	document.getElementsByName("c11").value="";
	document.getElementsByName("c12").value="";
	document.getElementsByName("c13").value="";
	document.getElementsByName("c21").value="";
	document.getElementsByName("c22").value="";
	document.getElementsByName("c23").value="";
}
function comprobarSuma(){
	a1= new Array(3);
	
	a1=document.getElementsByClassName("a1");

	a2= new Array(3);

	a2=document.getElementsByClassName("a2");

	b1= new Array(3);

	b1=document.getElementsByClassName("b1");

	b2= new Array(3);

	b2=document.getElementsByClassName("b2");

	c1= new Array(3);

	c1=document.getElementsByClassName("c1");


	c2= new Array(3);

	c2=document.getElementsByClassName("c2");


	for (var i = 0; i <= 2; i++) {
		if (c1[i].value==(Number(a1[i].innerHTML)+Number(b1[i].innerHTML))) {

			c1[i].style.backgroundColor="green";
			c1[i].style.color="white";
		}
		else{
			c1[i].style.backgroundColor="red";
			c1[i].style.color="white";
		}
	}
	for (var i = 0; i <= 2; i++) {
		if (c2[i].value==(Number(a2[i].innerHTML)+Number(b2[i].innerHTML))) {
			c2[i].style.backgroundColor="green";
			c2[i].style.color="black";
		}
		else{
			c2[i].style.backgroundColor="red";
			c2[i].style.color="black";
		}
	}


}