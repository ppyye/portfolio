import {
    Box,
    Divider,
    Grid,
    GridItem,
    Heading, HStack, Image,
    Link,
    ListItem,
    Tag,
    Text,
    Tooltip,
    UnorderedList
} from "@chakra-ui/react";
import {useState} from "react";
import {ReactImageCarouselViewer} from "react-image-carousel-viewer";
import {StarIcon} from "@chakra-ui/icons";
import {FaGithub} from "react-icons/fa6";
import FrontTag from "../component/FrontTag";
import BackTag from "../component/BackTag";
import DeployTag from "../component/DeployTag";

function Sorisonsoon() {
    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const images = [
        {
            src: `${process.env.PUBLIC_URL}/images/sorisonsoon-main.png`,
            description: "메인 페이지"
        },
        {
            src: `${process.env.PUBLIC_URL}/images/sorisonsoon-sound.gif`,
            description: "소리 게임(도전! 소리 탐정) 플레이 화면"
        },
        {
            src: `${process.env.PUBLIC_URL}/images/sorisonsoon-hand.gif`,
            description: "손 게임(맞혀라! 수수께끼) 플레이 화면"
        },
        {
            src: `${process.env.PUBLIC_URL}/images/sorisonsoon-lip.gif`,
            description: "입술 게임(너의 목소리가 보여) 플레이 화면"
        }
    ];

    return (
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
            <GridItem w='100%'>
                <HStack>
                    <Heading fontSize={24} fontWeight={800}>소리손순</Heading>
                    <Link fontSize={20} mb={0.5} href='https://github.com/sign-muscat' isExternal>
                        <FaGithub/>
                    </Link>
                </HStack>

                <Text fontWeight={600}>2024.07-2024.08</Text>
                <Text my={2}>
                    5인 프로젝트
                </Text>
                <Divider my={3}/>
                <Text lineHeight={1.6}>
                    프로젝트 리딩<br/>
                    일정 관리<br/>
                    풀스택 개발
                </Text>

            </GridItem>
            <GridItem w='100%' colSpan={2}>
                <Text fontWeight={600}>청각 장애인과의 소통 지원을 위한 학습 게임 서비스</Text>
                <Text>
                    소리, 손, 입술을 컨셉으로 한 세 가지 게임이 포함되어 있어요.
                    미니 프로젝트로 진행한 수어 학습 게임의 발전판이에요.
                </Text>

                <Heading mt={6} fontSize={20} fontWeight={800}>
                    Description.
                </Heading>

                <Box my={2}>
                    <Text mb={2}>
                        <Tag mr={1} mt={1} size='sm' fontWeight={700}>소리 게임</Tag>
                        농인의 발음으로 재생되는 문장을 듣고 정답을 맞춰요.
                        <UnorderedList>
                            <ListItem ml={3}>
                                <Text fontSize={14}>컨텐츠 생성에 파인 튜닝 TTS 모델, 퀴즈에 문장 임베딩 모델 활용</Text>
                            </ListItem>
                        </UnorderedList>

                    </Text>
                    <Text mb={2}>
                        <Tag mr={1} mt={1} size='sm' fontWeight={700}>손 게임</Tag>
                        수화의 포인트 동작을 따라하며 학습할 수 있어요.
                        <UnorderedList>
                            <ListItem ml={3}>
                                <Text fontSize={14}>퀴즈에 Image Classification 모델 활용</Text>
                            </ListItem>
                        </UnorderedList>
                    </Text>
                    <Text mb={2}>
                        <Tag mr={1} mt={1} size='sm' fontWeight={700}>입술 게임</Tag>
                        입 모양을 읽고 뜻을 파악하는 구화를 연습할 수 있어요.
                        <UnorderedList>
                            <ListItem ml={3}>
                                <Text fontSize={14}>컨텐츠 생성에 Live Portrait, 퀴즈에 문장 임베딩 모델 활용</Text>
                            </ListItem>
                        </UnorderedList>
                    </Text>
                </Box>
                <HStack w='100%'>
                    {
                        images.map((image, index) => (
                            <Box>
                                <Image src={image.src} alt={image.description} key={index}
                                       onClick={() => {
                                           setIndex(index);
                                           setIsOpen(true);
                                       }}/>
                            </Box>
                        ))
                    }
                    <ReactImageCarouselViewer
                        open={isOpen}
                        onClose={() => setIsOpen(false)}
                        images={images}
                        startIndex={index}
                    />
                </HStack>

                <Heading mt={6} fontSize={20} fontWeight={800}>
                    Tech Stack.
                </Heading>
                <Text my={2}>
                    <Tag mr={1} mt={1} size='sm' borderRadius='full' variant='subtle' colorScheme='cyan'>Frontend</Tag>
                    Javascript, React, Redux, Axios<br/>
                    <Tag mr={1} mt={1} size='sm' borderRadius='full' variant='subtle' colorScheme='green'>Backend</Tag>
                    Java, Spring Boot, Spring AI, Python, FastAPI, MariaDB<br/>
                    <Tag mr={1} mt={1} size='sm' borderRadius='full' variant='subtle' colorScheme='orange'>Deploy</Tag>
                    Vercel, AWS, Docker<br/>
                    <Tag mr={1} mt={1} size='sm' borderRadius='full' variant='subtle' colorScheme='red'>Tools</Tag>
                    Github, Github Actions, Figma, Notion<br/>

                </Text>


                <Heading mt={8} fontSize={20} fontWeight={800}>
                    What I did.
                </Heading>
                <Box lineHeight={1.5}>
                    <Box my={6}>
                        <HStack>
                            <StarIcon boxSize={2.5} mb={0.5}/>
                            <Text fontWeight={600}>프로젝트 리딩 및 일정 관리</Text>
                        </HStack>
                        <Text mt={1}>
                            원활한 진행 상황 공유를 위해 매일 아침 스크럼 회의를 주도했어요.
                            또, 회고를 도입하여 되돌아보는 시간을 가졌어요.
                            Github Projects를 WBS로 활용하여 이터레이션을 관리했어요.
                        </Text>
                        <Text mt={2}>
                            Figma를 통한 UI 디자인의 90%를 담당하고, ERD 설계를 주도했어요.
                            팀원들의 문제 해결을 적극적으로 서포트했어요.
                        </Text>
                    </Box>

                    <Box my={8}>
                        <HStack>
                            <StarIcon boxSize={2.5} mb={0.5}/>
                            <Text fontWeight={600}>수어 학습 게임 구현</Text>
                            <FrontTag/>
                            <BackTag/>
                        </HStack>
                        <Text mt={1}>
                            한 게임의 문제 목록과 정답 여부에 대한 상태를 Redux로 중앙에서 관리했어요.
                        </Text>
                        <Heading mt={3} fontSize={14} fontWeight={600}>→ 기존 코드의 구조 개선</Heading>
                        <Text mt={2}>
                            기존 수어 게임은 프론트 로직이 한 컴포넌트에 몰려서, 하나의 컴포넌트에서 약 20개의 상태를 관리하고 있었어요.
                            컴포넌트를 쪼개고, 로직을 다듬고, 관련 있는 상태들을 객체로 그룹화하여 복잡성을 개선했어요.
                        </Text>
                    </Box>

                    <Box my={8}>
                        <HStack>
                            <StarIcon boxSize={2.5} mb={0.5}/>
                            <Text fontWeight={600}>소리 게임 구현</Text>
                            <FrontTag/>
                            <BackTag/>
                        </HStack>
                        <Heading mt={3} fontSize={14} fontWeight={600}>→ 스케줄러로 자정마다 문제 출제</Heading>
                        <Text mt={2}>
                            Spring Scheduler를 통해 자정마다 문제 pool에서 하나의 문제를 골라 출제해요.
                            마지막 출제로부터 한 달 이상 지난 문제는 다시 출제될 수 있도록 설계했어요.
                        </Text>
                    </Box>

                    <Box my={8}>
                        <HStack>
                            <StarIcon boxSize={2.5} mb={0.5}/>
                            <Text fontWeight={600}>친구 기능 구현</Text>
                            <FrontTag/>
                            <BackTag/>
                        </HStack>
                        <Heading mt={3} fontSize={14} fontWeight={600}>→ 친구 추천: 사용자 기반 협업 필터링</Heading>
                        <Text mt={2}>
                            사용자의 관심사를 임베딩하여 유사도가 높은 사용자를 추천해요.<br/>
                            데이터가 많아질 경우 유사도 계산 시 부하 발생이 예상되어,
                            Spring Batch를 통해 새로운 관심사가 등록될 때 유사도 계산이 트리거되도록 구성했어요.
                        </Text>
                    </Box>

                    <Box my={8}>
                        <HStack>
                            <StarIcon boxSize={2.5} mb={0.5}/>
                            <Text fontWeight={600}>배포 및 CI/CD 파이프라인 구축</Text>
                            <DeployTag/>
                        </HStack>
                        <Text mt={1}>
                            Docker로 컨테이너화 하고, Github Actions worflow를 작성하여 빌드와 배포가 자동으로 이루어질 수 있도록 했어요.
                        </Text>
                        <Heading mt={3} fontSize={14} fontWeight={600}>→ AWS EC2 환경: 스프링 서버 힙 메모리 OOME</Heading>
                        <Text mt={2}>
                            VisualVM으로 스프링 서버의 메모리 사용량을 모니터링하고,
                            그 내용을 참고하여 Java 힙 메모리 크기를 상향 조정했어요.
                        </Text>
                        <Heading mt={4} fontSize={14} fontWeight={600}>→ AWS EC2 환경: 하나의 인스턴스, 두 개의 서버</Heading>
                        <Text mt={2}>
                            파이썬 서버 엔드포인트가 하나뿐이어서, 파이썬과 스프링 서버를 하나의 EC2 인스턴스에서 실행하기로 결정했어요.
                            ELB를 통해 각 서버에 대한 요청이 알맞은 포트로 전달돼요.
                        </Text>
                    </Box>
                </Box>
            </GridItem>
        </Grid>
    );
}

export default Sorisonsoon;