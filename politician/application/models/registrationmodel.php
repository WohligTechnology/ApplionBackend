<?php
class RegistrationModel extends CI_model
{
    function viewall()
      {
        $query= $this->db->query("SELECT * FROM `userregistration`");
        if($query->num_rows > 0)
        {
            return $query->result();
        }
        else 
        {
            return false;
        }
        return $data;
        
      }
    
     function viewone($id)
      {
         $query= $this->db->query("SELECT * FROM `userregistration` WHERE `id`='$id'");
        if($query->num_rows > 0)
        {
            return $query->row();
        }
        else 
        {
            return false;
        }
        return $data;
         
      }
    
    
    function insert($name,$phoneno,$gpslocation)
    {
       
        $query=$this->db->query("INSERT INTO `userregistration` (`name`,`phoneno`,`gpslocation`) VALUES ('$name','$phoneno','$gpslocation')");
        return $query;
    }
    
    function update($id,$name,$phoneno,$gpslocation)
    {
        $query=$this->db->query("UPDATE `userregistration` SET `name`='$name',`phoneno`='$phoneno',`gpslocation`='$gpslocation' WHERE `id`=$id");
        return $query;
    }
    function deleteone($id)
    {
        $query= $this->db->query("DELETE FROM `userregistration` WHERE `id`='$id'");
        return $query;
    }
    function filterdata($search)
    {
        $query= $this->db->query("SELECT `userregistration`.`id`,`userregistration`.`name`,`userregistration`.`phoneno`,`userregistration`.`gpslocation` FROM `userregistration` WHERE `userregistration`.`id` LIKE '%$search%' OR `userregistration`.`name` LIKE '%$search%' OR `userregistration`.`phoneno` LIKE '%$search%' OR `userregistration`.`gpslocation` LIKE '%$search%'");
        return $query->result();
        //return $query;
    }
}
?>