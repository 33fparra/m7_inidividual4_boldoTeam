<img src="public/images/boldoMedio.png" align="right" />
 <h1 align= left ><b>Individual 4 M7 / EquipoBoldo</b> <img src = "https://media.giphy.com/media/gF2m2JOyGReppog8hU/giphy.gif" width = 80px></h1>

<br>

## No lo olvides Revisar

<h2><b>Descripción del Proyecto</b> <img src ="https://media.giphy.com/media/GjhqaB166nKR4BoEnh/giphy.gif" width = 50px></h2>

📝 Desarrolla una aplicación en Node que realice consultas SQL para ejecutar una transacción que transfiera $10000
de saldo desde un usuario al otro. Imprimir por consola el resultado de ambas consultas SQL para demostrar que
los saldos fueron modificados.
Recuerda revisarsi una persona tiene elsaldo suficiente para realizar la transferencia, de lo contrario todo el
proceso debe ser anulado.
primero crea la siguiente base de datos:
CREATE TABLE usuarios (
first_name varchar(100),
last_name varchar(100),
email varchar(100),
saldo DECIMAL CHECK (saldo >= 0)
);
Inserta en ella dos usuarios, cada uno con un saldo de 20.000
Realiza la trasferencia varias veces para ver qué sucede.
Respuesta Esperada:
const { Pool } = require("mysql/pg/Oracle/TuBase/etcetera");
const pool = new Pool({<tu configuración});
pool.connect(async (error_conexion, client, release) => {
await client.query("BEGIN");
const descontar = "UPDATE usuarios SET saldo = saldo - 20000 WHERE email = 'mail@usuario1' RETURNING *";
const descuento = await client.query(descontar);
const acreditar ="UPDATE usuarios SET saldo = saldo + 20000 WHERE email = ‘mail@usuario2'
RETURNING *";
const acreditacion = await client.query(acreditar);
console.log("Descuento realizado con éxito: ", descuento.rows[0]);
console.log("Acreditación realizada con éxito: ",
acreditacion.rows[0]);
await client.query("COMMIT");
release();
pool.end();
});

<br>

<h2><b>Instrucciones de Instalación</b> <img src = "https://media.giphy.com/media/3WZJkScSyfYVl7mGLd/giphy.gif" width = 60px></h2> 

⚙️ Para instalar las dependencias necesarias, sigue los siguientes pasos:

1. Clona el repositorio en tu máquina local.
2. Abre una terminal y navega hasta la carpeta del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

   npm install

4. Abrir el archivo html ingresando al https://localhost:3000
5. Para ejecutar: node index.js


<br>

<details> <img src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTFtdWgyMmFrcHd4NjhuZWJ4aDJpcTlkbWlyNGQ4dDJwa2ZwZmptcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/B4AgroOi1LkdPxMllY/giphy.gif" width = 50px> <summary><b>Ver las instrucciones</b></summary> 


1. Instalar las dependencias:

   ```sh
   npm install
   ```

2. En el caso de no poder instalar las dependencias:

   ```sh
   npm install --force
   ```

3. Las librerias que estamos ocupando `package.json`:

    ````sh
    ... 
    "name": "helpers",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    + "type": "module",
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
    "express": "^4.18.2",
    "pg": "^8.11.2"
    }
    ````

 
</details>

## Funcionalidades :sparkles:

✨ Con nuestra aplicacion puedes:

1. Realizar Transacciones.


<!-- ![Foto de grupo](public/images/grupoVerde.jpg) -->

## Participantes del Grupo :busts_in_silhouette:

1. Loreto Godoy : https://github.com/loreGodoyUp

2. Daniel Mendez : https://github.com/danimen81

3. Zimram Blanco : https://github.com/Zimram

4. Jose Fuentealba : https://github.com/JoseFelipeGeo

5. Boris Guiñez : https://github.com/boanguibe

6. Felipe Andres Parra : https://github.com/33fparra


### Este proyecto está bajo la licencia ADALID.
<img src="public/images/boldoMedio.png" align="right" />

