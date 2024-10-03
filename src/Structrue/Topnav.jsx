
import { Box, Button, Flex, HStack ,Text} from "@chakra-ui/react";

 
export const Topnav = (prop) => (
    <Flex w="72vw" justifyContent="space-between" alignItems='center' h="50px" marginTop={3}>
       <Text fontSize="24px" as='b' color="#F7BB0E" >Python - {prop.title} </Text> 
        <HStack className="righttopnav" > 
            <Text marginRight={5} color="#F7BB0E"   >Level  -  <span>03</span></Text> 
        <a href= {prop.url}><Button padding={5} color='#00c8ff'border="1px solid #00c8ff" backgroundColor="transparent">Video &nbsp;<i class="fa-solid fa-podcast"></i></Button></a>
        </HStack>
        
    </Flex>
)
