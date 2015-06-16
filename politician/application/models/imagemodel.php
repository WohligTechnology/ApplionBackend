<?php
class ImageModel extends CI_model
{
    function viewall()
      {
        $query= $this->db->query("SELECT * FROM `images`");
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
         $query= $this->db->query("SELECT * FROM `images` WHERE `id`='$id'");
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
    
    
    function insert($name,$title)
    {
       
        $query=$this->db->query("INSERT INTO `images` (`name`,`timestamp`,`title`) VALUES ('$name',null,'$title')");
        return $query;
    }
    
    function update($id,$name,$title)
    {
        $query=$this->db->query("UPDATE `images` SET `name`='$name',`timestamp`=null,`title`='$title' WHERE `id`=$id");
        return $query;
    }
    function deleteone($id)
    {
        $query= $this->db->query("DELETE FROM `images` WHERE `id`='$id'");
        return $query;
    }
}
?>