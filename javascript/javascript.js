/*Variables globales para comprobar el orden en el que hacer Sarrus
Son globales ya que las modifican dos funciones, una que lo vacia cuando acabemos y otra que va añadiendo el orden
*/
var ORDENARRAY = [];

//Orden correcto para Sarrus
var ORDENEVALIDOS = [1, 5, 9, 4, 8, 3, 7, 2, 6, 3, 5, 7, 6, 8, 1, 9, 2, 4];

function casablanca()
{  
    smallBubbles[current%7].classList.add("bounce-in-fwd-one");
    if(current != 0)
        smallBubbles[(current-1)%7].classList.remove("bounce-in-fwd-one");
    
    current++;
}


$(function () {
	$("#dialogoOpinion").hide();
	$(".menu_izq").accordion({
		collapsible: true,
		active: false
	});
	$("#divAnimacionCramer").hide();


	$(".menu_izq").on("click", function () {
		var menuActivo = $(".menu_izq").accordion("option", "active");
		switch (menuActivo) {
			case 0:
				$("#flecha2").addClass("deshacerRotar");
				$("#flecha1").removeClass("deshacerRotar");
				$("#flecha1").addClass("rotar");
				break;
			case 1:
				$("#flecha1").addClass("deshacerRotar");
				$("#flecha2").removeClass("deshacerRotar");
				$("#flecha2").addClass("rotar");
				break;
			default:
				$("#flecha2").removeClass("rotar");
				$("#flecha2").removeClass("rotar");
				$("#flecha1").addClass("deshacerRotar");
				$("#flecha2").addClass("deshacerRotar");

		}
	});

});

//Abre una ventana emergente con el manual
function manual() {
	ventanaManual = window.open('manual.html', '', 'width=1000,height=500,top=100000000,left=100000000');
}

//Abre una ventana emergente con el ejercicio sobre suma de matrices
function ejSumaMatrices() {
	ventanaSumaMatrices = window.open('ejercicios/ejSumaMatrices.html', '', 'width=900,height=500')
}

//Funcion que rellena las matrices con numeros aleatorios y vacia automaticamente las casillas en los que se introducen los datos
function rellenarMatrices() {
	//cogemosla matriz a y la rellenamos de numeros aleatorios
	a = document.getElementsByClassName("a");
	b = document.getElementsByClassName("b");
	c = document.getElementsByClassName("c");
	//Rellena la matriz A
	for (var i = 0; i < a.length; i++) {
		a[i].innerHTML = Math.trunc((Math.random() * 10));
	}
	//Rellena la matriz B
	for (var i = 0; i < b.length; i++) {
		b[i].innerHTML = Math.trunc((Math.random() * 10));
	}
	//Vacia las casillas de resultados
	for (var i = 0; i < c.length; i++) {
		c[i].value = "";
	}


}

//Comprueba la suma
function comprobarSuma() {
	//Recoge las matrices A,B y la solucion, C
	a1 = new Array(8);

	a1 = document.getElementsByClassName("a");

	b1 = new Array(8);

	b1 = document.getElementsByClassName("b");

	c1 = new Array(8);

	c1 = document.getElementsByClassName("c");

	//Comprueba que la casilla N de C valga la casilla N de A + la casilla N de B
	for (var i = 0; i <= 5; i++) {
		if (c1[i].value == (Number(a1[i].innerHTML) + Number(b1[i].innerHTML))) {
			//Si es correcto le aplica un fondo verde con letra en blanco
			c1[i].style.backgroundColor = "green";
			c1[i].style.color = "white";
		} else {
			//Si hay un error aplica un fondo rojo con letra en blanco a la casilla erronea
			c1[i].style.backgroundColor = "red";
			c1[i].style.color = "white";
		}
	}
}

//Abre la ventana de ejercicion numero por matriz
function ejNumeroMatriz() {
	ventanaNumeroMatriz = window.open('ejercicios/ejNumeroMatriz.html', '', 'width=900,height=500')
}

//Suma dos matrices. Usada en la calculadora
function sumarMatrices(a, b) {
	var solucion = [];
	for (var i = 0; i < a.length; i++) {
		solucion[i] = Number(a[i]) + Number(b[i]);
	}
	return solucion;
}

//Resta dos matrices. Usada en la calculadora
function restarMatrices(a, b) {
	var solucion = [];
	for (var i = 0; i < a.length; i++) {
		solucion[i] = Number(a[i]) - Number(b[i]);
	}
	return solucion;
}
//Comprueba el ejercicion numero por matriz
function comprobarNumeroMatriz() {
	//Recoge las matrices y la solucion
	a1 = new Array(8);

	a1 = document.getElementsByClassName("a");

	b1 = new Array(8);

	b1 = document.getElementsByClassName("b");

	c1 = new Array(8);

	c1 = document.getElementsByClassName("c");


	//Comprueba, como con la suma pero con la multiplicacion
	for (var i = 0; i <= 5; i++) {
		//En este caso solo nos interesa a1[0], ya que es un solo numero por la matriz
		if (c1[i].value == (Number(a1[0].innerHTML) * Number(b1[i].innerHTML))) {
			//Aplica estilos si acierta
			c1[i].style.backgroundColor = "green";
			c1[i].style.color = "white";
		} else {
			//Aplica estilos si falla
			c1[i].style.backgroundColor = "red";
			c1[i].style.color = "white";
		}
	}

}
//Abre ventana de multiplicacion de matrices
function ejMatrices() {
	ventanaMatriz = window.open('ejercicios/ejMatrices.html', '', 'width=900,height=500');
}

