<?php
include_once('functions.php'); // Include core functions.
if($_SERVER['REQUEST_METHOD'] == 'POST') { // Has the form been submitted?
	if (sendverification($_POST['email']) == TRUE) { // Send verification email.
		$sent = TRUE; // Set sent variable.
	} 
}
?><!DOCTYPE html>
<html lang="en">
    <head>
		<meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
		<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <title>Email verify</title>
		<!--[if lte IE 7]><style>.main{display:none;} .support-note .note-ie{display:block;}</style><![endif]-->
		<link rel="stylesheet" href="style.css" type="text/css" />
		<style>	
			@import url(http://fonts.googleapis.com/css?family=Raleway:400,700);
			body {
				background: #000000 url(bg.jpg) no-repeat center top;
				-webkit-background-size: cover;
				-moz-background-size: cover;
				background-size: cover;
			}
			.container > header h1,
			.container > header h2 {
				color: #fff;
				text-shadow: 0 1px 1px rgba(0,0,0,0.7);
			}
		</style>
		<script>
		
		// In case browser does not support HTML5 validation, this is a fallback.
		function validateForm()
		{
		var x=document.forms["registerform"]["email"].value;
		var atpos=x.indexOf("@");
		var dotpos=x.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
		  {
		  alert("Not a valid e-mail address");
		  return false;
		  }
		}
	</script>
    </head>
    <body>
        <div class="container">			
			<section class="main">
			<?php if ($sent == TRUE) { ?>
				<div class="register-form"> 
					<h1>Verify email.</h1>
					<p>You've been sent an email with a link inside it, click on this link to verify your email address.</p>
				</div>
			<?php } else { ?>
				<form class="register-form" name="registerform" onsubmit="return validateForm();" method="POST" action="index.php">
				    <h1>Enter email to register:</h1>
				    <p>
				        <label for="login">Username or email</label>
				        <input  type="email" name="email" placeholder="Email" required>
				    </p>

				    <p>
				        <input type="submit" name="submit" value="Continue">
				    </p>       
				</form>​
			<?php } ?>
			</section>
			
        </div>
    </body>
</html>