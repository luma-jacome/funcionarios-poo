-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 17/11/2026 às 14:46
-- Versão do servidor: 8.4.7
-- Versão do PHP: 8.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `funcempresa`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `cargos`
--

DROP TABLE IF EXISTS `cargos`;
CREATE TABLE IF NOT EXISTS `cargos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `descricao` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `funcionarios`
--

DROP TABLE IF EXISTS `funcionarios`;
CREATE TABLE IF NOT EXISTS `funcionarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `cpf` varchar(14) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `dataAdmissao` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `cargo` varchar(90) COLLATE utf8mb4_unicode_ci NOT NULL,
  `salario` decimal(10,0) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `funcionarios`
--

INSERT INTO `funcionarios` (`id`, `nome`, `cpf`, `email`, `telefone`, `dataAdmissao`, `cargo`, `salario`) VALUES
(1, 'Ana Maria Braga', '240.474.063-00', 'ana.braga353@gmail.com', '(88) 98742-6135', '', 'Desenvolvedor(a) de Jogos', 5800),
(2, 'Caio Iarley Marques', '644.036.803-00', 'iarley.caio20@gmail.com', '(88) 99631-8052', '08/07/2023', 'Designer Gráfico', 3500),
(3, 'Maria José Grenouille', '797.099.203-00', 'jose.frog666@gmail.com', '(88) 99158-2746', '22/11/2020', 'Desenvolvedor(a) de Jogos', 6200),
(4, 'Cerise Bianca Tsurugi', '336.550.343-0', 'bianca.papillon32@gmail.com', '(88) 98473-9201', '04/02/2024', 'Analista de Qualidade', 3800),
(5, 'Evaldo Ferreira', '882.863.873-00', 'evaldo.copper45@gmail.com', '(88) 99826-4517', '19/09/2022', 'Gerente de Projetos', 7500),
(6, 'Olivia de Rodrigues', '517.346.113-00', 'olivia.isabel17@gmail.com', '(88) 99304-7862', '11/05/2019', 'Desenvolvedor(a) Front-end', 5200),
(7, 'Melissa Adelaide Martins', '046.002.213-00', 'melanie.circle222@gmail.com', '(88) 98651-3094', '27/01/2025', 'Modelador(a) 3D', 4500),
(8, 'Sabrina de Carvalho', '121.098.603-00', 'sabrina5@gmail.com', '(88) 99572-1408', '13/08/2021', 'Desenvolvedor(a) Back-end', 5800),
(9, 'Duny Eveley Macedo', '981.310.473-00', 'duny.e.pricila53@gmail.com', '(88) 98239-6571', '06/12/2023', 'Marketing Digital', 3600),
(10, 'Domenica Vittar', '021.959.303-00', 'domenica.asus25@gmail.com', '(88) 99714-3826', '30/04/2020', 'Design UI/UX', 4800);

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `senha` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