//Funcion que multiplica dos matrices y devuelve la matriz solucion, usada en la calculadora y en el ejercicio
function multiplicarMatrices(a1, b1) {
	sol = 0;
	sol = Number(sol);
	//Otra variable que controlara el numero de columna al multiplicar
	j = 0;
	//Otra variable que controlara que elemento de la matriz se esta , y se ha corregido
	k = 0;
	//Otra variable como contador para realizar la comprobacion
	cont = 0;
	//Otra variable que controlara el numero de fila al multiplicar
	num = 0;

	//Creamos un vector con la solucion, servira para devolver todas las soluciones de golpe
	vectorSolucion = [];
	//for para las tres filas
	for (var l = 0; l < 3; l++) {
		//Cada fila tendra que realizar los calculos 12 veces
		for (var i = 0; i <= 11; i++) {
			//cuando el contador es menor que tres multiplica los elementos en orden
			if (cont < 3) {
				sol = sol + (Number(a1[num]) * Number(b1[j]));
				j += 3;
				cont++;
				num++;
			}
			//cuando acaba con un elemento lo añade a la comprobacion
			else {
				vectorSolucion.push(sol);
				sol = 0;

				if (j >= 11) {
					j -= 11;
				} else {
					j -= 8;
				}
				//Resetea el contador y num para continuar con la proxima fila
				cont = 0;
				num -= 3;
			}

		}
		num += 3;
	}
	//devuelve el vector solucion, para comprobar
	return vectorSolucion;

}
//Comprueba la multiplicacion de matrices
function comprobarMatrices() {
	//Recoge las matrices y la repuesta
	//Vector con todo el campo
	a1 = document.getElementsByClassName("a");
	//Vector que contendra los numeros
	a = [];
	for (var i = 0; i < a1.length; i++) {
		a.push(a1[i].innerHTML);
	}
	b1 = document.getElementsByClassName("b");
	b = [];
	for (var i = 0; i < b1.length; i++) {
		b.push(b1[i].innerHTML);
	}
	c1 = document.getElementsByClassName("c");
	//Creamos un vector en la que se almacenara la solucion
	soluciones = [];
	soluciones = multiplicarMatrices(a, b);
	for (var k = c1.length - 1; k >= 0; k--) {
		if (c1[k].value == soluciones[k]) {
			c1[k].style.backgroundColor = "green";
			c1[k].style.color = "white";
			sol = 0;
		} else {
			c1[k].style.backgroundColor = "red";
			c1[k].style.color = "white";
			sol = 0;
		}
	}

}

function rellenarDeterminante2() {
	a = document.getElementsByClassName("a");

	//Rellena la matriz A
	for (var i = 0; i < a.length; i++) {
		a[i].innerHTML = Math.trunc((Math.random() * 10));
	}

}
//Abre la ventana con el ejercicio determinante orden 2
function determinanteDos() {
	window.open('ejercicios/ejDeterminante2.html', '', 'width=900,height=500');
}
//comprueba el determinante de orden 2
function comprobarDeterminanteDos() {
	a = new Array(8);
	a = document.getElementsByClassName("a");
	//Realiza los calculos expuestos en la teoria
	respuesta = (Number(a[0].innerHTML) * Number(a[4].innerHTML)) - (Number(a[1].innerHTML) * Number(a[3].innerHTML));
	sol = document.getElementById("determinanteDos");
	if (sol.value == respuesta) {
		//Aplica estilos si es correcto
		sol.style.backgroundColor = "green";
		sol.style.color = "white";
	} else {
		//Aplica estilos si es falso
		sol.style.backgroundColor = "red";
		sol.style.color = "white";
	}

}
//Abre ventana determinante orden 3
function determinanteTres() {
	window.open('ejercicios/ejDeterminante3.html', '', 'width=900,height=500');
}
//Comprueba determinante orden 3
function comprobarDeterminanteTres() {
	a = document.getElementsByClassName("a");
	b = [];
	for (var i = 0; i < a.length; i++) {
		b[i] = a[i].innerHTML;
	}
	respuesta = calcDet3(b);
	sol = document.getElementById("determinanteTres");
	if (sol.value == respuesta) {
		//Aplica estilos si es correcto
		sol.style.backgroundColor = "green";
		sol.style.color = "white";
	} else {
		//Aplica estilos si es falso
		sol.style.backgroundColor = "red";
		sol.style.color = "white";
	}
}

//Abre ejercicio Sarrus
function abrirImagenSarrus() {
	window.open('ejercicios/matrizSarrus.html', '', 'width=900,height=500');
}

