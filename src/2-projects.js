import {
    Box,
    Heading,
} from "@chakra-ui/react";
import Sorisonsoon from "./projects/sorisonsoon";
import Ilsacheonri from "./projects/Ilsacheonri";

function Projects () {
    return (
        <Box>
            <Heading mb={10} fontSize={36} fontWeight={900}>
                Projects.
            </Heading>

            <Sorisonsoon/>
            <Box my={75}/>
            <Ilsacheonri/>
        </Box>
    );
}

export default Projects;