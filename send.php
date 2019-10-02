<?php
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $to = "strakhovoiiurist@ukr.net";
        $from = "no-reply@mail.com";

        /* Указываем переменные, в которые будет записываться информация с формы */
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];
        $email = $_POST['email'];
        $subject = "Письмо от посетиля сайта";

        /* Переменная, которая будет отправлена на почту со значениями, вводимых в поля */
        $mail_to_myemail = "Написал(а): $name\r\n Контактный email - $email\r\n Контактный телефон - $phone\r\n Текст письма: $message\n";

        $headers = "From: $from \r\n";

        /* Отправка сообщения, с помощью функции mail() */
        mail($to, $subject, $mail_to_myemail, $headers);
    echo "The email message was sent.";
?>
