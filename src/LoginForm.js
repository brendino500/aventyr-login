import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { TextField, Button, Typography, Grid } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontFamily: "Unica One",
    fontSize: 40,
    letterSpacing: 3,
    color: "#4f4f4f",
    textAlign: "center",
  },
  form: {
    display: "flex",
  },
  input: {
    color: "#D9BB20",
    fontFamily: "Crimson Text",
    margin: 10,
  },
  inputText: {
    color: "#D9BB20",
    fontFamily: "Unica One",
    margin: 10,
  },
  button: {
    color: "#D9BB20",
    fontFamily: "Unica One",
    fontSize: 30,
  },
  smallText: {
    fontFamily: "Crimson Text",
    color: "#4f4f4f",
    textAlign: "center",
  },
  image: {
    height: "80vh",
    margin: 20,
  },
  link: {
    textDecoration: "none",
    fontFamily: "Unica One",
    color: "#D9BB20",
    letterSpacing: 2,
  },
}));

export default function LoginForm() {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  return (
    <div data-test="component-loginForm">
      <Grid container direction="row" justify="center" alignItems="center">
        <div>
          <Typography data-test="login-text" className={classes.title}>
            Logga in
          </Typography>
          <form data-test="form">
            <TextField
              id="standard-basic"
              label="E-postadress"
              variant="filled"
              data-test="email-input"
              fullWidth
              required
              onChange={(event) => setEmail(event.target.value)}
              InputProps={{
                classes: {
                  input: classes.inputText,
                },
              }}
              InputLabelProps={{
                classes: {
                  root: classes.inputText,
                  focused: classes.inputText,
                },
              }}
            />
            <TextField
              id="standard-adornment-password"
              label="Lösenord"
              variant="filled"
              data-test="pass-input"
              type="password"
              fullWidth
              required
              autoComplete="current-password"
              InputProps={{
                classes: {
                  input: classes.inputText,
                },
              }}
              InputLabelProps={{
                classes: {
                  root: classes.inputText,
                  focused: classes.inputText,
                },
              }}
              onChange={(event) => setPass(event.target.value)}
            />
          </form>
          <Button data-test="login-button" className={classes.button} fullWidth>
            Logga in
          </Button>
          <Typography className={classes.smallText}>
            Har du inget konto?{" "}
            <a data-test="register-link" href="/" className={classes.link}>
              <b>Registrera här.</b>
            </a>
          </Typography>
        </div>
        <div>
          <a href="https://stories.freepik.com/travel" target="_blank">
            <img
              src="https://i.ibb.co/xLkjR6r/Exploring-3.gif"
              alt="adventure"
              className={classes.image}
            />
          </a>
        </div>
      </Grid>
    </div>
  );
}
