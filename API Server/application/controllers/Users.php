<?php
	class Users extends CI_Controller{
		// Register user	
		public function register(){
			$data['title'] = 'Sign Up';
			$this->form_validation->set_rules('name', 'Name', 'required');
			$this->form_validation->set_rules('username', 'Username', 'required|callback_check_username_exists');
			$this->form_validation->set_rules('email', 'Email', 'required|callback_check_email_exists');
			$this->form_validation->set_rules('password', 'Password', 'required');
			$this->form_validation->set_rules('password2', 'Confirm Password', 'matches[password]');

			if($this->form_validation->run() === FALSE){
				$this->load->view('layout/header');
				$this->load->view('layout/nav');
				$this->load->view('register', $data);
				$this->load->view('layout/footer');
				$this->load->view('layout/scripts');
			} else {
				// Encrypt password
				$enc_password = md5($this->input->post('password'));

				$this->user_model->register($enc_password);

				// Set message
				$this->session->set_flashdata('user_registered', 'You are now registered and can log in');

				redirect('home');
			}
		}
		public function login(){
			$data['title'] = 'Sign In';

			$this->form_validation->set_rules('username', 'Username', 'required');
			$this->form_validation->set_rules('password', 'Password', 'required');

			if($this->form_validation->run() === FALSE){
				$this->load->view('layout/header');
				$this->load->view('layout/nav');
				$this->load->view('login', $data);
				$this->load->view('layout/footer');
				$this->load->view('layout/scripts');
			} else {
				
				// Get username
				$username = $this->input->post('username');
				// Get and encrypt the password
				$password = md5($this->input->post('password'));

				// Login user
				$user_id = $this->user_model->login($username, $password);

				if($user_id){
					// Create session
					$this->db->select('*');
					$this->db->from('users');
					$user_data = array(
						'user_id' => $user_id,
						'username' => $username,
						'email' => $email,
						'logged_in' => true
					);
					// $this->session->set_userdata($user_data);

					// Set message
					$this->session->set_flashdata('user_loggedin', 'Yous are now logged in');

					redirect('app/');
				} else {
					// Set message
					$this->session->set_flashdata('login_failed', 'Login is invalid');

					redirect('/login');
				}		
			}
		}
	
		// Log user out
		public function logout($page = 'logout'){
			$cookie_id = get_cookie('ci_session', TRUE);
			$this->db->from('users');
			$this->db->where('sesion_id', $cookie_id);
			$this->db->set('sesion_id', NULL);
			$this->db->set('logged_in', 0);
			$this->db->update('users');
			$session_id = $this->session->userdata('session_id');
			$this->user_model->logout($session_id);
			redirect('home');
		}

		// Check if username exists
		public function check_username_exists($username){
			$this->form_validation->set_message('check_username_exists', 'That username is taken. Please choose a different one');
			if($this->user_model->check_username_exists($username)){
				return true;
			} else {
				return false;
			}
		}

		// Check if email exists
		public function check_email_exists($email){
			$this->form_validation->set_message('check_email_exists', 'That email is taken. Please choose a different one');
			if($this->user_model->check_email_exists($email)){
				return true;
			} else {
				return false;
			}
		}
	}