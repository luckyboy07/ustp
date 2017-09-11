<?php
header("Access-Control-Allow-Origin: *");
session_start();

//$con = mysqli_connect("localhost","root","","mustbullitenapp") or die ("could not connect database");
$con = mysqli_connect("mysql.hostinger.ph","u873492591_must","mustapp123","u873492591_must") or die ("could not connect database");

?>