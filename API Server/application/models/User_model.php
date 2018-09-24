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
			// Get Cookie
			$cookie_id = get_cookie('ci_session', TRUE);
			$result = $this->db->get('users');
			// Assign Cookie To User
			$this->db->from('users');
			$this->db->where('username', $username);
			$this->db->set('sesion_id', $cookie_id);
			$this->db->set('logged_in', 1);
			$this->db->update('users');
			// Counts drugs
			$count_drugs = $this->db->get('drugs_list');
			$total_drugs = $count_drugs->num_rows();
			$this->db->from('stats');
			$this->db->where('name','drugs');
			$this->db->set('value', $total_drugs);
			$this->db->update('stats');
			// Counts users
			$count_users = $this->db->get('users');
			$total_users = $count_users->num_rows();
			$this->db->from('stats');
			$this->db->where('name','users');
			$this->db->set('value', $total_users);
			$this->db->update('stats');
			// Counts users
			$this->db->where('logged_in', 1);
			$count_online = $this->db->get('users');
			$total_online = $count_online->num_rows();
			$this->db->from('stats');
			$this->db->where('name','online');
			$this->db->set('value', $total_online);
			$this->db->update('stats');
			// Check if user exsist
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