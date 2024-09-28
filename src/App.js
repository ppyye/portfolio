import {
    Box,
    Container, Divider
} from "@chakra-ui/react";
import Introduce from "./1-introduce";
import Projects from "./2-projects";
import Experience from "./3-experience";
import Skills from "./4-skills";

function App() {
  return (
      <Container maxW='3xl'>
          <Box height={75}/>
          <Introduce/>

          <Box height={100}/>
          <Projects/>

          <Divider my={75}/>
          <Experience/>

          <Divider my={75}/>
          <Skills/>

          <Box height={500}/>
      </Container>
  );
}

export default App;
