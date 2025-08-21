import { where } from "sequelize";
import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";

const paginaInicio = async (req, res) => {
    // Consultar 3 viajes del  modelo Viaje
    // Para asegurar la ejecución hacia la base de datos, utilizamos promise
    const promiseDB = [];
    promiseDB.push(Viaje.findAll({ limit: 3 })); // Posición 0
    promiseDB.push(Testimonial.findAll({ limit: 3 })); // Posición 1

    try {
        // Utiliza el promise es una mejora grande en cuanto a rendimiento
        // Carga las consultas a la BD mas rapido
        const resultado = await Promise.all(promiseDB);

        res.render("inicio", {
            pagina: "Inicio",
            clase: "home",
            viajes: resultado[0],
            testimoniales: resultado[1],
        });
    } catch (error) {
        console.log(error);
    }
};

const paginaNosotros = (req, res) => {
    res.render("nosotros", {
        pagina: "Nosotros",
    });
};

const paginaViajes = async (req, res) => {
    // Consultar base de datos
    const viajes = await Viaje.findAll();

    res.render("viajes", {
        pagina: "Próximos viajes",
        viajes, // Pasamos los datos consultados
    });
};

const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll();

        res.render("testimoniales", {
            pagina: "Testimoniales",
            testimoniales,
        });
    } catch (error) {
        console.log(error);
    }
};

// Muestra el viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where: { slug } });

        res.render("viaje", {
            pagina: "Información Viaje",
            viaje,
        });
    } catch (error) {
        console.log(error);
    }
};

export { paginaInicio, paginaNosotros, paginaViajes, paginaDetalleViaje, paginaTestimoniales };
