import Add from "../img/addAvatar.png";

export default function Register() {
  return (
    <div className="FormContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Register</span>
        <form className="form">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" name="" id="password" />
            <input style={{display: "none"}} type="file" name="" id="file" />
            <label htmlFor="file">
                <img src={Add} alt="" /> <span>Add an avatar</span>
            </label>
            <button>Sign Up</button>
        </form>
        <p>You do have a account? Login</p>
      </div>
    </div>
  );
}
