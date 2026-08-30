import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { login } from './services/login';
import { Card } from './components/Card';

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Card
            title='Login'
            placeholderEmail='Digite seu email'
            placeholderPassword='Digite sua senha'
            onClickFunction={login}
          />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
