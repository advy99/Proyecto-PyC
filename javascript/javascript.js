/*Variables globales para comprobar el orden en el que hacer Sarrus
Son globales ya que las modifican dos funciones, una que lo vacia cuando acabemos y otra que va añadiendo el orden
*/
var ORDENARRAY = [];

//Orden correcto para Sarrus
var ORDENEVALIDOS =[1,5,9,4,8,3,7,2,6,3,5,7,6,8,1,9,2,4];

//Funcion que comprueba el estado del menu, si esta visible (display:block;), al ser pulsado cambia a none, y viceversa
function pulsarMenu(menu){
	pulsado=document.getElementById(menu);
	if (pulsado.style.display=="block") {
		pulsado.style.display="none";
	}
	else{
		pulsado.style.display="block";
	}
}

//Abre una ventana emergente con el manual
function manual(){
	ventanaManual=window.open('manual.html','','width=1000,height=500,top=100000000,left=100000000');
}

//Abre una ventana emergente con el ejercicio sobre suma de matrices
function ejSumaMatrices(){
	ventanaSumaMatrices=window.open('ejercicios/ejSumaMatrices.html','','width=900,height=500')
}

//Funcion que rellena las matrices con numeros aleatorios y vacia automaticamente las casillas en los que se introducen los datos
function rellenarMatrices(){
	//cogemosla matriz a y la rellenamos de numeros aleatorios
	a=document.getElementsByClassName("a");
	b=document.getElementsByClassName("b");
	c=document.getElementsByClassName("c");
	//Rellena la matriz A
	for (var i = 0; i < a.length; i++) {
		a[i].innerHTML=Math.trunc((Math.random()*10));
	}
	//Rellena la matriz B
	for (var i = 0; i < b.length; i++) {
		b[i].innerHTML=Math.trunc((Math.random()*10));
	}
	//Vacia las casillas de resultados
	for (var i = 0; i < c.length; i++) {
		c[i].value="";
	}


}

//Comprueba la suma.
function comprobarSuma(){
	//Recoge las matrices A,B y la solucion, C
	a1=new Array(8);

	a1=document.getElementsByClassName("a");

	b1= new Array(8);

	b1=document.getElementsByClassName("b");

	c1= new Array(8);

	c1=document.getElementsByClassName("c");

	//Comprueba que la casilla N de C valga la casilla N de A + la casilla N de B
	for (var i = 0; i <= 5; i++) {
		if (c1[i].value==(Number(a1[i].innerHTML)+Number(b1[i].innerHTML))) {
			//Si es correcto le aplica un fondo verde con letra en blanco
			c1[i].style.backgroundColor="green";
			c1[i].style.color="white";
		}
		else{
			//Si hay un error aplica un fondo rojo con letra en blanco a la casilla erronea
			c1[i].style.backgroundColor="red";
			c1[i].style.color="white";
		}
	}
}

//Abre la ventana de ejercicion numero por matriz
function ejNumeroMatriz(){
	ventanaNumeroMatriz=window.open('ejercicios/ejNumeroMatriz.html','','width=900,height=500')
}

//Comprueba el ejercicion numero por matriz
function comprobarNumeroMatriz(){
	//Recoge las matrices y la solucion
	a1=new Array(8);

	a1=document.getElementsByClassName("a");

	b1= new Array(8);

	b1=document.getElementsByClassName("b");

	c1= new Array(8);

	c1=document.getElementsByClassName("c");


	//Comprueba, como con la suma pero con la multiplicacion
	for (var i = 0; i <= 5; i++) {
		//En este caso solo nos interesa a1[0], ya que es un solo numero por la matriz
		if (c1[i].value==(Number(a1[0].innerHTML)*Number(b1[i].innerHTML))) {
			//Aplica estilos si acierta
			c1[i].style.backgroundColor="green";
			c1[i].style.color="white";
		}
		else{
			//Aplica estilos si falla
			c1[i].style.backgroundColor="red";
			c1[i].style.color="white";
		}
	}

}
//Abre ventana de multiplicacion de matrices
function ejMatrices(){
	ventanaMatriz=window.open('ejercicios/ejMatrices.html','','width=900,height=500');
}

