<?php
class RegionModel extends CI_model
{
    function viewall()
      {
        $query= $this->db->query("SELECT * FROM `region`");
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
         $query= $this->db->query("SELECT * FROM `region` WHERE `id`='$id'");
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
    
    
    function insert($name)
    {
       
        $query=$this->db->query("INSERT INTO `region` (`name`) VALUES ('$name')");
        return $query;
    }
    
    function update($id,$name)
    {
        $query=$this->db->query("UPDATE `region` SET `name`='$name' WHERE `id`=$id");
        return $query;
    }
    function deleteone($id)
    {
        $query= $this->db->query("DELETE FROM `region` WHERE `id`='$id'");
        return $query;
    }
}
?>