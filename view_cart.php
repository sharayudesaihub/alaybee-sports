<?php
session_start();
$cart = $_SESSION['cart'] ?? [];
?>

<!DOCTYPE html>
<html>
<head>
    <title>Your Cart</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"/>

    <style>
        body {
            background: #f7f7f7;
        }

        .header-bar {
            background: linear-gradient(90deg, #007bff, #6610f2);
            padding: 20px;
            color: white;
            border-radius: 12px;
            margin-bottom: 25px;
        }

        .card {
            border-radius: 15px;
            overflow: hidden;
            transition: transform .2s;
        }

        .card:hover {
            transform: scale(1.03);
            box-shadow: 0px 4px 15px rgba(0,0,0,0.2);
        }

        .empty-box {
            font-size: 22px;
            background: #ffffff;
            padding: 25px;
            border-radius: 15px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .btn-home {
            font-size: 16px;
            padding: 10px 18px;
            border-radius: 30px;
        }
    </style>
</head>

<body class="container py-4">

<!-- Header -->
<div class="header-bar text-center">
    <h2 class="fw-bold">🛒 Your Shopping Cart</h2>
</div>

<!-- Home Button -->
<!-- <div class="text-center mb-4">
    <a href="/Alyeebe%20sports/index.html" class="btn btn-light btn-home shadow-sm">
        🏠 Go to Home
    </a>
</div> -->

<?php if(empty($cart)): ?>
    
    <div class="empty-box text-center text-secondary">
        <h4>Your Cart is Empty 😔</h4>
        <p>Add some cool products and come back!</p>

        <a href="/Alyeebe%20sports/index.html" class="btn btn-primary btn-home mt-3">
            🔙 Continue Shopping
        </a>
    </div>

<?php else: ?>
    
    <div class="row">
        <?php foreach($cart as $index => $item): ?>
        <div class="col-md-4 mb-4">
            <div class="card shadow-sm">
                <img src="<?= $item['img'] ?>" class="card-img-top" height="200">

                <div class="card-body text-center">
                    <h5 class="fw-bold"><?= $item['name'] ?></h5>
                    <p class="text-success fs-5">₹<?= $item['price'] ?></p>

                    <!-- Remove button -->
                    <form action="remove_from_cart.php" method="POST">
                        <input type="hidden" name="index" value="<?= $index ?>">
                        <button class="btn btn-danger btn-sm w-100 rounded-pill">
                            ❌ Remove Item
                        </button>
                    </form>

                </div>
            </div>
        </div>
        <?php endforeach; ?>
    </div>

    <!-- Home button at bottom -->
    <div class="text-center mt-4">
        <a href="/Alyeebe%20sports/index.html" class="btn btn-primary btn-home shadow">
            🔙 Continue Shopping
        </a>
    </div>

<?php endif; ?>

</body>
</html>
