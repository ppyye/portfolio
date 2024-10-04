import {Box, Heading, chakra, Text, Divider} from "@chakra-ui/react";
import EduTag from "./component/EduTag";
import CertificateTag from "./component/CertificateTag";

function Experience() {
    return (
        <Box>
            <Heading mb={10} fontSize={36} fontWeight={900}>
                And So On.
            </Heading>

            <Box>
                <Heading mt={6} fontSize={24} fontWeight={800}>
                    <EduTag/>
                    AI-X 인공지능 부트캠프
                </Heading>
                <Text mt={1} fontWeight={600}>2024.07-2024.08</Text>
                <Text mt={2}>
                    5기 수료<br/>
                    인공지능 활용에 관심 있는 팀원들과 만나 프로젝트를 진행했습니다.
                </Text>
            </Box>
            <Divider my={7}/>

            <Box>
                <Heading mt={6} fontSize={24} fontWeight={800}>
                    <EduTag/>
                    풀스택 웹 개발 교육
                </Heading>
                <Text mt={1} fontWeight={600}>2023.12-2024.06</Text>
                <Text mt={2}>
                    Spring Boot, React, AWS 웹 개발 교육을 수료했습니다.<br/>
                    우수상 수상
                </Text>
            </Box>
            <Divider my={7}/>

            <Box>
                <Heading mt={6} fontSize={24} fontWeight={800}>
                    <EduTag/>
                    동국대학교, 서울
                </Heading>
                <Text mt={1} fontWeight={600}>
                    멀티미디어 공학과 졸업
                    <chakra.span fontSize={14}> : 학점 3.83 / 4.5</chakra.span>
                </Text>
                <Text fontWeight={600}>2018.03-2023.02</Text>
                <Text mt={2}>
                    학기 우등생 2회, SW특성화 성적 장학 1회 수상<br/>

                </Text>
            </Box>

            <Divider my={10}/>

            <Box>
                <Heading mt={6} fontSize={20} fontWeight={800}>
                    <CertificateTag/>
                    정보처리기사
                </Heading>
                <Text mt={1} fontWeight={600}>2023.11.15 / 한국산업인력공단</Text>
            </Box>
            <Box mt={9}>
                <Heading mt={6} fontSize={20} fontWeight={800}>
                    <CertificateTag/>
                    SQL개발자
                </Heading>
                <Text mt={1} fontWeight={600}>2024.06.21 / 한국데이터산업진흥원</Text>
            </Box>
        </Box>
    );
}

export default Experience;