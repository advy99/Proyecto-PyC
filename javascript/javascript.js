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
	ventanaSumaMatrices=window.open('ejercicios/ejSumaMatrices.html','','width=900,height=500')
}
function rellenarMatrices(){
	//cogemosla matriz a y la rellenamos de numeros aleatorios
	document.getElementsByClassName("a")[0].innerHTML=Math.trunc((Math.random()*10));
	document.getElementsByClassName("a")[1].innerHTML=Math.trunc((Math.random()*10));
	document.getElementsByClassName("a")[2].innerHTML=Math.trunc((Math.random()*10));

	document.getElementsByClassName("a")[3].innerHTML=Math.trunc((Math.random()*10));
	document.getElementsByClassName("a")[4].innerHTML=Math.trunc((Math.random()*10));
	document.getElementsByClassName("a")[5].innerHTML=Math.trunc((Math.random()*10));

	document.getElementsByClassName("a")[6].innerHTML=Math.trunc((Math.random()*10));
	document.getElementsByClassName("a")[7].innerHTML=Math.trunc((Math.random()*10));
	document.getElementsByClassName("a")[8].innerHTML=Math.trunc((Math.random()*10));
	
	//cogemosla matriz b y la rellenamos de numeros aleatorios

	document.getElementsByClassName("b")[0].innerHTML=Math.trunc((Math.random()*10));
	document.getElementsByClassName("b")[1].innerHTML=Math.trunc((Math.random()*10));
	document.getElementsByClassName("b")[2].innerHTML=Math.trunc((Math.random()*10));

	document.getElementsByClassName("b")[3].innerHTML=Math.trunc((Math.random()*10));
	document.getElementsByClassName("b")[4].innerHTML=Math.trunc((Math.random()*10));
	document.getElementsByClassName("b")[5].innerHTML=Math.trunc((Math.random()*10));

	document.getElementsByClassName("b")[6].innerHTML=Math.trunc((Math.random()*10));
	document.getElementsByClassName("b")[7].innerHTML=Math.trunc((Math.random()*10));
	document.getElementsByClassName("b")[8].innerHTML=Math.trunc((Math.random()*10));

	document.getElementById("c11").value="";
	document.getElementById("c12").value="";
	document.getElementById("c13").value="";

	document.getElementById("c21").value="";
	document.getElementById("c22").value="";
	document.getElementById("c23").value="";

	document.getElementById("c31").value="";
	document.getElementById("c32").value="";
	document.getElementById("c33").value="";
}
function comprobarSuma(){
	a1=new Array(8);
	
	a1=document.getElementsByClassName("a");
	
	b1= new Array(8);

	b1=document.getElementsByClassName("b");

	c1= new Array(8);

	c1=document.getElementsByClassName("c");

	for (var i = 0; i <= 5; i++) {
		if (c1[i].value==(Number(a1[i].innerHTML)+Number(b1[i].innerHTML))) {

			c1[i].style.backgroundColor="green";
			c1[i].style.color="white";
		}
		else{
			c1[i].style.backgroundColor="red";
			c1[i].style.color="white";
		}
	}
}
function ejNumeroMatriz(){
	ventanaNumeroMatriz=window.open('ejercicios/ejNumeroMatriz.html','','width=900,height=500')
}
function comprobarNumeroMatriz(){
	a1=new Array(8);
	
	a1=document.getElementsByClassName("a");
	
	b1= new Array(8);

	b1=document.getElementsByClassName("b");

	c1= new Array(8);

	c1=document.getElementsByClassName("c");



	for (var i = 0; i <= 5; i++) {
		if (c1[i].value==(Number(a1[0].innerHTML)*Number(b1[i].innerHTML))) {

			c1[i].style.backgroundColor="green";
			c1[i].style.color="white";
		}
		else{
			c1[i].style.backgroundColor="red";
			c1[i].style.color="white";
		}
	}
	
}
function ejMatrices(){
	ventanaMatriz=window.open('ejercicios/ejMatrices.html','','width=900,height=500');
}
function comprobarMatrices(){
	a1= new Array(8);
	
	a1=document.getElementsByClassName("a");

	b1= new Array(8);
	
	b1=document.getElementsByClassName("b");
	c1= new Array(8);
	
	c1=document.getElementsByClassName("c");
	
	sol=0;
	sol=Number(sol);
	j=0;
	k=0;
	cont=0;
	num=0;
	for (var l = 0; l <3; l++) {

		for (var i = 0; i <=11; i++) {	
			if(cont<3){
				sol=sol+(Number(a1[num].innerHTML)*Number(b1[j].innerHTML));
				j+=3;
				cont++;
				num++;
			}
			else{
				if (c1[k].value==sol) {
					c1[k].style.backgroundColor="green";
					c1[k].style.color="white";
					sol=0;
				}
				else{
					c1[k].style.backgroundColor="red";
					c1[k].style.color="white";
					sol=0;
				}
				k++;
				if(j>=11){
					j-=11;
				}
				else{
					j-=8;
				}
				cont=0;
				num-=3;
			}

		}
		num+=3;
	}
}
function rellenarDeterminante2(){
	document.getElementsByClassName("a")[0].innerHTML=Math.trunc((Math.random()*10));
	document.getElementsByClassName("a")[1].innerHTML=Math.trunc((Math.random()*10));
	document.getElementsByClassName("a")[2].innerHTML=Math.trunc((Math.random()*10));

	document.getElementsByClassName("a")[3].innerHTML=Math.trunc((Math.random()*10));
	document.getElementsByClassName("a")[4].innerHTML=Math.trunc((Math.random()*10));
	document.getElementsByClassName("a")[5].innerHTML=Math.trunc((Math.random()*10));

	document.getElementsByClassName("a")[6].innerHTML=Math.trunc((Math.random()*10));
	document.getElementsByClassName("a")[7].innerHTML=Math.trunc((Math.random()*10));
	document.getElementsByClassName("a")[8].innerHTML=Math.trunc((Math.random()*10));
}
function determinanteDos(){
	window.open('ejercicios/ejDeterminante2.html','','width=900,height=500');
}
function comprobarDeterminanteDos(){
	a=new Array(8);
	a=document.getElementsByClassName("a");
	respuesta=(Number(a[0].innerHTML)*Number(a[4].innerHTML))-(Number(a[1].innerHTML)*Number(a[3].innerHTML));
	sol=document.getElementById("determinanteDos");
	if(sol.value==respuesta){
		sol.style.backgroundColor="green";
		sol.style.color="white";
	}
	else{
		sol.style.backgroundColor="red";
		sol.style.color="white";
	}

}