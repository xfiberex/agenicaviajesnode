import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

// Conectar la base de datos
db.authenticate()
    .then(() => console.log("Base de datos conectada"))
    .catch(error => console.log(error));

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar pug
app.set("view engine", "pug");

// Propio middleware - para obtener el año actual
// Si agregamos next seguira con el siguiente middleware
app.use((req, res, next) => {
    const year = new Date();

    res.locals.yearNow = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes";
    next(); // Si no funciona se puede forzar con un return
});

// Agregar Body Parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

// Definir la carpeta publica
app.use(express.static("public"));

// Agregar rutas o enrutadores, similar a rutas
// Soporta todos los verbos como get, put, push, delete o post
app.use("/", router);

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});
