import { Container } from "./style";

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>entradas</p>
                    <img src={incomeImg} alt="entradas" />
                </header>
                <strong>R$ 1000</strong>
            </div>
            <div>
                <header>
                    <p>saidas</p>
                    <img src={outcomeImg} alt="saidas" />
                </header>
                <strong>R$ 1000</strong>
            </div>
            <div className="highligth-background">
                <header>
                    <p>total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>R$ 1000</strong>
            </div>
        </Container>
    )
}