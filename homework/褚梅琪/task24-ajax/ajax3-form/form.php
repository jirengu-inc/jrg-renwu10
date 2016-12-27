<?php
$username = $_POST['username'];
if($username === 'hunger'){
		$ret = array('status'=>1,'msg_type'=>'USERNAME_EXIST');
	}else{
		$ret = array('status'=>0,'msg_type'=>'USERNAME_USEABLE');
	}
echo json_encode($ret);
?>