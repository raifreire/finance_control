import logoImg from '../../assets/logo.svg'
<<<<<<< HEAD

export function Header() {
    return (
        <header>
            <img src={logoImg} alt="logo finance control" />
            <button>Nova Transação</button>
        </header>
=======
import { Container, Content } from './style'


export function Header() {
    return (

        <Container>
            <Content>
                <img src={logoImg} alt="finance control" />
                <button type='button'>Nova transação</button>
            </Content>

        </Container>
>>>>>>> 031c2d8c6e01aba59754214fb256f3da565147cd
    )
}