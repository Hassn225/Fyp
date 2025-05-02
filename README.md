<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
      flex-direction: row;
      min-height: 100vh;
    }

    .left {
      flex: 1;
      background: linear-gradient(to right, #d16ba5, #86a8e7);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .left img {
      mix-blend-mode: overlay;
      max-width: 100%;
      height: auto;
      border-radius: 10px;
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
    }

    label {
      color: darkgrey;
      font-weight: bold;
      margin-top: 15px;
      display: block;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"] {
      border-top: 0px;
        border-left: 0px;
          border-right: 0px;
            border-bottom: 1px solid linear-gradient(to right, #d16ba5, #86a8e7);
      width: 100%;
      padding: 5px;
      height: 25px;
      background: transparent;
    }
    input:hover {
      color: #b3708f ;
      }
      input:focus {
        border-bottom: 2px solid linear-gradient (to right, #d16ba5, #86a8e7);
      outline: none;
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

    .buttons button {
      background: linear-gradient(to right, #d16ba5, #86a8e7);
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 25px;
      cursor: pointer;
      font-size: 16px;
      width: 100%;
    }
.buttons:hover {
color: #572a45;
border-radius: 25px;
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

    @media (max-width: 768px) {
      body {
        flex-direction: column;
      }

      .left,
      .right {
        flex: none;
        width: 100%;
        padding: 20px;
      }

      .left {
        order: 2;
      }

      .right {
        order: 1;
      }
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