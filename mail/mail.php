<?php
require("PHPMailerAutoload.php");



function mailsend($email, $body, $subject, $name,$filenames = NULL)
{
	$mail = new PHPMailer();

	$mail->IsSMTP();                                      	// set mailer to use SMTP
	$mail->CharSet = 'UTF-8';
	$mail->Host = "smtp.hostinger.in";  					// specify main and backup server
	$mail->SMTPAuth = true;    	 							// turn on SMTP authentication
	$mail->Username = "info@shdinde.in";  					// SMTP username
	$mail->Password = "daSHDda@135$";						// SMTP password
	$mail->Port = 587;
	$mail->From = "info@shdinde.in";
	$mail->FromName = "Shailesh Dinde";
	$mail->addReplyTo($email);	
	$mail->AddAddress("shdinde@gmail.com");	
	
	$mail->WordWrap = 50;                                 // set word wrap to 50 character
	$mail->IsHTML(true);                                  // set email format to HTML

	$mail->Subject = $subject;
	$mail->Body    = "Mail from ".$name . '<br>Email : '.$email.' <br>Message <br>'. $body ;
	$mail->AltBody = "This is the body in plain text for non-HTML mail clients";
	

	if (!$mail->Send()) {	
		return "Fail";
	} else {
		return "Success";
	}
}
