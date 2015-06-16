<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Registration extends CI_Controller {

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
        $phoneno=trim($this->input->get_post("phoneno"));
        $gpslocation=trim($this->input->get_post("gpslocation"));
        if($name=="")
        {
            echo "Name is Required";
        }
        else if($phoneno=="")
        {
            echo "Phone Number is Required";
        }
        else 
        {
            $data['json']=$this->registrationmodel->insert($name,$phoneno,$gpslocation);
            $this->load->view('json',$data);
        }
        
	}
    public function update()
	{
        $id=trim($this->input->get_post("id"));
        $name=trim($this->input->get_post("name"));
        $phoneno=trim($this->input->get_post("phoneno"));
        $gpslocation=trim($this->input->get_post("gpslocation"));
        if($name=="")
        {
            echo "Nmae is Required";
        }
        else if($phoneno=="")
        {
            echo "Phone Number is Required";
        }
        else 
        {
        $data['json']=$this->registrationmodel->update($id,$name,$phoneno,$gpslocation);
		$this->load->view('json',$data);
        }
	}
	public function find()
	{
        $data['json']=$this->registrationmodel->viewall();
		$this->load->view('json',$data);
	}
    public function findone()
	{
        $id=trim($this->input->get_post("id"));
        $data['json']=$this->registrationmodel->viewone($id);
		$this->load->view('json',$data);
	}
    public function delete()
	{
        $id=trim($this->input->get_post("id"));
        $data['json']=$this->registrationmodel->deleteone($id);
		$this->load->view('json',$data);
	}
    public function filterdata()
	{
        $search=trim($this->input->get_post("search"));
        $data['json']=$this->registrationmodel->filterdata($search);
		$this->load->view('json',$data);
	}
}