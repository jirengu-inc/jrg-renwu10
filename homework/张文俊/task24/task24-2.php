<?php
$start=$_GET["start"];
$length=$_GET["length"];
$arr=array();
for($i=0;$i<$length;$i++){
    $arr[$i]=$start+$i;
}
echo json_encode($arr);