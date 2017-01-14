<?php

     if(isset($_POST['name'])){
            file_put_contents('log.txt',var_export('name: '.$_POST['name'],true));
            if(!ereg("^[A-z0-9_]{3,10}$", $_POST['name'])){
                $ret = array('type' => 'error');
                echo json_encode($ret);
                return;
            }
            switch($_POST['name']){
                case 'Tom' : 
                $ret = array('type' => true);
                echo json_encode($ret); 
                break;
                default : 
                $ret = array('type' => false);
                echo json_encode($ret);
                break;
            }
        }
        else if($_POST['username'] && $_POST['password']){
            $name = $_POST['username'];
            $pas = $_POST['password'];
            $ret = array('name' => $name, 'password' => $pas);
            echo json_encode($ret);
        }
?>