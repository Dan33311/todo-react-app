import logo from "./images/logo.png";
import avatar from "./images/user.png";

const Navbar = () => {
  return (  
    <div className="navbar">
      <img src={logo} alt="logo" />
      <h2>TooDoo</h2>
      <div className="user">
        {/* <a href="/">username</a> */}
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
}

export default Navbar;