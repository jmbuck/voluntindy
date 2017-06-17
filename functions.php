<?php

// IMPORTANT, CHANGE THE STRING BELOW SO IT IS A COMPLETELY RANDOM STRING OF CHARECTARS:
define('hashsalt', 'CHANGE THIS! HEAiBOgsYP:nb%C1');


// IMPORTANT, CHANGE THIS SO IT GOES TO THE ROOT DIRECTORY OF WHERE THE email.php FILE IS:
define("url", "http://test.com/emailverify");

// IMPORTANT, CHANGE THIS SO IT IS YOUR EMAIL ADDRESS:
define("fromemail", "noreply@test.com");

function hashEmail($string) {
	$string = cleaninput($string); // Prevent XSS 
	return hash('sha512', $string.constant("hashsalt")); // return hash
}

function cleaninput($string) {
	return htmlspecialchars($string, ENT_QUOTES, 'UTF-8'); // Convert special charectars to HTML.
}

function sendverification($email) {
	$hash = hashEmail($email); // Get hash ready to send.
	$to = cleaninput($email); // Prevent XSS
	$subject = 'Verify your account'; // Give the email a subject   
	$message = ' 
 
Thanks for signing up! 
In order to get started you will need to activate your account.

'.constant("url").'/email.php?email='.$email.'&hash='.$hash.' 
 
'; // Our message above including the link  
	                      
	$headers = 'From:'.constant("fromemail")."\r\n"; // Set from headers  
	mail($to, $subject, $message, $headers); // Send our email
	return TRUE;
}

function verifyemail ($email, $hash) {
	$rehash = hashEmail($email); // Prepare hash for comparision.
	$hash = cleaninput($hash); // Sanitise the hash to prevent XSS.
	if ($hash == $rehash) { // Is it the same?
		return TRUE; // If it is return TRUE.
	} else { // If it isn't
		return FALSE; // then return FALSE.
	}
}