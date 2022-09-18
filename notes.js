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

console.log(h1, h2, h3); //Cada posicion de la desestructuracion tendra el valor de su respectiva posicion del array original.

const {v4 : uuidv4} = require(`uuid`); //De esta manera podemos nombrar una destructuracion





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

//Todos sus metodos son asincronos. Por lo tanto si ejecutamos varios de estos, no sabremos cual terminara de ejecutarse primero. Para saber y ponerles un orden podemos agregarle un Sync al final del metodo y por lo tanto se volveran sincronos. Cuando son asincronos, se ejecutan despues del codigo sincrono. Cuando son sincronas no necesitamos del callback en el metodo

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

//Metodos

//Leer archivo. Si esta fuera sincrona, esta va devolver el contenido, por lo tanto la podriamos obtener asignandole una variable
fs.readFile(`index.html`, `utf-8`, (err, content)=>{
    if(err){
        throw err;
    } 
    console.log(content);   
})

fs.rename(`index.html`, `main.html`, (err)=>{
    if(err){
        throw err;
    }
})

//Agregar algo al final de un archivo (crea el archivo si no existe)
fs.appendFile(`index.html`, `<p>XD</p>`, (err)=>{
    if(err){
        throw err;
    }
})

//Reescribe un archivo por completo(crea uno si no existe)

fs.writeFile(`index.html`, `Contenido nuevo`, (err)=>{
    if(err){
        throw err;
    }
})

//Elimina un archivo

fs.unlink(`index.html`, (err)=>{
    if(err){
        throw err;
    }
})


"PACKAGE.JSON"

//Lo siguiente se debe hacer en todos los proyectos que creamos
//Linea de comandos:

//npm init o npm init -y (este nos crea un package.json con valores por defecto)
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

"YARGS"

//Nota: para usar un paquete, lo debemos tener en dependencies

//Yargs tiene una propiedad llamada argv, la cual tiene como funcion la misma que process.argv pero en forma de objeto y para añadir una propiedad con un valor que querramos, se pone: --propiedad=valor y de esta manera con yargs podemos acceder a ese valor, no con la posicion, sino con el nombre

//Se puede hacer lo mismo pero con un espacio: --propiedad valor

//Yargs nos añade a la aplicacion, un comando --help 

const argv = require(`yargs`).argv;

"-------Option---------"

//forma corta: -b
//forma larga: --base
//De ahora en adelante llamare option a los argumentos de la linea de comando

//Si a una option no se le da un valor, por defecto le pone true

const {createFile} = require(`./multiplicacion`)
const argv = require(`yargs`)
                //option añade una opcion de comando y esta se puede ver en --help. Debido a que pusimos que este comando podria ser "b" y "base", al pasarlo como argumento en la linea de comandos (--base=5), este sera añadido al yargs.argv con el nombre "base" y el nombre "b"
                .option(`b`,{   
                    alias: `base`,
                    type: `number`,
                    demandOption: true, //Esto nos dice que el comando a fuerza debe llevar un valor, sino dara error
                    escribe: `Is the base of the multiplication table` //Agrega una descripcion en el --help
                })
                .option(`l`,{
                    alias: `list`,
                    type: `boolean`,
                    default: false,
                    demandOption: true,
                    escribe: `Show the multiplication table on console`
                })
                .check((argv, options)=>{  //Check es para ponerle condiciones a las opciones
                    console.log(argv);     //Nos regresa el objeto de yargs.argv
                    if(isNaN(argv.b)){
                        throw `The base must be a number`
                    } 
                    return true; //Debemos retornar true si no hay ningun error, sino aunque no haya tirara uno, es una regla del check
                })
                .argv;

                
console.log(argv);

createFile(argv.b, `multiplication_table.txt`, argv.list)
  .then(nameFile=>console.log(nameFile, `created`))
  .catch(err=>console.log(err));


"-------Yargs independiente---------"

  //Debe crearse una carpeta llamada config o yargs en nuestra aplicacion y dentro crear un archivo yargs.js y dentro de este ira toda la configuracion de los yargs



"COLORS PACKAGE DATA"

const createFile = async (base, fileName, list, until)=>{
    try{
        const fs = require(`fs`);
        let salida, consola = ``; //Hay que tener cuidado con mandar informacion al achivo creado que contenga cosas que no querramos pero que si queremos que esten en consola y para eso se hace esto

        for(let i = 1; i<=until; i++){
            salida += `${base} ${`x`} ${i} = ${base*i}\n`; 
            consola += `${base} ${`x`.green} ${i} = ${base*i}\n`; 
        }
        

        if(list) console.log(consola); 
            
        fs.writeFileSync(fileName, salida);
    
        return fileName;
    } catch(err){
        throw err;
    }
}

"GITIGNORE DATA"

//Para hacer que nuestro gitignore ignore archivo dentro de una carpeta, se hace como ejemplo lo siguiente: /salida/*.txt 
//Cuando un directorio tiene un directorio, del cual vamos ignorar todo lo que tenga dentro, debemos crear por lo menos algo dentro, por ejemplo un info.md
//Tambien los node_modules deben ser ignorados ya que no es necesario seguir los cambios que se hagan ahi. De hecho si borramos esa carpeta, nuestra aplicacion ya no funcionara porque requiere de los packages instalados. Pero si la borramos, esta carpeta puede recuperarse facilmente, simplemente poniendo en la linea de comandos: npm install
//git checkout -- . nos regresa a lo que teniamos en el ultimo commit

//Para ver como se vera nuestro README en github, buscamos markdown open preview en el command palette de VSC

