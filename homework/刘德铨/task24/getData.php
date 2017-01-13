<?php
    
        if(isset($_POST['name'])){
            file_put_contents('log.txt',var_export($_POST['name'],true));
            switch($_POST['name']){
                /*case '':
                $ret = array('type' => null);
                echo json_encode($ret);
                break; */
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
        else if(isset($_POST['pas'])){
             file_put_contents('log.txt',var_export($_POST['pas'],true));
             switch($_POST['pas']){
                case 123456 :
                $ret = array('type' => true);
                echo json_encode($ret);
                break;
                default :
                $ret = array('type' => false);
                echo json_encode($ret);
                break;
             }
        }
        else if(isset($_POST['type'])){
            // file_put_contents('log.txt',var_export($_POST['type'],true));
             switch($_POST['type']){
                case 'post' :
                file_put_contents('log.txt',var_export($_POST['type'],true));
                $ret = array('type' => true);
                echo json_encode($ret);
                break;
                case 'get' :
                file_put_contents('log.txt',var_export($_POST['type'],true));
                $ret = array('type' => true);
                echo json_encode($ret);
                break;
                default :
                $ret = array('type' => false);
                echo json_encode($ret);
                break;
             }
        }
        else if(isset($_GET['username']) && isset($_GET['password'])){
            if($_GET['username'] && $_GET['password']){
                $name = $_GET['username'];
                $pas  = $_GET['password'];
                if($name == 'Tom' && $pas == 123456){
                    $ret = array('sex' => '男', 'age' => 20);
                    echo json_encode($ret); 
                }
            }
        }
        else if($_POST['username'] && $_POST['password']){
            $name = $_POST['username'];
            $pas = $_POST['password'];
            if($name == 'Tom' && $pas == 123456){
                $ret = array('sex' => '男', 'age' => 20);
                echo json_encode($ret);
            }
        }
        




?>


