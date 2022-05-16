-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Май 16 2022 г., 06:56
-- Версия сервера: 5.7.24
-- Версия PHP: 8.0.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `my-shop`
--

-- --------------------------------------------------------

--
-- Структура таблицы `orderby`
--

CREATE TABLE `orderby` (
  `allArticul` text NOT NULL,
  `email` varchar(20) NOT NULL,
  `text` text NOT NULL,
  `idorder` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `product`
--

CREATE TABLE `product` (
  `productid` int(10) UNSIGNED NOT NULL,
  `img` varchar(50) NOT NULL,
  `title` varchar(30) NOT NULL,
  `price` int(30) NOT NULL,
  `articul` varchar(50) NOT NULL,
  `rating` int(1) DEFAULT NULL,
  `descpost` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `roleid` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `role`
--

INSERT INTO `role` (`id`, `roleid`) VALUES
(1, 'ADMIN'),
(2, 'USER');

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `login` varchar(20) NOT NULL,
  `pass` varchar(80) NOT NULL,
  `roleid` varchar(10) NOT NULL,
  `emile` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `login`, `pass`, `roleid`, `emile`) VALUES
(1, 'admin', '$2b$04$.YwvliRT1te/0cJHL1mH/uqKcytXo2JySSqRUKSafURpIB6cYquJe', 'ADMIN', '');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `orderby`
--
ALTER TABLE `orderby`
  ADD PRIMARY KEY (`idorder`);

--
-- Индексы таблицы `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`productid`);

--
-- Индексы таблицы `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roleid` (`roleid`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roleid` (`roleid`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `orderby`
--
ALTER TABLE `orderby`
  MODIFY `idorder` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `product`
--
ALTER TABLE `product`
  MODIFY `productid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`roleid`) REFERENCES `role` (`roleid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
