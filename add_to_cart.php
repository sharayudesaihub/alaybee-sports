<?php
session_start();

if(!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

$item = [
    "name" => $_POST['name'],
    "price" => $_POST['price'],
    "img" => $_POST['img']
];

$_SESSION['cart'][] = $item;

echo "success";
?>