function mostrarSolSarrus() {
	direccion = 1;
	posInicialLeft = 430;
	posInicialTop = 183;
	posLeft = posInicialLeft;
	posTop = posInicialTop;
	$("#rectangulo").css({
		'margin-left': posLeft + 'px',
		'margin-top': posTop + 'px'
	});
	$("#rectangulo").fadeToggle(1500);
	cont = 0;
	numeroFilas = 0;
	intervalo = setInterval(function () {
		if (cont != 2)
			$("#imgX").fadeToggle(1500).fadeToggle(1500);
		posLeft += 52 * direccion;
		posTop += 25;

		if ((numeroFilas == 1 && cont == 1) || (numeroFilas == 2 && cont == 0) || (numeroFilas == 4 && cont == 1) || (numeroFilas == 5 && cont == 0))
			posTop = posInicialTop;
		mostrarSolSarrusR();
		if (cont == 2) {
			numeroFilas++;
			switch (numeroFilas) {
				case 1:
					posLeft = posInicialLeft;
					posTop = posInicialTop + 25;
					$("#imgSuma").fadeToggle(1500).fadeToggle(1500);
					cont = -1;

					break;
				case 2:
					posLeft = posInicialLeft;
					posTop = posInicialTop + 50;
					$("#imgSuma").fadeToggle(1500).fadeToggle(1500);
					cont = -1;
					break;
				case 3:
					posLeft = posInicialLeft + 104;
					posTop = posInicialTop;
					$("#imgResta").fadeToggle(1500).fadeToggle(1500);
					direccion = -1;
					cont = -1;
					break;
				case 4:
					posLeft = posInicialLeft + 104;
					posTop = posInicialTop + 25;
					$("#imgResta").fadeToggle(1500).fadeToggle(1500);
					cont = -1;
					break;
				case 5:
					posLeft = posInicialLeft + 104;
					posTop = posInicialTop + 50;
					$("#imgResta").fadeToggle(1500).fadeToggle(1500);
					cont = -1;
					break;
				case 6:
					clearInterval(intervalo);
					$("#rectangulo").fadeToggle(1500);
					break;

			}

		}
		cont++;
	}, 4000);
}

function mostrarSolSarrusR() {
	window.setTimeout(function () {
		$("#rectangulo").animate({
			'margin-left': posLeft + 'px',
			'margin-top': posTop + 'px'
		}, 2000);
	}, 2000);
}

//Vacia el orden seleccionado de Sarrus e inicializa la correccion
function ordenSarrus() {
	$("#rectangulo").css({
		'position': 'absolute'
	});
	$("#imgX").css({
		'position': 'absolute',
		'margin-left': '450',
		'margin-top': '160px'
	});
	$("#imgSuma").css({
		'position': 'absolute',
		'margin-left': '450',
		'margin-top': '160px'
	});
	$("#imgResta").css({
		'position': 'absolute',
		'margin-left': '450',
		'margin-top': '160px'
	});
	$("#rectangulo").hide();
	$("#imgSuma").hide();
	$("#imgResta").hide();
	$("#imgX").hide();

	ORDENARRAY = [];
	var seleccionados = document.getElementById("listaSeleccionados");
	seleccionados.innerHTML = "Posiciones Seleccionadas :";
	var correccion = document.getElementById("correccion");
	correccion.innerHTML = "";

}

//Ejecutado al hacer click en algun elemento del mapa de imagen
function clickSarrus(item, nombre) {
	//Añade el id al orden
	ORDENARRAY.push(Number(item));
	var seleccionados = document.getElementById("listaSeleccionados");
	var correccion = document.getElementById("correccion");
	//Si no ha pulsado como minimo 18 veces añade el ultimo pulsado
	if (ORDENARRAY.length <= 18) {
		seleccionados.innerHTML += 'posicion ' + nombre;
		seleccionados.innerHTML += '. ';
	}
	//Cuando supera los 17 click comprueba el orden. ya que sarrus se hace en 18 click
	if (ORDENARRAY.length > 17) {

		if (String(ORDENARRAY) == String(ORDENEVALIDOS)) {
			correccion.innerHTML = "¡CORRECTO!";
		} else {
			correccion.innerHTML = "Vuelve a probar";

		}

	}
}

//abre la pagina de ejercicio de sistemas
function abrirEjSistemas() {
	window.open('ejercicios/ejSistemasCramer.html', '', 'width=900,height=500');
}

//Coge las matrices del ejercicio y comprueba la solucion usando Cramer, es decir, con los distintos determinantes
//y la comprueba con la funcion calcSistema
function comprobarSistema() {
	a = document.getElementsByClassName("a");
	b = document.getElementsByClassName("b");
	a1 = [];
	for (var i = 0; i < a.length; i++) {
		a1.push(a[i].innerHTML);
	}
	b1 = [];
	for (var i = 0; i < b.length; i++) {
		b1.push(b[i].innerHTML);
	}
	detA = calcDet3(a1);
	soluciones = calcSistema(a1, b1);

	x1 = document.getElementById("c1");
	x2 = document.getElementById("c2");
	x3 = document.getElementById("c3");
	if (detA == 0) {
		alert('Para resolver el sistema de ecuaciones el determinante de A debe ser distinto de 0');
	} else {
		//comprobamos si son correctos con la regla de cramer
		if (x1.value == soluciones[0]) { //Multiplicamos por cien, redondeamos y dividimos por cien para aproximarlo a los decimales
			//Aplica estilos si es correcto
			x1.style.backgroundColor = "green";
			x1.style.color = "white";
		} else {
			//Aplica estilos si es falso
			x1.style.backgroundColor = "red";
			x1.style.color = "white";
		}
		if (x2.value == soluciones[1]) {
			//Aplica estilos si es correcto
			x2.style.backgroundColor = "green";
			x2.style.color = "white";
		} else {
			//Aplica estilos si es falso
			x2.style.backgroundColor = "red";
			x2.style.color = "white";
		}

		if (x3.value == soluciones[2]) {
			//Aplica estilos si es correcto
			x3.style.backgroundColor = "green";
			x3.style.color = "white";
		} else {
			//Aplica estilos si es falso
			x3.style.backgroundColor = "red";
			x3.style.color = "white";
		}
	}


}

