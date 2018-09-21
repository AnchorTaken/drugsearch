<?php

defined('BASEPATH') OR exit('No direct script access allowed');



/**

*

*/

class Offlineusers extends CI_Model {

    public function read()
    
    {   
        $query = $this->db->query("SELECT `username` FROM `users` WHERE `logged_in` = '0' ");
        return $query->result_array();

    }

    }

    