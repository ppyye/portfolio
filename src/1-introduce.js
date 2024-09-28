import {Box, chakra, Divider, Heading, HStack, Link, ListItem, Text, UnorderedList, useToast} from "@chakra-ui/react";
import theme from "./theme";
import {EmailIcon} from "@chakra-ui/icons";
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import {FaEarthAsia, FaGithub} from "react-icons/fa6";

function Introduce() {
    const toast = useToast({
        position: 'top-right',
        duration: 2000,
        render: () => (
            <Box color='white' py={3} px={5} fontSize={15} bg='blackAlpha.800' fontWeight={600} borderRadius='md'>
                이메일 주소를 복사했어요!
            </Box>
        ),
    })

    return (
        <Box>
            <Heading fontSize={48} fontWeight={900} lineHeight={1.4} pl={5}
                     borderLeft='10px solid transparent' backgroundImage={theme.colors.gradients.mint}
                     backgroundOrigin='border-box' backgroundClip='padding-box, border-box'
            >
                안녕하세요,<br/>
                신입 개발자 박소하입니다.
            </Heading>
            <Text mt={3} fontSize={24} fontWeight={700}>
                개발은 삶을 윤택하게 변화시키는 도구라고 믿습니다. 더 나은 삶을 위한 개발과, 그 개발을 보다 효과적으로 수행하는 방법에 대해 고민합니다.
            </Text>

            <Box mt={4} fontSize={15} fontWeight={600}>
                <HStack justifyContent='flex-end'>
                    <Text fontWeight={700}>SOHA PARK</Text>
                    <CopyToClipboard text={'sohapxxx@gmail.com'} onCopy={() => toast()}>
                        <EmailIcon cursor='pointer'/>
                    </CopyToClipboard>
                    <Link fontSize={16} mb={0.5} href='https://github.com/ppyye' isExternal>
                        <FaGithub/>
                    </Link>
                </HStack>
                <HStack justifyContent='flex-end'>
                    <FaEarthAsia/>
                    <Text ml={-1}>서울 은평구</Text>
                </HStack>
            </Box>

            <Divider mt={4} mb={8}/>
            <Box>
                <Text fontSize={20} fontWeight={700}>
                    <chakra.span bgGradient={theme.colors.gradients.rainbow} bgClip="text" fontWeight={800}>
                        기획부터 배포까지, </chakra.span>
                    개발 전체 사이클을 수행할 수 있습니다.
                </Text>
                <Text mt={3} fontSize={16}>
                    <UnorderedList pl={6} spacing={2}>
                        <ListItem>
                            Figma로 UI를 디자인하고 Styled Component를 통해 빠르게 화면을 구현할 수 있습니다.
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