<?php
    $name = $_GET['name'];
    $age = $_GET['age'];

    $ret = array('name' => $name , 'age' => $age);

    echo json_encode($ret);
   /* echo '姓名：'.$name.'  年龄：'.$age;*/
?>