"SOLO ES PARA ANALIZAR CODIGO "

//--------app.js---------
require(`colors`);

const { showMenu, pause } = require("./helpers/messages");

console.clear();

const main = async()=>{
    let opt = ``;
    do{
        opt = await showMenu();
        console.log(opt);
        if (opt !== `0`) await pause();
    } while(opt !== `0`)
}

main();

//--------messages.js----------

const { resolve } = require("path");

require(`colors`);


const showMenu = ()=>{
    return new Promise(resolve=>{
        console.clear();
        console.log("================".green);
        console.log("Option Selection".green);
        console.log("================\n".green);
    
        console.log(`${`1`.green} Create chore`);
        console.log(`${`2`.green} List chores`);
        console.log(`${`3`.green} List complete chores`);
        console.log(`${`4`.green} List pending chores`);
        console.log(`${`5`.green} Complete chore(s)`);
        console.log(`${`6`.green} Delete chore`);
        console.log(`${`0`.green} Exit\n`);
    
        const readline = require(`readline`).createInterface({
            input: process.stdin, //Lo que hace esto es pausar la ejecucion de la aplicacion y esperar caracteres y un enter
            output: process.stdout //Lo que hace esto es mostrarle un mensaje al usuario cuando le estemos pidiendo algo con la question
        });
    
        readline.question(`Select an option: `, opt=>{ //El primer parametro recibe el mensaje que llevarl stdout y el segundo recibe lo que se ponga en el stdin
            // console.log(opt); //Esto nos devolvera lo que pongamos en el stdin al darle enter
            readline.close(); //Esto hara que salgamos del modo de readline
            resolve(opt);
        })  
    })  
}

//No se pueden poner 2 readline al mismo tiempo, siempre se pondra la ultima. Si queremos hacer dos, tenemos que esperar a que la primera de una respuesta, la cierre y ahora si crear otra readline que tambien de una respuesta

const pause = ()=>{
    return new Promise(resolve=>{
        const readline2 = require(`readline`).createInterface({
            input: process.stdin, 
            output: process.stdout 
        });
    
        readline2.question(`\nPress ENTER to continue\n `, opt=>{  
            readline2.close(); 
            resolve();
        })   
    }) 
}

module.exports = {
    showMenu,
    pause
}

"IMPORT Y EXPORT"
//Primero pon en el package.json lo siguiente debajo de "main":
//"type": "module", 


//en vez de usar:
const inquirer = require(`inquirer`);
//usa:
import inquirer from `inquirer`;

//en vez de usar:
module.exports = {
    funcion,
}
//usa:
export {funcion};


"MODULO OS(Operating System)"

//Es un modulo que necesita del require

const os = require(`os`);

console.log(os.type()); //Tipo de sistema operativo 
console.log(os.homedir()); //Ruta de instalacion
console.log(os.uptime()); //Numero de segundos que tiene abierto el sistema operativo
console.log(os.userInfo()); //Informacion del usuario



"MODULO TIMERS"

setImmediate(funcion, argumento1, argumento2); //Ejecuta la funcion inmediatamente despues del codigo sincrono y se ejecuta de forma asincrona



"NPM"

//Solo podemos importar (con require) archivos .js o una carpeta con un archivo package.json que contiene una propiedad "main"
//Solo los modulos con un archivo package.json son paquetes, tambien nuestra aplicacion la consideramos como paquete
//Dependencia: paquete que otro paquete necesita para funcionar

//npm init --yes //Para crear un npm de forma rapida
//npm install para instalar todas las dependencias que estan en el package.json
//npm install express --save-dev //Esto es para instalar ese paquete en las devDependencies



"JSON"

//Es solo un archivo de texto, como si fuera un bloc de notas


"PACKAGE-LOCK.JSON"

//Se genera automaticamente cuando npm modifica el arbol de node_modules o package.json
//Describe el arbol generado para que futuras instalaciones puedan generar exactamente el mismo arbol
//Gracias a este, otros desarrolladores pueden instalar exactamente las mismas dependencias que tu
//La propiedad packages es un objeto que asocia la ubicacion de cada paquete con un objeto que contiene informacion sobre ese paquete

"MODULO EVENTS"

"------Emitters-------"

//Sob objetos que emiten eventos nombrados y llaman a funciones especificas cuando ocurren
//Son instancias de la clase EventEmitter
//Una instancia es un objeto que se deriva de algun otro objeto. Tambien un objeto puede derivarse de una clase

//Tienen un metodo .on() para asociar una funcion al evento. La funcion se ejecuta cuando ocurre un evento. Y a esto se le conoce como "Event Handler"

const EventEmitter = require(`events`); //En este caso no le ponemos el mismo nombre a la constante que el nombre del modulo, ya que lo que nos va devolver es una clase (funcion constructora) llamada EventEmitter

const emisorProductos = new EventEmitter(); //Con esto podremos crear eventos y mandarlos a llamar cuando hagamos determinada accion

emisorProductos.on(`compra`, (total, numProductos) => {
    console.log(`Se realizo una compra por ${total}, con un total de ${numProductos}`)
}); //Aqui lo que hacemos es crear un evento con su respectivo nombre. Es como cuando creamos una funcion sin mandarla a llamar. Esto es un "Event Handler"

emisorProductos.emit(`compra`, 500, 5); //Aca mandamos a llamar la ejecucion del evento con su respectivo nombre y pasarle sus respectivos parametros al callback de la creacion de este evento. Es como cuando mandamos a ejecutar una funcion



"PROTOCOLO"

