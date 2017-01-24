<?php
    
    if(isset($_GET['start']) && isset($_GET['len'])){
        file_put_contents('log.txt',var_export('start: '.$_GET['start'].' len: '.$_GET['len'],true));
        $array = array();
        for($i = 0; $i < $_GET['len']; $i++){
            $array[$i] = '内容'.($_GET['start'] + $i);
        }
        echo json_encode($array);
    }


?>

