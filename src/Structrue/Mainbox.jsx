import React from 'react'
import { Leftbox } from './Leftbox'
import { Rightbox } from './Rightbox'
import { Box ,Flex} from '@chakra-ui/react'

export const Mainbox = (prop) => {
  return (
    <Box  marginTop={4} h='130vh'>
      <Flex>
        <Leftbox name={prop.name} steps={prop.steps} game={prop.game} />
        <Rightbox answer={prop.answer}   codesnip={prop.codesnip}/>
      </Flex>
    </Box>
  )
}