//Conjunto de reglas que permiten transmitir informacion entre dispositivos de una red




"SOLICITUDES HTTP"

//Request = solicitud
//Metodos HTTP = es la accion que se requiere hacer con la solicitud 
//Path = le dice al servidor donde esta el recurso que se requiere modificar o con el que se va realizar la accion 
//Headers = proveen mayor informacion para el servidor
//Body = Si se necesita enviar alguna informacion al servidor



"RESPUESTAS HTTP"

//Response = respuesta
//Codigo de estado = exitoso, con errores, etc.
//Texto de estado = describe el codigo con mas detalle 
//Version HTTP
//Headers = informacion adicional de la respuesta
//Body = este se ocupa cuando el servidor retorna un recurso que necesite el cliente



"CODIGOS DE ESTADO"

//100 - 199 respuesta informativa
//200 - 299 respuesta satisfactoria
//300 - 399 redirecciones
//400 - 499 errores de los clientes
//500 - 599 errores de los servidores

//https://developer.mozilla.org/es/docs/Web/HTTP/Status



"MODULO HTTP Y CREAR SERVIDOR"

//Nos sirve para crear un servidor

const http = require(`http`);

const server = http.createServer((req, res)=>{
    console.log(`Solicitud nueva`);
    res.end(`Soy la respuesta`); //Esto se mostrara en nuestro localhost (servidor) como si hubieramos hecho un document.write pero en realidad ahi se pondra la respuesta del servidor
}) //El callback se ejecutara cada vez que realizemos una solicitud al servidor

const PUERTO = 3000;

server.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en http://localhost:${PUERTO}...`)
}); //En este momento el servidor comenzara a escuchar pero tiene que saber donde escuchar y para eso en el primer parametro se pone el puerto. Tambien opcionalmente podemos decirle que hacer cuando comienze a escuchar y esto se hace con el callback que va en el segundo parametro

//Con todo lo anterior ya tendriamos nuestro server creado en tan solo 9 lineas
//Para echarlo a andar hay que hacer lo mismo de siempre, ejecutar el codigo en consola: node app.js

//--------------------------------------------------
const http = require(`http`);

http.createServer((req, res)=>{
    res.setHeader("Content-Disposition", "attachment; filename=lista.csv"); //Con esto le decimos el nombre del archivo, su tipo y que ahi se pondra la respuesta
    res.writeHead(200, {"Content-Type": "application/csv"}); //Con este content-type, el navegador por lo menos sabe que tiene que descargar un archivo

    res.write('id, name\n');
    res.write('1, Roberto\n');
    res.write('2, Eduardo\n');
    res.write('3, Gallardo\n');

    res.end();
})
.listen(8080);
//---------------------------------------------------





"PORT/PUERTO"

//Ubicacion virtual del sistema operativo en la cual se puede acceder a una aplicacion o a un proceso especifico que se este ejecutando en ese puerto
//Estan representados por numeros enteros positivos, por ejemplo: 3000



"REQ Y RES"

const http = require(`http`);

const server = http.createServer((req, res)=>{
    // console.log(req.url); //Nos da el camino de la solicitud que va despues del dominio
    // console.log(req.method); //Nos devuelve el metodo utilizado en esa request
    // console.log(req.headers); 

    // console.log(res.statusCode); //Codigo de estado de la respuesta
    
    // res.setHeader(`content-type`, `aplication/json`); //Con esto le agregamos algo a los headers de la respuesta
    // console.log(res.getHeaders()); //Con esto optenemos lo que tenemos en los headers
    res.end(`Soy la respuesta`); 
}); 

const PUERTO = 3000;

server.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en http://localhost:${PUERTO}...`)
}); 

"EXTENSION REST CLIENT DE VSC"

 //Para utilizarla tenemos que crear un archivo index.http y en el poner por ejemplo: POST http://localhost:3000/ y enviar el request hasta arriba en el VSC. Cuando revisemos lo que regreso req.method, nos fijaremos que devuelve POST


"ESTRUCTURA DE UNA URL"

//https(Protocolo: conjunto de reglas para acceder a un recurso en especifico)
//www. (Subdominio: permite a los sitios webs organizar y separar la informacion para distintos propositos)
//freecodemap (Dominio: referencia unica)
//.org (Dominio de nivel superior (TLD))
//espanol/ (Path: archivo o directorio en el servidor web. Puede tener parametros para personalizarlo. Estos parametros son parte de la URL)

//https://www.ejemplo.org/usuarios/1423 . Estos es un ejemplo de un "Parametro de ruta". Nos permite personalizar esa url para acceder especificamente a los datos que queremos
//https://www.google.com/search?q=cursos+de+node . Esto es un ejemplo de "Parametro query". La caracteristico es el signo de interrogacion. Son parametros usados para obtener contenido dinamico. Por ejemplo, filtrar una lista de recursos. Si te fijas tenemos una clave y un valor: q=cursos+de+node. Igual que en un objeto
//Tambien se pueden poner varios "parametros query" y se separan con un "&", por ejemplo: q=cursos+de+node&sourceid=chrome&ie=UTF-8. //Usamos parametros query para filtrar solicitudes GET

"MODULO URL"

//No necesita require

const myURL = new URL(`https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1`);

console.log(myURL.hostname); //www.ejemplo.org
console.log(myURL.pathname); // /cursos/programacion

console.log(myURL.searchParams); //{ "ordenar":"vistas", "version":"1"}
console.log(myURL.searchParams.get(`ordenar`)); //vistas
console.log(myURL.searchParams.get(`nivel`)); //1

console.log(myURL.protocol); //https



