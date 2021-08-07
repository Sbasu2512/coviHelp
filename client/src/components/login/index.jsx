const Login = () => {

  function submitLogin(e) {
    // axios.post()
  }

  return (
    <div>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="username" />
      
        <label htmlFor="Password">Password</label>
        <input type="text" name="Password" placeholder="Password" />
      
        <button type="button" onClick={submitLogin()}>Login</button>

      </div>

    </div>
  );
};

export default Login;