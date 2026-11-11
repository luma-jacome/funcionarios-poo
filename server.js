import express from "express";

import { usuariosRouter } from "./src/routers/usuarios.js"; 
import { funcionariosRouter } from "./src/routers/funcionarios.js"; 
import { cargosRouter } from "./src/routers/cargos.js"; 

const app = express();
app.use(express.json());

app.use(usuariosRouter);
app.use(funcionariosRouter);
app.use(cargosRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(2222, () => {
  console.log("Servidor rodando na porta 2222");
});