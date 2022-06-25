import { Flex } from '@chakra-ui/react'
import { FC } from 'react'

const SecondaryContent: FC = ({ children }) => {
  return (
    <Flex flex={0} direction="column" justifyContent="center">
      {children}
    </Flex>
  )
}

export default SecondaryContent