"ROUTING"

//Significa manejar las solicitudes del cliente en base a ciertos criterios: metodo y camino
//Route = ruta
//Routing significa crear distintas rutas para ese servidor para que ese servidor sepa que hacer con una solicitud especifica. Es como crear un mapa y decirle al servidor: !ey¡ quiero que manejes este tipo de solicitud para este camino en particular, de esta forma.

"-------Criterios-------"

//El metodo de la solicitud HTTP (GET, POST, PUT, DELETE) y con esto conocemos el tipo de operacion.

//El path de la solicitud HTTP. De esta forma el servidor sabe el recurso especifo que usara para crearlo, editarlo, eliminarlo o modificarlo.

//Ruta = metodo + path + como manejarlo (¿que? ¿donde? ¿como?)

//Un ejemplo de lo que le solicitamos al servidor es: Si recibes una solicitud POST en /cursos haz esto...

"------Manejar rutas en sevidor node------"

const http = require(`http`);
const {infoCursos} = require(`./cursos.js`);

const manejarSolicitudGET = (req, res)=>{
    const path = req.url; //Recuerda que .url nos regresa el path de la url
    if(path === `/`){
        //  res.statusCode = 200; //No es necesario porque por defecto el statusCode es 200
         res.writeHead(200, {"Content-Type": "aplication/json"} ); //Con esto agregamos informacion a la cabecera de la respuesta. El primer parametro es el codigo de respuesta y el segundo lo que se va agregar a la cabecera
         return res.end(`Bienvenidos a mi primer servidor y API con node`); //Siempre usa el return para cuando envies la respuesta (Solo hay una respuesta una solicitud)
    } else if (path === `/cursos`){

        return res.end(JSON.stringify(infoCursos)); //Para ver esto de una mejor manera en el servidor, podemos usar la extension JSON view de google chrome
    } else if (path === `/cursos/programacion`){
        return res.end(JSON.stringify(infoCursos.programacion));
    } 

    //Si no se encuentra un ruta valida, haz lo siguiente:
    //Si te preguntas porque aqui no usamos el else es porque si recuerdas, el res.end(respuesta), termina la respuesta y la envia, has de cuenta similar a un return 
    res.statusCode = 404; 
    res.end(`El recurso solicitado no existe...`);    
};

const manejarSolicitudPOST = (req, res)=>{
    const path = req.url;

    if(path === `/cursos/programacion`){
        //-----Procesar cuerpo de un POST-----
        let cuerpo = ``;

        req.on(`data`, content=>{
            cuerpo = content.toString(); //Si no guardamos el cuerpo con un .toString() nos dara un error de buffer
        }) //Este evento recibe la informacion del POST y la almacena en "content"

        req.on(`end`, ()=>{
            cuerpo = JSON.parse(cuerpo);
            console.log(cuerpo); //Aqui se guarda lo que enviamos desde el POST y eso significa que lo procesamos correctamente:)
            return res.end(`The server have recibed POST request for /cursos/programacion`);
        }) //Este evento detecta cuando se termina de procesar la informacion
        //------------------------------------
    }

    res.statusCode = 404;
    return res.end(`El recurso solicitado no existe...`);
};

const server = http.createServer((req, res)=>{
    const {method} = req;  

    switch(method){
        case `GET`:
            return manejarSolicitudGET(req, res);
        case `POST`:
            return manejarSolicitudPOST(req, res);
        default: 
            res.statusCode = 501;
            console.log(`El metodo usado no puede ser manejado por el servidor: ${method}`);
            break;
    }

});

const PUERTO = 4000;

server.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
})



"API"

//Nos permite que un software ofrezca servicio a otro software. Permite que dos aplicaciones se comuniquen. En este caso quien se comunicara sera el cliente y el servidor



"REST (Representational State Transfer)"

//Es un estilo de arquitectura de software para sistemas hipermedia distribuidos como la World Wide Web

//RESTful API: es una API basada en REST




"EXPRESS JS"

const express = require(`express`);

const app = express();

"-------Routing--------"

//Con el siguiente metodo se manejan los request y response de GET
app.get(`/`, (req, res) => {
    res.send(`This is my first server with express`);

});

app.get(`/api/courses`, (req, res) => {
    res.send(JSON.stringify(infoCourses));
});

app.get(`/api/courses/programation`, (req, res) => {
    res.send(JSON.stringify(infoCourses.programacion));
});

app.get(`/api/courses/matematicas`, (req, res) => {
    res.send(JSON.stringify(infoCourses.matematicas))
})

//Lo siguiente hara que si hay un camino en el que se hizo una peticion get que no existe, mandara eso como respuesta
app.get(`*`, (req, res)=>{
    res.send(`404 | Page not found`);
})

const PORT = process.env.PORT || 3000; //el process.env.PORT lo que hara es obtener el puerto que se le asigna cuando hosteamos una pagina ya bien

app.listen(PORT, () => {
    console.log(`The server is listening in the port: ${PORT} `)
});


"--------Parametros-de-ruta---------"

//Parametros de ruta
//Los parametros de ruta se indican con ":" antes del parametro, despues obtenemos el valor de ese parametro dependiendo de lo que ponga el usuario en ese parametro. El valor dependera de lo que ponga el usuario despues de /programation y este valor se agregara dentro de una variable con req.params.parametroderuta
//Si lo que haya en ese parametro no existe en nuestra base de datos, podemos enviar una respuesta con un mensaje de error y aparte indicarle el codigo de status con .status(num) y despues de eso enviarla con el .send()
app.get(`/api/courses/programation/:language`, (req, res) => {
    const language = req.params.language;
    const result = infoCourses.programacion.filter(course => course.lenguaje === language);

    if(result.length === 0){
        return res.status(404).send(`${language} not found`); //Aqui hubiera sido mejor utilizar un codigo 204
    }




    res.send(JSON.stringify(result));
});

