import { Avatar, Box, chakra, Flex, Text } from '@chakra-ui/react'
import { createTweet } from '../data'

function Home() {
  return (
    <>
      {createTweet(90).map((i) => (
        <Flex key={i.id} p='5' borderBottom='1px' borderBottomColor='gray.100'>
          <Box mr='5'>
            <Avatar src={i.avater} />
          </Box>
          <Flex flexDirection='column'>
            <Box>
              <chakra.span fontSize='xs'>
                <Flex>
                  <chakra.span isTruncated noOfLines='1' mr='1'>
                    <chakra.span fontWeight='bold'>{i.name}</chakra.span>{' '}
                    <chakra.span color='gray.500'>@{i.username}</chakra.span>
                  </chakra.span>
                  <chakra.span flexShrink='0' color='gray.500'>
                    • 58m
                  </chakra.span>
                </Flex>
              </chakra.span>
            </Box>
            <Box>
              <Text fontSize='sm'>{i.tweet}</Text>
            </Box>
          </Flex>
        </Flex>
      ))}
    </>
  )
}

Home.title = 'Home'
export default Home
