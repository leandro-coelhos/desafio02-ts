import { Center, ChakraProvider, Input } from "@chakra-ui/react"
import { ButtonComponent } from "./Button"
import { login } from "../services/login"

interface ICard {
  title: string,
  placeholderEmail?: string,
  placeholderPassword?: string,
  onClickFunction?: () => void
}

export const Card = ({ title, placeholderEmail, placeholderPassword, onClickFunction }: ICard) => {
  return(
    <ChakraProvider>
      <Center>
        <h1>{title}</h1>
      </Center>
      <Input placeholder={placeholderEmail} />
      <Input placeholder={placeholderPassword} />
      <Center>
        <ButtonComponent funcLogin={onClickFunction || login} />
      </Center>
    </ChakraProvider>
  )
}