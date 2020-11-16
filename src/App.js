import Navbar from "./Navbar";
import { Container, Typography } from "@material-ui/core";

function App() {
  return (
    <>
      <Navbar />
      <Container data-test="component-app">
        <Typography>Ãventyr</Typography>
      </Container>
    </>
  );
}

export default App;
