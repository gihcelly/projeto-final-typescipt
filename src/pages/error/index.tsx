import { useEffect } from "react";
import {ErrorContainer} from './Error.styled'
import img from '../../assets/pato.png'

const  Error = () => {
    useEffect(() => {
        document.title = `Not Found`;
        });
    return(
        <>
            <ErrorContainer>
                <img src={img} alt="" />
                <div>
                    <h1>Erro 404</h1>
                    <h2>Desculpe a página que você buscou não está disponivel.</h2>
                    <p>Por favor, fique a vontade para buscar outras sessões no nosso site.</p>
                </div>
            </ErrorContainer>
        </>
    );
}

export default Error;