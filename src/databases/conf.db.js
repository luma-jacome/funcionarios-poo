import mysql from "mysql2"

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "funcempresa"
});

conn.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados:", err);
        return;
    }
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
});

export { conn };