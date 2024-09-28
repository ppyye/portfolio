import {Box, Heading, chakra, Text, Divider, ListItem, UnorderedList} from "@chakra-ui/react";

function Skills() {
    return (
        <Box>
            <Heading mb={10} fontSize={36} fontWeight={900}>
                Skills.
            </Heading>
            <UnorderedList pl={6} spacing={2}>
                <ListItem>
                    능숙한 기술 스택이 아니더라도 탐색하는 것을 주저하지 않습니다.
                </ListItem>
                <ListItem>
                    읽기 쉬운 코드를 작성하려고 합니다.
                </ListItem>
                <ListItem>
                    많은 커뮤니케이션과 의견 공유를 좋아합니다.
                </ListItem>
            </UnorderedList>
            <Box>
                <Heading mt={6} fontSize={24} fontWeight={800}>
                    Java & Spring Framework
                </Heading>
                <Text mt={2}>
                    Spring을 기반으로 Spring Boot, Spring Security, JSP, JPA 등 다양한 프레임워크를 활용하여 웹 애플리케이션을 구축할 수 있습니다.
                    MVC 패턴의 장점을 알고 구조를 이해하여 적용시킬 수 있으며, Spring MVC의 작동 방식에 대해 이해하고 있습니다.
                    Spring AI를 통해 Spring에서 지원하는 AI 모델을 Python 없이 서빙할 수 있습니다.

                    REST 성숙도 모델 2단계 수준의 REST API를 설계하여 프로젝트에 적용했고, Spring HATEOAS를 사용해본 적이 있습니다.
                </Text>
            </Box>

            <Divider my={7}/>

            <Box>
                <Heading mt={6} fontSize={24} fontWeight={800}>
                    JPA & Hibernate
                </Heading>
                <Text mt={2}>
                    Hibernate를 통해 자바 ORM 기술을 사용해보았으며, 콘솔로 쿼리를 확인해가며 N+1 문제를 비롯한 트러블을 슈팅한 경험이 있습니다.
                    연관관계를 맺어야 하는 상황에 대해 이해하고 있으며, Querydsl을 활용해 List를 필드로 가진 DTO 반환 등 복잡한 매핑과 쿼리를 처리해보았습니다.
                </Text>
            </Box>

            <Divider my={7}/>

            <Box>
                <Heading mt={6} fontSize={24} fontWeight={800}>
                    MySQL / MariaDB
                </Heading>
                <Text mt={2}>
                    높은 점유율을 가진 오픈 소스 RDBMS인 MySQL과 MySQL 5.5를 포크한 MariaDB를 프로젝트의 메인 DB로 사용했습니다.
                    적절한 수준의 정규화와 반정규화를 통해 데이터 중복은 최소화하되 작업 편의성을 고려한 데이터베이스를 설계할 수 있습니다.
                </Text>
            </Box>

            <Box>
                <Heading mt={6} fontSize={24} fontWeight={800}>
                    JavaScript & React
                </Heading>
                <Text mt={2}>
                    ES6+ 문법을 이해하고 있으며, 의도대로 DOM 객체에 접근해 활용할 수 있습니다. 비동기 프로그래밍, fetch와 axios를 이용한 API 통신 등의 구현 경험이 있습니다.
                    적절한 단위로 컴포넌트를 설계할 수 있고, Redux를 활용해 전역으로 상태를 관리하며 의도대로 상태를 업데이트할 수 있습니다.                </Text>
            </Box>

            <Box>
                <Heading mt={6} fontSize={24} fontWeight={800}>
                    Git & Github
                </Heading>
                <Text mt={2}>
                    협업과 버전 관리를 위해 활용할 수 있는 다양한 기능을 사용하고 있으며, 권한 문제부터 머지 충돌까지 발생한 깃 문제들을 해결해봤습니다.
                </Text>
            </Box>

            <Box>
                <Heading mt={6} fontSize={24} fontWeight={800}>
                    DevOps
                </Heading>
                <Text mt={2}>
                    EC2와 RDS 인스턴스 배포 경험이 있습니다. 비용 효율을 고려하여 인스턴스 스펙을 설정하고 보안 그룹을 관리해봤으며, ELB로 로드 밸런서를 적용할 수 있습니다.
                    Github Actions를 통한 CI/CD 구축 경험이 있으며 시크릿 키를 관리할 수 있습니다.
                </Text>
            </Box>

        </Box>
    );
}

export default Skills;