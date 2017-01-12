<?php
    // 后端 php 测试接口文件
    $start = $_GET['start']; //2
    $len = $_GET['len'];  //6 
    $items = array();
 
    for($i = 0; $i < $len; $i++){
        array_push($items, '内容' . ($start+$i));
    }
    $ret = array('status'=>1, 'data'=>$items);

    //{status: 1, data: ['内容1','内容2','内容3']}
    sleep(0.5);
    echo json_encode($ret);