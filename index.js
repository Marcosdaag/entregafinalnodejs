import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import productsRoutes from "./routes/products.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

dotenv.config();

const app = express();

// Configuración de CORS
app.use(cors());

// Middleware de body-parser para poder entrender el JSON enviado por los headers
app.use(bodyParser.json());

// Rutas definidas para la aplicacion
app.use("/auth", authRoutes);
app.use("/api", productsRoutes);

// Manejo de error 404 con las rutas no definidas
app.use((req, res, next) => {
  res.status(404).json({ message: "Ruta no encontrada (404)" });
});

app.use(errorHandler);

// Inicio del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
