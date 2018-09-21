<?php

defined('BASEPATH') OR exit('No direct script access allowed');



/**

*

*/

class Drugs_model extends CI_Model {

public function read()

{

    $query = $this->db->query("select * from `drugs_list`");

    return $query->result_array();

}


}