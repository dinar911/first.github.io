<?php

if($_SERVER['REQUEST_METHOD'] == 'POST') {
	try {
		
		$name = trim($_REQUEST['name']);
		$client = trim($_REQUEST['client']);
		$fio = trim($_REQUEST['fio']);
		$phone = trim($_REQUEST['phone']);
		$last_name_client = trim($_REQUEST['last_name_client']);
		$phone_client = trim($_REQUEST['phone_client']);
		$tel = trim($_REQUEST['tel']);
		$email = trim($_REQUEST['email']);
		$mail = trim($_REQUEST['mail']);
		$address = trim($_REQUEST['address']);
		$color = trim($_REQUEST['color']);
		$comment = trim($_REQUEST['comment']);
		$comments = trim($_REQUEST['comments']);
		$type = trim($_REQUEST['type']);
		$type_form = trim($_REQUEST['type_form']);
		$theme = trim($_REQUEST['theme']);
		$model = trim($_REQUEST['model']);
		$product = trim($_REQUEST['product']);
		
		if($name == '' && $client != '') {
			$name = $client;
		}
		if($name == '' && $last_name_client != '') {
			$name = $last_name_client;
		}
		if($name == '' && $fio != '') {
			$name = $fio;
		}
		if($phone == '' && $tel != '') {
			$phone = $tel;
		}
		if($phone == '' && $phone_client != '') {
			$phone = $phone_client;
		}
		if($email == '' && $mail != '') {
			$email = $mail;
		}
		
		$site = $_SERVER['HTTP_HOST'];
		$cur_date = date('d.m.Y H:i:s');
		$ip = $_SERVER['REMOTE_ADDR'];
		
		if($phone != '' || $email != '') {
			
			$from = array('noreply@' . $site);
			$to = file(__DIR__ . '/email.cnf');
			$to = array_map('trim', $to);
			$subject = 'Новый заказ с сайта ' . $site;
			$message = 'Поступил новый заказ с сайта ' . $site . ':
				<table>
					<tr>
						<td><b>Дата:</b></td>
						<td>' . $cur_date . '</td>
					</tr>
					<tr>
						<td><b>Ip:</b></td>
						<td>' . $ip . '</td>
					</tr>';
			if($name != '') {
				$message .= '<tr>
					<td><b>Имя:</b></td>
					<td>' . $name . '</td>
				</tr>';
			}
			if($phone != '') {
				$message .= '<tr>
					<td><b>Телефон:</b></td>
					<td>' . $phone . '</td>
				</tr>';
			}
			if($email != '') {
				$message .= '<tr>
					<td><b>E-mail:</b></td>
					<td>' . $email . '</td>
				</tr>';
			}
			if($address != '') {
				$message .= '<tr>
					<td><b>Адрес:</b></td>
					<td>' . $address . '</td>
				</tr>';
			}
			if($color != '') {
				$message .= '<tr>
					<td><b>Цвет:</b></td>
					<td>' . $color . '</td>
				</tr>';
			}
			if($comment != '') {
				$message .= '<tr>
					<td><b>Сообщение</b></td>
					<td>' . $comment . '</td>
				</tr>';
			}
			if($comments != '') {
				$message .= '<tr>
					<td><b>Сообщение</b></td>
					<td>' . $comments . '</td>
				</tr>';
			}
			if($type != '') {
				$message .= '<tr>
					<td><b>Тип:</b></td>
					<td>' . $type . '</td>
				</tr>';
			}
			if($type_form != '') {
				$message .= '<tr>
					<td><b>Форма:</b></td>
					<td>' . $type_form . '</td>
				</tr>';
			}
			if($theme != '') {
				$message .= '<tr>
					<td><b>Форма:</b></td>
					<td>' . $theme . '</td>
				</tr>';
			}
			if($model != '') {
				$message .= '<tr>
					<td><b>Модель:</b></td>
					<td>' . $model . '</td>
				</tr>';
			}
			if($product != '') {
				$message .= '<tr>
					<td><b>Товар:</b></td>
					<td>' . $product . '</td>
				</tr>';
			}
			$message .= '</table>';	

			$headers  = "MIME-Version: 1.0\r\n";
			$headers .= "Content-type: text/html; charset=utf-8\r\n";
			$headers .= "From: " . implode(',', $from) . "\r\n";
			
			$result = mail(implode(',', $to), $subject, $message, $headers);
			
			if($result) {
				header('Location: thanks.html');
			}
			else {
				echo '<div>Ошибка при отправке заказа! Попробуйте позже.</div>';
			}
		}
	}
	catch(Exception $e) {
		echo '<div>Ошибка при отправке заказа! Попробуйте позже.</div>';
	}
}