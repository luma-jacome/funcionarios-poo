import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(8888, () => {
  console.log("Servidor rodando na porta 8888");
});