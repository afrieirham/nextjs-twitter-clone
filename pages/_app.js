import Link from 'next/link'
import { Box, ChakraProvider, Avatar, Flex, Icon, Text } from '@chakra-ui/react'
import {
  Home as HomeIcon,
  Search as SearchIcon,
  Bell as BellIcon,
  Mail as MailIcon,
} from 'react-feather'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Flex h={'100vh'} flexDirection='column'>
        <Flex p='3' borderBottom='1px' borderBottomColor='gray.300'>
          <Avatar w='30px' h='30px' mr='5' src='https://bit.ly/broken-link' />
          <Text flexGrow='1' fontSize='lg' fontWeight='900'>
            Home
          </Text>
        </Flex>
        <Box flexGrow='1' overflow='scroll'>
          <Component {...pageProps} />
        </Box>
        <Flex py='3' px='10' borderTop='1px' borderTopColor='gray.300' justify='space-between'>
          <Link href='/'>
            <Icon focusable color='gray.500' w='6' h='6' as={HomeIcon} />
          </Link>
          <Link href='/search'>
            <Icon focusable color='gray.500' w='6' h='6' as={SearchIcon} />
          </Link>
          <Link href='/notification'>
            <Icon focusable color='gray.500' w='6' h='6' as={BellIcon} />
          </Link>
          <Link href='/message'>
            <Icon focusable color='gray.500' w='6' h='6' as={MailIcon} />
          </Link>
        </Flex>
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp
