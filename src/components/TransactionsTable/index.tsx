import { useEffect } from "react";
import { Container } from "./style";


export function TransactionTable() {

    useEffect(() => {
        fetch('http:localhost:3000/api/transactions')
            .then(response => response.json())
            .then(data => console.log(data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de websites</td>
                        <td className="deposit">120000</td>
                        <td>Desenvolvimento</td>
                        <td>20/09/2022</td>
                    </tr>
                    <tr>
                        <td>Alugel</td>
                        <td className="withdraw">-120</td>
                        <td>casa</td>
                        <td>20/09/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}