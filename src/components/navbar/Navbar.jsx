import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user,dispatch  } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
   
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">lamabooking</span>
        </Link>
        {user ? <div className="navItems">
            <span className="navButtonname"> {user.username} </span>
           
            <button className="navButton" onClick={handleClick}>Logout</button>
  
           
          </div> : (
          <div className="navItems">
          <Link to="/register" style={{ color: "inherit", textDecoration: "none" }}>
            <button className="navButton">Register</button>
            </Link>

            <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
            <button className="navButton" >Login</button>
        </Link>
           
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Navbar;
