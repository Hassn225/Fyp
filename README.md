<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sign Up</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', sans-serif;
    }

    body {
      display: flex;
      min-height: 100vh;
    }

    .left {
      flex: 1;
      position: relative;
    }

    .left img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .left::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, rgba(209, 107, 165, 0.7), rgba(134, 168, 231, 0.7));
      mix-blend-mode: overlay;
    }

    .right {
      flex: 1;
      padding: 50px;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .form-container {
      max-width: 400px;
      margin: auto;
    }

    h2 {
      font-size: 32px;
      margin-bottom: 30px;
      font-weight: bold;
    }

    label {
      color: #888;
      font-weight: bold;
      margin-top: 15px;
      display: block;
      font-size: 14px;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"] {
      width: 100%;
      padding: 10px 5px;
      border: none;
      border-bottom: 2px solid #ccc;
      background: transparent;
      font-size: 14px;
      transition: all 0.3s ease;
    }

    input:focus {
      border-bottom: 2px solid #b3708f;
      outline: none;
    }

    input:hover {
      color: #b3708f;
    }

    .checkbox {
      margin-top: 20px;
      display: flex;
      align-items: center;
      font-size: 14px;
    }

    .checkbox input {
      margin-right: 10px;
      accent-color: #b3708f;
    }

    .buttons {
      margin-top: 20px;
    }

    .buttons .button {
      display: block;
      background: linear-gradient(to right, #d16ba5, #86a8e7);
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 25px;
      cursor: pointer;
      font-size: 16px;
      text-align: center;
      text-decoration: none;
      width: 100%;
    }

    .buttons .button:hover {
      color: #572a45;
    }

    .signin-link {
      margin-top: 15px;
      text-align: center;
      font-size: 14px;
    }

    .signin-link a {
      color: #666;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="left">
    <img src="IMG_0563.jpeg" alt="User">
  </div>
  <div class="right">
    <div class="form-container">
      <h2>Sign Up</h2>
      <form>
        <label>Full Name</label>
        <input type="text" placeholder="Haji Bhola" required>

        <label>Email</label>
        <input type="email" placeholder="Haji-Bhola@example.com" required>

        <label>Username</label>
        <input type="text" placeholder="hajibhola" required>

        <label>Password</label>
        <input type="password" placeholder="**********" required>

        <label>Repeat Password</label>
        <input type="password" placeholder="**********" required>

        <div class="checkbox">
          <input type="checkbox" required>
          <span>I agree to the <a href="#">Terms of User</a></span>
        </div>

        <div class="buttons">
          <a href="signup.html" class="button">Sign Up</a>
        </div>

        <div class="signin-link">
          Already have an account? <a href="signin.html">Sign in →</a>
        </div>
      </form>
    </div>
  </div>
</body>
</html>