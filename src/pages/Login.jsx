export default function Login() {
  return (
    <div className="FormContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Login</span>
        <form className="form">
        <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" name="" id="password" />
          <button>Sign In</button>
        </form>
        <p>You don{`'`}t have a account? Register</p>
      </div>
    </div>
  );
}