//Multipllica la matriz b por un numero a, usada en la calculadora
function calcNMatriz(a, b) {
	var solucion = [];
	for (var i = 0; i < b.length; i++) {
		solucion[i] = Number(a[0]) * Number(b[i]);
	}
	return solucion;
}
//calculamos la multiplicacion de matrices
function calcMatrices() {
	a3 = document.getElementsByClassName("a3");
	a = [];
	for (var i = 0; i < a3.length; i++) {
		a.push(a3[i].value);
	}
	b3 = document.getElementsByClassName("b3");
	b = [];
	for (var i = 0; i < b3.length; i++) {
		b.push(b3[i].value);
	}
	c3 = document.getElementsByClassName("c3");
	soluciones = [];
	soluciones = multiplicarMatrices(a, b);
	for (var i = soluciones.length - 1; i >= 0; i--) {
		c3[i].innerHTML = soluciones[i];
	}
}

//Calculamos el determinante de orden 2, como el ejercicio
function calcDet2(a) {
	solucion = (Number(a[0]) * Number(a[3])) - (Number(a[1]) * Number(a[2]));
	return solucion;
}

//Calculamos el determinante de orden 3, como el ejercicio

function calcDet3(a) {

	positivos = (Number(a[0]) * Number(a[4]) * Number(a[8]));
	positivos += (Number(a[1]) * Number(a[5]) * Number(a[6]));
	positivos += (Number(a[2]) * Number(a[3]) * Number(a[7]));

	negativos = -(Number(a[2]) * Number(a[4]) * Number(a[6]));
	negativos -= (Number(a[1]) * Number(a[3]) * Number(a[8]));
	negativos -= (Number(a[0]) * Number(a[5]) * Number(a[7]));
	solucion = Number(positivos) + Number(negativos);
	return solucion;

}


function mostrarDeterminante3() {
	a5 = document.getElementsByClassName("a5");
	c5 = document.getElementsByClassName("c5");
	var b = [];
	for (var i = a5.length - 1; i >= 0; i--) {
		b[i] = a5[i].value;
	}
	c5[0].innerHTML = calcDet3(b);
}

function mostrarSistemaCramer() {
	a = document.getElementsByClassName("a6");
	b = document.getElementsByClassName("b6");
	a1 = [];
	for (var i = 0; i < a.length; i++) {
		a1.push(a[i].value);
	}
	b1 = [];
	for (var i = 0; i < b.length; i++) {
		b1.push(b[i].value);
	}
	soluciones = calcSistema(a1, b1);
	//Calculamos el determinante del sistema
	if (soluciones[0] == 0) {
		if (soluciones[1] != 0 && soluciones[2] != 0 && soluciones[3] != 0) {

		} else {
			alert('Ha introducido un sistema determinado incompatible, intente resolverlo por el metodo de Gauss');
		}

	} else {
		x1 = document.getElementById("c1");
		x2 = document.getElementById("c2");
		x3 = document.getElementById("c3");
		x1.innerHTML = soluciones[1] / soluciones[0];
		x2.innerHTML = soluciones[2] / soluciones[0];
		x3.innerHTML = soluciones[3] / soluciones[0];
	}

}

function calcSistema(a, b) {
	vDetA = [];
	for (var i = 0; i < a.length; i++) {
		vDetA[i] = a[i];
	}
	//Calculamos el determinante del sistema
	detA = calcDet3(vDetA);
	if (detA == 0)
		//Calculamos el determinante del sistema, cambiando los elementos de la primera columna por los de clase B
		vDet1 = [];
	for (var i = 0; i < a.length; i++) {
		switch (i) {
			case 0:
				vDet1[i] = b[0];
				break;
			case 3:
				vDet1[i] = b[1];
				break;

			case 6:
				vDet1[i] = b[2];
				break;
			default:
				vDet1[i] = a[i];

		}
	}

	det1 = calcDet3(vDet1);

	vDet2 = [];
	for (var i = 0; i < a.length; i++) {
		switch (i) {
			case 1:
				vDet2[i] = b[0];
				break;
			case 4:
				vDet2[i] = b[1];
				break;

			case 7:
				vDet2[i] = b[2];
				break;
			default:
				vDet2[i] = a[i];

		}
	}

	det2 = calcDet3(vDet2);

	//Calculamos el determinante del sistema, cambiando los elementos de la tercera columna por los de clase B

	vDet3 = [];
	for (var i = 0; i < a.length; i++) {
		switch (i) {
			case 2:
				vDet3[i] = b[0];
				break;
			case 5:
				vDet3[i] = b[1];
				break;

			case 8:
				vDet3[i] = b[2];
				break;
			default:
				vDet3[i] = a[i];

		}
	}
	det3 = calcDet3(vDet3);
	sol1 = Number(det1) / Number(detA);
	sol2 = Number(det2) / Number(detA);
	sol3 = Number(det3) / Number(detA);
	sol1 = Math.round(sol1 * 100) / 100;
	sol2 = Math.round(sol2 * 100) / 100;
	sol3 = Math.round(sol3 * 100) / 100;
	var soluciones = [sol1, sol2, sol3];
	return soluciones;
}

