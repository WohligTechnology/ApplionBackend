<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Vote extends CI_Controller {

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
        $region=trim($this->input->get_post("region"));
        $pollingarea=trim($this->input->get_post("pollingarea"));
        $pollingcenter=trim($this->input->get_post("pollingcenter"));
        $name=trim($this->input->get_post("name"));
        $phoneno=trim($this->input->get_post("phoneno"));
        $area=trim($this->input->get_post("area"));
        $city=trim($this->input->get_post("city"));
        if($name=="")
        {
            echo "Name is Required";
        }
        else if($phoneno=="")
        {
            echo "Phone Number is Required";
        }
        else if($region=="")
        {
            echo "Select Region";
        }
        else if($pollingarea=="")
        {
            echo "Polling Area is Required";
        }
        else if($pollingcenter=="")
        {
            echo "Polling Center is Required";
        }
        else if($area=="")
        {
            echo "Area is Required";
        }
        else if($city=="")
        {
            echo "City is Required";
        }
        else 
        {
            $data['json']=$this->votemodel->insert($region,$pollingarea,$pollingcenter,$name,$phoneno,$area,$city);
            $this->load->view('json',$data);
        }
        
	}
    public function update()
	{
        $id=trim($this->input->get_post("id"));
        $region=trim($this->input->get_post("region"));
        $pollingarea=trim($this->input->get_post("pollingarea"));
        $pollingcenter=trim($this->input->get_post("pollingcenter"));
        $name=trim($this->input->get_post("name"));
        $phoneno=trim($this->input->get_post("phoneno"));
        $area=trim($this->input->get_post("area"));
        $city=trim($this->input->get_post("city"));
        /*if($name=="")
        {
            echo "Nmae is Required";
        }
        else if($phoneno=="")
        {
            echo "Phone Number is Required";
        }
        else if($region=="")
        {
            echo "Select Region";
        }
        else if($pollingarea=="")
        {
            echo "Polling Area is Required";
        }
        else if($pollingcenter=="")
        {
            echo "Polling Center is Required";
        }
        else if($area=="")
        {
            echo "Area is Required";
        }
        else if($city=="")
        {
            echo "City is Required";
        }
        else 
        {*/
        $data['json']=$this->votemodel->update($id,$region,$pollingarea,$pollingcenter,$name,$phoneno,$area,$city);
		$this->load->view('json',$data);
        //}
	}
	public function find()
	{
        $data['json']=$this->votemodel->viewall();
		$this->load->view('json',$data);
	}
    public function findone()
	{
        $id=trim($this->input->get_post("id"));
        $data['json']=$this->votemodel->viewone($id);
		$this->load->view('json',$data);
	}
    public function delete()
	{
        $id=trim($this->input->get_post("id"));
        $data['json']=$this->votemodel->deleteone($id);
		$this->load->view('json',$data);
	}
}