import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(2222, () => {
  console.log("Servidor rodando na porta 2222");
});