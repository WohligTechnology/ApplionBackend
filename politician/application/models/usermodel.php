<?php
class UserModel extends CI_model
{
    function viewall()
      {
        $query= $this->db->query("SELECT `user`.`id`, `user`.`name`, `user`.`email`, `user`.`password`, `user`.`accesslevel` AS `accesslevelid`, `accesslevel`.`name` AS `accesslevel` 
        FROM  `user` INNER JOIN  `accesslevel` ON  `user`.`accesslevel` =  `accesslevel`.`id`");
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
         $query= $this->db->query("SELECT `user`.`id`, `user`.`name`, `user`.`email`, `user`.`password`, `user`.`accesslevel` AS `accesslevelid`, `accesslevel`.`name` AS `accesslevelname`
FROM  `user` INNER JOIN  `accesslevel` ON  `user`.`accesslevel` =  `accesslevel`.`id` WHERE `user`.`id`='$id'");
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
    
    
    function insert($name,$email,$password,$accesslevel)
    {
       
        $query=$this->db->query("INSERT INTO `user` (`name`,`email`,`password`,`accesslevel`) VALUES ('$name','$email','$password','$accesslevel')");
        //$query=$this
        return $query;
    }
    
    function update($id,$name,$email,$password,$accesslevel)
    {
        $query=$this->db->query("UPDATE `user` SET `name`='$name',`email`='$email',`password`='$password',`accesslevel`='$accesslevel' WHERE `id`=$id");
        return $query;
    }
    function deleteone($id)
    {
        $query= $this->db->query("DELETE FROM `user` WHERE `id`='$id'");
        return $query;
    }
    public function validate($username,$password )
	{
		
		$password=md5($password);
		$query ="SELECT `user`.`id`,`user`.`email` FROM `user`
		WHERE `email` LIKE '$username' AND `password` LIKE '$password' ";
		$row =$this->db->query( $query );
		if ( $row->num_rows() > 0 ) {
			
			return true;
		} 
		else
			return false;
	}
}
?>