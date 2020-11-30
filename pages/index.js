import { Box } from '@chakra-ui/react'
import data from '../data'

function Home() {
  return (
    <>
      {data.map((i) => (
        <Box key={i.id} p='5' borderBottom='1px' borderBottomColor='gray.100'>
          {i.tweet}
        </Box>
      ))}
    </>
  )
}

Home.title = 'Home'
export default Home
