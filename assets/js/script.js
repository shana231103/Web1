const loginPoup = () => {
    loginForm.innerHTML = `
      <div class="login-popup">
      <div class="form-wrapper sign-in">
        <form action="" id="signin">
          <h2>Sign In</h2>
          <div class="input-group">
            <input type="text" required id="name" placeholder="Enter your username" autocomplete="off">
            <label for="">Username</label>
          </div>
          <div class="input-group">
            <input type="password" required id="password" placeholder="Enter your password" autocomplete="off">
            <label for="">Password</label>
          </div>
          <!-- <div class="remember">
            <label><input type="checkbox"> Remember me</label>
          </div> -->
          <button class="loginform-btn" type="submit">Sign In</button>
          <div class="signUp-link">
            <p>Don't have an account? <a href="#" class="signUpBtn-link">Sign Up</a></p>
          </div>
        </form>
      </div>
      <div class="form-wrapper sign-up">
        <form action="" id="signup">
          <h2>Sign Up</h2>
          <div class="input-group">
            <input type="text" required id="signup-name" placeholder="Enter your username" autocomplete="off">
            <label for="">Username</label>
          </div>
          <div class="input-group">
            <input type="text" required id="email" placeholder="Enter your email" autocomplete="off">
            <label for="">Email</label>
          </div>
          <div class="input-group">
            <input type="password" required id="signup-password" placeholder="Enter your password" autocomplete="off">
            <label for="">Password</label>
          </div>
          <!-- <div class="remember">
            <label><input type="checkbox"> I agree to the terms & conditions</label>
          </div> -->
          <button class="loginform-btn" type="submit">Sign Up</button>
          <div class="signUp-link">
            <p>Already have an account? <a href="#" class="signInBtn-link">Sign In</a></p>
          </div>
        </form>
      </div>
      </div>
      `;
}