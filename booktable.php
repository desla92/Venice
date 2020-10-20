<?php 

$email = trim($_POST['reservation-email']);
$name = trim($_POST['reservation-name']);
$date = trim($_POST['reservation-date']);
$time = trim($_POST['reservation-time']);
$people = trim($_POST['people']);

if(isset($name) && isset($email)){
    $to = "desirelanza.studia@mohole.it"; // this is your Email address
    $from = trim($_POST, 'email'); // this is the sender's Email address
    $subject = "Prenotazione " . $date;
    $message = "Prenotazione per il giorno" . $date . "alle ore" . $time . "per" . $people . "persone";
    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you " . $name, $email, $date, $people, $message, $time  . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>