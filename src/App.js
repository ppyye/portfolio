import {
    Box,
    Container, Divider, Flex, Link
} from "@chakra-ui/react";
import Introduce from "./1-introduce";
import Projects from "./2-projects";
import Experience from "./3-experience";
import Skills from "./4-skills";
import {useEffect, useState} from "react";
import {ArrowUpIcon} from "@chakra-ui/icons";

function App() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
      <Container maxW='3xl'>
          <Box height={[10, 75]}/>
          <Introduce/>

          <Box height={[70, 100]}/>
          <Projects/>

          <Box height={[100, 150]}/>
          <Experience/>

          <Box height={[100, 150]}/>
          <Skills/>

          <Box height={[70, 100]}/>

          {scrollPosition > 0 && (<Link href='#top'>
              <Box position='fixed'
                   bottom='20px'
                   right={['16px', '34px']}
                   zIndex={1}
              >
                  <Flex borderRadius='full' bg='gray.100' h={50} w={50} alignItems='center' justifyContent='center'>
                      <ArrowUpIcon/>
                  </Flex>
              </Box>
          </Link>)}

      </Container>
  );
}

export default App;
