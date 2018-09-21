<?php

defined('BASEPATH') OR exit('No direct script access allowed');



/**

*

*/

class Onlineusers extends CI_Model {

    public function read()
    
    {   
        $query = $this->db->query("SELECT `username` FROM `users` WHERE `logged_in` = '1' ");
        return $query->result_array();

    }

    }

    