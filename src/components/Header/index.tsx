import { Container, Content } from './style'
import logoImg from '../../assets/logo.svg'
import { useState } from 'react'
import Modal from 'react-modal'


export function Header() {

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }
    function handleCloseTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (

        <Container>
            <Content>
                <img src={logoImg} alt="finance control" />
                <button type='button' onClick={handleOpenTransactionModal}>Nova transação</button>

                <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseTransactionModal}>
                    <h2>Cadastrar transação</h2>
                </Modal>
            </Content>

        </Container>
    )
}