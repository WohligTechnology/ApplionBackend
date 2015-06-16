<?php
class VoteModel extends CI_model
{
    function viewall()
      {
        $query= $this->db->query("SELECT `vote`.`id`,`vote`.`region` AS `regionid`,`region`.`name` AS `regionname`,`vote`.`pollingarea`,`vote`.`pollingcenter`,`vote`.`name`,`vote`.`phoneno`,`vote`.`area`,`vote`.`city` FROM `vote` LEFT OUTER JOIN `region` ON `region`.`id` = `vote`.`region`");
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
         $query= $this->db->query("SELECT `vote`.`id`,`vote`.`region` AS `regionid`,`region`.`name` AS `regionname`,`vote`.`pollingarea`,`vote`.`pollingcenter`,`vote`.`name`,`vote`.`phoneno`,`vote`.`area`,`vote`.`city` FROM `vote` LEFT OUTER JOIN `region` ON `region`.`id` = `vote`.`region` WHERE `vote`.`id`='$id'");
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
    
    
    function insert($region,$pollingarea,$pollingcenter,$name,$phoneno,$area,$city)
    {
       
        $query=$this->db->query("INSERT INTO `vote` (`region`, `pollingarea`, `pollingcenter`, `name`, `phoneno`, `area`, `city`) VALUES ('$region','$pollingarea','$pollingcenter','$name','$phoneno','$area','$city')");
        return $query;
    }
    
    function update($id,$region,$pollingarea,$pollingcenter,$name,$phoneno,$area,$city)
    {
        $query=$this->db->query("UPDATE `vote` SET `region`='$region',`pollingarea`='$pollingarea',`pollingcenter`='$pollingcenter',`name`='$name',`phoneno`='$phoneno',`area`='$area',`city`='$city' WHERE `id`=$id");
        return $query;
    }
    function deleteone($id)
    {
        $query= $this->db->query("DELETE FROM `vote` WHERE `id`='$id'");
        return $query;
    }
}
?>