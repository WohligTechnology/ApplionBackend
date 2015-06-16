<?php
class SchedulerModel extends CI_model
{
    function viewall()
      {
        $query= $this->db->query("SELECT * FROM `scheduler`");
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
         $query= $this->db->query("SELECT * FROM `scheduler` WHERE `id`='$id'");
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
    
    
    function insert($name,$toscheduledate)
    {
       
        $query=$this->db->query("INSERT INTO `scheduler` (`name`,`timestamp`,`toscheduledate`) VALUES ('$name',null,'$toscheduledate')");
        return $query;
    }
    
    function update($id,$name,$toscheduledate)
    {
        $query=$this->db->query("UPDATE `scheduler` SET `name`='$name',`timestamp`=null,`toscheduledate`='$toscheduledate' WHERE `id`=$id");
        return $query;
    }
    function deleteone($id)
    {
        $query= $this->db->query("DELETE FROM `scheduler` WHERE `id`='$id'");
        return $query;
    }
}
?>