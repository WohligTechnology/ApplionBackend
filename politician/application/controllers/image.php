<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Image extends CI_Controller {

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
    
    public function upload() {
        $this->load->view("uploadimage");
    }
    
    public function create()
	{
        $title=trim($this->input->get_post("text"));
        $config['upload_path'] = './uploads/';
		$config['allowed_types'] = '*';
		$config['max_size']	= '10000';
		$config['max_width']  = '2000';
		$config['max_height']  = '768';

		$this->load->library('upload', $config);

		if ( ! $this->upload->do_upload('file'))
		{
			$error = array('error' => $this->upload->display_errors());
	print_r($error);
			//$this->load->view('testview', $error);
			return;
		}
		else
		{
			//echo "File Uploaded";
			//return;
			$data = $this->upload->data();
            $name=$data['file_name'];   
		}
        
     
       if($title=="")
        {
            echo "Title is Required";
        }
        else 
        {
            $data['json']=$this->imagemodel->insert($name,$title);
            //$this->load->view('json',$data);
        }
        return true;
        
	}
    public function update()
	{
        $id=trim($this->input->get_post("id"));
        $title=trim($this->input->get_post("text"));
        $config['upload_path'] = './uploads/';
		$config['allowed_types'] = 'gif|jpg|png';
		$config['max_size']	= '10000';
		$config['max_width']  = '2000';
		$config['max_height']  = '768';

		$this->load->library('upload', $config);

		if ( ! $this->upload->do_upload('file'))
		{
			$error = array('error' => $this->upload->display_errors());
	print_r($error);
			//$this->load->view('testview', $error);
			return;
		}
		else
		{
			//echo "File Uploaded";
			//return;
			$data = $this->upload->data();
            $name=$data['file_name'];   
		}
        
     
       if($title=="")
        {
            echo "Title is Required";
        }
        else 
        {
        $data['json']=$this->imagemodel->update($id,$name,$title);
		$this->load->view('json',$data);
        }
	}
	public function find()
	{
        $data['json']=$this->imagemodel->viewall();
		$this->load->view('json',$data);
	}
    public function findone()
	{
        $id=trim($this->input->get_post("id"));
        $data['json']=$this->imagemodel->viewone($id);
		$this->load->view('json',$data);
	}
    public function delete()
	{
        $id=trim($this->input->get_post("id"));
        $data['json']=$this->imagemodel->deleteone($id);
		$this->load->view('json',$data);
	}
}