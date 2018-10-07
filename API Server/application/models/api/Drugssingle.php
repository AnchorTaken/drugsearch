<?php

defined('BASEPATH') OR exit('No direct script access allowed');



/**

*

*/


class Drugssingle extends CI_Model {

    public function read()
    
    {
        $name = $this->uri->segment(3);
        $str = $this->db->query("SELECT `positive_short_term` FROM `drugs_single` WHERE name = '" . $name . "'");
        $results=$str->result();
        foreach( $results as $key => $value )  
        $array = strpos( $value->positive_short_term, "," ) ? explode( ",", $value->positive_short_term ) : $value;                // this is when there is no "/", so returns the original value

        $str2 = $this->db->query("SELECT `positive_long_term` FROM `drugs_single` WHERE name = '" . $name . "'");
        $results2 = $str2->result();
        foreach( $results2 as $key => $value2 )  
        $array2 = strpos( $value2->positive_long_term, "," ) ? explode( ",", $value2->positive_long_term ) : $value2;                // this is when there is no "/", so returns the original value
        
        $str3 = $this->db->query("SELECT `negative_long_term` FROM `drugs_single` WHERE name = '" . $name . "'");
        $results3 = $str3->result();
        foreach( $results3 as $key => $value3 )  
        $array3 = strpos( $value3->negative_long_term, "," ) ? explode( ",", $value3->negative_long_term ) : $value3;                // this is when there is no "/", so returns the original value
        
        $str4 = $this->db->query("SELECT `negative_short_term` FROM `drugs_single` WHERE name = '" . $name . "'");
        $results4 = $str4->result();
        foreach( $results4 as $key => $value4)  
        $array4 = strpos( $value4->negative_short_term, "," ) ? explode( ",", $value4->negative_short_term ) : $value4;    
    
        $total_array = array('positive_s' => $array, 'positive_l' => $array2 ,'negative_s' => $array4,'negative_l' => $array3);   
        return ["effects" => $total_array];

    }
}
    