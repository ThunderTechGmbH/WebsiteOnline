<?php

if (isset($_POST['submit'])) {
$name = $_POST['name'];
$subject = $_POST['subject'];
$mailFrom = $_POST['mail'];
$message = $_POST['message'];

$mailTo = "ksebastian@bbwhh.onmicrosoft.com";
$headers = "From: ".$mailFrom;
$txt = "mail from ".$name.".\n\n".$message;

mail($mailTo, $subject, $txt, $headers);
header("Location: produkte.html?mailsend");
}
?>