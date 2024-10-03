
import { Box } from "@chakra-ui/react"
import { Mainbox } from "./Mainbox"
import { Topnav } from "./Topnav"


export const Maincom = (prop) => {
  return (
   
    <Box className="Main-box" w="80vw" >
      <Topnav title={prop.title} url={prop.url} />
      <Mainbox name={prop.name} steps={prop.steps} answer={prop.answer}  codesnip={prop.codesnip} game={prop.game}  />
    </Box>
  )
}
