<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Article extends CI_Controller {

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
       
        $title=trim($this->input->get_post("title"));
        //$timestamp=trim($this->input->get_post("timestamp"));
        $text=trim($this->input->get_post("text"));
        if($title=="")
        {
            echo "Title is required.";
        }
       
        else if($text=="")
        {
            echo "Text is Required";
        }
        else 
        {
            $data['json']=$this->articlemodel->insert($title,$text);
            $this->load->view('json',$data);
        }
        
	}
    public function update()
	{
        $id=trim($this->input->get_post("id"));
        $title=trim($this->input->get_post("title"));
        //$timestamp=trim($this->input->get_post("timestamp"));
        $text=trim($this->input->get_post("text"));
        if($title=="")
        {
            echo "Title is required.";
        }
        
        else if($text=="")
        {
            echo "Text is Required";
        }
        else 
        {
        $data['json']=$this->articlemodel->update($id,$title,$text);
		$this->load->view('json',$data);
        }
	}
	public function find()
	{
        $data['json']=$this->articlemodel->viewall();
		$this->load->view('json',$data);
	}
    public function findone()
	{
        $id=$this->input->get_post('id');
        $data['json']=$this->articlemodel->viewone($id);
		$this->load->view('json',$data);
	}
    public function delete()
	{
        
        $id=$this->input->get_post('id');
        $data['json']=$this->articlemodel->deleteone($id);
		$this->load->view('json',$data);
	}
}