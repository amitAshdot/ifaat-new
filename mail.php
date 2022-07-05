
<?
$recepient = "micha@targetcall.co.il,shimon@targetcall.co.il";
// $recepient = "amitashdot@gmail.com";

$sitename = "ליד חדש - יפעת מכרזים";

$accountname = trim($_POST["accountname"]);
$telephone1 = trim($_POST["telephone1"]);
$email = trim($_POST["emailaddress1"]);


$message = "ליד חדש - יפעת מכרזים <br>שם מלא: $accountname <br> טלפון: $telephone1 <br> 
email:$email <br> ";
$pagetitle = "ליד חדש - יפעת מכרזים";
$headers = "יפעת מכרזים";
$headers = "Content-Type: text/html; charset=UTF-8";

mail($recepient, $pagetitle, $message, $headers);

?>
