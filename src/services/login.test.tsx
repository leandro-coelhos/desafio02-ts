import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith('Bem vinda!')
    })

    it('Deve exibir um alert com a mensagem diferente de "oi camarada"', () => {
        login()
        expect(mockAlert).not.toHaveBeenCalledWith('Oi camarada!')
    })
})