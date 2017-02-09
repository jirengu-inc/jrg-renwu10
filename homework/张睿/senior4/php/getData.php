<?php
  header("Content-type: ");
  $num = $_GET['num'];
  if($num == 6) {
    $res = array(
      "0" => array(
        'img_url' => "./img/more.jpg",
        'short_name' => "开采先锋",
        'short_intro' => "增加舰队中采矿激光器、气云采集器、冰矿采集器和测量扫描器的范围。"
      ),
      "1" => array(
        'img_url' => "./img/more.jpg",
        'short_name' => "开采先锋",
        'short_intro' => "增加舰队中采矿激光器、气云采集器、冰矿采集器和测量扫描器的范围。"
      ),
      "2" => array(
        'img_url' => "./img/more.jpg",
        'short_name' => "开采先锋",
        'short_intro' => "增加舰队中采矿激光器、气云采集器、冰矿采集器和测量扫描器的范围。"
      ),
      "3" => array(
        'img_url' => "./img/more.jpg",
        'short_name' => "开采先锋",
        'short_intro' => "增加舰队中采矿激光器、气云采集器、冰矿采集器和测量扫描器的范围。"
      ),
      "4" => array(
        'img_url' => "./img/more.jpg",
        'short_name' => "开采先锋",
        'short_intro' => "增加舰队中采矿激光器、气云采集器、冰矿采集器和测量扫描器的范围。"
      ),
      "5" => array(
        'img_url' => "./img/more.jpg",
        'short_name' => "开采先锋",
        'short_intro' => "增加舰队中采矿激光器、气云采集器、冰矿采集器和测量扫描器的范围。"
      )
    );
  } else {
    $res = "refuse";
  }
  echo json_encode($res);
?>
