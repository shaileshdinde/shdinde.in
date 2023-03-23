<?php
include "mail/mail.php";

if (isset($_POST['name'])) {
    $data = new \stdClass();

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subject = "Message from ".$name." on web";
    $data->value = 0;    

    if(mailsend($email,$message, $subject,$name)=='Success'){
        $data->value = 1;
    }
    echo json_encode($data);
    exit();
}
?>
