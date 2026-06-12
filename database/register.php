<?php
header("Access-Control-Allow-Origin: https://github.io");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

$host     = 'mysql.railway.internal';
$db       = 'YOUR_DATABASE_NAME';
$user     = 'root';
$password = 'PDQELALsVbPLeiNKsXISbfEyTfqhgDJU';
$port     = '3306';
$charset  = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;port=$port;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $password, $options);
} catch (\PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $name     = trim($_POST['name'] ?? '');
    $raw_pass = trim($_POST['password'] ?? '');
    $hint     = trim($_POST['hint'] ?? '');

    if (empty($name) || empty($raw_pass)) {
        die("Error: Name and Password fields are required.");
    }

    $hashed_password = password_hash($raw_pass, PASSWORD_DEFAULT);

    $sql = "INSERT INTO students (password, name, hint) VALUES (:password, :name, :hint)";
    
    try {
        $stmt = $pdo->prepare($sql);
        
        $stmt->execute([
            ':password' => $hashed_password,
            ':name'     => $name,
            ':hint'     => !empty($hint) ? $hint : null
        ]);

        echo "Registration successful! Student account created.";
        
    } catch (\PDOException $e) {
        echo "Registration failed: " . $e->getMessage();
    }
}
?>
