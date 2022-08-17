"Node JS"

//Node JS es un entorno de ejecucion de JavaScript orientado a eventos asincronos
//Node JS permite desarrollar aplicaciones escalables y real-time
//Node JS es un entorno de ejecucion de JS

"ASYNCHRONOUS"

//Un evento asincrono es aquel que se ejecuta en paralelo al proceso principal de la aplicacion, no interrumpen la ejecucion de la aplicacion principal
//Un evento sincrono, en cambio tiene que esperar a que los demas eventos sincronos se ejecuten, para que este tambien se pueda ejecutar. Su ejecucion bloquean la ejecucion de la aplicacion por unos cuantos milisegundos 

"PROTOCOLO"

//Reglas que permiten que dos entidades de una red se comuniquen (Por ejemplo el cliente y el servidor)

"REPL"

//Read Eval Print Loop 

//Para acceder al REPL de node, ponemos "node" en la linea de comandos
//Despues ".help" para ver lo que se puede hacer en el REPL

//Shift + Enter para ir a la proxima linea en la linea de comandos

//.editor lo que hace es entrar en modo "editor de codigo" como este
//y para finalizar ese modo y hacer que se ejecute el codigo se utiliza ctrl + D y funciona como una consola
//Para salir del modo de .editor sin que se ejecute el codigo se usa ctrl + C

//El simbolo ">" al inicio de la linea de codigo quiere decir que estamos en REPL
//Para salir de REPL se usa .exit

"TERMINAL"

//ctrl + Ñ para abrir la terminar en VSC
//Para ejecutar un archiv .js en la terminal se utiliza lo siguiente:
//node nombredelarchivo.js
//Se ejecutara el codigo como si lo estuvieramos ejecutando en la consola del navegador


"MODULO"

//Funcionalidad organizada en unos o varios archivos JS que puede ser reutilizada en una aplicacion
//Podemos importar la funcionalidad de un modulo en otro modulo para crear un canal de comunicacion
//Cualquier archivo .js de nuestro programa se puede considerar modulo
//Prox clase veremos como exportar y importar partes del codigo para la comunicacion entre modulos


"EXPORTAR E IMPORTAR - MODULOS"

module.exports //Esto nos devuelve un objeto vacio

//--------ARCHIVO saludos.js--------
const saludar = (name)=>{
    return `Hi ${name}`
}

const saludarMundo = ()=>{
    return `Hola mundo`
}

module.exports.saludar = saludar;
module.exports.saludarMundo = saludarMundo;

//Lo siguiente equivale a lo de arriba:

module.exports = {
    saludar,
    saludarMundo
}
//-----------------------------------------

//Nota: habra cosas que la consola detecte como error porque son cosas de node y es por eso que es necesario utilizar la terminal utilizando "node"
//Cuando exportamos un elemento se hace lo anterior, pero cuando importamos un elemento se hace lo siguiente:

//-----------ARCHIVO app.js-----------------

const saludos = require("./saludos.js"); //El nombre de la constante debe ser el mismo nombre que el del modulo //Esta variable retorna el objeto con el que anteriormente hicimos la exportacion

console.log(saludos.saludar("Victor"));
console.log(saludos.saludarMundo());

//-----------------------------------------

//Cuando se habla de "importar" un modulo,  usamos "require" y cuando lo utilizamos, decimos que vamos a "incluir" algo, para no confundirla con la palabra reserveda "import", ya que hace otra cosa

"SINTAXIS DE DESESTRUCTURACION Y REQUIRE"

const {saludarMundo, saludar} = require("./saludos.js"); //De esta manera desestructuramos un require y le solicitamos propiedades especificas del objeto exportado. Se utilizan como una variable y esa variable devuelve el valor que tiene dentro esa propiedad del objeto exportado

console.log(saludarMundo());
console.log(saludar(`Victor`));



"MODULOS BUILT-IN"

//Son modulos que ya vienen por defecto incorporados en node js y que son utilizados y podemos utilizar comunmente
//Algunos de ellos son: console, process http, https, fs(file system), os(operating system), path, entre otros

"----Modulo Console-----"

//Es basicamente los metodos que conocemos con console


"----Modulo Process----"

//Este modulo nos devuelve muchas propiedades, pero las "mas usadas" son las siguientes

console.log(process.env); //Nos devuelve un objeto con varias propiedades del sistemas en donde esta ejecutandose ese programa
console.log(process.argv); //Lo que hace es transformarnos a un array, cada cosa que pongamos separada por un espacio la terminal: [node, app.js, 10, 11]. Y hay de dos, o nos devuelve la ubicacion en la computadora de cada posicion del array, o nos devuelve el valor que le pasamos. Basicamente nos devuelve un array con lo que le pasemos en la terminal

//Esto es lo que nos devuelve si ponemos en la terminal: node, app.js, 12, 14
[
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\VICTOR\\Desktop\\ACTIVIDADES DE CURSOS\\FreeCodeCamp Curso de Node JS y express\\first_node_program\\app.js',
    '12',
    '14'
  ]

console.log(process.memoryUsage()); //Nos devuelve un objeto con distintas propiedades sobre el uso de memoria