function multiplicarMatrices(a1,b1){
	sol=0;
	sol=Number(sol);
	//Otra variable que controlara el numero de columna al multiplicar
	j=0;
	//Otra variable que controlara que elemento de la matriz se esta , y se ha corregido
	k=0;
	//Otra variable como contador para realizar la comprobacion
	cont=0;
	//Otra variable que controlara el numero de fila al multiplicar
	num=0;

	//Creamos un vector con la solucion, servira para devolver todas las soluciones de golpe
	vectorSolucion = [];
	//for para las tres filas
	for (var l = 0; l < 3; l++) {
		//Cada fila tendra que realizar los calculos 12 veces
		for (var i = 0; i <=11; i++) {
			//cuando el contador es menor que tres multiplica los elementos en orden
			if(cont<3){
				sol=sol+(Number(a1[num])*Number(b1[j]));
				j+=3;
				cont++;
				num++;
			}
			//cuando acaba con un elemento lo añade a la comprobacion
			else{
				vectorSolucion.push(sol);
				sol=0;

				if(j>=11){
					j-=11;
				}
				else{
					j-=8;
				}
				//Resetea el contador y num para continuar con la proxima fila
				cont=0;
				num-=3;
			}

		}
		num+=3;
	}
	//devuelve el vector solucion, para comprobar
	return vectorSolucion;

}
//Comprueba la multiplicacion de matrices
function comprobarMatrices(){
	//Recoge las matrices y la repuesta
	//Vector con todo el campo
	a1=document.getElementsByClassName("a");
	//Vector que contendra los numeros
	a = [];
	for (var i = 0; i < a1.length; i++) {
		a.push(a1[i].innerHTML);
	}
	b1=document.getElementsByClassName("b");
	b = [];
	for (var i = 0; i < b1.length; i++) {
		b.push(b1[i].innerHTML);
	}
	c1=document.getElementsByClassName("c");
	//Creamos un vector en la que se almacenara la solucion
	soluciones = [];
	soluciones = multiplicarMatrices(a,b);
	for (var k = c1.length - 1; k >= 0; k--) {
		if (c1[k].value==soluciones[k]) {
			c1[k].style.backgroundColor="green";
			c1[k].style.color="white";
			sol=0;
		}
		else{
			c1[k].style.backgroundColor="red";
			c1[k].style.color="white";
			sol=0;
		}
	}

}
function rellenarDeterminante2(){
	a=document.getElementsByClassName("a");

	//Rellena la matriz A
	for (var i = 0; i < a.length; i++) {
		a[i].innerHTML=Math.trunc((Math.random()*10));
	}

}
//Abre la ventana con el ejercicio determinante orden 2
function determinanteDos(){
	window.open('ejercicios/ejDeterminante2.html','','width=900,height=500');
}
//comprueba el determinante de orden 2
function comprobarDeterminanteDos(){
	a=new Array(8);
	a=document.getElementsByClassName("a");
	//Realiza los calculos expuestos en la teoria
	respuesta=(Number(a[0].innerHTML)*Number(a[4].innerHTML))-(Number(a[1].innerHTML)*Number(a[3].innerHTML));
	sol=document.getElementById("determinanteDos");
	if(sol.value==respuesta){
		//Aplica estilos si es correcto
		sol.style.backgroundColor="green";
		sol.style.color="white";
	}
	else{
		//Aplica estilos si es falso
		sol.style.backgroundColor="red";
		sol.style.color="white";
	}

}
//Abre ventana determinante orden 3
function determinanteTres(){
	window.open('ejercicios/ejDeterminante3.html','','width=900,height=500');
}
//Comprueba determinante orden 3
function comprobarDeterminanteTres(){
	a=document.getElementsByClassName("a");
	b= [];
	for (var i = 0; i < a.length; i++) {
		b[i]=a[i].innerHTML;
	}
	respuesta=calcDet3(b);
	sol=document.getElementById("determinanteTres");
	if(sol.value==respuesta){
		//Aplica estilos si es correcto
		sol.style.backgroundColor="green";
		sol.style.color="white";
	}
	else{
		//Aplica estilos si es falso
		sol.style.backgroundColor="red";
		sol.style.color="white";
	}

}

//Abre ejercicio Sarrus
function abrirImagenSarrus(){
	window.open('ejercicios/matrizSarrus.html','','width=900,height=500');
}

