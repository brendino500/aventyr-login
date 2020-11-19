import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "#D9BB20",
  },
  title: {
    flexGrow: 1,
    fontFamily: "Unica One",
    fontSize: 40,
    letterSpacing: 3,
    color: "#4f4f4f",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div data-test="component-navbar" className={classes.root}>
      <AppBar position="static">
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
