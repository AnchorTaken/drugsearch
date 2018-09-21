-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 21, 2018 at 08:14 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `core`
--

-- --------------------------------------------------------

--
-- Table structure for table `ci_sessions`
--

CREATE TABLE `ci_sessions` (
  `id` varchar(128) NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `timestamp` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `data` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ci_sessions`
--

INSERT INTO `ci_sessions` (`id`, `ip_address`, `timestamp`, `data`) VALUES
('0d6opi69t9loho65bkrns03hnu1fcsda', '::1', 1537476394, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373437363339343b),
('0htckshsn2oe02j07kjk51qc2i491k1q', '::1', 1537552869, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373535323836393b),
('0s054d39s2r5re2q4i60l7padtfqo6rs', '::1', 1537476308, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373437363330383b),
('2k0861cpeoq3b02sqvjd9u95blfpaq5i', '::1', 1537552872, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373535323837323b),
('2mus7he9df2lhh2l9k6l7bn9ei002ial', '::1', 1537470228, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373437303231313b),
('34k3kqmlllld4oltltugurc5i1nt6clu', '::1', 1537476773, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373437363737333b),
('3dsok3mh1g4587hei440jkp6cmi7b742', '::1', 1537552872, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373535323837323b),
('3oqcjvu07925nshslihlem5g3tngs89m', '::1', 1537552869, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373535323836393b),
('5i3qejnpc7jh3ks3rf2pladgdofmrt0h', '::1', 1537552869, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373535323836393b),
('5m4495r1o6ptva1luomkeg3rim2klppj', '::1', 1537552872, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373535323837323b),
('6vhi23sl4vsj3l9pk6sf6554gfm9fj3q', '::1', 1537470132, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373437303033313b),
('8fnvr2rjr2g72vli9rhpt2db1rm3sgso', '::1', 1537552869, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373535323836393b),
('b9srqumdqrn35g94ism2iluu08i5bf28', '::1', 1537552231, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373437303135333b),
('bblcs0vub7iubl5ss5ktq2877k8mtrlq', '::1', 1537552872, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373535323837323b),
('dd2vsm0ltdsohq235j2m5i3ir4mi5c1m', '::1', 1537552869, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373535323836393b),
('e9hlrlg083187rq73s6c9e8q7q5on4g8', '::1', 1537552872, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373535323837323b),
('h86ge2iv7ptikr55l4oapd102ebngum2', '::1', 1537476314, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373437363331343b),
('isrl29nc1bf8p4rjffhfm7g75dcfeg6v', '::1', 1537476394, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373437363339343b),
('j05krk0m4sr866eigtsg0tqp884q9d5f', '192.168.0.15', 1537474715, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373437343731353b),
('js3rlooppms2voqrhn06e3imlclfl1t7', '192.168.0.15', 1537474715, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373437343731353b),
('kq4of3e1mlvprrus57cpnouifli5gnqt', '::1', 1537476245, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373437363234343b),
('m4eabnjmk7g7havdsop89u5re4f7qhue', '::1', 1537552872, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373535323837323b),
('mj82gu3f7uu2ku6ke6mb11jlril1dhbb', '::1', 1537552872, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373535323837323b),
('ocbroa3eabcfq2o2oiht6qj9h0pekf23', '::1', 1537476308, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373437363330383b),
('oeatn4ose8cju0rebcre73j5ut6oua3d', '::1', 1537552869, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373535323836393b),
('ot6fv4n40lqua6gg2lhfomgbtdpr7b69', '::1', 1537552869, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373535323836393b),
('rcij9uo5fgic51tt4skeeit0pqkfvqpg', '::1', 1537552872, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373535323837323b),
('rq3e2rk61qhhm7b0pjnfv472ijcr07ro', '::1', 1537476394, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373437363339343b),
('u3vm44kjhde54lfgmoh2n8rl5bn0npmu', '::1', 1537476308, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373437363330383b),
('u447dmvulct4a5t3eltmmci6bm07iuqk', '::1', 1537476253, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373437363235333b),
('u6el4sh5tukim9d17o88paaed91uccgf', '::1', 1537552869, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373535323836393b),
('ucmeliu80e8nulr4hn9eoludc1rq1bh5', '::1', 1537552869, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373535323836393b),
('urh3c6t5dd427j1hjhvr1gn054ul6l6q', '::1', 1537552872, 0x5f5f63695f6c6173745f726567656e65726174657c693a313533373535323837323b);

-- --------------------------------------------------------

--
-- Table structure for table `dosages`
--

CREATE TABLE `dosages` (
  `id` int(11) NOT NULL,
  `dosage` varchar(255) NOT NULL,
  `dosage_weight` varchar(255) NOT NULL,
  `drug_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dosages`
--

INSERT INTO `dosages` (`id`, `dosage`, `dosage_weight`, `drug_name`) VALUES
(1, '25', 'T', 'lsd'),
(2, '46', '5', 'lsd');

-- --------------------------------------------------------

--
-- Table structure for table `drugs_list`
--

CREATE TABLE `drugs_list` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnail` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `dosage` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `about` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `safety_info` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `combinations` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alt_names` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `searched` int(255) DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `drugs_list`
--

INSERT INTO `drugs_list` (`id`, `name`, `thumbnail`, `description`, `dosage`, `about`, `safety_info`, `combinations`, `alt_names`, `slug`, `searched`, `created_at`, `category`) VALUES
(1, 'LSD', 'https://images1.westword.com/imager/u/745xauto/9645271/web_opener.jpg', 'LSD stands for its chemical name, lysergic acid diethylamide, and is commonly called ‘acid’. It’s a powerful hallucinogenic drug – this means that users are likely to experience a distorted view of objects and reality, including seeing and sometimes heari', 'ug', 'Psychedelics', 'Psychedelics', 'Psychedelics', 'TAB, LUCY, L, BLOTTER, ACID', 'lsd', 60, '2018-09-20 20:44:04', 'Opiate, Psyc, Some other'),
(2, 'Herion', 'https://images1.westword.com/imager/u/745xauto/9645271/web_opener.jpg', 'LSD stands for its chemical name, lysergic acid diethylamide, and is commonly called ‘acid’. It’s a powerful hallucinogenic drug – this means that users are likely to experience a distorted view of objects and reality, including seeing and sometimes heari', 'ug', 'Psychedelics', 'Psychedelics', 'Psychedelics', 'TAB, LUCY, L, BLOTTER, ACID.', 'heroin', 13, '2018-09-15 21:29:38', 'Opiate'),
(3, 'Xanax', 'https://images1.westword.com/imager/u/745xauto/9645271/web_opener.jpg', 'LSD stands for its chemical name, lysergic acid diethylamide, and is commonly called ‘acid’. It’s a powerful hallucinogenic drug – this means that users are likely to experience a distorted view of objects and reality, including seeing and sometimes heari', 'ug', 'Psychedelics', 'Psychedelics', 'Psychedelics', 'TAB, LUCY, L, BLOTTER, ACID.', 'lsd', 15, '2018-09-15 21:25:15', 'Opiate'),
(4, 'Meth', 'https://images1.westword.com/imager/u/745xauto/9645271/web_opener.jpg', 'LSD stands for its chemical name, lysergic acid diethylamide, and is commonly called ‘acid’. It’s a powerful hallucinogenic drug – this means that users are likely to experience a distorted view of objects and reality, including seeing and sometimes heari', 'ug', 'Psychedelics', 'Psychedelics', 'Psychedelics', 'TAB, LUCY, L, BLOTTER, ACID.', 'lsd', 12, '2018-08-28 19:54:41', 'Opiate'),
(5, 'Weed', 'https://images1.westword.com/imager/u/745xauto/9645271/web_opener.jpg', 'LSD stands for its chemical name, lysergic acid diethylamide, and is commonly called ‘acid’. It’s a powerful hallucinogenic drug – this means that users are likely to experience a distorted view of objects and reality, including seeing and sometimes heari', 'ug', 'Psychedelics', 'Psychedelics', 'Psychedelics', 'TAB, LUCY, L, BLOTTER, ACID.', 'lsd', 13, '2018-09-11 22:52:18', 'Opiate'),
(7, 'Phenobarbital', 'http://www.asiapharma-syria.com/files/images/products/Phenobarbital-15.jpg', 'Phenobarbital, also known as phenobarbitone or phenobarb, is a medication recommended by the World Health Organization for the treatment of certain types of epilepsy in developing countries.', 'mg', 'Phenobarbital, also known as phenobarbitone or phenobarb, is a medication recommended by the World Health Organization for the treatment of certain types of epilepsy in developing countries.', 'Phenobarbital', 'Phenobarbital', 'Phenobarbital', 'phenobarbital', 23, '2018-09-11 23:23:27', 'Barbiturate,Opiate');

-- --------------------------------------------------------

--
-- Table structure for table `drug_categories`
--

CREATE TABLE `drug_categories` (
  `id` int(11) NOT NULL,
  `category` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `wiki` varchar(255) NOT NULL,
  `searched` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `drug_categories`
--

INSERT INTO `drug_categories` (`id`, `category`, `description`, `slug`, `wiki`, `searched`) VALUES
(1, 'Deliriant', 'Deliriants are considered to be true hallucinogens, because the visuals they produce are hard or impossible to tell apart from reality; they are also known for negative physical effects.', 'deliriant', 'https://wiki.tripsit.me/wiki/Deliriants', 12),
(2, 'Common', 'Common drugs are those which are well known and widely used among the drug community. This doesn\'t necessarily mean they are safe, but it usually comes with a longer relative history of use in humans with which to establish a safety profile.', 'common', 'noWiki', 0),
(4, 'Barbiturate', '', 'barbiturate', 'noWiki', 0),
(6, 'Tentative', 'Drugs marked as tentative are those our team wasn\'t able to find much reliable information about. This is often because the drug is very new. Information listed under these drugs should not be entirely trusted.', 'tentative', 'noWiki', 0),
(7, 'Nootropic', 'Nootropics, otherwise known as \\\"Smart Drugs\\\" or \\\"Cognitive Enhancers,\\\" are substances that can improve cognitive function, memory, creativity, motivation and can also aid in decreasing anxiety.', 'nootropic', 'noWiki', 0),
(8, 'Psychedelic', 'Psychedelics are drugs which alter the perception, causing a number of mental effects which manifest in many forms including altered states of consciousness, visual or tactile effects.', 'psychedelic', 'https://wiki.tripsit.me/wiki/Psychedelics', 0),
(9, 'Research Chemical', 'Research chemicals are drugs with relatively little history of human use, and thus particular care should be taken if choosing to ingest them.', 'research-chemical', 'https://wiki.tripsit.me/wiki/Research_Chemicals', 0),
(10, 'Empathogen', '', 'empathogen', 'noWiki', 0),
(11, 'Supplement', '', 'supplement', 'noWiki', 0),
(12, 'Stimulant', 'Stimulants excite the nervous system and increase physiological function.', 'stimulant', 'https://wiki.tripsit.me/wiki/Stimulants', 0),
(14, 'Depressant', 'Depressants are drugs which reduce arousal and stimulation in the user, characterised by a depressing of mental and physical functions.', 'depressant', 'https://wiki.tripsit.me/wiki/Depressants', 11),
(15, 'Supplements', '', 'supplements', 'noWiki', 0),
(16, 'Benzodiazepine', 'Benzodiazepines are generally hypnotic or anxiolytic depressant drugs.', 'benzodiazepine', 'https://wiki.tripsit.me/wiki/Benzodiazepines', 0),
(17, 'Dissociative', 'Dissociatives are mostly NMDA receptor antagonists, these substances are hallucinogenic but different than psychedelics. As per the name, these substances create a distance between the user and reality.', 'dissociative', 'https://wiki.tripsit.me/wiki/Dissociatives', 0),
(18, 'Opioid', 'Opioids are pain-killing depressants which may also cause euphoria.', 'opioid', 'https://wiki.tripsit.me/wiki/Opioids', 0);

-- --------------------------------------------------------

--
-- Table structure for table `market_info`
--

CREATE TABLE `market_info` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `no_of_users_voted` int(255) NOT NULL,
  `rating` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `market_info`
--

INSERT INTO `market_info` (`id`, `name`, `no_of_users_voted`, `rating`) VALUES
(1, 'Wallstreet', 241, -342),
(2, 'Wallstreet', 241, -342);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `location` varchar(255) NOT NULL,
  `body` varchar(255) NOT NULL,
  `visable` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `safety_info`
--

CREATE TABLE `safety_info` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `safety_info`
--

INSERT INTO `safety_info` (`id`, `title`, `description`, `category`) VALUES
(1, 'Bad Trips', 'Lorem', 'Psychodellics'),
(2, 'Bad Trips', 'Lorem', 'Psychodellics');

-- --------------------------------------------------------

--
-- Table structure for table `stats`
--

CREATE TABLE `stats` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stats`
--

INSERT INTO `stats` (`id`, `name`, `value`) VALUES
(1, 'drugs', '0'),
(2, 'users', '0'),
(3, 'online', '0');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `NAME` varchar(255) NOT NULL,
  `sesion_id` varchar(255) NOT NULL,
  `zipcode` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `PASSWORD` varchar(255) NOT NULL,
  `register_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `logged_in` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `NAME`, `sesion_id`, `zipcode`, `email`, `username`, `PASSWORD`, `register_date`, `logged_in`) VALUES
(1, 'admin', '', 'admin', 'admin@admin.com', 'admin', '21232f297a57a5a743894a0e4a801fc3', '2018-05-13 22:20:27', '0'),
(2, '3333', '2mus7he9df2lhh2l9k6l7bn9ei002ial', '3333333333333', '33333333@as.asdsad', 'adddmin', '21232f297a57a5a743894a0e4a801fc3', '2018-05-14 18:22:08', '1'),
(5, 'reasd', '2mus7he9df2lhh2l9k6l7bn9ei002ial', 'asda', 'sdd@a.asd', 'addmin', '21232f297a57a5a743894a0e4a801fc3', '2018-09-15 17:33:13', '1');

-- --------------------------------------------------------

--
-- Table structure for table `vendor_info`
--

CREATE TABLE `vendor_info` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `no_users_voted` varchar(255) NOT NULL,
  `rating` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vendor_info`
--

INSERT INTO `vendor_info` (`id`, `name`, `no_users_voted`, `rating`) VALUES
(1, 'Vendor1', '244', '-24'),
(2, 'Vendor1', '244', '-24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ci_sessions`
--
ALTER TABLE `ci_sessions`
  ADD PRIMARY KEY (`id`,`ip_address`),
  ADD KEY `ci_sessions_timestamp` (`timestamp`);

--
-- Indexes for table `dosages`
--
ALTER TABLE `dosages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `drug_name` (`drug_name`);

--
-- Indexes for table `drugs_list`
--
ALTER TABLE `drugs_list`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category` (`category`(191));

--
-- Indexes for table `drug_categories`
--
ALTER TABLE `drug_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `market_info`
--
ALTER TABLE `market_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `safety_info`
--
ALTER TABLE `safety_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stats`
--
ALTER TABLE `stats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vendor_info`
--
ALTER TABLE `vendor_info`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dosages`
--
ALTER TABLE `dosages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `drugs_list`
--
ALTER TABLE `drugs_list`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `drug_categories`
--
ALTER TABLE `drug_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `market_info`
--
ALTER TABLE `market_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `safety_info`
--
ALTER TABLE `safety_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `stats`
--
ALTER TABLE `stats`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `vendor_info`
--
ALTER TABLE `vendor_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
