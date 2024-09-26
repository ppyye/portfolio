import {
    Box,
    Container,
    Divider,
    Heading,
    Text,
    Grid,
    GridItem, Link, Tooltip
} from "@chakra-ui/react";
import Introduce from "./1-introduce";
import Projects from "./2-projects";

function App() {
  return (
      <Container maxW='2xl'>
          <Box height={100}/>
          <Introduce/>

          <Box height={100}/>
          <Projects/>

          <Box height={500}/>
      </Container>
  );
}

export default App;
