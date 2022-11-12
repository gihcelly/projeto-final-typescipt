import { useEffect, useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { InicioContainer } from "./inicio.styled";
import { Link } from "react-router-dom";

const Inicio = () => {
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    document.title = `Inicio`;
  }, []);

  return (
    <>
      <InicioContainer>
        <div className="item">
          <h1>Gitstats</h1>
          <p>Digite seu nome de usuário e veja informações sobre seu perfil</p>
          <div className="input-container">
            <input
              id="user"
              type="text"
              placeholder="username"
              onChange={(event) => setUsername(event.target.value)}
            />
            <Link to={"/userId/" + username}>
              <button>
                <IoMdArrowRoundForward />
              </button>
            </Link>
          </div>
        </div>
      </InicioContainer>
    </>
  );
};

export default Inicio;
