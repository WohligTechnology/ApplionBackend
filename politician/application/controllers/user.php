<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -  
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in 
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
    
    public function create()
	{
       
        $name=trim($this->input->get_post("name"));
        $email=trim($this->input->get_post("email"));
        $password=trim($this->input->get_post("password"));
        $password=md5($password);
        $accesslevel=trim($this->input->get_post("accesslevel"));
        if($name=="")
        {
            echo "Name is required.";
        }
        else if($email=="")
        {
            echo "Email is Required";
        }
        else if($password=="")
        {
            echo "Password is Required";
        }
        else if($accesslevel=="")
        {
            echo "Acceslevel is Required";
        }
        else 
        {
            $data['json']=$this->usermodel->insert($name,$email,$password,$accesslevel);
            $this->load->view('json',$data)    ;
        }
        
	}
    public function update()
	{
        $id=trim($this->input->get_post("id"));
        $name=trim($this->input->get_post("name"));
        $email=trim($this->input->get_post("email"));
        $password=trim($this->input->get_post("password"));
        $password=md5($password);
        $accesslevel=trim($this->input->get_post("accesslevel"));
        if($name=="")
        {
            echo "Name is required.";
        }
        else if($email=="")
        {
            echo "Email is Required";
        }
        else if($password=="")
        {
            echo "Password is Required";
        }
        else if($accesslevel=="")
        {
            echo "Acceslevel is Required";
        }
        else 
        {
        $data['json']=$this->usermodel->update($id,$name,$email,$password,$accesslevel);
		$this->load->view('json',$data);
        }
	}
	public function find()
	{
		$id=trim($this->input->get_post("id"));
        $data['json']=$this->usermodel->viewall();
		$this->load->view('json',$data);
	}
    public function findone()
	{
        $id=$this->input->get_post('id');
        $data['json']=$this->usermodel->viewone($id);
		$this->load->view('json',$data);
	}
    public function delete()
	{
        $id=$this->input->get_post('id');
        $data['json']=$this->usermodel->deleteone($id);
		$this->load->view('json',$data);
	}
    
	public function validate( )
	{
		$this->load->model('user_model');
		$username=$this->input->post('email');
		$password=$this->input->post('password');
		$validate = $this->user_model->validate($username,$password);
		if ( $validate ) {
//			redirect( base_url() . 'index.php/site', 'refresh' );
			redirect( base_url()  );
		} //$validate
		else {
			$data[ 'alerterror' ] = 'Username or Password Incorrect';
			//$data[ 'page' ]  = 'login';
			//$data[ 'title' ]      = 'Login Page';
			$this->load->view( 'login' , $data );
		}
	}
}