function devolverString(str) {
    // "Return" la string provista: str
    // Tu código:
    str = "Comenzando los ejercicios de la consigna 14"
    return str
  }
console.log('**** Funcion devolverString ****')
console.log(devolverString())
  
  function suma(x, y) {
    x = 5
    y = 10
    return x + y 
}
console.log('**** Funcion suma ****')
console.log(suma())
  
  function resta(x, y) {
    x = 5
    y = 10
    return x - y
  }
console.log('**** Funcion resta ****')
console.log(resta())  
  
  function multiplica(x, y) {
    x = 5
    y = 10
    return x * y
  }
console.log('**** Funcion multiplica ****')
console.log(multiplica())
  
  function divide(x, y) {
    x = 5
    y = 10
    return x / y
  }
  console.log('**** Funcion divide ****')
  console.log(divide())
  
  function sonIguales(x, y) {
  return (x === y) ? true : false;
  }
  console.log('**** Funcion sonIguales ****')
  console.log(sonIguales(5,5))
  
  function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    return (str1.length === str2.length) ? true : false;
  }
  console.log('**** Funcion tienenMismaLongitud ****')
  console.log(tienenMismaLongitud("Hola","Hola"))
  
  function menosQueNoventa(num) {
    return (num <= 90) ? true : false;
  }
  console.log('**** Funcion menosQueNoventa ****')
  console.log(menosQueNoventa(10))

  function mayorQueCincuenta(num) {
    // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
    // De lo contrario, devuelve "false"
    // Tu código:
    return (num > 50) ? true : false;
  }
  console.log('**** Funcion mayorQueCincuenta ****')
  console.log(mayorQueCincuenta(55))
  
  function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y"
    // Tu código:
    x = 5
    y = 10
    return x % y 
  }
  console.log('**** Funcion obtenerResto ****')
  console.log(obtenerResto())
  
  function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:
    return (num % 2 == 0) ? true : false;
  }
  console.log('**** Funcion esPar ****')
  console.log(esPar(8))
  
  function esImpar(num) {
    // Devuelve "true" si "num" es impar
    // De lo contrario, devuelve "false"
    // Tu código:
    return (num % 2 !== 0) ? true : false
  }
  console.log('**** Funcion esImpar ****')
  console.log(esImpar(19))
  
  function elevarAlCuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    // Tu código:

    num = 5
    return Math.pow(num, 2 )
  }
  console.log('**** Funcion elevarAlCuadrado ****')
  console.log(elevarAlCuadrado())
  
  function elevarAlCubo(num) {
    // Devuelve el valor de "num" elevado al cubo
    // Tu código:
    num = 5 
    return  Math.pow(num, 3)
  }
  console.log('**** Funcion elevarAlCubo ****')
  console.log(elevarAlCubo())
  
  function elevar(num, exponent) {
    // Devuelve el valor de "num" elevado al exponente dado en "exponent"
    // Tu código:
    num = 5
    exponent = 4
    return num = Math.pow(exponent, 5)
  }
  console.log('**** Funcion elevar ****')
  console.log(elevar())
  
  function redondearNumero(num) {
    // Redondea "num" al entero más próximo y devuélvelo
    // Tu código:
    num = 18.26
    return Math.round(num)
  }
  console.log('**** Funcion redondearNumero ****')
  console.log(redondearNumero())
  
  function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
    // Tu código:
    num = 25.50
    return Math.round(num)
  }
  console.log('**** Funcion redondearHaciaArriba ****')
  console.log(redondearHaciaArriba())
  
  function numeroRandom() {
    //Generar un número al azar entre 0 y 1 y devolverlo
    //Pista: investigá qué hace el método Math.random()
    return Math.random()
  }
  console.log('**** Funcion numeroRandom ****')
  console.log(numeroRandom())
  
  function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    numero = 3
    if(numero >= 1 ){
        return "Es positivo"
    }else if (numero === 0){
        return false
    }else {
        return "Es negativo"
    }
  }
  console.log('**** Funcion esPositivo ****')
  console.log(esPositivo())
  
  function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
    // Ejemplo: "hola mundo" pasaría a ser "hola mundo!"
    // Tu código:
    str = "Hola mundo"
    exclamacion = "!"
    return str = str.concat(exclamacion)
  }
  console.log('**** Funcion agregarSimboloExclamacion ****')
  console.log(agregarSimboloExclamacion())
  
  function combinarNombres(nombre, apellido) {
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Soy", "Maxi" -> "Soy Maxi"
    // Tu código:
    return nombre + " " + apellido
  }
  console.log('**** Funcion combinarNombres ****')
  console.log(combinarNombres("Lionel","Hutz"))
  
  function obtenerSaludo(nombre) {
    // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
    // "Maxi" -> "Hola Maxi!"
    // Tu código:
    texto = "Bienvenido"
    return texto + " " + nombre

  }
  console.log('**** Funcion obtenerSaludo ****')
  console.log(obtenerSaludo("Gandalf"))
  
  function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el area de un rectángulo teniendo su altura y ancho
    // Tu código:
    let area = alto * ancho
    return area
  }
  console.log('**** Funcion obtenerAreaRectangulo ****')
  console.log(obtenerAreaRectangulo(20,40))
  
  
  function retornarPerimetro(lado){
    //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    //Escribe tu código aquí
    
    let ancho
    ancho = prompt("Ingrese el ancho de un cuadrado")
    let area = ancho * ancho
    return ("El perimetro del cuadrado es: " + area)
  }
  console.log('**** Funcion retornarPerimetro ****')
  console.log(retornarPerimetro());
  
  
(() => {
  function areaDelTriangulo(base, altura){
    //Desarrolle una función que calcule el área de un triángulo.
    //Escribe tu código aquí
    let ancho = prompt("Dime la base del triangulo");
    let high = prompt("Dime la altura del triangulo");
    return("El area del triangulo es:" + " " +((ancho * high)/2));
  }
  console.log('**** Funcion areaDelTriangulo ****')
  console.log(areaDelTriangulo());
})(); 
  
  
 function deEuroAdolar(euro){
    //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
    //como parámetro un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí

    euros = parseInt(prompt('Cuántos euros tienes'))
    let dolar
    const porcentaje = euros * (20 / 100)
    dolar = porcentaje + euros;
    return(`ingresaste ${euros} euros y tu conversion a dolar es igual a ${dolar}`)
  }
  console.log('**** Funcion deEuroAdolar ****')
  console.log(deEuroAdolar());
  
  function esVocal(letra){
    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
    //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
    //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    // Si no es vocal, tambien debe devolver "Dato incorrecto".
    //Escribe tu código aquí

    letra = prompt("Ingrese una Vocal");
        if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u' ){
          console.log("Es Vocal")
        }else if (letra.length !== 1) {
          console.log("Dato Incorrecto")
        } else{
          console.log("Dato Incorrecto")
        }
  }
  console.log('**** Funcion esVocal ****')
  esVocal();

