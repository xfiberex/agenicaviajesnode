import express from "express";
import {
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    paginaDetalleViaje
} from "../controllers/paginasController.js";

import { guardarTestimonial } from "../controllers/testimonialController.js";

const router = express.Router();

// Al visitar la pagina principal - red = request, la petición y res = response, lo que responde express
// res.send("Hola mundo"); // send se utiliza para mostrar algo en pantalla o json
// render para una vista
router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajes);

router.get("/viajes/:slug", paginaDetalleViaje);

router.get("/testimoniales", paginaTestimoniales);

router.post("/testimoniales", guardarTestimonial);

export default router;
