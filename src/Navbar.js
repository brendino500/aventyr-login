import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    background: "#D9BB20",
  },
  title: {
    flexGrow: 1,
    fontFamily: "Unica One",
    fontSize: 40,
    letterSpacing: 3,
    color: "#4f4f4f",
  },
  button: {
    color: "#4f4f4f",
    fontFamily: "Unica One",
    fontSize: 25,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div data-test="component-navbar" className={classes.root}>
      {console.log(
        "%c Coded by Brenda Ty. https://brendaty.com ",
        "background: #D9BB20; color: #4f4f4f; size: 20"
      )}
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography data-test="aventyr-home" className={classes.title}>
            Äventyr
          </Typography>
          <Button data-test="login-button" className={classes.button}>
            Logga In
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
