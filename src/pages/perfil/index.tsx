import { useEffect } from "react";
import { PerfilContainer } from './Perfil.styled'
import { SlNote } from 'react-icons/sl'
import { FiMapPin } from 'react-icons/fi'
import { MdPersonAddAlt } from 'react-icons/md'
import { MdPersonAdd } from 'react-icons/md'
import foto from '../../assets/foto.png'
import { CardRepo } from '../../components/CardRepo/CardRepo'

function Perfil() {

    useEffect(() => {
        document.title = `Perfil`;
    });

    return (
        <>
            <PerfilContainer>
                <div className="box-1">
                    <div className="box-item">
                        <p>Nome</p>
                        <h2>Nome do usuário</h2>
                        <div className="item-1">
                            <span className="icon"><SlNote /></span>
                            <span>Descrição do perfil</span>
                        </div>
                        <div className="item-1">
                            <span className="icon"><FiMapPin /></span>
                            <span>Localização</span>
                        </div>
                        <div className="item-2">
                            <div className="item">
                                <span className="icon"><MdPersonAddAlt /></span>
                                <span>XX Seguidores</span>
                            </div>
                            <div className="item">
                                <span className="icon"><MdPersonAdd /></span>
                                <span>XX Seguindo</span>
                            </div>
                        </div>
                    </div>
                    <div className="box-item">
                        <img src={foto} alt="" />
                    </div>
                </div>

                <div className="box-2">
                    <h2>Respositórios</h2>
                    <div className="item">
                        <CardRepo />
                        <CardRepo />
                        <CardRepo />
                        <CardRepo />
                        <CardRepo />
                        <CardRepo />
                        <CardRepo />
                        <CardRepo />
                    </div>
                </div>
            </PerfilContainer>
        </>
    );
}
export default Perfil;