//Muestra e sistema usando Gauss
function mostrarSistemaGauss() {
	a = document.getElementsByClassName("a6");
	b = document.getElementsByClassName("b6");
	a1 = [];
	for (var i = 0; i < a.length; i++) {
		a1.push(a[i].value);
	}
	b1 = [];
	for (var i = 0; i < b.length; i++) {
		b1.push(b[i].value);
	}
	soluciones = resolverGauss(a1, b1);

	x1 = document.getElementById("c1");
	x2 = document.getElementById("c2");
	x3 = document.getElementById("c3");
	x1.innerHTML = soluciones[0];
	x2.innerHTML = soluciones[1];
	x3.innerHTML = soluciones[2];
}
//Resuelve el sistema por el metodo de gaus
function resolverGauss(a, b) {
	incompatible = true;
	//Si el primer elemento y el cuarto son iguales el sistema es compatible indeterminado
	for (var i = 2; i >= 0; i--) {
		if (a[i] != a[i + 3]) {
			incompatible = false;
		}
	}
	if (incompatible == false) {
		if (a[0] == 0) {
			aux = 0;
			aux = a[0];
			a[0] = a[3];
			a[3] = aux;
			aux = a[1];
			a[1] = a[4];
			a[4] = aux;
			aux = a[2];
			a[2] = a[5];
			a[5] = aux;
			aux = b[0];
			b[0] = b[1];
			b[1] = aux;
		}
		if (a[4] == 0) {
			aux = a[3];
			a[3] = a[6];
			a[6] = aux;
			aux = a[4];
			a[4] = a[7];
			a[7] = aux;
			aux = a[5];
			a[5] = a[8];
			a[8] = aux;
			aux = b[1];
			b[1] = b[2];
			b[2] = aux;
		}
		aux = a[3];
		if (aux != 0) {
			for (var i = 3; i < 6; i++) {
				a[i] = Number(a[i]) * (Number(-a[0]) / Number(aux));
				a[i] = Number(a[i]) + Number(a[i - 3]);
			}
			b[1] = Number(b[1]) * (Number(-a[0]) / Number(aux));
			b[1] = Number(b[1]) + Number(b[0]);
		}
		aux = a[6];
		if (aux != 0) {
			for (var i = 6; i < 9; i++) {
				a[i] = Number(a[i]) * (Number(-a[0]) / Number(aux));
				a[i] = Number(a[i]) + Number(a[i - 6]);
			}

			b[2] = Number(b[2]) * (Number(-a[0]) / Number(aux));
			b[2] = Number(b[2]) + Number(b[0]);
		}

		aux = a[7];
		if (aux != 0) {
			for (var i = 7; i < 9; i++) {
				a[i] = Number(a[i]) * (Number(-a[4]) / Number(aux));
				a[i] = Number(a[i]) + Number(a[i - 3]);
			}
			b[2] = Number(b[2]) * (Number(-a[4]) / Number(aux));
			b[2] = Number(b[2]) + Number(b[1]);
		}
		if (a[8] == 0) {
			sol3 = 't';
			if (a[4] == 0) {

				sol2 = "u";
				sol1 = "(" + String(b[0]) + "-(" + String(a[2]) + "*" + String(sol3) + ")-(" + String(a[1]) + "*" + String(sol2) + "))";
				sol1 = sol1 + "/" + String(a[0]);
			} else {
				for (var i = 0; i < 6; i++) {
					a[i] = Math.round(a[i] * 100) / 100;
				}
				b[0] = Math.round(b[0] * 100) / 100;
				b[1] = Math.round(b[1] * 100) / 100;
				sol2 = "(" + String(b[1]) + "-(" + String(a[5]) + "*" + String(sol3) + "))" + "/" + String(a[4]);
				sol1 = "(" + String(b[0]) + "-(" + String(a[2]) + "*" + String(sol3) + ")" + "-(" + String(a[1]) + "*" + String(sol2) + ")" + ")" + "/" + String(a[0]);
			}
			soluciones = [sol1, sol2, sol3];

		} else {
			sol3 = b[2] / a[8];

			sol2 = b[1] - (a[5] * sol3);
			if (a[4] != 0) {
				sol2 = sol2 / a[4];
				sol1 = b[0] - (a[2] * sol3);
				sol1 = sol1 - (a[1] * sol2);
				sol1 = sol1 / a[0];

				sol1 = Math.round(sol1 * 100) / 100;
				sol2 = Math.round(sol2 * 100) / 100;
				sol3 = Math.round(sol3 * 100) / 100;
				if (!isFinite(sol1) || !isFinite(sol2) || !isFinite(sol3)) {
					alert("El sistema es incompatible, no tiene solucion");
					soluciones = ["", "", ""];
				} else {
					soluciones = [sol1, sol2, sol3];
				}
			} else {
				alert("No se puede resolver por el metodo de Gauss, intentelo por Cramer");
				soluciones = ["", "", ""];
			}
		}

		return soluciones;

	} else {
		soluciones = ["", "", ""];
		alert("El sistema es incompatible");
		return soluciones;

	}

}

