import {useEffect, useRef, useState} from 'react'
import './App.css'
import triviaData from './trivia.json' with { type: 'json' };
import {AbsoluteCenter, Box, Button, Grid, GridItem, HStack, VStack, Text, Separator} from "@chakra-ui/react";

function App() {
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
                  maxW={400}
                  border={"1px solid gray"}
                  borderRadius={"sm"}
              >
                  <VStack gap={2} alignItems={'flex-start'}>
                      <Box borderTopLeftRadius={'sm'} borderTopRightRadius={'sm'} p={3} backgroundColor={'gray.200'}>
                          <Text fontSize={'lg'} fontWeight={'semibold'}>{triviaData[questionIndex].Question}</Text>
                      </Box>
                      <Text fontSize={'lg'} pl={3} pr={3} pb={3}>{triviaData[questionIndex].Answer}</Text>
                  </VStack>
              </Box>
          </GridItem>
          <GridItem mb={-100} display="flex" justifyContent="center" py={5}>
              <HStack>
                  <Button fontSize={'md'} mb={10} variant={'surface'} onClick={() => fetchQuestion()}>Next Question</Button>
              </HStack>
          </GridItem>
          <GridItem/>
      </Grid>
  )
}

export default App
