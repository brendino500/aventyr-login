import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { TextField, Button, Typography } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontFamily: "Unica One",
    fontSize: 40,
    letterSpacing: 3,
    color: "#4f4f4f",
  },
  input: {
    color: "#D9BB20",
    fontFamily: "Crimson Text",
  },
  inputText: {
    color: "#D9BB20",
    fontFamily: "Crimson Text",
    ontFamily: "Unica One",
  },
  button: {
    color: "#D9BB20",
    fontFamily: "Unica One",
    fontSize: 30,
  },
  smallText: {
    fontFamily: "Crimson Text",
  },
  image: {
    height: "80vh",
  },
}));

export default function LoginForm() {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  return (
    <div data-test="component-loginForm">
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
            id="standard-basic"
            label="Lösenord"
            variant="filled"
            data-test="pass-input"
            fullWidth
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
        <p>
          Har du inget konto?
          <a data-test="register-link" href="http://aventyr.com">
            Registrera här.
          </a>
        </p>
      </div>
      <div>
        <a href="https://stories.freepik.com/travel">
          <img
            src="https://i.ibb.co/xLkjR6r/Exploring-3.gif"
            alt="adventure"
            className={classes.image}
          />
        </a>
      </div>
    </div>
  );
}