function generarOperacion(operacion, idDiv) {
	var id = document.getElementById(idDiv);
	var divBoton = document.getElementById("boton");
	var hijos = id.childNodes;
	var hijosBoton = divBoton.childNodes;
	var a1 = [];
	var b1 = [];
	for (var i = hijosBoton.length - 1; i >= 0; i--) {
		divBoton.removeChild(hijosBoton[i]);
	}
	for (var i = hijos.length - 1; i >= 0; i--) {
		id.removeChild(hijos[i]);
	}
	boton = document.createElement("input");
	boton.setAttribute("type", "button");
	boton.setAttribute("value", "Calcular");

	switch (operacion) {

		case "sumaMatrices":

			generarTabla(3, 3, idDiv, "parentesis", "tablaA", "entrada");
			id.appendChild(document.createTextNode("+"));
			generarTabla(3, 3, idDiv, "parentesis", "tablaB", "entrada");
			id.appendChild(document.createTextNode("="));
			boton.addEventListener("click", function () {
				hijos = id.childElementCount;
				if (hijos > 2) {
					id.removeChild(id.lastChild);
				}
				a = document.getElementsByClassName("tablaA");
				b = document.getElementsByClassName("tablaB");
				for (var i = 0; i < a.length; i++) {
					a1[i] = a[i].value;
					b1[i] = b[i].value;
				}
				soluciones = sumarMatrices(a1, b1);

				generarTabla(3, 3, idDiv, "parentesis", "solA", "salida", soluciones);
			});

			divBoton.appendChild(boton);
			break;
		case "restaMatrices":
			generarTabla(3, 3, idDiv, "parentesis", "tablaA", "entrada");
			id.appendChild(document.createTextNode("-"));
			generarTabla(3, 3, idDiv, "parentesis", "tablaB", "entrada");
			id.appendChild(document.createTextNode("="));
			boton.addEventListener("click", function () {
				hijos = id.childElementCount;
				if (hijos > 2) {
					id.removeChild(id.lastChild);
				}
				a = document.getElementsByClassName("tablaA");
				b = document.getElementsByClassName("tablaB");
				for (var i = 0; i < a.length; i++) {
					a1[i] = a[i].value;
					b1[i] = b[i].value;
				}
				soluciones = restarMatrices(a1, b1);

				generarTabla(3, 3, idDiv, "parentesis", "solA", "salida", soluciones);
			});
			divBoton.appendChild(boton);
			break;
		case "multiplicarMatrices":
			generarTabla(3, 3, idDiv, "parentesis", "tablaA", "entrada");
			id.appendChild(document.createTextNode("*"));
			generarTabla(3, 3, idDiv, "parentesis", "tablaB", "entrada");
			id.appendChild(document.createTextNode("="));
			boton.addEventListener("click", function () {
				hijos = id.childElementCount;
				if (hijos > 2) {
					id.removeChild(id.lastChild);
				}
				a = document.getElementsByClassName("tablaA");
				b = document.getElementsByClassName("tablaB");
				for (var i = 0; i < a.length; i++) {
					a1[i] = a[i].value;
					b1[i] = b[i].value;
				}
				soluciones = multiplicarMatrices(a1, b1);

				generarTabla(3, 3, idDiv, "parentesis", "solA", "salida", soluciones);
			});
			divBoton.appendChild(boton);
			break;
		case "multiplicarNMatriz":
			generarTabla(1, 1, idDiv, "parentesis", "tablaA", "entrada");
			id.appendChild(document.createTextNode("*"));
			generarTabla(3, 3, idDiv, "parentesis", "tablaB", "entrada");
			id.appendChild(document.createTextNode("="));
			boton.addEventListener("click", function () {
				hijos = id.childElementCount;
				if (hijos > 2) {
					id.removeChild(id.lastChild);
				}
				a = document.getElementsByClassName("tablaA");
				b = document.getElementsByClassName("tablaB");
				a1[0] = a[0].value;
				for (var i = 0; i < b.length; i++) {
					b1[i] = b[i].value;
				}
				soluciones = calcNMatriz(a1, b1);
				generarTabla(3, 3, idDiv, "parentesis", "solA", "salida", soluciones);
			});
			divBoton.appendChild(boton);

			break;
		case "determinante2":
			generarTabla(2, 2, idDiv, "linea", "tablaA", "entrada");
			id.appendChild(document.createTextNode("="));
			boton.addEventListener("click", function () {
				hijos = id.childElementCount;
				if (hijos > 0) {
					id.removeChild(id.lastChild);
				}
				a = document.getElementsByClassName("tablaA");
				for (var i = 0; i < a.length; i++) {
					a1[i] = a[i].value;
				}
				soluciones = document.createTextNode(calcDet2(a1));
				id.appendChild(soluciones);

			});
			divBoton.appendChild(boton);
			break;
		case "determinante3":
			generarTabla(3, 3, idDiv, "linea", "tablaA", "entrada");
			id.appendChild(document.createTextNode("="));
			boton.addEventListener("click", function () {
				hijos = id.childElementCount;
				if (hijos > 0) {
					id.removeChild(id.lastChild);
				}
				a = document.getElementsByClassName("tablaA");
				for (var i = 0; i < a.length; i++) {
					a1[i] = a[i].value;
				}
				soluciones = document.createTextNode(calcDet3(a1));
				id.appendChild(soluciones);
			});
			divBoton.appendChild(boton);
			break;
		case "sistema":
			var metodoCramer = document.createElement("input");
			metodoCramer.setAttribute("type", "radio");
			metodoCramer.setAttribute("name", "sistema");
			metodoCramer.setAttribute("id", "cramer");

			var metodoGauss = document.createElement("input");
			metodoGauss.setAttribute("type", "radio");
			metodoGauss.setAttribute("name", "sistema");
			metodoGauss.setAttribute("id", "gauss");

			var textoCramer = document.createTextNode("Cramer:");
			var textoGauss = document.createTextNode("Gauss:");
			id.appendChild(textoCramer);
			id.appendChild(metodoCramer);
			id.appendChild(textoGauss);
			id.appendChild(metodoGauss);

			generarTabla(3, 3, idDiv, "sistema", "tablaA", "entrada");
			generarTabla(3, 1, idDiv, "soluciones", "tablaB", "entrada");
			boton.addEventListener("click", function () {
				hijos = id.childElementCount;
				if (hijos > 4) {
					id.removeChild(id.lastChild);
				}
				a = document.getElementsByClassName("tablaA");
				for (var i = 0; i < a.length; i++) {
					a1[i] = a[i].value;
				}
				b = document.getElementsByClassName("tablaB");
				for (var i = 0; i < b.length; i++) {
					b1[i] = b[i].value;
				}
				if (metodoCramer.checked) {
					soluciones = calcSistema(a1, b1);
				} else {
					soluciones = resolverGauss(a1, b1);
				}
				generarTabla(3, 1, idDiv, "parentesis", "solA", "salida", soluciones);
			});
			divBoton.appendChild(boton);
			break;
	}
}

