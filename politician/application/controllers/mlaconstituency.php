<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Mlaconstituency extends CI_Controller {

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
        if($name=="")
        {
            echo "Name is Required";
        }
        else 
        {
            $data['json']=$this->mlaconstituencymodel->insert($name);
            $this->load->view('json',$data);
        }
        
	}
    public function update()
	{
        $id=trim($this->input->get_post("id"));
        $name=trim($this->input->get_post("name"));
        if($name=="")
        {
            echo "Name is Required";
        }
        else 
        {
        $data['json']=$this->mlaconstituencymodel->update($id,$name);
		$this->load->view('json',$data);
        }
	}
	public function find()
	{
        $data['json']=$this->mlaconstituencymodel->viewall();
		$this->load->view('json',$data);
	}
    public function findone()
	{
        $id=trim($this->input->get_post("id"));
        $data['json']=$this->mlaconstituencymodel->viewone($id);
		$this->load->view('json',$data);
	}
    public function delete()
	{
        $id=trim($this->input->get_post("id"));
        $data['json']=$this->mlaconstituencymodel->deleteone($id);
		$this->load->view('json',$data);
	}
}