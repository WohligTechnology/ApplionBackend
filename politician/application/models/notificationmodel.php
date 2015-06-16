<?php
class NotificationModel extends CI_model
{
    function viewall()
      {
        $query= $this->db->query("SELECT * FROM `notifications`");
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
         $query= $this->db->query("SELECT * FROM `notifications` WHERE `id`='$id'");
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
    
    
    function insert($text)
    {
       
        $query=$this->db->query("INSERT INTO `notifications` (`text`,`timestamp`) VALUES ('$text',null)");
        return $query;
    }
    
    function update($id,$text)
    {
        $query=$this->db->query("UPDATE `notifications` SET `text`='$text' WHERE `id`=$id");
        return $query;
    }
    function deleteone($id)
    {
        $query= $this->db->query("DELETE FROM `notifications` WHERE `id`='$id'");
        return $query;
    }
}
?>