//Vacia el orden seleccionado de Sarrus e inicializa la correccion
function ordenSarrus(){

	ORDENARRAY = [];
	var seleccionados=document.getElementById("listaSeleccionados");
	seleccionados.innerHTML="Posiciones Seleccionadas :";
	var correccion=document.getElementById("correccion");
	correccion.innerHTML="";

}

//Ejecutado al hacer click en algun elemento del mapa de imagen
function clickSarrus(item,nombre){
	//Añade el id al orden
	ORDENARRAY.push(Number(item));
	var seleccionados=document.getElementById("listaSeleccionados");
	var correccion=document.getElementById("correccion");
	//Si no ha pulsado como minimo 18 veces añade el ultimo pulsado
	if (ORDENARRAY.length<=18) {
		seleccionados.innerHTML+='posicion '+ nombre;
		seleccionados.innerHTML+='. ';
	}
	//Cuando supera los 17 click comprueba el orden. ya que sarrus se hace en 18 click
	if (ORDENARRAY.length > 17){

		if (String(ORDENARRAY)==String(ORDENEVALIDOS)) {
			correccion.innerHTML="¡CORRECTO!";
		}
		else{
			correccion.innerHTML="Vuelve a probar";

		}

	}
}

//abre la pagina de ejercicio de sistemas
function abrirEjSistemas(){
	window.open('ejercicios/ejSistemasCramer.html','','width=900,height=500');
}
function comprobarSistema(){
	a=document.getElementsByClassName("a");
	b=document.getElementsByClassName("b");
	vDetA=[];
	for (var i = 0; i < a.length; i++) {
		vDetA[i]=a[i].innerHTML;
	}
	//Calculamos el determinante del sistema
	detA=calcDet3(vDetA);
	//Calculamos el determinante del sistema, cambiando los elementos de la primera columna por los de clase B
	vDet1=[];
	for (var i = 0; i < a.length; i++) {
		switch (i) {
			case 0:vDet1[i]=b[0].innerHTML;
				break;
			case 3:vDet1[i]=b[1].innerHTML;
				break;

			case 6:vDet1[i]=b[2].innerHTML;
				break;
			default:vDet1[i]=a[i].innerHTML;

		}
	}
	det1=calcDet3(vDet1);

	vDet2=[];
	for (var i = 0; i < a.length; i++) {
		switch (i) {
			case 1:vDet2[i]=b[0].innerHTML;
				break;
			case 4:vDet2[i]=b[1].innerHTML;
				break;

			case 7:vDet2[i]=b[2].innerHTML;
				break;
			default:vDet2[i]=a[i].innerHTML;

		}
	}
	det2=calcDet3(vDet2);

	//Calculamos el determinante del sistema, cambiando los elementos de la tercera columna por los de clase B

	vDet3=[];
	for (var i = 0; i < a.length; i++) {
		switch (i) {
			case 2:vDet3[i]=b[0].innerHTML;
				break;
			case 5:vDet3[i]=b[1].innerHTML;
				break;

			case 8:vDet3[i]=b[2].innerHTML;
				break;
			default:vDet3[i]=a[i].innerHTML;

		}
	}
	det3=calcDet3(vDet3);

	x1=document.getElementById("c1");
	x2=document.getElementById("c2");
	x3=document.getElementById("c3");

	if (detA==0) {
		alert('Para resolver el sistema de ecuaciones el determinante de A debe ser distinto de 0');
	}
	else{
		//comprobamos si son correctos con la regla de cramer
		if(c1.value==Math.round((det1/detA)*100)/100){//Multiplicamos por cien, redondeamos y dividimos por cien para aproximarlo a los decimales
			//Aplica estilos si es correcto
			c1.style.backgroundColor="green";
			c1.style.color="white";
		}
		else{
			//Aplica estilos si es falso
			c1.style.backgroundColor="red";
			c1.style.color="white";
		}
		if(c2.value==Math.round((det2/detA)*100)/100){
			//Aplica estilos si es correcto
			c2.style.backgroundColor="green";
			c2.style.color="white";
		}
		else{
			//Aplica estilos si es falso
			c2.style.backgroundColor="red";
			c2.style.color="white";
		}

		if(c3.value==Math.round((det3/detA)*100)/100){
			//Aplica estilos si es correcto
			c3.style.backgroundColor="green";
			c3.style.color="white";
		}
		else{
			//Aplica estilos si es falso
			c3.style.backgroundColor="red";
			c3.style.color="white";
		}
	}


}



