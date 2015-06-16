<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Membership extends CI_Controller {

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
        $mpconstituency=trim($this->input->get_post("mpconstituency"));
        $mlaconstituency=trim($this->input->get_post("mlaconstituency"));
        $area=trim($this->input->get_post("area"));
        $pollingcenter=trim($this->input->get_post("pollingcenter"));
        $position=trim($this->input->get_post("position"));
        $fullname=trim($this->input->get_post("fullname"));
        $birthday=trim($this->input->get_post("birthday"));
        $address=trim($this->input->get_post("address"));
        $village=trim($this->input->get_post("village"));
        $town=trim($this->input->get_post("town"));
        $district=trim($this->input->get_post("district"));
        $phoneno=trim($this->input->get_post("phoneno"));
        $email=trim($this->input->get_post("email"));
        $state=trim($this->input->get_post("state"));
        if($mpconstituency=="")
        {
            echo "MP constituency Required";
        }
        else if($mlaconstituency=="")
        {
            echo "MLA constituency is Required";
        }
        else if($area=="")
        {
            echo "Area is Required";
        }
        else if($pollingcenter=="")
        {
            echo "Polling Center is Required";
        }
        else if($position=="")
        {
            echo "Position is Required";
        }
        else if($fullname=="")
        {
            echo "Full Name is Required";
        }
        else if($birthday=="")
        {
            echo "Birthday is Required";
        }
        else if($address=="")
        {
            echo "Address is Required";
        }
        else if($village=="")
        {
            echo "Village is Required";
        }
        else if($town=="")
        {
            echo "Town is Required";
        }
        else if($district=="")
        {
            echo "District is Required";
        }
        else if($phoneno=="")
        {
            echo "Phone Number is Required";
        }
        else if($email=="")
        {
            echo "Email is Required";
        }
        else if($state=="")
        {
            echo "State is Required";
        }
        else 
        {
            $data['json']=$this->membershipmodel->insert($mpconstituency,$mlaconstituency,$area,$pollingcenter,$position,$fullname,$birthday,$address,$village,$town,$district,$phoneno,$email,$state);
            $this->load->view('json',$data);
        }
        
	}
    public function update()
	{
        $id=trim($this->input->get_post("id"));
        $mpconstituency=trim($this->input->get_post("mpconstituency"));
        $mlaconstituency=trim($this->input->get_post("mlaconstituency"));
        $area=trim($this->input->get_post("area"));
        $pollingcenter=trim($this->input->get_post("pollingcenter"));
        $position=trim($this->input->get_post("position"));
        $fullname=trim($this->input->get_post("fullname"));
        $birthday=trim($this->input->get_post("birthday"));
        $address=trim($this->input->get_post("address"));
        $village=trim($this->input->get_post("village"));
        $town=trim($this->input->get_post("town"));
        $district=trim($this->input->get_post("district"));
        $phoneno=trim($this->input->get_post("phoneno"));
        $email=trim($this->input->get_post("email"));
        $state=trim($this->input->get_post("state"));
       /* if($mpconstituency=="")
        {
            echo "MP constituency Required";
        }
        else if($mlaconstituency=="")
        {
            echo "MLA constituency is Required";
        }
        else if($area=="")
        {
            echo "Area is Required";
        }
        else if($pollingcenter=="")
        {
            echo "Polling Center is Required";
        }
        else if($position=="")
        {
            echo "Position is Required";
        }
        else if($fullname=="")
        {
            echo "Full Name is Required";
        }
        else if($birthday=="")
        {
            echo "Birthday is Required";
        }
        else if($address=="")
        {
            echo "Address is Required";
        }
        else if($village=="")
        {
            echo "Village is Required";
        }
        else if($town=="")
        {
            echo "Town is Required";
        }
        else if($district=="")
        {
            echo "District is Required";
        }
        else if($phoneno=="")
        {
            echo "Phone Number is Required";
        }
        else if($email=="")
        {
            echo "Email is Required";
        }
        else if($state=="")
        {
            echo "State is Required";
        }
        else 
        {*/
        $data['json']=$this->membershipmodel->update($id,$mpconstituency,$mlaconstituency,$area,$pollingcenter,$position,$fullname,$birthday,$address,$village,$town,$district,$phoneno,$email,$state);
		$this->load->view('json',$data);
       // }
	}
	public function find()
	{
        $data['json']=$this->membershipmodel->viewall();
		$this->load->view('json',$data);
	}
    public function findone()
	{
        $id=trim($this->input->get_post("id"));
        $data['json']=$this->membershipmodel->viewone($id);
		$this->load->view('json',$data);
	}
    public function delete()
	{
        $id=trim($this->input->get_post("id"));
        $data['json']=$this->membershipmodel->deleteone($id);
		$this->load->view('json',$data);
	}
}