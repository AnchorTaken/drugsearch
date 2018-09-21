<?php

defined('BASEPATH') OR exit('No direct script access allowed');



/**

*

*/


class Defaultdruglist extends CI_Model {

    public function read()
    
    {
        $name = $this->uri->segment(3);
        $str = $this->db->query("SELECT `category` FROM `drugs_list` WHERE name = '" . $name . "'");
        $results=$str->result();
        foreach( $results as $key => $value )  
        $array = strpos( $value->category, "," ) ? explode( ",", $value->category ) : $value;                // this is when there is no "/", so returns the original value
        $arrai = array('category' => $array);
        return $arrai;
        
    
    }
    }
    