<?php
defined('BASEPATH') OR exit('No direct script access allowed');
 
require(APPPATH.'/libraries/REST_Controller.php');
header('Content-Type: application/json');
class Api extends REST_Controller
{

       public function __construct() {
               parent::__construct();
               $this->load->model('api/api_loader');
               
       }    
    //    public function user_get(){
    //        $r = $this->user_model->read();
    //        $this->response($r); 
    //    }
    //    public function user_put(){
    //        $id = $this->uri->segment(3);
 
    //        $data = array('name' => $this->input->get('name'),
    //        'pass' => $this->input->get('pass'),
    //        'type' => $this->input->get('type')
    //        );
 
    //         $r = $this->user_model->update($id,$data);
    //            $this->response($r); 
    //    }
 
    //    public function user_post(){
    //        $data = array('name' => $this->input->post('name'),
    //        'pass' => $this->input->post('pass'),
    //        'type' => $this->input->post('type')
    //        );
    //        $r = $this->user_model->insert($data);
    //        $this->response($r); 
    //    }
    //    public function user_delete(){
    //        $id = $this->uri->segment(3);
    //        $r = $this->user_model->delete($id);
    //        $this->response($r); 
    //    }
        public function drugs_get(){
        $r2 = $this->drugs->read();
        $this->response($r2); 
        }
        public function drug_get(){
        $drug = $this->drug->read();
        $this->response($drug);
        
        $r2 = $this->drug->read();
        $this->response($r2); 
        }
        public function userdata_get(){
        $user = $this->userdata->read();
        $this->response($user); 
        }
        public function top5drugs_get(){
        $top5drugs = $this->top5drugs->read();
        $this->response($top5drugs); 
        }
        public function top5categories_get(){
        $top5categories = $this->top5categories->read();
        $this->response($top5categories); 
        }
        public function dosage_get(){
        $dosage = $this->dosage->read();
        $this->response($dosage); 
        }
        public function defaultdruglist_get(){
        $defaultdruglist = $this->defaultdruglist->read();
        $this->response($defaultdruglist); 
        }
        public function onlineusers_get(){
        $onlineuser = $this->onlineusers->read();
        $this->response($onlineuser); 
        }
        public function offlineusers_get(){
        $offlineuser = $this->offlineusers->read();
        $this->response($offlineuser); 
        }
        // public function menu_get(){
        //     $markets = $this->menu_model->read();
        //     $this->response($markets); 
        // }      
 
}