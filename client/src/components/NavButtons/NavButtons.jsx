import "./NavButtons.css";
// import Button from "@material-ui/core/Button";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     "& > *": {
//       margin: theme.spacing(1),
//     },
//   },
// }));

// export default function BasicButtonGroup(props) {
//   const classes = useStyles();
//   const { handleLogout } = props;

//   return (
//     <div className="nav-buttons">
//       <div className={classes.root}>
//         <ButtonGroup
//           variant="contained"
//           color="primary"
//           aria-label="contained primary button group"
//         >
//           <Link to="/courses">
//             <Button>All</Button>
//           </Link>
//           <Link to="/courses/new">
//             <Button>Add</Button>
//           </Link>
//           <Button onClick={handleLogout}>Logout</Button>
//         </ButtonGroup>
//       </div>
//     </div>
//   );
// }

// import React from "react";

// export default function NavButtons(props) {
//   const { handleLogout } = props;
//   return (
//     <div className="nav-links">
//       <Link to="/courses">
//         <div className="all-button">
//           <button>All</button>
//         </div>
//       </Link>
//       <Link to="/courses/new">
//         <div className="add-button">
//           <button>Add</button>
//         </div>
//       </Link>
//       <div className="logout-button">
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function NavButtons(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { handleLogout } = props;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="login-button">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
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
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
