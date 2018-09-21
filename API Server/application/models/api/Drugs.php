<?php

defined('BASEPATH') OR exit('No direct script access allowed');



/**

*

*/

class Drugs extends CI_Model {

public function read()

{
    
    // $all33 = $this->ApiCombination->consume();
    // return $all33->result_array();
    $query = $this->db->query("select * from `drugs_list`");
    return $query->result_array();
}


}