function generarTabla(filas, columnas, idDiv, parentesis, clase, opcionIO, elementoMostrar) {
	var id = document.getElementById(idDiv);
	if (opcionIO == "entrada") {
		var elementoTabla = document.createElement("input");
	} else {
		var elementoTabla = document.createTextNode("");
	}
	var tabla = document.createElement("table");
	var tr = document.createElement("tr");
	var td = document.createElement("td");
	var longitudTabla = filas * columnas;
	td.style.textAling = "center";
	if (parentesis == "parentesis") {
		td.appendChild(document.createTextNode(""));
		td.rowSpan = filas + 1;
		td.className = "parentesisMatrizIzq";
		tr.appendChild(td);
	}
	if (parentesis == "linea") {
		td.appendChild(document.createTextNode(""));
		td.rowSpan = filas + 1;
		td.className = "detDer";
		tr.appendChild(td);
	}
	for (var i = 0; i <= longitudTabla; i++) {
		if (opcionIO == "entrada") {
			elementoTabla = document.createElement("input");
			elementoTabla.setAttribute("type", "text");
			elementoTabla.className = clase;
			elementoTabla.style.textAlign = "center";
			elementoTabla.style.borderRadius = "10px";
			elementoTabla.style.width = "50px";
		} else {
			var texto = document.createTextNode(elementoMostrar[i]);
			elementoTabla = document.createElement("p");
			elementoTabla.style.width = "150px";
			elementoTabla.appendChild(texto);
		}
		td = document.createElement("td");
		td.style.textAlign = "center";
		td.appendChild(elementoTabla);
		if (parentesis == "sistema") {
			if ((i % filas) + 1 == 3) {
				var valorX = document.createTextNode(String("X") + String((i % filas) + 1) + "=");
			} else {
				var valorX = document.createTextNode(String("X") + String((i % filas) + 1) + "+");
			}
			td.appendChild(valorX);
		}
		if (i % columnas == 0) {
			tabla.appendChild(tr);
			tr = "";
			tr = document.createElement("tr");
		}
		tr.appendChild(td);
		if (i == (filas - 1)) {
			if (parentesis == "parentesis") {
				td = document.createElement("td");
				td.appendChild(document.createTextNode(""));
				td.rowSpan = filas;
				td.className = "parentesisMatrizDer";
				tr.appendChild(td);
			}
			if (parentesis == "linea") {
				td = document.createElement("td");
				td.appendChild(document.createTextNode(""));
				td.rowSpan = filas + 1;
				td.className = "detIzq";
				tr.appendChild(td);
			}
		}
	}
	tabla.style.display = "inline-table";
	id.appendChild(tabla);
}

function errorAnadir() {
	$("#mensajeError").css("visibility", "visible");
	$("#mensajeError").dialog();
}

