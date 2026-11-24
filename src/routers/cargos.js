import { Router } from "express";
import { conn } from "../databases/conf.db.js";

const cargosRouter = Router();

cargosRouter.post("/cadastrarCargo", (req, res) => {
        const { nome, descricao } = req.body;
    conn.query(`insert into cargos (nome, descricao) VALUES ('${nome}', '${descricao}')`,
        (err, result) => {
            if (err) {
                console.error("Erro ao inserir cargo:", err);
                return;
            } else {
                res.json(`Cargo ${nome} inserido com sucesso!`);
            }}
    );

    // {
    //   "nome": "",
    //   "descricao": ""
    // }
})

cargosRouter.get("/listarCargos", (req, res) => {
        conn.query(
        "SELECT id, nome, descricao FROM cargos",
        (err, result) => {
            if (err) {
                console.error("Erro ao listar cargos:", err);
                return res.status(500).json("Erro ao listar cargos!");
            }

            res.json(result);
        }
    );
})

cargosRouter.get("/consultarCargos/:id", (req, res) => {
    const { id } = req.params;
    conn.query(
        "SELECT * FROM cargos WHERE id = ?",
        [id],
        (err, result) => {
            if (err) {
                console.error("Erro ao consultar cargo:", err);
                return res.status(500).json("Erro ao consultar cargo!");
            }

            if (result.length > 0) {
                res.json(result[0]);
            } else {
                res.status(404).json("Cargo não encontrado!");
            }
        }
    );
})

cargosRouter.put("/atualizarCargo/:id", (req, res) => {
    const { id } = req.params;
    const { nome, descricao } = req.body;

    conn.query(
        "UPDATE cargos SET nome = ?, descricao = ? WHERE id = ?",
        [nome, descricao, id],
        (err, result) => {
            if (err) {
                console.error("Erro ao atualizar cargo:", err);
                return res.status(500).json("Erro ao atualizar cargo!");
            }

            if (result.affectedRows > 0) {
                res.json("Cargo atualizado com sucesso!");
            } else {
                res.status(404).json("Cargo não encontrado!");
            }
        }
    );
});

cargosRouter.delete("/excluirCargo/:id", (req, res) => {
    const { id } = req.params;
    conn.query(
        "DELETE FROM cargos WHERE id = ?",
        [id],
        (err, result) => {
            if (err) {
                console.error("Erro ao excluir cargo:", err);
                return res.status(500).json("Erro ao excluir cargo!");
            }

            if (result.affectedRows > 0) {
                res.json("Cargo excluído com sucesso!");
            } else {
                res.status(404).json("Cargo não encontrado!");
            }
        }
    );
});

export { cargosRouter };