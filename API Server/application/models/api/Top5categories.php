<?php

defined('BASEPATH') OR exit('No direct script access allowed');



/**

*

*/

class Top5categories extends CI_Model {

public function read()

{
    
    $query = $this->db->query("SELECT `category`, `searched` FROM `drug_categories` ORDER BY `searched` DESC");
    return $query->result_array();
}
}