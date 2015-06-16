<html>
<head>

    <link rel="stylesheet" type="text/css" href="../css/main.css" />
</head>
<body>

<form method="POST" enctype="multipart/form-data">
<?php
if(isset($_POST['reg']))
{
$fname=$_FILES['a']['name'];
$fsize=$_FILES['a']['size'];
$ftype=$_FILES['a']['type'];
$ftmp=$_FILES['a']['tmp_name'];
$storage_path="../../images/".$fname;
if(move_uploaded_file($ftmp,$storage_path))
{
//echo "file uploaded";
echo "<img src=".$storage_path." width='50px'>";
}
}
?>

<input type="file" name="a"/>
<input type="submit" class="btn btn-info" name="reg" value="Save Image"/>
</form>

</body>
</html>