app.get(`/api/courses/programation/:language/:level`, (req, res) => {
    const language = req.params.language;
    const level = req.params.level;
    const result = infoCourses.programacion.filter(course => course.lenguaje === language && course.nivel === level);

    if(result.length === 0){
        return res.status(404).send(`${language} and ${level} course not found`); //Aqui hubiera sido mejor utilizar un codigo 204
    }

    res.send(JSON.stringify(result));

});


"---------Parametros-query----------"

app.get(`/api/courses/programation/:language`, (req, res) => {
    const language = req.params.language;
    const result = infoCourses.programacion.filter(course => course.lenguaje === language);

    if(result.length === 0){
        return res.status(404).send(`${language} not found`); //Aqui hubiera sido mejor utilizar un codigo 204
    }

    //-----------------------------------------------
    //Con esto logramos manejar los parametros query
    if(req.query.organize === `vistas`){
        return res.send(result.sort((a, b) => b.vistas - a.vistas))
    }
    //Podriamos meterlo a una funcion porque seguramente en proyecto real se utilize este parametro muchas veces
    //------------------------------------------------

    res.send(JSON.stringify(result));
});

"------------Routers--------------"

//De la siguiente manera creamos routers y estos son utilizados para cuando se repiten muchas veces alguanas rutas y se crean de la siguiente manera:
const programacionRouter = express.Router();
app.use(`/api/courses/programation`, programacionRouter);

const matematicasRouter = express.Router();
app.use(`/api/courses/matematicas`, matematicasRouter);

//Ahora en vez de usar app. , usaremos el nombre de la constante que almaceno alguna ruta y despues ya no pondremos la ruta completa, sino solo lo que hace falta completar

programacionRouter.get(`/`, (req, res) => {
    res.send(JSON.stringify(infoCourses.programacion));
});

programacionRouter.get(`/:language`, (req, res) => {
    const language = req.params.language;
    const result = infoCourses.programacion.filter(course => course.lenguaje === language);

    if(result.length === 0){
        return res.status(404).send(`${language} not found`); //Aqui hubiera sido mejor utilizar un codigo 204
    }

    if(req.query.organize === `vistas`){
        return res.send(result.sort((a, b) => b.vistas - a.vistas))
    }

    res.send(JSON.stringify(result));
});

//Para ver como ordenamos los routers por archivos, visita el proyecto que hizimos con el curso de freeCodeCamp


"---------POST-------------"

//Middleware: las funciones middleware se ejecutan despues de recibir una solicitud y antes de enviar una respuesta.
//Tienen acceso al objeto de la solicitud, al objeto de la respuesta y a next(), una cuncion que se llama para ejecutar el proximo middleware
//Puedes averiguar tambien sobre el .next()
//Esto nos va permitir procesar el cuerpo de esa solicitud en formato json y poder trabajar con ese cuerpo de la solicitud en nuestro codigo, por ejemplo para la propiedad req.body, si no se usa el middleware, el valor de req.body sera "null"
programacionRouter.use(express.json()); 

programacionRouter.post(`/`, (req, res) => {
    const newCourse = req.body;
    programacion.push(newCourse);
    res.send(programacion);
});


"------------PUT--------------"

//Identidad en base de datos: es algo que vas almacenar en tu base de datos que tiene sus propiedades y valores especificos
//Para actualizar una propiedad de una identidad, tenemos que enviar todas las propiedades y solo enviar diferentes las que queremos actualizar

programacionRouter.put(`/:id`, (req, res) => {
    const updateCourse = req.body;
    const id = req.params.id;

    const index = programacion.findIndex(course => course.id == id);

    if (index >= 0){
        programacion[index] = updateCourse;
    }

    res.send(JSON.stringify(programacion));
});

//Recuerda que get muestra la informacion en el servidor, los demas metodos no, sus respuestas las podemos ver en el mismo index.http


"---------Patch------------"

//Este metodo http es muy parecido a put pero si nos permite pasar pares clave-valor especificos, los pares clave-valor especificos de una identidad, los cuales queremos actualizar. No es necesario enviar las propiedades que no se van a modificar como lo es en el caso de put.

programacionRouter.patch(`/:id`, (req, res) => {
    const updateInfo = req.body;
    const id = req.params.id;

    const index = programacion.findIndex(course => course.id == id);

    if(index >= 0){
        const cursoAModificar = programacion[index];
        Object.assign(cursoAModificar, updateInfo); //Con este metodo de "Object" remplazamos propiedades especificas de un objeto
    }

    res.send(JSON.stringify(programacion));
});

//Nota: Cuando utilizes el formato JSON evita poner una "," despues de la ultima propiedad y tambien evitala poner si en un objeto hay solo una propiedad. Con esto te evitaras muchos errores


"---------Delete-----------"

programacionRouter.delete(`/:id`, (req, res) => {
    const id = req.params.id;

    const index = programacion.findIndex(course => course.id == id);

    if(index >= 0){
        programacion.splice(index, 1);
    }

    res.send(JSON.stringify(programacion));
});


"--------Datos------------"

//NOTA: no es necesario enviar la respuesta con un JSON.stringify porque el metodo .send() ya lo hace por defecto con los objetos que recibe y no tiene el formato json completo, por ejemplo, convierte {nombre: "victor"} a "{"nombre": "victor"}", basicamente le agrega lo que le falta y ademas lo convierte en string

