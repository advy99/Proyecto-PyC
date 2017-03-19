
var ORDENARRAY = [];
var ORDENEVALIDOS =[1,5,9,4,8,3,7,2,6,3,5,7,6,8,1,9,2,4];
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
function determinanteTres(){
	window.open('ejercicios/ejDeterminante3.html','','width=900,height=500');
}
function comprobarDeterminanteTres(){
	a=new Array(8);
	a=document.getElementsByClassName("a");
	positivos=(Number(a[0].innerHTML)*Number(a[4].innerHTML)*Number(a[8].innerHTML));
	positivos+=(Number(a[1].innerHTML)*Number(a[5].innerHTML)*Number(a[6].innerHTML));
	positivos+=(Number(a[2].innerHTML)*Number(a[3].innerHTML)*Number(a[7].innerHTML));

	negativos=-(Number(a[2].innerHTML)*Number(a[4].innerHTML)*Number(a[6].innerHTML));
	negativos-=(Number(a[1].innerHTML)*Number(a[3].innerHTML)*Number(a[8].innerHTML));
	negativos-=(Number(a[0].innerHTML)*Number(a[5].innerHTML)*Number(a[7].innerHTML));

	respuesta=Number(positivos)+Number(negativos);
	sol=document.getElementById("determinanteTres");
	if(sol.value==respuesta){
		sol.style.backgroundColor="green";
		sol.style.color="white";
	}
	else{
		sol.style.backgroundColor="red";
		sol.style.color="white";
	}

}
function abrirImagenSarrus(){
	window.open('ejercicios/matrizSarrus.html','','width=900,height=500');
}


function ordenSarrus(){

	ORDENARRAY = [];
	var seleccionados=document.getElementById("listaSeleccionados");
	seleccionados.innerHTML="Posiciones Seleccionadas :";
	var correccion=document.getElementById("correccion");
	correccion.innerHTML="";

}
function clickSarrus(item,nombre){
	ORDENARRAY.push(Number(item));
	var seleccionados=document.getElementById("listaSeleccionados");
	var correccion=document.getElementById("correccion");
	if (ORDENARRAY.length<=18) {
		seleccionados.innerHTML+='posicion '+ nombre;
		seleccionados.innerHTML+='. ';
	}
	if (ORDENARRAY.length > 17){
		
		if (String(ORDENARRAY)==String(ORDENEVALIDOS)) {
			correccion.innerHTML="¡CORRECTO!";
		}
		else{
			correccion.innerHTML="Vuelve a probar";

		}
		//ORDENARRAY = [];

	}
	else{
		
	}
}
function cambiarCalculadora(operacion){
	suma=document.getElementById("sumaM");
	resta=document.getElementById("restaM");
	multiplicarMatrizNumero=document.getElementById("multiplicarNM");
	multiplicarMatriz=document.getElementById("multiplicarM");
	determinanteO2=document.getElementById("detO2");
	determinanteO3=document.getElementById("detO3");
	suma.style.display="none";
	resta.style.display="none";
	multiplicarMatrizNumero.style.display="none";
	multiplicarMatriz.style.display="none";
	determinanteO2.style.display="none";
	determinanteO3.style.display="none";
	document.getElementById("formCalc").reset();
	document.getElementById("1sel").selected="selected";
	switch(operacion){
		case "sumaMatrices":
							suma.style.display="inline";
							break;
		case "restaMatrices":
							resta.style.display="inline";
							break;
		case "multiplicarNMatriz":
							multiplicarMatrizNumero.style.display="inline";
							break;
		case "multiplicarMatrices":
							multiplicarMatriz.style.display="inline";
							break;
		case "determinante2":
							determinanteO2.style.display="inline";
							break;
		case "determinante3":
							determinanteO3.style.display="inline";
							break;
	}
}
function calcSuma(){
	a=document.getElementsByClassName("a");
	b=document.getElementsByClassName("b");
	c=document.getElementsByClassName("c");
	for (var i = 0; i < 9; i++) {
		c[i].innerHTML=Number(a[i].value)+Number(b[i].value);
	}
}
function calcResta(){
	a1=document.getElementsByClassName("a1");
	b1=document.getElementsByClassName("b1");
	c1=document.getElementsByClassName("c1");
	for (var i = 0; i < 9; i++) {
		c1[i].innerHTML=Number(a1[i].value)-Number(b1[i].value);
	}
}
function calcNMatriz(){
	a2=document.getElementsByClassName("a2");
	b2=document.getElementsByClassName("b2");
	c2=document.getElementsByClassName("c2");
	for (var i = 0; i < 9; i++) {
		c2[i].innerHTML=Number(a2[0].value)*Number(b2[i].value);
	}
}
function calcMatrices(){
	a3=document.getElementsByClassName("a3");
	b3=document.getElementsByClassName("b3");
	c3=document.getElementsByClassName("c3");
	sol=0;
	sol=Number(sol);
	j=0;
	k=0;
	cont=0;
	num=0;
	for (var l = 0; l <3; l++) {

		for (var i = 0; i <=11; i++) {	
			if(cont<3){
				sol=sol+(Number(a3[num].value)*Number(b3[j].value));
				j+=3;
				cont++;
				num++;
			}
			else{
				c3[k].innerHTML=sol;
				sol=0;
/*
				if (c1[k].value==sol) {
					c1[k].style.backgroundColor="green";
					c1[k].style.color="white";
					sol=0;
				}
				else{
					c1[k].style.backgroundColor="red";
					c1[k].style.color="white";
					sol=0;
				}*/
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
function calcDet2(){
	a4=document.getElementsByClassName("a4");
	c4=document.getElementsByClassName("c4");
	c4[0].innerHTML=(Number(a4[0].value)*Number(a4[3].value))-(Number(a4[1].value)*Number(a4[2].value));

}
function calcDet3(){
	a5=document.getElementsByClassName("a5");
	c5=document.getElementsByClassName("c5");
	positivos=(Number(a5[0].value)*Number(a5[4].value)*Number(a5[8].value));
	positivos+=(Number(a5[1].value)*Number(a5[5].value)*Number(a5[6].value));
	positivos+=(Number(a5[2].value)*Number(a5[3].value)*Number(a5[7].value));

	negativos=-(Number(a5[2].value)*Number(a5[4].value)*Number(a5[6].value));
	negativos-=(Number(a5[1].value)*Number(a5[3].value)*Number(a5[8].value));
	negativos-=(Number(a5[0].value)*Number(a5[5].value)*Number(a5[7].value));

	c5[0].innerHTML=Number(positivos)+Number(negativos);

}