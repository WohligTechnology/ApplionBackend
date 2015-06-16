<html>
<head>
<title>Upload Form</title>
</head>
<body>
<?php echo $error;?>
<?php echo form_open_multipart('image/create');?>

File:<input type="file" name="file" size="20" /><br>
Timestamp<input type="text" name="timestamp"/><br>
Title:<input type="text" name="title"/>
<br /><br />

<input type="submit" name="submit" value="insert" />

</form>

</body>
</html>