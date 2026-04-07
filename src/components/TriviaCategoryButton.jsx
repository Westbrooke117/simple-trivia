import {useNavigate} from "react-router";
import {Box, Text, VStack} from "@chakra-ui/react";
import triviaData from '../data/trivia.json' with { type: 'json' };

const TriviaCategoryButton = ({category, path, color}) => {
    const navigate = useNavigate()

    console.log(color)
    const isCategoryAll = path === 'all'
    const questionCount = !isCategoryAll ? triviaData.filter(trivia => trivia.Category === category).length : triviaData.length;

    return (
        <Box
            backgroundColor={color === undefined ? '#e5e3d9' : color}
            h={isCategoryAll ? 105 : 55}
            w={'100%'}
            borderRadius={'sm'}
            border={'1px solid lightgray'}
            fontWeight={'semibold'}
            onClick={() => navigate(`/trivia/${path}`)}
            _hover={{cursor: 'pointer'}}
        >
            <VStack gap={0} h={'100%'} justifyContent={'center'} alignItems={'center'}>
                <Text fontSize={'lg'}>{category}</Text>
                <Text fontSize={'xs'} color={'gray.600'}>{questionCount.toLocaleString()} questions</Text>
            </VStack>
        </Box>
    )
}

export {TriviaCategoryButton}