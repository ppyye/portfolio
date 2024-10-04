import {Box, Heading, chakra, Text, Divider, ListItem, UnorderedList, ListIcon, List} from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons";

function Skills() {
    return (
        <Box>
            <Box mb={10}>
                <Heading mb={3} fontSize={36} fontWeight={900}>
                    Skills.
                </Heading>
                <List pl={6} spacing={2}>
                    <ListItem>
                        <ListIcon fontSize={10} verticalAlign='baseline' as={StarIcon}/>
                        익숙한 기술이 아니더라도 탐색하는 것을 주저하지 않습니다.
                    </ListItem>
                    <ListItem>
                        <ListIcon fontSize={10} as={StarIcon} verticalAlign='baseline'/>
                        읽기 쉽고, 간결하게 작동하는 것처럼 보이는 코드를 작성하려고 합니다.
                    </ListItem>
                    <ListItem>
                        <ListIcon fontSize={10} as={StarIcon} verticalAlign='baseline'/>
                        커뮤니케이션을 통해 활발하게 의견이 오가는 환경을 좋아합니다.
                    </ListItem>
                </List>
            </Box>

            <Box mb={10}>
                <Heading  fontSize={24} fontWeight={800}>
                    Java & Spring Framework
                </Heading>
                <UnorderedList mt={3} pl={6} spacing={2}>
                    <ListItem>
                        Spring Boot, Spring Security, JSP, JPA 등 다양한 프레임워크를 활용하여 웹 애플리케이션을 구축할 수 있습니다.
                    </ListItem>
                    <ListItem>
                        MVC 패턴으로 관심사를 분리한 구조를 설계하는 것을 좋아합니다.
                    </ListItem>
                    <ListItem>
                        Spring AI를 통해 Spring에서 지원하는 AI 모델을 Python 없이 서빙할 수 있습니다.
                    </ListItem>
                    <ListItem>
                        일반적으로 Level 2 수준의 REST API를 설계합니다. Spring HATEOAS를 사용해 Level 3 수준의 REST API를 설계한 경험이 있습니다.
                    </ListItem>
                </UnorderedList>
            </Box>

            <Box mb={10}>
                <Heading mt={6} fontSize={24} fontWeight={800}>
                    JPA
                </Heading>
                <UnorderedList mt={3} pl={6} spacing={2}>
                    <ListItem>
                        Hibernate를 통해 자바 ORM 기술을 사용해보았으며, 적절한 연관관계를 맺는 것을 중요시합니다.
                    </ListItem>
                    <ListItem>
                        콘솔로 쿼리를 확인해가며 N+1 문제를 비롯한 트러블을 슈팅하고,
                        Querydsl을 활용해 List를 필드로 가진 DTO 반환 등 복잡한 매핑과 쿼리를 처리해보았습니다.
                    </ListItem>
                </UnorderedList>
            </Box>

            <Box mb={10}>
                <Heading mt={6} fontSize={24} fontWeight={800}>
                    RDBMS
                </Heading>
                <UnorderedList mt={3} pl={6} spacing={2}>
                    <ListItem>
                        높은 점유율을 가진 오픈 소스 <chakra.span fontWeight={700}>MySQL</chakra.span>과
                        MySQL 5.5를 포크한 <chakra.span fontWeight={700}>MariaDB</chakra.span>를 프로젝트의 메인 DB로 사용했습니다.
                    </ListItem>
                    <ListItem>
                        적절한 수준의 정규화와 반정규화를 통해 데이터 중복은 최소화하되 작업 편의성을 고려한 데이터베이스를 설계할 수 있습니다.
                    </ListItem>
                </UnorderedList>
            </Box>

            <Box mb={10}>
                <Heading mt={6} fontSize={24} fontWeight={800}>
                    JavaScript & React
                </Heading>
                <UnorderedList mt={3} pl={6} spacing={2}>
                    <ListItem>
                        비동기 프로그래밍, fetch나 axios를 이용한 API 통신 등의 구현 경험이 있습니다.
                    </ListItem>
                    <ListItem>
                        Redux를 활용해 전역으로 상태를 관리하며 의도대로 상태를 업데이트할 수 있습니다.
                    </ListItem>
                </UnorderedList>
            </Box>

            <Box mb={10}>
                <Heading mt={6} fontSize={24} fontWeight={800}>
                    Git & Github
                </Heading>
                <UnorderedList mt={3} pl={6} spacing={2}>
                    <ListItem>
                        협업과 버전 관리를 위해 활용할 수 있는 다양한 기능을 사용하고 있으며, 권한 문제부터 머지 충돌까지 발생한 깃 문제들을 해결해봤습니다.
                    </ListItem>
                    <ListItem>
                        Redux를 활용해 전역으로 상태를 관리하며 의도대로 상태를 업데이트할 수 있습니다.
                    </ListItem>
                </UnorderedList>
            </Box>

            <Box>
                <Heading mt={6} fontSize={24} fontWeight={800}>
                    DevOps
                </Heading>
                <UnorderedList mt={3} pl={6} spacing={2}>
                    <ListItem>
                        EC2와 RDS 인스턴스 배포 경험이 있습니다. 비용 효율을 고려하여 인스턴스 스펙을 설정하고 보안 그룹을 관리해봤으며, ELB로 로드 밸런서를 적용할 수 있습니다.
                    </ListItem>
                    <ListItem>
                        Github Actions를 통해 CI/CD 파이프라인을 구축하며, 필요에 따라 Self-hosted runner로 빌드를 수행합니다.
                    </ListItem>
                    <ListItem>
                        Docker를 이용한 컨테이너화로 개발 환경을 표준화하는 것을 좋아합니다.
                    </ListItem>
                </UnorderedList>
            </Box>

        </Box>
    );
}

export default Skills;