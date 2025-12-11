<?php
$pdo = new PDO('mysql:host=localhost;dbname=productos','root','password');
$stmt = $pdo->query("SELECT * from producto");
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data);
?>