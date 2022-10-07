import { Container, Content } from './style'
import logoImg from '../../assets/logo.svg'


interface HeaderProps {
    handleOpenTransactionModal: () => void;
}

export function Header({ handleOpenTransactionModal }: HeaderProps) {

    return (

        <Container>
            <Content>
                <img src={logoImg} alt="finance control" />
                <button type='button' onClick={handleOpenTransactionModal}>Nova transação</button>
            </Content>

        </Container>
    )
}