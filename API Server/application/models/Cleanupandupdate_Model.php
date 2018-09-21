<?php

defined('BASEPATH') OR exit('No direct script access allowed');



/**

*

*/

class Cleanupandupdate_Model extends CI_Model

{       
        public function index () {
        set_time_limit(0); // make it run forever
        while(true) {
            doSomethingSpecial();
            sleep(20);
        }    
        }
        
        private function doSomethingSpecial () {
                $message = "wrong answer";
                echo "<script type='text/javascript'>alert('$message');</script>";
        }
}