import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

import CartContext from "../contexts/CartContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    
  },
  titleText: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "white"
  },
  link: {
    color: "white",
    padding: "1rem",
    textDecoration: "none",
    textTransform: "uppercase"
  },
  // span: {
  //   backgroundColor: "red",
  //   borderRadius: "42.5%",
  //   padding: ".2rem"
  // }
}));

const Navigation = () => {
  const cart = useContext(CartContext);
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" style={{backgroundColor: "black"}}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography  variant="h6" className={classes.title}>
            <Link className={classes.titleText} to="/">Book Store</Link>
          </Typography >
      
            <NavLink className={classes.link} to="/">Products</NavLink>
            <NavLink className={classes.link} to="/cart">
              Cart <span className={classes.span}>{cart.length > 0 && cart.length}</span>
            </NavLink>

       
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navigation;
