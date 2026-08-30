import { Button } from '@chakra-ui/react'

interface ButtonComponentProps {
     funcLogin: () => void
}

export const ButtonComponent = ({ funcLogin }: ButtonComponentProps) => {
     return(
     <Button onClick={funcLogin} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
          Logar
     </Button>
     )
}