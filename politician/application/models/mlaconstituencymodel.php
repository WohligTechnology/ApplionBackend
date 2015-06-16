<?php
class MlaconstituencyModel extends CI_model
{
    function viewall()
      {
        $query= $this->db->query("SELECT * FROM `mlaconstituency`");
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
         $query= $this->db->query("SELECT * FROM `mlaconstituency` WHERE `id`='$id'");
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
       
        $query=$this->db->query("INSERT INTO `mlaconstituency` (`name`) VALUES ('$name')");
        return $query;
    }
    
    function update($id,$name)
    {
        $query=$this->db->query("UPDATE `mlaconstituency` SET `name`='$name' WHERE `id`=$id");
        return $query;
    }
    function deleteone($id)
    {
        $query= $this->db->query("DELETE FROM `mlaconstituency` WHERE `id`='$id'");
        return $query;
    }
}
?>