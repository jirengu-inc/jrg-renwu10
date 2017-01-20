<?php
	$username = $_GET["username"];
	$password = $_GET["password"];
	$ret = array("username"=>$username, "password"=>$password);
	echo json_encode($ret);