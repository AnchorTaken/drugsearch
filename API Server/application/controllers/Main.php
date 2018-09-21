<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {

	public function home(){	
	
		$this->load->view('layout/header');
		$this->load->view('layout/nav');
		$this->load->view('home');
		$this->load->view('layout/footer');
		$this->load->view('layout/scripts');
	}
	public function about(){	
		$this->load->view('layout/header');
		$this->load->view('layout/nav');
		$this->load->view('about');
		$this->load->view('layout/footer');
		$this->load->view('layout/scripts');
	}
}