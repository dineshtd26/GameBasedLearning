import React from 'react';
import { Game } from '../Game/Game';
import { Box, Heading,Text,list } from '@chakra-ui/react';

export const Leftbox = (prop) => {
  return (
    <Box>
      <Box>
        <Game game={prop.game}/>
      </Box>
      <Box p={10} bg="#130D1E" w='97%' marginTop={5} overflow='scroll' borderRadius={3} overflowx='hidden' h='500px'  >
        <Heading fontSize="2xl">Instructions :</Heading>
          {prop.steps.map((steps,index)=>(
            <Text key={index} marginY={2} px={5} py={2} className="hint" >{steps}</Text>
          ))} 
      </Box>
    </Box>
  )
}




