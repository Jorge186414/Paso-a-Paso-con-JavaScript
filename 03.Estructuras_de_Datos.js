/*
 * EJERCICIO:
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto
 *   en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa.
 */

//! - Muestra ejemplos de creación de todas las estructuras soportadas por defecto en tu lenguaje.
const array = [1, 2, 3, 4, 5, 'jorge', 'jennifer', true]
console.log(array)

const objeto = {
  nombre: 'juanito',
  apellido: 'lopez'
}
console.log(objeto)

// insertar elementos en un array
array.push('numero 2')
console.log(array)

// borrar elementos de un array
// elimina el ultimo elemento
array.pop()
console.log(array)
// elimina el primer elemento
array.shift()
console.log(array)

// filtrar elementos de un array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const filterNumbers = numbers.filter(numbers => numbers % 3 === 0)
console.log(filterNumbers)

// eliminacion de elementos en especifico dada una posicion
console.log(`Arreglo antes de la eliminacion:   ${numbers}`)
numbers.splice(3, 5) // El primer parametro indica desde que posicion empezara a eliminar elementos, y el segundo indica cuantos elemtos se van a elimar
console.log(`Arreglo despues de la eliminacion: ${numbers}`)

/*
* DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa.
*/
var contacts = []

// Funcion para agregar contactos
const addContact = () => {
  var newPhoneNumber = null
  var newContactName = null

  do {
    var phoneNumber = prompt('Ingresa tu numero de telefono')
    parseInt(phoneNumber.trim())
    if (phoneNumber.length <= 9 || isNaN(phoneNumber)) {
      alert('Ingresa un numero de telefono valido')
    } else {
      newPhoneNumber = phoneNumber
      parseInt(newPhoneNumber)
    }
  } while (!newPhoneNumber)

  do {
    newContactName = prompt('Ingresa tu nombre')
    if (!newContactName) {
      alert('Ingresa tu nombre de usuario')
    }
  } while (!newContactName)

  var newContact = {
    contactName: newContactName,
    phoneNumber: phoneNumber
  }
  contacts.push(newContact)
}

// Funcion para buscar contactos
const searchContact = () => {
  var searchedName = null
  do {
    searchedName = prompt('Ingresa el nombre del contacto a buscar')
  } while (!searchedName)
  const contact = contacts.find(
    contacts => contacts.contactName.toLowerCase() === searchedName.toLowerCase())
  return contact || 'No winner found with that name :('
}