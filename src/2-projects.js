import {
    Box,
    Divider,
    Grid,
    GridItem,
    Heading,
    Highlight,
    Link,
    ListItem, Tag,
    Text,
    Tooltip,
    UnorderedList
} from "@chakra-ui/react";

function Projects () {
    return (
        <Box>
            <Heading mb={10} fontSize={36} fontWeight={900}>
                Projects.
            </Heading>
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                <GridItem w='100%'>
                    <Heading fontSize={24} fontWeight={800}>
                        <Link href='https://github.com/sign-muscat' isExternal>
                            <Tooltip label='Jump to Github!' placement='top'>
                                소리손순
                            </Tooltip>
                        </Link>
                    </Heading>
                    <Text fontWeight={600}>2024.07-2024.08</Text>
                    <Text my={2}>5인 프로젝트</Text>
                    <Divider my={3}/>
                    <Text lineHeight={1.6}>
                        프로젝트 리딩, 일정 관리<br/>
                        풀스택 개발
                    </Text>

                </GridItem>
                <GridItem w='100%' colSpan={2}>
                    <Text fontWeight={600}>청각 장애인과의 소통 지원을 위한 학습 게임 프로젝트</Text>
                    <Text>소리, 손, 입술을 컨셉으로 한 세 가지 게임을 제공합니다.</Text>

                    <Heading mt={4} fontSize={20} fontWeight={800}>
                        What I did.
                    </Heading>
                    <Box my={4}>
                        <Text mb={2}>
                            <Tag mr={2} mt={1} size='sm' fontWeight={700}>소리</Tag>
                            농인의 발음으로 재생되는 문장을 듣고 정답을 맞추는 게임
                            <Text fontSize={14}>컨텐츠 생성에 파인 튜닝 TTS 모델, 퀴즈에 문장 임베딩 모델 활용</Text>

                        </Text>
                        <Text mb={2}>
                            <Tag mr={2} mt={1} size='sm' fontWeight={700}>손</Tag>
                            수화의 포인트 동작을 따라할 수 있는 수화 학습 게임
                            <Text fontSize={14}>퀴즈에 Image Classification 모델 활용</Text>
                        </Text>
                        <Text mb={2}>
                            <Tag mr={2} mt={1} size='sm' fontWeight={700}>입술</Tag>
                            입 모양을 읽고 뜻을 파악하는 구화 연습 게임
                            <Text fontSize={14}>컨텐츠 생성에 Live Portrait, 퀴즈에 문장 임베딩 모델 활용</Text>

                        </Text>
                    </Box>

                </GridItem>
            </Grid>
        </Box>
    );
}

export default Projects;