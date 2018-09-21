<?php

defined('BASEPATH') OR exit('No direct script access allowed');



/**

*

*/

class ApiCombination extends CI_Model {

public function consume($array)

{

    // $dname = $this->db->query("select * from `drugs_list`");
    $categories = $this->Defaultdruglist->consume($array);
    // $query = array_merge($total, $categories);
    // print_r($query);
    return $categories;

}


}