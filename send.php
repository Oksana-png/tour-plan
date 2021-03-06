<?php

include ('password.php');
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

//Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];


$emailNewsletter = $_POST['email'];

$phoneModal = $_POST['phoneModal'];
$emailModal = $_POST['emailModal'];
$messageModal = $_POST['messageModal'];

if (isset($emailModal) && isset($name) && isset($phoneModal)){
    $titleModal = "Booking - Best Tour plan";
    $bodyModal = "
    <h2>New booking request</h2>
    <b>Name:</b> $name<br>
    <b>Phone:</b> $phoneModal<br><br>
    <b>Email:</b> $emailModal<br>
    <b>Message:</b><br>$messageModal";

    $letter = new PHPMailer\PHPMailer\PHPMailer();
    try {
        $letter->isSMTP();
        $letter->CharSet = "UTF-8";
        $letter->SMTPAuth   = true;
        // $letter->SMTPDebug = 2;
        $letter->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

        // Настройки вашей почты
        $letter->Host       = 'smtp.inbox.ru'; // SMTP сервера вашей почты
        $letter->Username   = 'oksana_ovchinnikova@inbox.ru'; // Логин на почте
        $letter->Password   = $password; // Пароль на почте
        $letter->SMTPSecure = 'ssl'; 
        $letter->Port       = 465;
        $letter->setFrom('oksana_ovchinnikova@inbox.ru', 'Оксана Овчинникова'); // Адрес самой почты и имя отправителя

        // Получатель письма
        $letter->addAddress('ludmila.ovchinnikova.67@gmail.com'); 

        // Отправка сообщения
        $letter->isHTML(true);
        $letter->Subject = $titleModal;
        $letter->Body = $bodyModal;    

        // Проверяем отравленность сообщения
        if ($letter->send()) {$result = "success";} 
        else {$result = "error";} 

    } catch (Exception $e) {
        $result = "error";
        $status = "Сообщение не было отправлено. Причина ошибки: {$letter->ErrorInfo}";
    }
    header('Location: thanckyou.html');

} else if(isset($emailNewsletter)){
    //Формирование самого письма
    $titleLetter = "Подписка на рассылку - Best Tour plan";
    $bodyLetter = "
    <h2>New mailing request</h2>
    <b>Email:</b> $emailNewsletter<br>";

    $letter = new PHPMailer\PHPMailer\PHPMailer();
    try {
        $letter->isSMTP();
        $letter->CharSet = "UTF-8";
        $letter->SMTPAuth   = true;
        // $letter->SMTPDebug = 2;
        $letter->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

        // Настройки вашей почты
        $letter->Host       = 'smtp.inbox.ru'; // SMTP сервера вашей почты
        $letter->Username   = 'oksana_ovchinnikova@inbox.ru'; // Логин на почте
        $letter->Password   = $password; // Пароль на почте
        $letter->SMTPSecure = 'ssl'; 
        $letter->Port       = 465;
        $letter->setFrom('oksana_ovchinnikova@inbox.ru', 'Оксана Овчинникова'); // Адрес самой почты и имя отправителя

        // Получатель письма
        $letter->addAddress('ludmila.ovchinnikova.67@gmail.com'); 

        // Отправка сообщения
        $letter->isHTML(true);
        $letter->Subject = $titleLetter;
        $letter->Body = $bodyLetter;    

        // Проверяем отравленность сообщения
        if ($letter->send()) {$result = "success";} 
        else {$result = "error";} 

    } catch (Exception $e) {
        $result = "error";
        $status = "Сообщение не было отправлено. Причина ошибки: {$letter->ErrorInfo}";
    }
    header('Location: thanckyou.html');
} else if(isset($name) && isset($phone)) {
        // Формирование самого письма
    $title = "Новое обращение Best Tour plan";
    $body = "
    <h2>New message</h2>
    <b>Name:</b> $name<br>
    <b>Phone:</b> $phone<br><br>
    <b>Message:</b><br>$message";

    // Настройки PHPMailer
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    try {
        $mail->isSMTP();   
        $mail->CharSet = "UTF-8";
        $mail->SMTPAuth   = true;
        // $mail->SMTPDebug = 2;
        $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

        // Настройки вашей почты
        $mail->Host       = 'smtp.inbox.ru'; // SMTP сервера вашей почты
        $mail->Username   = 'oksana_ovchinnikova@inbox.ru'; // Логин на почте
        $mail->Password   = $password; // Пароль на почте
        $mail->SMTPSecure = 'ssl'; 
        $mail->Port       = 465;
        $mail->setFrom('oksana_ovchinnikova@inbox.ru', 'Оксана Овчинникова'); // Адрес самой почты и имя отправителя

        // Получатель письма
        $mail->addAddress('ludmila.ovchinnikova.67@gmail.com'); // Ещё один, если нужен

    // Отправка сообщения
        $mail->isHTML(true);
        $mail->Subject = $title;
        $mail->Body = $body;    

    // Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}

    } catch (Exception $e) {
        $result = "error";
        $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
    }
    // Отображение результата
    header('Location: thanckyou.html');
}
