import { Router } from "express";
import { conn } from "../databases/conf.db.js";
import bcrypt from "bcrypt";

const usuariosRouter = Router();

usuariosRouter.post("/cadastrarUsuario", (req, res) => {
    const { nome, email, senha } = req.body

    if (!nome || !email || !senha) {
        return res.status(400).json("Preencha todos os campos")
    }

    conn.query(
        "SELECT id FROM usuarios WHERE email = ?", [email],
        (err, result) => {
            if (err) {
                console.error("Erro ao verfificar email", err);
                return res.status(500).json("Erro ao cadastrar usuário!");
            }


            if (result.length > 0) {
                return res.status(409).json("Este email já está cadastrado.");
            }

            bcrypt.hash(senha, 10, (err, senhacriptografada) => {
                if (err) {
                    console.error("Erro ao criptografar senha", err);
                    return res.status(500).json("Erro ao cadastrar usuário");
                }

                conn.query(
                    "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
                    [nome, email, senhacriptografada],
                    (err, result) => {
                        if (err) {
                            console.error("Erro ao inserir usuário", err);
                            return res.status(500).json("Erro ao cadastrar usuário")
                        }

                        res.status(201).json({
                            mensagem: "Usuário cadastrado com sucessso",
                            id: result.insertId
                        });
                    }
                );
            });
        }
    );

});

usuariosRouter.post("/login", (req, res) => {
    const { email, senha } = req.body

    if (!email || !senha) {
        return res.status(400).json("Preencha todos os campos")
    }

    conn.query(
        "SELECT id, nome, email, senha FROM usuarios WHERE email = ?", 
        [email],
        (err, result) => {
            if (err) {
                console.error("Erro ao verificar email", err);
                return res.status(500).json("Erro ao fazer login");
            }

            if (result.length === 0) {
                return res.status(401).json("Email ou senha incorretos");
            }

            const usuario = result[0];

            bcrypt.compare(senha, usuario.senha, (err, correspondente) => {
                if (err) {
                    console.error("Erro ao comparar senha", err);
                    return res.status(500).json("Erro ao fazer login");
                }

                if (!correspondente) {
                    return res.status(401).json("Email ou senha incorretos");
                }

                res.status(200).json({
                    mensagem: "Login realizado com sucesso",
                    id: usuario.id,
                    nome: usuario.nome,
                    email: usuario.email
                });
            });
        }
    )
})

export { usuariosRouter };