//res.json() equivale a res.send() pero siempre enviara la respuesta en un formato json. Por defecto a cualquier parametro se le aplica un JSON.stringify()
//Mientras que res.send() puede enviar como respuesta no necesariamente objetos json, sino que tambien buffer, strings, objetos o arrays y va a configurar el tipo de contenido automaticamente

//res.end() lo que hace es enviar una respuesta vacia y el navegador te tirara un error indicando su respectivo error. Esto se usa en los casos reales al crear nuestras paginas web, ejemplo: 

//En vez de hacer lo siguiente: 

if(result.length === 0){
    return res.status(404).send(`${language} not found`);
}

//Haz lo siguiente:

if(result.length === 0){
    return res.status(404).end();
}

//El uso de estas dos anteriores depende de si tu quieres enviar una respuesta vacia o algun contenido o descripcion del porque ocurrio lo que ocurrio en el servidor

//Usualmente el error 404 se utiliza para un camino que no es valido, que no existe o que no lleva ningun recurso en el servidor
//Pero si en lugar de decirle que el camino no existe o no es valido, le queremos decir que no se encontro contenido, entonces utilizariamos el codigo de status 204
//Codigo de status 204: la peticion se ha completado con exito pero su respuesta no tienen ningun contenido, aunque los encabezados pueden ser utiles 
//Este error se pone mas que nada cuando ya hay 1 parametro (el primero despues del dominio) de la ulr que si existe dentro del servidor y los que le siguen son invalidos



"MAPBOX GEOLOCATION"

//Es una api que sirve para obtener informacion de una busqueda de ciudad o dependiendo de como configures el "Geocoding API Playground"
//La info que solicites se obtendra con una solicitud HTTP

"AXIOS"

//Axios hace solicitudes HTTP

//Siempre que usemos axios, hay que meter todo su proceso y lo relacionado a el, dentro de un try catch para manejarlo de mejor manera en caso de que la solicitud tire un error por x razon

