<?php
	$user = array("hunger");
	$username = $_GET["username"];
	echo(in_array($username, $user));