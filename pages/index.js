import React from 'react'
import {
  ThemeProvider,
  theme,
  CSSReset,
  Box,
  Flex,
  IconButton,
  useColorMode,
  Heading,
  Text,
  Image,
  Button
} from '@chakra-ui/react'

import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <CSSReset />
        <LoginArea />
    </ThemeProvider>
  )
}

const LoginArea = () => {
  return (
    <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
      <Box 
        borderWidth={1}
        px={4}
        width='full'
        maxWidth='500px'
        borderRadius={4}
        textAlign='center'
        boxShadow='lg'
      >
        <ThemeSelector />
        <Box p={4}>
          <LoginHeader />
          <LoginForm />
        </Box>
      </Box>
    </Flex>
  )
}

const ThemeSelector = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box textAlign='right' py={4}>
      <IconButton
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        variant='ghost'
      />
    </Box>
  )
}

const LoginHeader = () => {
  return (
    <Box textAlign='center'>
        <Image src="http://enjoycoffee.vn/wp-content/uploads/2020/01/coffee.2-810x524-1.jpg" alt="Coffe SuppyChain" />
      <Heading>Sign In to Your Account</Heading>
      <Text>
        Something i will write it later !!
      </Text>
    </Box>
  )
}

const LoginForm = () => {
  return (
    <Box my={8} textAlign='left'>
      <form>
        <Button colorScheme="purple"  width='full' mt={4}>Get MetaMask</Button>
        <Button colorScheme="messenger"  width='full' mt={4}>Log In</Button>
      </form>
    </Box>
  )
}

export default App