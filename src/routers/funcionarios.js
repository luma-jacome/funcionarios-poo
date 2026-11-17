import { Router } from "express";
import { conn } from "../databases/conf.db.js";

const funcionariosRouter = Router();

funcionariosRouter.post("/cadastrarFuncionario", (req, res) => {
        const { nome, cpf, email, telefone, dataAdmssão, cargo, salario } = req.body;
    conn.query(`insert into funcionarios (nome, cpf, email, telefone, dataAdmissao, cargo, salario) VALUES ('${nome}', '${cpf}', '${email}', '${telefone}', '${dataAdmssão}', '${cargo}', ${salario})`,
        (err, result) => {
            if (err) {
                console.error("Erro ao inserir funcionário:", err);
                return;
            } else {
                res.json(`Funcionário ${nome} inserido com sucesso!`);
            }}
    );

// {
//   "nome": "",
//   "cpf": "..-",
//   "email": "@gmail.com",
//   "telefone": "(88) 9-",
//   "dataAdmssão": "//",
//   "cargo": "",
//   "salario": 
// }
})

funcionariosRouter.get("/listarFuncionarios", (req, res) => {
        conn.query(
        "SELECT id, nome, cargo FROM funcionarios",
        (err, result) => {
            if (err) {
                console.error("Erro ao listar funcionários:", err);
                return res.status(500).json("Erro ao listar funcionários!");
            }

            res.json(result);
        }
    );
})

funcionariosRouter.get("/consultarFuncionarios/:id", (req, res) => {
    const { id } = req.params;
    conn.query(
        "SELECT * FROM funcionarios WHERE id = ?",
        [id],
        (err, result) => {
            if (err) {
                console.error("Erro ao consultar funcionário:", err);
                return res.status(500).json("Erro ao consultar funcionário!");
            }

            if (result.length > 0) {
                res.json(result[0]);
            } else {
                res.status(404).json("Funcionário não encontrado!");
            }
        }
    );
})

funcionariosRouter.put("/atualizarFuncionario/:id", (req, res) => {
    const { id } = req.params;
    const { nome, cpf, email, telefone, dataAdmissao, cargo, salario } = req.body;

    conn.query(
        "UPDATE funcionarios SET nome = ?, cpf = ?, email = ?, telefone = ?, dataAdmissao = ?, cargo = ?, salario = ? WHERE id = ?",
        [nome, cpf, email, telefone, dataAdmissao, cargo, salario, id],
        (err, result) => {
            if (err) {
                console.error("Erro ao atualizar funcionário:", err);
                return res.status(500).json("Erro ao atualizar funcionário!");
            }

            if (result.affectedRows > 0) {
                res.json("Funcionário atualizado com sucesso!");
            } else {
                res.status(404).json("Funcionário não encontrado!");
            }
        }
    );
});

funcionariosRouter.delete("/excluirFuncionario/:id", (req, res) => {
    const { id } = req.params;
    conn.query(
        "DELETE FROM funcionarios WHERE id = ?",
        [id],
        (err, result) => {
            if (err) {
                console.error("Erro ao excluir funcionário:", err);
                return res.status(500).json("Erro ao excluir funcionário!");
            }

            if (result.affectedRows > 0) {
                res.json("Funcionário excluído com sucesso!");
            } else {
                res.status(404).json("Funcionário não encontrado!");
            }
        }
    );
});


export { funcionariosRouter };