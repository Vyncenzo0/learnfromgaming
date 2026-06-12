<?php
$url_string = getenv('mysql://root:PDQELALsVbPLeiNKsXISbfEyTfqhgDJU@mysql.railway.internal:3306/railway'); 

if (!$url_string) {
    die("Database configuration URL missing.");
}

$db_config = parse_url($url_string);

$host     = $db_config['host'];
$port     = $db_config['port'] ?? 3306;
$user     = $db_config['user'];
$password = $db_config['pass'] ?? '';
$database = ltrim($db_config['path'], '/');

$conn = new mysqli($host, $user, $password, $database, $port);

if ($conn->connect_error) {
    error_log("Connection failed: " . $conn->connect_error);
    die("Database service temporarily unavailable.");
}

?>