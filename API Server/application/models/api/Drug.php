<?php

defined('BASEPATH') OR exit('No direct script access allowed');



/**

*

*/

class Drug extends CI_Model {

public function read()

{
    $name = $this->uri->segment(3);
    $this->db->where('name', $name);
    $this->db->set('searched', 'searched+1', FALSE);
    $this->db->update('drugs_list');

    $this->db->where('category', $name);
    $this->db->set('searched', 'searched+1', FALSE);
    $this->db->update('drug_categories');

    $drug = $this->db->query("SELECT * FROM `drugs_list` WHERE name = '" . $name . "' OR category = '" . $name . "' OR alt_names = '" . $name . "'");
    return $drug->result_array();

}


}