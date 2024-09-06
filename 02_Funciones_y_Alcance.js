/*
 * EJERCICIO:
 * - Crea ejemplos de funciones básicas que representen las diferentes
 *   posibilidades del lenguaje:
 *   Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
 * - Comprueba si puedes crear funciones dentro de funciones.
 * - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
 * - Pon a prueba el concepto de variable LOCAL y GLOBAL.
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *   (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 *
 * Presta especial atención a la sintaxis que debes utilizar en cada uno de los casos.
 * Cada lenguaje sigue una convenciones que debes de respetar para que el código se entienda.
 */

//! Crea ejemplos de funciones básicas que representen las diferentes posibilidades del lenguaje
// Por declaracion, a su vez esta funcion no tiene parametros y no regresa ningun dato
function calcularPrecio() {
  var precio1 = 19
  var cantidad = 2
  var totalPagar = precio1 * cantidad
  console.log(totalPagar)
}
calcularPrecio()

// Asignadas a variables
var totalAPagar = function totalPagar() {
  var precioProducto = 208
  var cantidad = 7
  var precioFinal = precioProducto * cantidad
  console.log(precioFinal)
}
totalAPagar()

// Funcion de flecha (Arrow function), esta recibe un parametro y regresa algo
const saludo = function (nombre) {
  return console.log(`Hola ${nombre}`)
}
saludo('Jorge')

// Funcion de flecha con retorno explicito
const despedida = nombre => {
  return console.log(`Nos vemos luego ${nombre}`)
}
despedida('Jennifer')

// Funcion de flecha con retorno implicito, esta recibe 2 parametros
const bienvenida = (nombre, apellido) => `Hola ${nombre} ${apellido} te damos la bienvenida a JavaScript, Suerte en tu camino`
console.log(bienvenida('Jorge', 'Miranda'))

const variableGlobal = 'Jorge'
function variables() {
  const variableLocal = 'Miranda'
  return `Hola ${variableGlobal} ${variableLocal}como va tu dia`
}

function variables2() {
  return `Hola ${variableGlobal} ${variableLocal} como te fue en la escuela`  // Dara error de referencia
  // ya que la variable local solo existe dentro de la funcion donde se declaro debido al scope que tiene
}
variables()
// variables2()

//! DIFICULTAD EXTRA (opcional):

const ejercicioExtra = (saludo, despedida) => {
  var counter = 0
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(saludo + despedida)
    } else if (i % 3 === 0) {
      console.log(saludo)
    } else if (i % 5 === 0) {
      console.log(despedida)
    } else {
      counter++
    }
  }
  return counter
}
var numerosImpresos = ejercicioExtra('Hola', 'Adios')
console.log('En un total de ' + ejercicioExtra() + ' numeros no se cumplio ninguna de las condiciones')
