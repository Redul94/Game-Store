import { Badge } from "@chakra-ui/react"

interface Props{
    score: number
}

const MetaScore = ({score}: Props) => {
    let color = score > 75 ? 'green' : score > 60 ? 'yellow' :  ' ';
  return (
   <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius={2}>
    {score}
   </Badge>
  )
}

export default MetaScore