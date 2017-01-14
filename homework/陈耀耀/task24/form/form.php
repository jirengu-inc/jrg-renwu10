<?php
$name=array("candy","hunger","mary");
$arrlength=count($name);
$username=$_GET["username"];
$ret = 0;
for ($i=0; $i <$arrlength ; $i++) { 
if ($name[$i]===$username){
    $ret=1;
}
array_push($name,$username); 
};
echo json_encode($ret);
?>