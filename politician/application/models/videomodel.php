<?php
class VideoModel extends CI_model
{
    function viewall()
      {
        $query= $this->db->query("SELECT * FROM `video`");
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
         $query= $this->db->query("SELECT * FROM `video` WHERE `id`='$id'");
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
    
    
    function insert($title,$video)
    {
       
        $query=$this->db->query("INSERT INTO `video` (`title`,`video`) VALUES ('$title','$video')");
        return $query;
    }
    
    function update($id,$title,$video)
    {
        $query=$this->db->query("UPDATE `video` SET `title`='$title',`video`='$video' WHERE `id`=$id");
        return $query;
    }
    function deleteone($id)
    {
        $query= $this->db->query("DELETE FROM `video` WHERE `id`='$id'");
        return $query;
    }
}
?>