const res = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?limit=8&proximity=ip&language=es&access_token=pk.eyJ1IjoidmljdG9yd2tleSIsImEiOiJjbDgyaHV6czUwODNuM3BxamZlOG1haHl0In0.w8WJxoGJn7KwqcOpUFT_0w`);

console.log(res.data);

//Para lo que lo de arriba sea mas legible y no se vea un desorden, tenemos que crear una instancia de axios, de la siguiente manera. Lo de abajo equivale a todo lo de arriba pero es mas legible y controlable

const instance = axios.create({
    baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
    params: {
        "access_token": "pk.eyJ1IjoidmljdG9yd2tleSIsImEiOiJjbDgyaHp3dGEwcHp5M3ZvMzYxM3JqMjd1In0.MWJiyM4OMYjXucxnDXZkEg",
        "limit": 8,
        "language": "es" 
    }
});

const res = await instance.get();  //Es lo mismo que poner axios.get("http://url.com") pero como ya creamos una instancia, se manda a llamar con el nombre de la instancia, el metodo (en este caso) y los parentesis vacios porque en si la instancia ya los tiene incluidos desde el momento que los creamos

console.log(res.data);



"VARIABLES DE ENTORNO CON DOTENV"

import * as dotenv from 'dotenv';
dotenv.config();

//process.env lo que hace es que ahi guarda muchas variables de entorno que despues pueden ser utilizadas
//Lo que hace dotenv es agregar variables de entorno al proccess (las que queramos)
//Para agregarlas necesitamos crear un archivo sin nombre de tipo env: ".env" y guardar la variable de entorno que vayamos a utilizar
//¿Por que hariamos uso de una variable de entorno? porque podemos utilizar diferente claves, tokens, etc que vamos a repetir y usar varias veces en nuestro programa, o incluso podriamos llegar a tener la necesidad de cambiarlas, y tambien es muy molesto e incomodo y dificil de leer estas claves ya que tienen muchos numeros y digitos.
//Ejemplo de lo que deberiamos poner en el archivo ".env": 

MAPBOX_KEY=pk.eyJ1IjoidmljdG9yd2tleSIsImEiOiJjbDgyaHp3dGEwcHp5M3ZvMzYxM3JqMjd1In0.MWJiyM4OMYjXucxnDXZkEg

//Para mandar a llamar el valor de esta variable, tendriamos que utilizar el proccess.env, ya que ahi se almacenan las variables de entorno

process.env.MAPBOX_KEY

//Es muy comun que si se trata de tokens propios o codigos que solo nosotros podemos usar o que son privados, no subamos el .env a github, sin que subamos un archivo env de la siguiente manera:
//example.env
//Y dentro de ese archivo poner por ejemplo lo siguiente:

MAPBOX_KEY=aqui_va_el_token


"DATOS"

//al usar el metodo .map() en un array, en vez de utilizar un return para retornar un objeto, podemos utilizar parentesis, por ejemplo:

arrayEjemplo.map(i => ({
    id: i,
}))



"USO DEL OPERADOR SPREAD"

//EJEMPLO

const obj = {
    nombre: "victor",
    apellido: "Lopez",
    edad: "18"
}

const crearNuevoObjeto = (propiedad1, propiedad2) =>{
    return  {
        ...obj,
        propiedad1,
        propiedad2
    }

}

console.log(crearNuevoObjeto("valor1", "valor2")); // {nombre: "victor", apellido: "Lopez", edad: "18", propiedad1: "valor1", propiedad2: "valor2"}

//Si queremos hacer uso del operador spread con un objeto, este debera ser utilizado dentro de otro objeto para poder "copiar y pegar" las propiedades un objeto dentro de otro objeto. Si analizas por que si ponemos ...obj en un console.log(), tiene mucha logica el porque da error y con un array no. No podemos hacer un console.log(nombre: "victor")




"SERVIR CONTENIDO ESTATICO"

const express = require("express");

const app = express();

const port = 8080;


//Para que cualquier persona que sepa el url de nuestra pagina pueda ver (ejecutar) archivos publicos, tenemos que agregar esos archivos dentro de una carpeta que se llame "public"
//Para hacer que esa carpeta y su contenido sea publico, se usa un middleware:
app.use(express.static(__dirname + "/public")); //El metodo static indica que la pagina sera estatica y utilizara lo que esta dentro de public, y por lo tanto ocupara el lugar de "./" y al hacer la solicitud get ahi, se cargara el archivo "index.html" que esta dentro de la carpeta "public", en vez de cargar la respuesta que se envio en el res.send() de abajo
//El path "/" es igual a lo que esta directamente dentro de la carpeta "public", pero solo cargara el archivo que se llame index.html
//Ahora, si queremos cargar un archivo html pero en otro path, por ejemplo, que en vez de que se cargue la respuesta enviada en el app.get("./hola-mundo"), se cargue un archivo .html, tenemos que crear dentro de la carpeta "public", otra carpeta con el nombre de ese path, en este caso "hola-mundo" y poner dentro de ahi el archivo index.html que se va cargar en ese path
//Lo que hara nuestra aplicacion (gracias al middleware) es checar si hay alguna carpeta dentro del public con el nombre de algun path, y utilizar los archivos que estan ahi, los cuales es como si los mandaras a llamar con un metodo get. Si no hay una carpeta con el nombre de un path, entonces si pasara a mandar como respuesta lo que le mandemos en el app.get(`/hola-mundo`)
//Si no entiendes esto, regresa a ver la clase 89

// app.get(`/`, (req, res) => {
//     res.send(`respuesta de esta ruta`);
// }) //Esto ya no se va ejecutar, por que ya se llamo al index.html dentro de esa ruta gracias al middleware

app.get(`/hola-mundo`, (req, res) => {
    res.send(`Hola mundo in his respective path`);
})

app.get(`*`, (req, res) => {
    res.sendFile(__dirname + `/public/404.html`); //Este metodo enviara una respuesta que  ejecutara un determinado archivo dentro de ese path, en este caso, dentro de cualquier path no definido
})

//__dirname es el path donde esta ubicada nuestra ubicacion, es como si pusieramos `./public/404.html` (observa que hay un puntito), pero express pide que lo pongamos de la manera anterior: con __dirname
//Recuerda que lo que va en el public, es publico para el usuario


app.listen(port , ()=>{
    console.log("Server is listening");
})

//-------------------------------------
//*OBSERVACION MIA
app.get(`/productos`, (req, res) => {
    res.sendFile(__dirname + `/public/productos.html`); 
});

//Lo anterior es equivalente a que crearamos una carpeta llamada "productos" dentro de la carpeta "public" y dentro de ella pongamos un index.html con la misma info que pondriamos dentro del "productos.html"
//Pero por buenas practicas, se usa el metodo de la carpeta, el otro metodo solo lo recomendaria solo para manejar los paths que no existen



"HANDLEBARS"

//Renderiza una webapp del lado del backend y al cliente le manda ya la aplicacion renderizada

//Con handlebars podemos por ejemplo reutilizar bloques de codigo de un html para utilizarlo dentro de otro path, y no tener que copiar y pegar el mismo bloque varias veces, etc. (ejemplo: el navbar, footer, header, etc)

//En caso de que vayamos a utilizar handlebars con express, tenemos que instalar "hbs", el cual se encuentra bajando un poco en su pagina de npm
//npm i hbs

//Cuando tenemos que renderizar un templete engine, tenemos que decirle a express que utilice handlebars con lo siguiente:

app.set('view engine', 'hbs');

//Para poder renderizar lo que querramos renderizar, tenemos que crear una carpeta estrictamente llamada "views", en la cual crearemos archivos .hbs, en los cuales estaran los templates que sean que querramos utilizar
//Por ejemplo, crear un archivo "home.hbs" y dentro de el poner el codigo html del home
//Despues para renderizarlo en el path "/", tenemos que usar lo siguiente:

app.get(`/`, (req, res) => {
    res.render('home'); //En vez de usar un res.sendFile(), usamos el res.render("nombredelarchivohbs") el cual es un metodo que se usa con handlebars, no es necesario especificar la carpeta views porque handlebars ya lo sabe
}); //Aqui lo que sucedera es que renderizara el codigo html y por lo tanto cargara nuestra pagina como si estuviera cargando un archivo de extension .html
//Al callback en este ejemplo se le llama "controlador"



"---------Argumentos-desde-el-controlador---------"

//Para enviar argumentos desde el controlador se hace lo siguiente:

app.get(`/`, (req, res) => {
    res.render('home', {
        curso: "Curso de node",
        nombre: "Victorito"
    });
})

//Y despues podemos utilizar esas variables dentro de nuestro archivo home.hbs de la siguiente manera

<title>{{ curso }}</title> // <title>Curso de node</title>

//Te preguntaras, para que sirve esto? para renderizar informacion al cliente y que piense que siempre existio eso, que asi se renderizo la pagina, de hecho asi se renderizo la pagina exlcusivamente para el, con datos de el por asi decirlo
//Con lo anterior logramos mandar informacion desde nuesto controlador, hasta la vista de la web
//Renderizamos el archivo hbs


"-------Parciales-con-hbs-----------"

//Se utilizan para reutilizar codigo 
//Creamos una carpeta dentro del views con el nombre que sea, por ejemplo "partials"

const hbs = require('hbs'); 

hbs.registerPartials(__dirname + '/views/partials');

//Con estas dos lineas anteriores ya podemos usar parciales
//Para eso crearemos archivos hbs dentro de la carpeta partials, cada uno con su respectivo contenido, por ejemplo, el header.hbs contendra dentro las etiquetas html necesarias para el home

<header id="header">
	<div class="logo"><a href="index.html">Road Trip <span>by TEMPLATED</span></a></div>
	<a href="#menu"><span>Menu</span></a>
</header>

//Dentro del home.hbs (este archivo no esta en partials, esta directamente en views), donde necesitemos el header, lo pondremos de la siguiente manera:

{{> header}}

//Y listo, tendremos nuestro header en el home

//Si te das cuenta, aunque los argumentos del controlador no este puestos directamente en su path, aun asi se le mandara los argumentos desde el parcial



"PREPARAR WEBSERVER PARA SUBIRLO A UN HOSTING"

//Si te das cuenta, si cerramos nodemon o la ejecucion node, nuestra aplicacion se cae porque el servidor se apaga
//El hosting sirve para subirlo a la red y este siempre activo

//Tenemos que crear un .env, para las variables de entorno y primero instalar su respectivo paquete

PORT=8081

//Le pondremos por defecto "PORT" , ya que los hostings por defecto sacan el port del enviroment

//Tenemos que agregar lo siguiente a nuestro package.json en la propiedad "scripts"

"start": "node app.js"

//Tambien es recomendable agregar un .gitignore y ignorar node_modules/



"DESPLEGAR WEBSERVER EN HEROKU"

//Desplegar aplicacion en la nube con Heroku, un servicio serverless

//Hay varias que funcionan como esa, por ejemplo: firebase hosting, amazon web servicers, google cloud, microsoft azure, digitial occean y Heroku

//Heroku da hasta 5 aplicaciones gratuitos 

//En el tier gratuito, si alguna de nuestras 5 aplicaciones, si pasan 30 minutos sin actividad, se suspenden, pero tan pronto recibe una peticion, estara activa por otros 30 minutos

//Le damos a new, le damos el nombre

//Instalamos heroku CLI si no lo tenemos
//Para comprobar eso ponemos heroku --version en nuestra terminal

//heroku login, etc



"DESPLEGAR APLICACIONES DE ANGULAR Y REACT"

//Para hacer eso solo tenemos que eliminar el codigo que tiene que ver con los handlebars

//Handlebars
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');

app.get(`/`, (req, res) => {
    res.render('home', {
        curso: "Curso de node",
        nombre: "Victorito"

    });
})
app.get(`/elements`, (req, res) => {
    res.render('elements', {
        curso: "Curso de node",
        nombre: "Victorito"

    });
})
app.get(`/generic`, (req, res) => {
    res.render('generic', {
        curso: "Curso de node",
        nombre: "Victorito"

    });
})

//Poner lo siguiente de la siguiente manera, y listo
app.get(`*`, (req, res) => {
    res.sendFile(__dirname + `/public/index.html`); //Este metodo enviara una respuesta que  ejecutara un determinado archivo dentro de ese path, en este caso, dentro de cualquier path no definido
})


//Ya que react hace el trabajo de handlebars tambien, pero eso lo veremos con react

//Y copiar y pegar todo en la carpeta public, y listo, es lo mismo con react y angular


"RESTSERVER"

"--------Cors-package--------"

//Cross-Origin Resource Sharing

//For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.

//Si se intenta hacer una peticion fetch, de un dominio a otro, por defecto no nos dejara, debido a la politica del same origin
//Lo que hace Cors es habilitarnos al posibilidad de si poder hacer solicitudes de un web server a otro, podemos hacer que todos puedan hacer solicitudes a nuestro webserver o podemos hacer una whitelist para que solo ciertos webservers puedan hacerlo

//Cors es un middleware, el cual se puede utilizar instalando su paquete en npm

//Hay mas cosas del REST Server que tu ya conocias





"DATOS DE GITHUB"

//Podemos crear tags en nuestro github

//¿Para que sirven?
//Por lo general solemos tener distintas versiones de un proyecto, de lo mas basico a lo mas avanzado o que simplemente son diferentes
//Lo mas comodo seria poder descargar el codigo que tenia exclusivamente una version que fue creado hace un tiempo
//Lo ideal seria descargar solo lo que pertenecia a la version en aquel tiempo
//Para poder hacer eso, haremos lo siguiente justo cuando consideremos que acabamos alguna version de nuestro proyecto

//git tag -a v1.0.0 -m"Basic RESTServer"
//git push --tags

//Nos vamos a GitHub, le damos a editar tag (creo que tiene otro nombre la opcion) y lo llenamos y le damos en publicar tag




"PROTIP POSTMAN - VARIABLES DE ENTORNO EN POSTMAN"

//Podemos cambiar de un enviroment a otro y utilizar variables para cambiar entre desarrollo y produccion

//Agregamos un enviroment y creamos una variable "url", le damos el valor, dependiendo de si es el ambien de produccion o de desarrllo

//Clase 111 del curso

//Nos sirve para cambiar entre ambiente de desarrollo y produccion mas rapido en postman




