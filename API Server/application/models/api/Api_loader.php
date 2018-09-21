<?php

defined('BASEPATH') OR exit('No direct script access allowed');



/**

*

*/

class api_loader extends CI_Model 
{
       public function __construct() {
        parent::__construct();
        $this->load->model('api/userdata');
        $this->load->model('api/drugs');
        $this->load->model('api/drug');
        $this->load->model('api/top5drugs');
        $this->load->model('api/top5categories');
        $this->load->model('api/dosage');
        $this->load->model('api/defaultdruglist');
        $this->load->model('api/onlineusers');
        $this->load->model('api/offlineusers');
        $this->load->model('api/ApiCombination');
               
       }    


}