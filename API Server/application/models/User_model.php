<?php
	class user_model extends CI_Model{
		public function register($enc_password){
			// User data array
			$data = array(
				'name' => $this->input->post('name'),
				'email' => $this->input->post('email'),
                'username' => $this->input->post('username'),
                'password' => $enc_password,
                'zipcode' => $this->input->post('zipcode')
			);

			// Insert user
			return $this->db->insert('users', $data);
		}

		// Log user in
		public function login($username, $password){
			// Validate
			$this->db->where('username', $username);
			$this->db->where('password', $password);
			$cookie_id = get_cookie('ci_session', TRUE);
			// $sessin_id = $this->db->query("SELECT `id` FROM `ci_sessions` WHERE id = '" . $cookie_id . "' ");
			$result = $this->db->get('users');
			$this->db->from('users');
			$this->db->where('username', $username);
			$this->db->set('sesion_id', $cookie_id);
			$this->db->set('logged_in', 1);
			$this->db->update('users');
			// return $this->db->update("UPDATE  SET 'sesion_id' = '" .  . "' FROM '' WHERE 'username' = '" .  . "'");

			if($result->num_rows() == 1){
				return $result->row(0)->id; 	
			} else {
				return false;
			}
		}
		
		// Log user in
		public function logout($user_id){
			$this->db->where('id', $user_id);

		
		}
		// Check username exists
		public function check_username_exists($username){
			$query = $this->db->get_where('users', array('username' => $username));
			if(empty($query->row_array())){
				return true;
			} else {
				return false;
			}
		}

		// Check email exists
		public function check_email_exists($email){
			$query = $this->db->get_where('users', array('email' => $email));
			if(empty($query->row_array())){
				return true;
			} else {
				return false;
			}
		}
	}