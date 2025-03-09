-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 09, 2025 at 03:22 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dominators`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'TestUser', 'test123'),
(2, 'testuser', '$2b$10$m75WC8xMfrJGJgL/bHrprukwa8mYrR0LaRehBW1HTnrBcrDYuDrey'),
(3, 'TestingUser', '$2b$10$PWurAEPdiyyhrrZh.eTz9uJ5mH4XWkSsivogODyzbedtDQo9XI4uu'),
(4, 'DOMinators', '$2b$10$A7N8ghso2c5G/lPyYTNeIOKEpy7XXXqWm18Ox6rSozRtfoBFy7it.'),
(5, 'ExampleUser', '$2b$10$.SCoZ2nojef9wdEuNTGdZuL/Xevgx9iGnqWY0b39CdBcjixTXRbDi'),
(6, 'UserTest', '$2b$10$K2cYtFzC34OD3f9Flts1s.nHXwlk.lTwV6FfMFoTvL8N8y/8cyjqK'),
(7, 'SpiritXuser', '$2b$10$KUqQUxVU8JUuGfsBLhOgV.EznSbBye8HzMZ.XeKfSxy2ciByKIJ8C'),
(8, 'SpiritXTest', '$2b$10$E6N2Qyv3i1GS2tmyoqg3Hu3C7sCFjD8x55jJhv6iI8CPGaVRUrUom'),
(9, 'TestSpiritX', '$2b$10$Z3vqAmJBs2D8OTrGDfQJr.SzeVjHeoCgYr0ekbXwnG43HQRGhgiOK'),
(10, 'LogUserTest', '$2b$10$NjcjCVpdIVfkFYApF4olT.FFdSVSj8LhZELAV0t4QSQX8dERqkatu'),
(11, 'LoggingUser', '$2b$10$hiUsQ4G/Mz3NCTaid81GO.PKryXl2SU73MkVcmiGByMczu33C5Pt6'),
(12, 'TestPefection', '$2b$10$PpyfzI9hSzyxMYH/g.87d.t0xfCKiwqfoEPWrmfet80oR6JO8obri'),
(13, 'SpiritXProject', '$2b$10$5JnapTUdNIiPcl6ZYlL7o.8pnhE4KZXEsw.I2Maex18BL/tw8G/lK'),
(14, 'SecureConnect', '$2b$10$wPwbcliSoZaem19kWNp0DeXxh35xjzWm17NWbo.EsatGCILdKTSxS');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
