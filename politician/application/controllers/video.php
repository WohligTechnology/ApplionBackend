<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Video extends CI_Controller {

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
        $video=trim($this->input->get_post("video"));
        if($title=="")
        {
            echo "Title is Required";
        }
        else if($video=="")
        {
            echo "Video Name is Required";
        }
        else 
        {
            $data['json']=$this->videomodel->insert($title,$video);
            $this->load->view('json',$data);
        }
        
	}
    public function update()
	{
        $id=trim($this->input->get_post("id"));
        $title=trim($this->input->get_post("title"));
        $video=trim($this->input->get_post("video"));
        if($title=="")
        {
            echo "Title is Required";
        }
        else if($video=="")
        {
            echo "Video Name is Required";
        }
        else 
        {
        $data['json']=$this->videomodel->update($id,$title,$video);
		$this->load->view('json',$data);
        }
	}
	public function find()
	{
        $data['json']=$this->videomodel->viewall();
		$this->load->view('json',$data);
	}
    public function findone()
	{
        $id=trim($this->input->get_post("id"));
        $data['json']=$this->videomodel->viewone($id);
		$this->load->view('json',$data);
	}
    public function delete()
	{
        $id=trim($this->input->get_post("id"));
        $data['json']=$this->videomodel->deleteone($id);
		$this->load->view('json',$data);
	}
}