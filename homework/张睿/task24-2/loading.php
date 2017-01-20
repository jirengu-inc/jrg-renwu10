<?php
	$origin = $_GET['origin'];
	$increase = $_GET['increase'];
	$items = array();

	for($i=0;$i<$increase;$i++){
		array_push($items,'第'.($origin+$i).'行');
	}
	$ret = array('status'=>1,'data'=>$items);
  sleep(0.5);
	echo json_encode($ret);

?>
