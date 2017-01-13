<?php
    $name = $_POST['name'];
    $age = $_POST['age'];

    $ret = array("name" => $name, "age" => $age);
    echo json_encode($ret);

?>