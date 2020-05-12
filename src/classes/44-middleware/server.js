const express = require("express");
const server = express();
const datos = require("../43-express/alumnos.json");
const port = 3000;

const middlewareGlobal = (req, res, next) => {
  console.log(
    `La solicitud del recurso: ${req.path} acaba de pasar por middleware GLOBAL`
  );
  next();
};

const middlewareEspecifico = (req, res, next) => {
  console.log(
    `Middleware solo para recurso: ${req.path}`
  );
  // Destructuring
  console.log(req.params);
  const { user, lastName, name } = req.params;
  const userTrimmed = user.trim();
  if (userTrimmed !== "acamica") {
    console.log("Usuario inválido");
    return res.status(403).json({ message: "Unauthorized" });
  }
  next();
};

server.use(middlewareGlobal); // Usamos nuestro primer middleware
// server.use(segundoMiddleware); // Usamos nuestro segundo middleware

server.get("/", (req, res) => {
  res.json("api acamica");
});

//Muestra todos los estudiantes
server.get("/acamica/alumnos/:user", middlewareEspecifico, (req, res) => {
  res.json(datos);
});

server.listen(port, () => {
  console.log("Servidor iniciado en el puerto: " + port);
});
