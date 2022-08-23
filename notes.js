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

const {saludarMundo, saludar = "hola"} = require("./saludos.js") //Puedes crearles una propiedad y darle un valor desde aqui. Si ya tienen ese valor y aun asi se lo das aqui, seguira tomando el que ya tiene originalmente
//---------------------------------
const deadpool ={
    nombre: "Dade",
    apellido: "Jhonson"
}

function imprimirHeroe({nombre, apellido}){
    nombre = "Juanito"; //Asi si se redaclarara, pero si le ponemos "const" no
    console.log(nombre, apellido)
}

imprimirHeroe(deadpool);
//-------------

const heroes = ["Deadpool", "Superman", "Batman"];

const [h1, h2, h3] = heroes;

console.log(h1, h2, h3); //Cada posicion de la desestructuracion tendra el valor de su respectiva posicion del array original





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


"NON BLOCKING I/O"

//Basicamente lo que hace es que ejecuta procesos al mismo tiempo sin esperar a que otros se acaben de ejecutar

"CICLO DE VIDA EN UN PROCESO EN NODE"

"-------Pila de procesos-------"

//Aqui lo que hace es que se genera un main() y dentro de ese main, entra linea por linea y cuando entra una y la ejecuta, la elimina y procede con la siguiente y asi hasta acabar, cuando no hay nada mas por ejecutar, se elimina el main()
//Pila de procesos => Node Apis => Cola de callbacks

//Nota: siempre que tengamos que poner un -g (global) en la terminal, es porque esta debe estar ejecutada como administrador


"NODEMON"

//se ejecuta igual que node y lo que hace es reiniciarse (o reiniciar el servidor) cuando detecta cambios, por eso solo es recomendable para el desarrollo y no para la produccion
//ctrl + c para cancelar y salir de nodemon




"OPTIONAL CHAINING OPERATOR"

const salario = [
    {salario: 1000}, {salario: 2000}, {salario: 3000}];

const salarioEspecifico = salario.find(e => e.salario === 4000)?.salario; //Esto sin el operador devolveria undefined.salario, lo cual nos lanzara un error, pero si le ponemos el operador, hara que todo en general valga undefined

console.log(salarioEspecifico);


"PROMESAS REPASO"

//Peor forma:
getEmpleado(id)
   .then(empleado => {
       getSalario(id)
           .then(salario =>{
               console.log(`El empleado`, empleado, `tiene un salario de: `, salario); 
           })
           .catch(err => console.log(err))
        
   })
   .catch(err=>console.log(err))

//Mejor forma:
let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then(salario => console.log(`El empleado`, nombre, `tiene un salario de: `, salario))
    .catch(err => console.log(err))



"ASYNC & AWAIT REPASO"

const getInfoUsuario = async( id ) => {

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
    
        return `El salario del empleado: ${ empleado } es de ${ salario }`;
        
    } catch (error) {
        throw error;
    }
}
//Cuando una funcion es asincrona se utilizan los mismos metodos que una promesa. Solo que en este caso, el "return" funciona como el resolve y el "throw" como el reject(en el try y catch) (No veo necesario el try y catch porque aun asi tirara el reject de algun await y este sera atrapado despues por el catch pero aun asi usa lo que te recomienden)

const id = 3;

getInfoUsuario( id )
    .then( msg => {
        console.log('TODO BIEN!')
        console.log(msg) 
    })
    .catch( err => {
        console.log('TODO SALIO MAL!')
        console.log( err ) 
    });




"FILESYSTEM"

const fs = require(`fs`);

console.clear()

const base = 8;
let salida = ``;

for(let i = 0; i<=10; i++){
    salida += `${base} x ${i} = ${base*i}\n`;
}

//Lo siguiente creara un archivo con ese nombre y tipo dentro de esa carpeta y dentro se mandara el valor de salida
fs.writeFile(`multiplication_table.txt`, salida, err=>{
    if(err) throw err;

    console.log(`Tabla creada`)
    
})

//Tambien esta lo siguiente 

fs.writeFileSync(`multiplication_table.txt`, salida); //Esto es lo mismo pero asincrono y no acepta como parametro el callback del error

console.log(`Tabla creada`)

"PACKAGE.JSON"

//Lo siguiente se debe hacer en todos los proyectos que creamos
//Linea de comandos:

//npm init
//Llenamos lo que nos pida y lo que no queramos poner no lo ponemos
//Esto nos creara un archivo package.json, en el cual tendremos varios datos de la aplicacion relacionados con node.
//En la propiedad scripts podemos poner dentro de ella propiedades, la cual tendra como valor algun comando que queramos poner en la linea de comandos pero utilizando el nombre de su propiedad
//Por ejemplo:
//npm run nombreDeLaPropiedad (La propiedad podria llamarse "test" y esta ejecutara el comando "node app")

//Cuando vamos a instalar un package, se pone como lo indica la pagina y cuando se instale, este se instalara en la propiedad "dependencies" del package.json y para que alguien ejecute tu aplicacion, debera tener esas dependencias

//Para instalar un package que solo se va a utilizar en produccion, se hace de la siguiente manera:
//Ejemplo: npm install nodemon --save-dev
//Lo anterior lo podras ver en el package.json, se generara una propiedad llamada "devDependencies" y ahi estara este paquete

//Supongamos que quiero instalar un version especifica de un package, se haria de la siguiente manera 
//npm install colors@1.0.4

//npm update actualizara todos los packages que tenemos a la version mas reciente