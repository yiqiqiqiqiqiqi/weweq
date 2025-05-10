<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $product_id = $_POST['product_id'];
    $email = $_POST['email'];
    
    try {
        $stmt = $pdo->prepare("INSERT INTO orders (product_id, user_email, order_date) VALUES (?, ?, NOW())");
        $stmt->execute([$product_id, $email]);
        echo "订单提交成功！";
        echo '<br><a href="shop.php">返回商店</a>';
    } catch (PDOException $e) {
        echo "订单失败: " . $e->getMessage();
    }
} else {
    header("Location: shop.php");
    exit();
}
?>