import Link from '../components/Link'
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
            {Component.title}
          </Text>
        </Flex>
        <Box flexGrow='1' overflow='scroll'>
          <Component {...pageProps} />
        </Box>
        <Flex py='3' px='10' borderTop='1px' borderTopColor='gray.300' justify='space-between'>
          <Link href='/'>
            {(isActive) => (
              <Icon
                w='6'
                h='6'
                focusable
                as={HomeIcon}
                color={isActive ? 'blue.500' : 'gray.500'}
              />
            )}
          </Link>
          <Link href='/search'>
            {(isActive) => (
              <Icon
                w='6'
                h='6'
                focusable
                as={SearchIcon}
                color={isActive ? 'blue.500' : 'gray.500'}
              />
            )}
          </Link>
          <Link href='/notification'>
            {(isActive) => (
              <Icon
                w='6'
                h='6'
                focusable
                as={BellIcon}
                color={isActive ? 'blue.500' : 'gray.500'}
              />
            )}
          </Link>
          <Link href='/message'>
            {(isActive) => (
              <Icon
                w='6'
                h='6'
                focusable
                as={MailIcon}
                color={isActive ? 'blue.500' : 'gray.500'}
              />
            )}
          </Link>
        </Flex>
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp
