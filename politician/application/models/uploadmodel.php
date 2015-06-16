<?php
class UploadModel extends CI_model
{
    function viewall()
      {
        $query= $this->db->query("SELECT * FROM `upload`");
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
         $query= $this->db->query("SELECT * FROM `upload` WHERE `id`='$id'");
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
    
    
    function insert($name,$image)
    {
       
        $query=$this->db->query("INSERT INTO `upload` (`text`,`image`) VALUES ('$name','$image')");
        return $query;
    }
    
    function update($id,$text,$image)
    {
        $query=$this->db->query("UPDATE `upload` SET `text`='$text',`image`='$image' WHERE `id`=$id");
        return $query;
    }
    function deleteone($id)
    {
        $query= $this->db->query("DELETE FROM `upload` WHERE `id`='$id'");
        return $query;
    }
}
?>