//Inicializa la calculadora
//Pone todas las operaciones ocultas y vacia las casillas con la funcion reset()
function iniciarCalculadora(){
	document.getElementById("formCalc").reset();
	document.getElementById("1sel").selected="selected";
	suma=document.getElementById("sumaM");
	resta=document.getElementById("restaM");
	multiplicarMatrizNumero=document.getElementById("multiplicarNM");
	multiplicarMatriz=document.getElementById("multiplicarM");
	determinanteO2=document.getElementById("detO2");
	determinanteO3=document.getElementById("detO3");
	sistemaCramer=document.getElementById("sistema");
	suma.style.display="none";
	resta.style.display="none";
	multiplicarMatrizNumero.style.display="none";
	multiplicarMatriz.style.display="none";
	determinanteO2.style.display="none";
	determinanteO3.style.display="none";
	sistemaCramer.style.display="none";
}

//Ejecuta al cambiar de operacion en a calculadora
function cambiarCalculadora(operacion){
	suma=document.getElementById("sumaM");
	resta=document.getElementById("restaM");
	multiplicarMatrizNumero=document.getElementById("multiplicarNM");
	multiplicarMatriz=document.getElementById("multiplicarM");
	determinanteO2=document.getElementById("detO2");
	determinanteO3=document.getElementById("detO3");
	sistemaCramer=document.getElementById("sistema");

	suma.style.display="none";
	resta.style.display="none";
	multiplicarMatrizNumero.style.display="none";
	multiplicarMatriz.style.display="none";
	determinanteO2.style.display="none";
	determinanteO3.style.display="none";
	sistemaCramer.style.display="none";

	//Comprobamos la operacion seleccionada en la calculadora con un switch y la mostramos con display:inline
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
		case "sistema":
							sistemaCramer.style.display="inline";
							break;
	}
}
//Calculamos la suma y la mostramos con el for
function calcSuma(){
	a=document.getElementsByClassName("a");
	b=document.getElementsByClassName("b");
	c=document.getElementsByClassName("c");
	for (var i = 0; i < 9; i++) {
		c[i].innerHTML=Number(a[i].value)+Number(b[i].value);
	}
}
//Calculamos la resta y la mostramos con el for
function calcResta(){
	a1=document.getElementsByClassName("a1");
	b1=document.getElementsByClassName("b1");
	c1=document.getElementsByClassName("c1");
	for (var i = 0; i < 9; i++) {
		c1[i].innerHTML=Number(a1[i].value)-Number(b1[i].value);
	}
}
//Calculamos la multiplicacion y la mostramos con el for
function calcNMatriz(){
	a2=document.getElementsByClassName("a2");
	b2=document.getElementsByClassName("b2");
	c2=document.getElementsByClassName("c2");
	for (var i = 0; i < 9; i++) {
		//Como es solo para un numero solo usamos a2[0]
		c2[i].innerHTML=Number(a2[0].value)*Number(b2[i].value);
	}
}
//calculamos la multiplicacion de matrices
function calcMatrices(){
	a3=document.getElementsByClassName("a3");
	a = [];
	for (var i = 0; i < a3.length; i++) {
		a.push(a3[i].value);
	}
	b3=document.getElementsByClassName("b3");
	b = [];
	for (var i = 0; i < b3.length; i++) {
		b.push(b3[i].value);
	}
	c3=document.getElementsByClassName("c3");
	soluciones = [];
	soluciones = multiplicarMatrices(a,b);
	for (var i = soluciones.length - 1; i >= 0; i--) {
		c3[i].innerHTML=soluciones[i];
	}
}

//Calculamos el determinante de orden 2, como el ejercicio
function calcDet2(){
	a4=document.getElementsByClassName("a4");
	c4=document.getElementsByClassName("c4");
	c4[0].innerHTML=(Number(a4[0].value)*Number(a4[3].value))-(Number(a4[1].value)*Number(a4[2].value));

}

//Calculamos el determinante de orden 3, como el ejercicio

