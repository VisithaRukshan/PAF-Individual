-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 06, 2020 at 12:31 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `payment`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `apno` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `dname` varchar(50) NOT NULL,
  `location` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`apno`, `name`, `dname`, `location`) VALUES
(1, 'Kamal Perera', 'Dr. Samantha Hewage', 'Asiri Hospitals'),
(2, 'Diani Gunarathne', 'Dr. Kalhari Prathiba', 'Lanka Hospitals'),
(3, 'Roshani Thilakarathne', 'Dr. Kalhari Prathibha', 'Nawaloka hospitals'),
(4, 'Yeshan Abeygunawardhane', 'Dr. Pradeep Perera', 'Lanka Hospitals'),
(5, 'Bradman Silva', 'Dr. Shantha Disanayake', 'Nawaloka Hospitals'),
(6, 'Channa Gamage', 'Dr. Isuru Thilanka', 'Nawaloka Hospitals');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `payID` int(11) NOT NULL,
  `apno` varchar(20) NOT NULL,
  `pname` varchar(50) NOT NULL,
  `dname` varchar(50) NOT NULL,
  `location` varchar(50) NOT NULL,
  `date` varchar(20) NOT NULL,
  `time` varchar(10) NOT NULL,
  `amount` varchar(10) NOT NULL,
  `cardNo` varchar(16) NOT NULL,
  `cvv` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`payID`, `apno`, `pname`, `dname`, `location`, `date`, `time`, `amount`, `cardNo`, `cvv`) VALUES
(9, '1', 'Kamal Perera', 'Dr. Samantha Hewage', 'Asiri Hospitals', '2020-04-10', '19:00', '1000.00', '2215423659874522', '114'),
(10, '3', 'Roshani Thilakarathne', 'Dr. Kalhari Prathibha', 'Nawaloka hospitals', '2020-04-14', '11:00', '1000.00', '2315248674521469', '785'),
(11, '6', 'Channa Gamage', 'Dr. Isuru Thilanka', 'Nawaloka Hospitals', '2020-03-15', '12:00', '1000.00', '3526152448575968', '025'),
(12, '2', 'Diani Gunarathne', 'Dr. Kalhari Prathiba', 'Lanka Hospitals', '2020-02-14', '09:00', '1000.00', '1415252634748585', '147'),
(13, '4', 'Yeshan Abeygunawardhane', 'Dr. Pradeep Perera', 'Lanka Hospitals', '2020-02-24', '13:30', '1000.00', '2214523612547865', '889');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`apno`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`payID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `apno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `payID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
