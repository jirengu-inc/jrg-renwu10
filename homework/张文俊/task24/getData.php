<?php
$userName=$_GET["userName"];
if($userName=="jirengu"){
    $response=1;
}
else{
    $response=0;
}
echo $response;