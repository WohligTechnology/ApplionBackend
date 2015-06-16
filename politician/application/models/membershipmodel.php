<?php
class MembershipModel extends CI_model
{
    function viewall()
      {
        $query= $this->db->query("SELECT `membership`.`id`,`membership`.`mpconstituency` AS `mpconstituencyid`,`mpconstituency`.`name` AS `mpconstituencyname`,`membership`.`mlaconstituency` AS `mlaconstituencyid`,`mlaconstituency`.`name` AS `mlaconstituencyname`,`membership`.`area`,`membership`.`pollingcenter`,`membership`.`position` AS `positionid`,`position`.`name` AS `positionname`,`membership`.`position`,`membership`.`fullname`,`membership`.`birthday`,`membership`.`address`,`membership`.`village`,`membership`.`town`,`membership`.`district`,`membership`.`phoneno`,`membership`.`email`,`membership`.`state` AS `stateid`,`state`.`name` AS `statename` FROM `membership` LEFT OUTER JOIN `state` ON `membership`.`state` = `state`.`id` LEFT OUTER JOIN `mpconstituency` ON `membership`.`mpconstituency` = `mpconstituency`.`id` LEFT OUTER JOIN `mlaconstituency` ON `membership`.`mlaconstituency` = `mlaconstituency`.`id` LEFT OUTER JOIN `position` ON `membership`.`position` = `position`.`id`");
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
         $query= $this->db->query("SELECT `membership`.`id`,`membership`.`mpconstituency` AS `mpconstituencyid`,`mpconstituency`.`name` AS `mpconstituencyname`,`membership`.`mlaconstituency` AS `mlaconstituencyid`,`mlaconstituency`.`name` AS `mlaconstituencyname`,`membership`.`area`,`membership`.`pollingcenter`,`membership`.`position` AS `positionid`,`position`.`name` AS `positionname`,`membership`.`position`,`membership`.`fullname`,`membership`.`birthday`,`membership`.`address`,`membership`.`village`,`membership`.`town`,`membership`.`district`,`membership`.`phoneno`,`membership`.`email`,`membership`.`state` AS `stateid`,`state`.`name` AS `statename` FROM `membership` LEFT OUTER JOIN `state` ON `membership`.`state` = `state`.`id` LEFT OUTER JOIN `mpconstituency` ON `membership`.`mpconstituency` = `mpconstituency`.`id` LEFT OUTER JOIN `mlaconstituency` ON `membership`.`mlaconstituency` = `mlaconstituency`.`id` LEFT OUTER JOIN `position` ON `membership`.`position` = `position`.`id` WHERE `membership`.`id`='$id'");
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
    
    
    function insert($mpconstituency,$mlaconstituency,$area,$pollingcenter,$position,$fullname,$birthday,$address,$village,$town,$district,$phoneno,$email,$state)
    {
       
        $query=$this->db->query("INSERT INTO `membership` (`mpconstituency`, `mlaconstituency`, `area`, `pollingcenter`, `position`, `fullname`, `birthday`, `address`, `village`, `town`, `district`, `phoneno`, `email`, `state`) VALUES ('$mpconstituency','$mlaconstituency','$area','$pollingcenter','$position','$fullname','$birthday','$address','$village','$town','$district','$phoneno','$email','$state')");
        return $query;
    }
    
    function update($id,$mpconstituency,$mlaconstituency,$area,$pollingcenter,$position,$fullname,$birthday,$address,$village,$town,$district,$phoneno,$email,$state)
    {
        $query=$this->db->query("UPDATE `membership` SET `mpconstituency`='$mpconstituency',`mlaconstituency`='$mlaconstituency',`area`='$area',`pollingcenter`='$pollingcenter',`position`='$position',`fullname`='$fullname',`birthday`='$birthday',`address`='$address',`village`='$village',`town`='$town',`district`='$district',`phoneno`='$phoneno',`email`='$email',`state`='$state' WHERE `id`=$id");
        return $query;
    }
    function deleteone($id)
    {
        $query= $this->db->query("DELETE FROM `membership` WHERE `id`='$id'");
        return $query;
    }
}
?>