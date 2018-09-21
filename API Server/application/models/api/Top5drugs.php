<?php

defined('BASEPATH') OR exit('No direct script access allowed');



/**

*

*/

class Top5drugs extends CI_Model {

public function read()

{

    // $this->db->order_by("searched", "asc");
    $query = $this->db->query("select `id`,`name`,`searched`,`slug` from `drugs_list` ORDER BY `searched` DESC");
    return $query->result_array();
}
}