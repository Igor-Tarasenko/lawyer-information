<?php
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $to = "my@mail.com"; // Здесь нужно написать e-mail, куда будут приходить письма
        $from = "no-reply@mail.com"; // Здесь нужно написать e-mail, от кого будут приходить письма, например no-reply(собака)epicblog.net

        /* Указываем переменные, в которые будет записываться информация с формы */
        $first_name = $_POST['name'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];
        $subject = "Форма отправки сообщений с сайта Epic Blog";

        /* Переменная, которая будет отправлена на почту со значениями, вводимых в поля */
        $mail_to_myemail = "Здравствуйте! \r\n Было отправлено сообщение с сайта! \r\n Имя отправителя: $first_name \r\n Номер телефона: $phone \r\n Текст сообщения: $message \r\n Чтобы ответить на письмо, создайте новое сообщение, скопируйте электронный адрес и вставьте в поле Кому.";

        $headers = "From: $from \r\n";

        /* Отправка сообщения, с помощью функции mail() */
        mail($to, $subject, $mail_to_myemail, $headers);
    echo "The email message was sent.";
?>
