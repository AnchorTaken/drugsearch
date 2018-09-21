<?php

defined('BASEPATH') OR exit('No direct script access allowed');



/**

*

*/

class Menu_model extends CI_Model {

public function read()

{
    
    $drugs = $this->db->query("select name from `drugs_list`");
    $safety = $this->db->query("select * from `safety_info`");
    $markets = $this->db->query("select * from `market_info`");
    return $drugs->result_array();
    return $safety->result_array();
    return $markets->result_array();
}


}