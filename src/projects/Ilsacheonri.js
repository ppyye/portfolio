import {useState} from "react";
import {
    Box,
    Divider, Flex,
    Grid,
    GridItem,
    Heading,
    HStack, Image,
    Link,
    ListItem,
    Tag,
    Text,
    UnorderedList
} from "@chakra-ui/react";
import {FaGithub} from "react-icons/fa6";
import {ReactImageCarouselViewer} from "react-image-carousel-viewer";
import {StarIcon} from "@chakra-ui/icons";
import FrontTag from "../component/FrontTag";
import BackTag from "../component/BackTag";
import DeployTag from "../component/DeployTag";

function Ilsacheonri() {
    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const images = [
        {
            src: `${process.env.PUBLIC_URL}/images/ilsacheonri-login.gif`,
            description: "로그인 화면"
        },
        {
            src: `${process.env.PUBLIC_URL}/images/ilsacheonri-estimate.gif`,
            description: "판매 관리 : 견적 등록"
        },
        {
            src: `${process.env.PUBLIC_URL}/images/ilsacheonri-order.gif`,
            description: "판매 관리 : 주문 목록"
        },
        {
            src: `${process.env.PUBLIC_URL}/images/ilsacheonri-return.gif`,
            description: "판매 관리 : 반품/교환 신청"
        }
    ];

    return (
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
            <GridItem w='100%'>
                <HStack>
                    <Heading fontSize={24} fontWeight={800}>일사천리</Heading>
                    <Link fontSize={20} mb={0.5} href='https://github.com/HMDandelion' isExternal>
                        <FaGithub/>
                    </Link>
                </HStack>

                <Text fontWeight={600}>2024.05-2024.06</Text>
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
                <Text fontWeight={600}>제조업 업무 프로세스를 한 번에 관리하는 ERP 시스템</Text>

                <Heading mt={6} fontSize={20} fontWeight={800}>
                    Description.
                </Heading>

                <Box my={2}>
                    <Text>
                        견적/수주/발주, 생산계획, 작업지시서, 재고까지 관리할 수 있는 올인원 ERP를 목표로 개발했어요.
                    </Text>
                </Box>
                <HStack w='100%'>

                    <Flex wrap="wrap" w="100%">
                        {images.map((image, index) => (
                            <Box key={index} w="50%" p={1}> {/* Set width to 50% for two images per row */}
                                <Image
                                    src={image.src}
                                    alt={image.description}
                                    onClick={() => {
                                        setIndex(index);
                                        setIsOpen(true);
                                    }}
                                />
                            </Box>
                        ))}
                    </Flex>
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
                    Java, Spring Boot, MySQL, JPA, QueryDSL<br/>
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
                        <Heading mt={3} fontSize={14} fontWeight={600}>→ 코드 리뷰와 문서 작성 주도</Heading>
                        <Text mt={2}>
                            매일 아침 PR 코드 리뷰를 주도하여 진행 상황을 공유하고 피드백했어요.
                            merge 시의 이슈 발생이 크게 줄었으며, 프로젝트 회고 당시 팀원 전원이 가장 유익한 시간으로 꼽았어요.
                        </Text>
                        <Text mt={2}>
                            요구사항 분석과 단위 업무 정의서, 흐름도를 작성하고 ERD 설계를 주도했어요.
                            팀원들의 문제사항을 적극적으로 서포트하고 피드백했어요.
                        </Text>
                        <Heading mt={4} fontSize={14} fontWeight={600}>→ 리액트 공통 컴포넌트 작성</Heading>
                        <Text mt={2}>
                            생산성 향상을 위해 팀 전체에서 공통적으로 사용되는 컴포넌트와 레이아웃을 최우선으로 구현했어요.
                        </Text>
                    </Box>

                    <Box my={8}>
                        <HStack>
                            <StarIcon boxSize={2.5} mb={0.5}/>
                            <Text fontWeight={600}>권한 설계 및 인증/인가 구현</Text>
                            <FrontTag/>
                            <BackTag/>
                        </HStack>
                        <Text mt={1}>
                            전사가 사용하는 ERP 특성상 부서/직급별 권한을 세분화할 필요를 느꼈어요.
                        </Text>
                        <Heading mt={3} fontSize={14} fontWeight={600}>→ 다중 권한 설계</Heading>
                        <Text mt={2}>
                            관련 DB 테이블을 [권한]-[권한 부여]-[사원] 구조로 디자인하고,
                            Spring Security의 Authority를 활용해 한 명의 사용자가 권한을 다중으로 부여 받을 수 있도록 했어요.
                        </Text>
                        <Heading mt={4} fontSize={14} fontWeight={600}>→ JWT 사용자 인증</Heading>
                        <Text mt={2}>
                            액세스 토큰 탈취 위험을 감소시키기 위해 리프레시 토큰을 설정하고,
                            리프레시 토큰의 탈취 위험에는 RTR로 대응했어요.
                        </Text>
                    </Box>

                    <Box my={8}>
                        <HStack>
                            <StarIcon boxSize={2.5} mb={0.5}/>
                            <Text fontWeight={600}>거래처/견적/주문 관리 구현</Text>
                            <FrontTag/>
                            <BackTag/>
                        </HStack>
                        <Text mt={1}>
                            영업/판매 섹션에 해당하는 수주 거래처, 견적, 주문, 반품 관리를 담당하여 구현했어요.
                        </Text>
                        <Heading mt={3} fontSize={14} fontWeight={600}>→ 페이지네이션과 조건/필터 검색</Heading>
                        <Text mt={2}>
                            동적 쿼리 작성을 위해 여러 라이브러리의 특징을 검토하고, 결과적으로 Querydsl을 도입했어요.
                        </Text>
                        <Text mt={1}>
                            페이지네이션 구현 시, PageableExecutionUtils 클래스를 활용하여 불필요한 상황에서는
                            count 쿼리가 생략될 수 있도록 최적화했어요.
                        </Text>
                        <Heading mt={4} fontSize={14} fontWeight={600}>→ N:1 양방향 연관관계 수정 트러블슈팅</Heading>
                        <Text mt={2}>
                            [견적 상품]과 [견적]은 N:1 구조예요. 생명주기가 같고 역방향 조회가 존재하여 양방향 연관관계로 매핑했어요.
                        </Text>
                        <Text mt={1}>
                            수정 로직을 구현할 때,
                            수정된 상품이 기존 견적에 존재하는지와 무관하게 전부 delete 된 뒤 새로 insert 되는 문제가 발생했어요.
                            아래와 같이 로직을 개선하여, 쿼리가 의도대로 발생하도록 했어요.
                        </Text>
                        <Text fontSize={14} mt={1}>
                            ① 수정 이후 존재하지 않는 상품을 먼저 deleteAllInBatch로 삭제<br/>
                            ② 수정된 상품이 기존 상품에 존재하지 않는 경우 엔터티를 생성<br/>
                            ③ 존재하는 경우 기존 엔터티를 수정
                        </Text>
                    </Box>
                </Box>
            </GridItem>
        </Grid>
    );
}

export default Ilsacheonri;