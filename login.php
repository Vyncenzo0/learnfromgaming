<?php

session_start();
if (isset($_SESSION['errors'])) {
  $errors = $_SESSION['errors'];
}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login Interface</title>
    <link rel="stylesheet" href="styles/login.css" />
  </head>
  <body>
    <main class="shell">
      <section class="card" aria-label="Login interface">
        <div class="eyebrow">Welcome back</div>
        <h1>Log in to your account</h1>
         <?php
    if (isset($errors['login'])) {
      echo '<div class="error-main">
                    <p>' . $errors['login'] . '</p>
                    </div>';
      unset($errors['login']);
    }
    ?>
    <form method="POST" action="user-account.php">
      
        <form id="login-form" novalidate>
          <div class="field">
            <label for="student-id">Student ID</label>
            <input id="student-id" type="text" required />
          </div>
           <?php
        if (isset($errors['email'])) {
          echo ' <div class="error">
                    <p>' . $errors['student-id'] . '</p>
                </div>';
        }
        ?>

          <div class="field">
            <label for="password">Password</label>
            <input id="password" type="password" required />
          </div>
          <?php
        if (isset($errors['password'])) {
          echo ' <div class="error">
                    <p>' . $errors['password'] . '</p>
                </div>';
        }
        ?>

          <div class="row">
            <a class="link" href="forgot-password.html">Forgot password?</a>
          </div>

          <button type="submit">Sign in</button>
          <p id="login-message" class="footer-note" style="margin-top: 0; display: none;"></p>
        </form>

        <div class="divider">or continue with</div>

        <p class="footer-note">New here? <a href="signup.html">Create an account</a></p>
      </section>
    </main>

      });
    </script>
  </body>
</html>
<?php
if (isset($_SESSION['errors'])) {
  unset($_SESSION['errors']);
}
?>