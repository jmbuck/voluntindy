<?php
// Open a connection to the database
// (display an error if the connection fails)
session_start();
if(isset($_SESSION['username']) && $_SESSION['username']==root) {
	echo "Your session is running " . $_SESSION['username']; //for debug use
	//connection
	$_SESSION['temporary_authority'] = false;
	
}else{
	$_SESSION['username'] = "limted";
	$_SESSION['password'] = "pass";
	$_SESSION['temporary_authority'] = true;
	echo "Session variables are set."; //for debug use
	echo "Your session is running " . $_SESSION['username'];//for debug use
	echo "Your session has a temporary authority: " . $_SESSION['temporary_authority'];//for debug use
	//Connection may not be needed	
}
?>

<?php
include_once('functions.php'); // Include core functions.
if ($_GET['email']) { // Is the email there?
	if (verifyemail($_GET['email'], $_GET['hash']) == TRUE) { // Does the hash match the email?
		$correct = TRUE; // So it is correct...
	}
}
?><!DOCTYPE html>
<html lang="en">
    <head>
		<meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
		<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <title>Email Verification</title>
		<!--[if lte IE 7]><style>.main{display:none;} .support-note .note-ie{display:block;}</style><![endif]-->
		<link rel="stylesheet" href="style.css" type="text/css" />
    </head>
    <body>
        <div class="container">			
			<section class="main">
				<div class="register-form"> 
					<h1>Was the hash correct?</h1>
					<?php if ($correct == TRUE) {
					// This is where you put your code to handle the email once verified.
					header( 'Location: /user_register.php' ) ;
					$_SESSION['verified'] = true;
					?>
					<p><b>Success</b>, the hash matches the email.</p>
					<?php } else {
					?><p><b>Error</b>, the hash doesn't match the email.</p>
					<?php } ?>
					<br /><br />
					<h1>Email verification.</h1>
					<p>This is the page that was sent in the email, from here we validate the email by checking to see if it matched the hash that was sent with it. If the email matches the hash we can process it and do what we want to do with it, otherwise we can't. To check the hash is correct on this page you can check if the the $correct variable is TRUE.</p>
					<br /><br />
					<h1>What next?</h1>
					<p>You can add a sign up form here, asking the user to choose a username and password, else you can simply inform the user that they have been signed up to a mailing list.</p>
				</div>
			</section>
			
        </div>
    </body>
</html>