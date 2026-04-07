import {useEffect, useRef, useState} from 'react'
import '../App.css'
import triviaData from '../data/trivia.json' with { type: 'json' };
import {Box, Button, Grid, GridItem, HStack, VStack, Text} from "@chakra-ui/react";

const TriviaPage = () => {
    const [questionIndex, setQuestionIndex] = useState(null);

    const unseenQuestionIndexes = useRef(triviaData.map((_, index) => index));
    const seenQuestionIndexes = useRef([]);

    const fetchQuestion = () => {
        if (unseenQuestionIndexes.current.length === 0) {
            console.log("All questions have been seen.");
            unseenQuestionIndexes.current = triviaData.map((_, index) => index);
            seenQuestionIndexes.current = [];
        }

        const randomIndexInArray = Math.floor(Math.random() * unseenQuestionIndexes.current.length);
        const [selectedTriviaIndex] = unseenQuestionIndexes.current.splice(randomIndexInArray, 1);
        seenQuestionIndexes.current.push(selectedTriviaIndex);

        setQuestionIndex(selectedTriviaIndex);

        console.log("Seen:", seenQuestionIndexes.current);
        console.log("Remaining:", unseenQuestionIndexes.current.length);
    };

    useEffect(() => {
        fetchQuestion();
    },[])

    return (
        questionIndex &&
        <Grid h="100vh" templateRows="1fr auto 1fr">
            <GridItem display="flex" alignItems="flex-end" justifyContent="center">
                <Box
                    ml={5}
                    mr={5}
                    maxW={500}
                    border={"1px solid lightgray"}
                    borderRadius={"sm"}
                >
                    <VStack gap={2} alignItems={'flex-start'}>
                        <Box borderTopLeftRadius={'sm'} borderTopRightRadius={'sm'} p={3} backgroundColor={'#e5e3d9'}>
                            <Text fontSize={'xl'} fontWeight={'bold'}>{triviaData[questionIndex].Question}</Text>
                        </Box>
                        <Text fontSize={'xl'} pl={3} pt={1} pr={3} pb={3}>{triviaData[questionIndex].Answer}</Text>
                    </VStack>
                </Box>
            </GridItem>
            <GridItem mb={-100} display="flex" justifyContent="center" py={5}>
                <HStack>
                    <Button w={52} _hover={{backgroundColor: 'eae8e0'}} fontSize={'lg'} p={5} backgroundColor={'#e5e3d9'} mb={10} variant={'surface'} onClick={() => fetchQuestion()}>Next Question</Button>
                </HStack>
            </GridItem>
            <GridItem/>
        </Grid>
    )
}

export { TriviaPage }
