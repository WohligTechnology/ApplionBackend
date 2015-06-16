<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Upload extends CI_Controller {

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
        $name=trim($this->input->get_post("text"));
        $image=trim($this->input->get_post("image"));
        $data['json']=$this->uploadmodel->insert($name,$image);
        $this->load->view('json',$data);
        
        
	}
    public function update()
	{
        $name=trim($this->input->get_post("text"));
        $name=trim($this->input->get_post("image"));
        
        $data['json']=$this->uploadmodel->update($text,$image);
		$this->load->view('json',$data);
        
	}
	public function find()
	{
        $data['json']=$this->uploadmodel->viewall();
		$this->load->view('json',$data);
	}
    public function findone()
	{
        $id=trim($this->input->get_post("id"));
        $data['json']=$this->uploadmodel->viewone($id);
		$this->load->view('json',$data);
	}
    public function delete()
	{
        $id=trim($this->input->get_post("id"));
        $data['json']=$this->uploadmodel->deleteone($id);
		$this->load->view('json',$data);
	}
}