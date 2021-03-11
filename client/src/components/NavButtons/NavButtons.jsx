import "./NavButtons.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function NavButtons(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { handleLogout, currentUser } = props;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="login-container">
      <div className="login-button">
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Menu
        </Button>
      </div>
      {currentUser ? (
        <>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to="/">
              <MenuItem onClick={handleClose}>Home</MenuItem>
            </Link>
            <Link to="/courses">
              <MenuItem onClick={handleClose}>All Courses</MenuItem>
            </Link>
            <Link to="/tech">
              <MenuItem onClick={handleClose}>Technology</MenuItem>
            </Link>
            <Link to="/cooking">
              <MenuItem onClick={handleClose}>Cooking</MenuItem>
            </Link>
            <Link to="/dancing">
              <MenuItem onClick={handleClose}>Dancing</MenuItem>
            </Link>
            <Link to="/courses/new">
              <MenuItem onClick={handleClose}>Add Course</MenuItem>
            </Link>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </>
      ) : (
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link to="/login">
            <MenuItem onClick={handleClose}>Sign-In/SignUp</MenuItem>
          </Link>
          <Link to="/">
            <MenuItem onClick={handleClose}>Home</MenuItem>
          </Link>
          <Link to="/courses">
            <MenuItem onClick={handleClose}>All Courses</MenuItem>
          </Link>
          <Link to="/tech">
            <MenuItem onClick={handleClose}>Technology</MenuItem>
          </Link>
          <Link to="/cooking">
            <MenuItem onClick={handleClose}>Cooking</MenuItem>
          </Link>
          <Link to="/dancing">
            <MenuItem onClick={handleClose}>Dancing</MenuItem>
          </Link>
        </Menu>
      )}
    </div>
  );
}
