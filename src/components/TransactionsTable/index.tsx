import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";


export function TransactionTable() {

    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
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