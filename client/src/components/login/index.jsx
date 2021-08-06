const Login = () => {
  return (
    <div>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="username" />
      </div>

      <div>
        <label htmlFor="Password">Password</label>
        <input type="text" name="Password" placeholder="Password" />
      </div>
    </div>
  );
};

export default Login;