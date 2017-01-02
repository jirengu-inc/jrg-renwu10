<?php 
	$start = $_POST['start'];
	$len = $_POST['len'];
	$items = array();

	for($i=0;$i<$len;$i++){
		array_push($items,'内容'.($start+$i));
	}
	$ret = array('status'=>1,'data'=>$items);
  sleep(1);
	echo json_encode($ret);

?>
