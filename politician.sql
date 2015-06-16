-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 24, 2014 at 10:50 AM
-- Server version: 5.5.24-log
-- PHP Version: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `politician`
--

-- --------------------------------------------------------

--
-- Table structure for table `accesslevel`
--

CREATE TABLE IF NOT EXISTS `accesslevel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `accesslevel`
--

INSERT INTO `accesslevel` (`id`, `name`) VALUES
(1, 'Admin'),
(2, 'Dealer'),
(3, 'Sales');

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE IF NOT EXISTS `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `text` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `title`, `timestamp`, `text`) VALUES
(2, 'abc1234', '2014-07-16 10:14:30', 'abc12345'),
(3, 'wohlig technologies', '2014-07-16 10:15:10', 'wohlig');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE IF NOT EXISTS `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `name`, `timestamp`, `title`) VALUES
(1, 'erd7.png', '2014-02-01 18:30:00', 'ERD Image'),
(3, 'IMG-20140315-WA0013.jpg', '2014-07-16 12:16:21', 'logo'),
(4, 'boy.png', '2014-07-18 11:43:44', 'boy'),
(5, 'IMG-20140315-WA00131.jpg', '2014-07-19 06:03:10', '111'),
(6, 'IMG-20140315-WA00132.jpg', '2014-07-19 06:04:08', '111'),
(7, 'IMG-20140315-WA00133.jpg', '2014-07-19 06:04:23', '111'),
(8, 'IMG-20140315-WA00134.jpg', '2014-07-19 06:05:17', '111');

-- --------------------------------------------------------

--
-- Table structure for table `membership`
--

CREATE TABLE IF NOT EXISTS `membership` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mpconstituency` int(11) NOT NULL,
  `mlaconstituency` int(11) NOT NULL,
  `area` varchar(255) NOT NULL,
  `pollingcenter` varchar(255) NOT NULL,
  `position` int(11) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `birthday` date NOT NULL,
  `address` text NOT NULL,
  `village` varchar(255) NOT NULL,
  `town` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL,
  `phoneno` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `state` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `membership`
--

INSERT INTO `membership` (`id`, `mpconstituency`, `mlaconstituency`, `area`, `pollingcenter`, `position`, `fullname`, `birthday`, `address`, `village`, `town`, `district`, `phoneno`, `email`, `state`) VALUES
(1, 1, 1, 'pune', 'Pimpari', 1, 'abc def ghijklmn', '1991-09-09', 'pimpari pune', 'Chinchvad', 'Pimpari', 'Pune', '8988988989', 'demo@gmail.com', 1),
(2, 1, 1, 'asas', 'ascsa', 1, 'sacasc', '2014-07-05', 'ascas', 'asas', 'asas', 'asca', 'scasc', 'ascasa@gmail.com', 2),
(4, 1, 1, 'thane', 'thane', 1, 'thane', '2014-07-02', 'thane', 'thane', 'thane', 'thane', '12345', 'demo@demo.com', 1);

-- --------------------------------------------------------

--
-- Table structure for table `mlaconstituency`
--

CREATE TABLE IF NOT EXISTS `mlaconstituency` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `mlaconstituency`
--

INSERT INTO `mlaconstituency` (`id`, `name`) VALUES
(1, 'Pune(East)');

-- --------------------------------------------------------

--
-- Table structure for table `mpconstituency`
--

CREATE TABLE IF NOT EXISTS `mpconstituency` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `mpconstituency`
--

