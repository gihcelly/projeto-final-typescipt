import { useEffect } from "react";
import {IoMdArrowRoundForward} from 'react-icons/io'
import {InicioContainer} from './inicio.styled'

const  Inicio = () => {
    useEffect(() => {
        document.title = `Inicio`;
        });
    return(
        <>
            <InicioContainer>
                <div className="item">
                <h1>Gitstats</h1>
                <p>Digite seu nome de usuário e veja informações sobre seu perfil</p>
                <div className="input-container">
                    <input id="user" type="text" placeholder="username"/>
                    <button><IoMdArrowRoundForward/></button>
                </div>
                </div>
            </InicioContainer>
        </>
    );
}

export default Inicio;