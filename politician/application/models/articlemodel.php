<?php
class ArticleModel extends CI_model
{
    function viewall()
      {
        $query= $this->db->query("SELECT * FROM `articles`");
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
         $query= $this->db->query("SELECT * FROM `articles` WHERE `id`='$id'");
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
    
    
    function insert($title,$text)
    {
       
        $query=$this->db->query("INSERT INTO `articles` (`title`,`timestamp`,`text`) VALUES ('$title',null,'$text')");
        return $query;
    }
    
    function update($id,$title,$text)
    {
        $query=$this->db->query("UPDATE `articles` SET `title`='$title',`text`='$text' WHERE `id`=$id");
        return $query;
    }
    function deleteone($id)
    {
        $query= $this->db->query("DELETE FROM `articles` WHERE `id`='$id'");
        return $query;
    }
}
?>