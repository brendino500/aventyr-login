import React from "react";

import { TextField, Button } from "@material-ui/core/";

export default function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  return (
    <div data-test="component-loginForm">
      <h1 data-test="login-text">Logga in</h1>
      <form data-test="form">
        <TextField
          id="standard-basic"
          label="E-postadress"
          data-test="email-input"
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Lösenord"
          data-test="pass-input"
          onChange={(event) => setPass(event.target.value)}
        />
      </form>
      <Button data-test="login-button">Logga in</Button>
      <p>
        Har du inget konto?
        <a data-test="register-link" href="http://aventyr.com">
          Registrera här.
        </a>
      </p>
    </div>
  );
}

{
  /* <a href="https://stories.freepik.com/travel">
  Illustration by Freepik Stories
</a>; */
}