function calcDet3(a){

	positivos=(Number(a[0])*Number(a[4])*Number(a[8]));
	positivos+=(Number(a[1])*Number(a[5])*Number(a[6]));
	positivos+=(Number(a[2])*Number(a[3])*Number(a[7]));

	negativos=-(Number(a[2])*Number(a[4])*Number(a[6]));
	negativos-=(Number(a[1])*Number(a[3])*Number(a[8]));
	negativos-=(Number(a[0])*Number(a[5])*Number(a[7]));
	solucion=Number(positivos)+Number(negativos);
	return solucion;

}
function mostrarDeterminante3(){
	a5=document.getElementsByClassName("a5");
	c5=document.getElementsByClassName("c5");
	c5[0].innerHTML=calcDet3(a5);
}
function calcSistema(){
	a=document.getElementsByClassName("a6");
	b=document.getElementsByClassName("b6");


	//Calculamos el determinante del sistema
	positivos=(Number(a[0].value)*Number(a[4].value)*Number(a[8].value));
	positivos+=(Number(a[1].value)*Number(a[5].value)*Number(a[6].value));
	positivos+=(Number(a[2].value)*Number(a[3].value)*Number(a[7].value));

	negativos=-(Number(a[2].value)*Number(a[4].value)*Number(a[6].value));
	negativos-=(Number(a[1].value)*Number(a[3].value)*Number(a[8].value));
	negativos-=(Number(a[0].value)*Number(a[5].value)*Number(a[7].value));
	detA=Number(positivos)+Number(negativos);
	positivos=0;
	negativos=0;

	//Calculamos el determinante del sistema, cambiando los elementos de la primera columna por los de clase B
	positivos=(Number(b[0].value)*Number(a[4].value)*Number(a[8].value));
	positivos+=(Number(a[1].value)*Number(a[5].value)*Number(b[2].value));
	positivos+=(Number(a[2].value)*Number(b[1].value)*Number(a[7].value));

	negativos=-(Number(a[2].value)*Number(a[4].value)*Number(b[2].value));
	negativos-=(Number(a[1].value)*Number(b[1].value)*Number(a[8].value));
	negativos-=(Number(b[0].value)*Number(a[5].value)*Number(a[7].value));

	det1=Number(positivos)+Number(negativos);

	//Calculamos el determinante del sistema, cambiando los elementos de la segunda columna por los de clase B

	positivos=(Number(a[0].value)*Number(b[1].value)*Number(a[8].value));
	positivos+=(Number(b[0].value)*Number(a[5].value)*Number(a[6].value));
	positivos+=(Number(a[2].value)*Number(a[3].value)*Number(b[2].value));

	negativos=-(Number(a[2].value)*Number(b[1].value)*Number(a[6].value));
	negativos-=(Number(b[0].value)*Number(a[3].value)*Number(a[8].value));
	negativos-=(Number(a[0].value)*Number(a[5].value)*Number(b[2].value));
	det2=Number(positivos)+Number(negativos);

	//Calculamos el determinante del sistema, cambiando los elementos de la tercera columna por los de clase B

	positivos=(Number(a[0].value)*Number(a[4].value)*Number(b[2].value));
	positivos+=(Number(a[1].value)*Number(b[1].value)*Number(a[6].value));
	positivos+=(Number(b[0].value)*Number(a[3].value)*Number(a[7].value));

	negativos=-(Number(b[0].value)*Number(a[4].value)*Number(a[6].value));
	negativos-=(Number(a[1].value)*Number(a[3].value)*Number(b[2].value));
	negativos-=(Number(a[0].value)*Number(b[1].value)*Number(a[7].value));
	det3=Number(positivos)+Number(negativos);

	if (detA==0) {
		if (det1!=0 && det2!=0 && det3!=0) {

		}
		else {
			alert('Ha introducido un sistema incompatible, no tiene solución');
		}

	}
	else{
		x1=document.getElementById("c1");
		x2=document.getElementById("c2");
		x3=document.getElementById("c3");
		x1.innerHTML=Math.round((det1/detA)*100)/100;
		x2.innerHTML=Math.round((det2/detA)*100)/100;
		x3.innerHTML=Math.round((det3/detA)*100)/100;
	}

}
