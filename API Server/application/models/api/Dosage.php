<?php

defined('BASEPATH') OR exit('No direct script access allowed');



/**

*

*/

class Dosage extends CI_Model {

public function read()

{
    $name = $this->uri->segment(3);
    $query = $this->db->query("SELECT `dosage`,`dosage_weight` FROM `dosages` WHERE drug_name = '" . $name . "' ORDER BY `dosage` ASC");
    return $query->result_array();
}
}