function anadirGrafico() {
	$("#anadir").attr("onclick", "errorAnadir()");
	tipoGrafico = $("#dibujo").val();
	parrafo = document.createElement("p");
	parrafoY = document.createTextNode("y=");
	parrafoX = document.createTextNode("*x+");
	parrafoX2 = document.createTextNode("*x*x+");
	inputXRecta = document.createElement("input");
	inputNRecta = document.createElement("input");
	inputX2 = document.createElement("input");
	inputMostrar = document.createElement("input");
	inputEliminar = document.createElement("input");
	inputMostrar.setAttribute("type", "button");
	inputMostrar.setAttribute("value", "Mostrar");
	inputEliminar.setAttribute("type", "button");
	inputEliminar.setAttribute("value", "Borrar");
	inputXRecta.setAttribute("size", "2");
	inputX2.setAttribute("size", "2");
	inputNRecta.setAttribute("size", "2");

	parrafo.appendChild(parrafoY);

	if (tipoGrafico == "parabola") {
		parrafo.appendChild(inputX2);
		parrafo.appendChild(parrafoX2);
	}
	parrafo.appendChild(inputXRecta);
	parrafo.appendChild(parrafoX);
	parrafo.appendChild(inputNRecta);
	parrafo.appendChild(inputMostrar);
	parrafo.appendChild(inputEliminar);

	parrafo.setAttribute("class", "menuEcuaciones");

	document.getElementById("superficies").appendChild(parrafo);

	origenX = 294;
	origenY = 266;
	var padreParrafo = parrafo.parentNode;
	$(inputMostrar).on("click", function () {
		if (tipoGrafico == "recta") {
			var ecuacion = String(inputXRecta.value) + String(parrafoX.nodeValue) + String(inputNRecta.value);
			var x = -7;
			var y = eval(ecuacion);
			coord1X = origenX + (x * 50);
			coord1Y = origenY - (y * 50);
			var x = 7;
			var y = eval(ecuacion);
			coord2X = origenX + (x * 50);
			coord2Y = origenY - (y * 50);

			$('canvas').drawLine({
				strokeStyle: '#000',
				strokeWidth: 4,
				x1: coord1X,
				y1: coord1Y,
				x2: coord2X,
				y2: coord2Y
			});
		}

		//NO ESTA ACABADO, NO FUNCIONA CORRECTAMENTE
		else {
			var ecuacion = String(inputX2.value) + String(parrafoX2.nodeValue) + String(inputXRecta.value) + String(parrafoX.nodeValue) + String(inputNRecta.value);
			var verticeParabola = eval("-" + String(inputXRecta.value) + "/(2*" + String(inputX2.value) + ")");
			console.log(verticeParabola);
			var x = -5;
			var y = eval(ecuacion);
			coord1X = origenX + (x * 48);
			coord1Y = origenY - (y * 48);

			var x = verticeParabola;
			var y = eval(ecuacion);
			coordC1X = origenX + (x * 20);
			coordC1Y = (origenY - (y * 10) + 1230);
			var x = 5;
			var y = eval(ecuacion);
			coord2X = origenX + (x * 48);
			coord2Y = origenY - (y * 50);
			$('canvas').drawQuadratic({
				strokeStyle: '#000',
				strokeWidth: 5,
				x1: coord1X,
				y1: coord1Y,
				cx1: coordC1X,
				cy1: coordC1Y,
				x2: coord2X,
				y2: coord2Y
			});
		}
		$("#anadir").attr("onclick", "anadirGrafico()");
	});
	$(inputEliminar).on("click", function () {
		eliminarElemento(this);
	});
}

function eliminarGrafico() {
	$('canvas').clearCanvas();
	$('.menuEcuaciones').remove();
	$("#anadir").attr("onclick", "anadirGrafico()");
}

function eliminarElemento(parrafo) {
	var padre;
	var abuelo;
	//Obtenemos el padre del parrafo
	padre = parrafo.parentNode;
	//Obtenemos el abuelo
	abuelo = padre.parentNode;
	//A partir del abuelo eliminamos el parrafo, es decir, el padre
	abuelo.removeChild(padre);
}

function comenzarAnimacionCramer() {
	$("#botonAnimacion").attr("onclick", "");
	$("#cramerY").css("marginLeft", "20%");
	$("#cramerZ").css("marginLeft", "20%");
	$("#cramerX", "#cramerY", "#cramerZ").css("marginTop", "1000px");

	$("#divAnimacionCramer").show("blind", 2000);
	scrollTo(0, 860);
	setTimeout(function () {
		posX = "-155px";
		posY = "465px";
		solCramerOrdenCol("Sol", posX, posY);
		posX = "0px";
		solCramerOrdenCol("B", posX, posY);
		posX = "-30px";
		solCramerOrdenCol("C", posX, posY);
	}, 2000);
	setTimeout(function () {
		posX = "410px";
		posY = "465px";
		solCramerOrdenCol("A", posX, posY);
		posX = "260px";
		solCramerOrdenCol("Sol", posX, posY);
		posX = "350px";
		solCramerOrdenCol("C", posX, posY);
	}, 5000);
	setTimeout(function () {
		posX = "795px";
		posY = "465px";
		solCramerOrdenCol("A", posX, posY);
		posX = "765px";
		solCramerOrdenCol("B", posX, posY);
		posX = "670px";
		solCramerOrdenCol("Sol", posX, posY);
	}, 8000);
}

function solCramerOrdenCol(col, posX, posY) {
	var columna = $("#col" + col);
	var clon = columna.clone();
	columna.after(clon);
	clon.css("position", "absolute").animate({
		marginLeft: posX,
		marginTop: posY
	}, 2000);
}

function opinion() {
	$("#dialogoOpinion").dialog();

}

function comprobarDatos() {
	validado = true;
	nombre = $("#nombre").val();
	if (nombre.length < 2) {
		$("<div>Error en la longitud del nombre, por favor escriba su nombre completo</div>").dialog();
		validado = false;
	}
	email = $("#email").val();
	if (email.indexOf("@") == -1) {
		$("<div>Error, introduzca un email correcto</div>").dialog();
		validado = false;
	}
	if (validado == true) {
		$("#dialogoOpinion").dialog("close");
	}

}