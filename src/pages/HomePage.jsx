import {Box, Container, Flex, Heading, HStack, Text} from "@chakra-ui/react";
import {useNavigate} from "react-router";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <Container maxW={'xl'}>
            <Heading size={'3xl'} pt={10} textAlign={'center'}>Simple Trivia</Heading>
            <HStack pt={10}>
                <Box
                    backgroundColor={'#e5e3d9'}
                    h={50}
                    w={'100%'}
                    borderRadius={'sm'}
                    border={'1px solid lightgray'}
                    fontWeight={'semibold'}
                    onClick={() => navigate('/trivia')}
                    _hover={{cursor: 'pointer', backgroundColor: '#eae8e0'}}
                >
                    <Flex h={'100%'} justifyContent={'center'} alignItems={'center'}>
                        <Text fontSize={'lg'}>All Trivia</Text>
                    </Flex>
                </Box>
            </HStack>
        </Container>
    )
}

export { HomePage }