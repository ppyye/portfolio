import {Box, chakra, Divider, Heading, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import theme from "./theme";

function Introduce() {
    return (
        <Box>
            <Heading fontSize={52} fontWeight={900} lineHeight={1.4}>
                안녕하세요,<br/>
                신입 개발자 박소하입니다.
            </Heading>
            <Text mt={3} fontSize={24} fontWeight={700}>
                개발은 삶을 윤택하게 변화시키는 도구라고 믿습니다. 더 나은 삶을 위한 개발과, 그 개발을 보다 효과적으로 수행하는 방법에 대해 고민합니다.
            </Text>
            <Divider my={8}/>
            <Box>
                <Text fontSize={20} fontWeight={700}>
                    <chakra.span bgGradient={theme.colors.gradients.rainbow} bgClip="text" fontWeight={800}>
                        기획부터 배포까지, </chakra.span>
                    개발 전체 사이클을 수행할 수 있습니다.
                </Text>
                <Text mt={3} fontSize={16}>
                    <UnorderedList pl={6} spacing={2}>
                        <ListItem>
                            Figma로 UI를 디자인하고 Styled Component를 통해 빠르게 구현할 수 있습니다.
                        </ListItem>
                        <ListItem>
                            요구사항 분석부터 ERD 설계, FE/BE 개발, 배포까지 전과정에 대한 인사이트를 가져가려 합니다.
                            이를 위한 팀원들과의 커뮤니케이션을 즐깁니다.
                        </ListItem>
                        <ListItem>
                            리딩 경험을 바탕으로 확장성, 재사용성, 팀 전체의 생산성을 높이는 방안에 대해 고민합니다.
                        </ListItem>
                    </UnorderedList>
                </Text>
            </Box>
        </Box>
    );
}

export default Introduce;