<?php

defined('BASEPATH') OR exit('No direct script access allowed');



/**

*

*/

class Userdata extends CI_Model

{
public function read()
{       
        $cookie_id = get_cookie('ci_session', TRUE);
        $userdatax = $this->db->query("SELECT `id`, `NAME`, `zipcode`, `email`, `username`, `register_date`, `logged_in` FROM `users` WHERE `sesion_id` = '" . $cookie_id . "' ");
        return $userdatax->result_array();
}


}