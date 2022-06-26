import { Flex } from '@chakra-ui/react'
import { FC } from 'react'

const SecondaryContent: FC = ({ children }) => {
  return (
    <Flex
      flex={0}
      direction="column"
      justifyContent="center"
      background="rgba(255, 255, 255, 0.8)"
      paddingRight="20px"
    >
      {children}
    </Flex>
  )
}

export default SecondaryContent