INSERT INTO `mpconstituency` (`id`, `name`) VALUES
(1, 'mumbai(West)');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE IF NOT EXISTS `notifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `text`, `timestamp`) VALUES
(2, 'New Request', '2014-01-02 06:42:12'),
(5, 'Another New Request', '2014-07-16 10:24:03');

-- --------------------------------------------------------

--
-- Table structure for table `position`
--

CREATE TABLE IF NOT EXISTS `position` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `position`
--

INSERT INTO `position` (`id`, `name`) VALUES
(1, 'Presedence');

-- --------------------------------------------------------

--
-- Table structure for table `region`
--

CREATE TABLE IF NOT EXISTS `region` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `region`
--

INSERT INTO `region` (`id`, `name`) VALUES
(1, 'mumbai'),
(2, 'pune');

-- --------------------------------------------------------

--
-- Table structure for table `scheduler`
--

CREATE TABLE IF NOT EXISTS `scheduler` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `toscheduledate` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `scheduler`
--

INSERT INTO `scheduler` (`id`, `name`, `timestamp`, `toscheduledate`) VALUES
(2, 'wohlig123', '2014-07-16 10:20:23', '0000-00-00 00:00:00'),
(3, 'wohlig', '2014-07-16 09:05:20', '2014-10-12 00:00:00'),
(11, 'avi', '2014-07-16 10:22:29', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `state`
--

CREATE TABLE IF NOT EXISTS `state` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `state`
--

INSERT INTO `state` (`id`, `name`) VALUES
(1, 'maharashtra'),
(2, 'Gujrat'),
(3, 'Delhi');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `accesslevel` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `accesslevel`) VALUES
(5, 'avinash', 'avinash@gmail.com', 'a208e5837519309129fa466b0c68396b', 1),
(6, 'avinash', 'avinash@gmail.com', 'a208e5837519309129fa466b0c68396b', 1),
(10, 'avi', 'avi@gmail.com', '3fca379b3f0e322b7b7967bfcfb948ad', 1),
(12, 'avi', 'avinash@gmail.com', 'a208e5837519309129fa466b0c68396b', 1),
(14, 'aaa', 'aaa@gmail.com', '47bce5c74f589f4867dbd57e9ca9f808', 1),
(16, 'sa', 'asxas@asa.xsax', 'd3a5ca7e5e987111fafd6688e5cfce27', 1),
(18, 'chintan', 'chintan@wohlig.com', 'fe01ce2a7fbac8fafaed7c982a04e229', 1),
(19, 'demo', 'demo@demo.com', 'fe01ce2a7fbac8fafaed7c982a04e229', 2),
(20, 'Demo', 'chintan@wohlig.com', '101a6ec9f938885df0a44f20458d2eb4', 1);

-- --------------------------------------------------------

--
-- Table structure for table `userregistration`
--

CREATE TABLE IF NOT EXISTS `userregistration` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `phoneno` varchar(255) NOT NULL,
  `gpslocation` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `userregistration`
--

INSERT INTO `userregistration` (`id`, `name`, `phoneno`, `gpslocation`) VALUES
(2, 'axsax', '122222', 'Pimpary'),
(4, 'xwx', 'wxw', 'wxw');

-- --------------------------------------------------------

--
-- Table structure for table `video`
--

CREATE TABLE IF NOT EXISTS `video` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `video` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `video`
--

INSERT INTO `video` (`id`, `title`, `video`) VALUES
(2, 'Angulerjs from scratch', 'angularjs.mp4'),
(4, 'codeigniter from scretch', 'codeigniter.mp4');

-- --------------------------------------------------------

--
-- Table structure for table `vote`
--

CREATE TABLE IF NOT EXISTS `vote` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `region` int(11) NOT NULL,
  `pollingarea` varchar(255) NOT NULL,
  `pollingcenter` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phoneno` varchar(255) NOT NULL,
  `area` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `vote`
--

INSERT INTO `vote` (`id`, `region`, `pollingarea`, `pollingcenter`, `name`, `phoneno`, `area`, `city`) VALUES
(1, 1, 'Chincaaa', 'Pimpary', 'abcdefg', '9898989898', 'Pimpri', 'Pune'),
(3, 1, 'ssdcsd', 'scs', 'qqq', '8989898999', 'csdcsd', 'sdcsdcd'),
(4, 0, 'abc', 'vvvvvv', 'aca', 'cac', 'acac', 'acac');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
