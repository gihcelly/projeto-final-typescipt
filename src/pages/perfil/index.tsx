import { useEffect, useState } from "react";
import { PerfilContainer } from "./Perfil.styled";
import { SlNote } from "react-icons/sl";
import { FiMapPin } from "react-icons/fi";
import { MdPersonAddAlt } from "react-icons/md";
import { MdPersonAdd } from "react-icons/md";
import { CardRepo } from "../../components/CardRepo/CardRepo";
import { useParams } from "react-router-dom";
import GetRepos from "../../services/getRepos";
import Loading from "../../components/Loading/Loading";
import Error from "../error";

function Perfil() {
  const [erro, setErro] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(null);
  const { username } = useParams();

  useEffect(() => {
    document.title = `Perfil`;
    if (username) {
      GetRepos(username).then((response) => {
        if (response) {
          setData(response);
        } else setErro(true);

        //pra n ficar muito estranho
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
    }
  }, []);

  if (loading) {
    return <Loading />;
  } else if (erro) {
    return <Error />;
  } else {
    return (
      <>
        <PerfilContainer>
          <div className="box-1">
            <div className="box-item">
              <p>Nome</p>
              <h2>{data.profile.login}</h2>
              <div className="item-1">
                <span className="icon">
                  <SlNote />
                </span>
                <span>
                  {data.profile.bio ? data.profile.bio : "Sem descrição"}
                </span>
              </div>
              <div className="item-1">
                <span className="icon">
                  <FiMapPin />
                </span>
                <span>
                  {data.profile.location ? data.profile.location : "Indefinido"}
                </span>
              </div>
              <div className="item-2">
                <div className="item">
                  <span className="icon">
                    <MdPersonAddAlt />
                  </span>
                  <span>{data.profile.followers} Seguidores</span>
                </div>
                <div className="item">
                  <span className="icon">
                    <MdPersonAdd />
                  </span>
                  <span>{data.profile.following} Seguindo</span>
                </div>
              </div>
            </div>
            <div className="box-item">
              <img
                src={data.profile.avatar_url}
                alt="foto de perfil"
                style={{ borderRadius: 100 }}
              />
            </div>
          </div>
          <div className="box-2">
            <h2>Respositórios</h2>
            <div className="item">
              {data.repos.map((item: any) => (
                <CardRepo {...item} />
              ))}
            </div>
          </div>
        </PerfilContainer>
      </>
    );
  }
}
export default Perfil;
