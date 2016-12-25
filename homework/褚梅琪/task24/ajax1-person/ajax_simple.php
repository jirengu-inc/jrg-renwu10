<?php
	$username = $_POST['username'];
	//$username = $_GET['username'];
	if($username === 'kevin'){
		$ret = array('sex'=>'男','age'=>23);
	}elseif ($username === 'david') {
		$ret = array('sex'=>'男', 'age'=>30);
	}else{
		$ret = array('sex'=>'女','age'=>18);
	}
	echo json_encode($ret);
	?>