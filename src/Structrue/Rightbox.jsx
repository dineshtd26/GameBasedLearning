import React from 'react'
import CodeEditor from '../components/CodeEditor'
import { Box } from '@chakra-ui/react'

export const Rightbox = (prop) => {
  return (
    <Box>
        <Box>
            <CodeEditor answer={prop.answer}   codesnip={prop.codesnip}/>
        </Box>
    </Box>
  )
}
