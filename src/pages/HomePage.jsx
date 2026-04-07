import {Container, Heading, Text, VStack} from "@chakra-ui/react";
import {TriviaCategoryButton} from "../components/TriviaCategoryButton.jsx";
import triviaData from '../data/trivia.json' with { type: 'json' };

const HomePage = () => {
    return (
        <Container maxW={'xl'}>
            <Heading size={'4xl'} pt={10} textAlign={'center'}>Simple Trivia</Heading>
            <Text textAlign={'center'}>{triviaData.length.toLocaleString()} trivia questions and counting...</Text>
            <VStack pt={10}>
                <TriviaCategoryButton category={"Play All Trivia"} path={'all'}/>
                <Heading fontSize={'2xl'} mb={1} mt={5}>Categories</Heading>
                <TriviaCategoryButton color={'#edd9d9'} category={"General Knowledge"} path={'general-knowledge'}/>
                <TriviaCategoryButton color={'#ddeaee'} category={"Science"} path={'science'}/>
                <TriviaCategoryButton color={'#ddeee5'} category={"Geography"} path={'geography'}/>
                <TriviaCategoryButton color={'#EEEEDD'} category={"History"} path={'history'}/>
            </VStack>
        </Container>
    )
}

export { HomePage }