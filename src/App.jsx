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
                  bg={"gray.900"}
                  p={5}
                  maxW={400}
                  borderRadius={"md"}
              >
                  <VStack gap={2} alignItems={'flex-start'}>
                      <Text fontWeight={'semibold'} color={'blue.200'}>{triviaData[questionIndex].Question}</Text>
                      <Text>{triviaData[questionIndex].Answer}</Text>
                  </VStack>
              </Box>
          </GridItem>
          <GridItem mb={-100} display="flex" justifyContent="center" py={5}>
              <Button variant={'surface'} onClick={() => fetchQuestion()}>Next Question</Button>
          </GridItem>
          <GridItem/>
      </Grid>
  )
}

export default App
