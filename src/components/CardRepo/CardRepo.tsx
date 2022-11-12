import React from "react";
import { GoFileSubmodule } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import { CardContainer } from "./CardRepo.styled";

export const CardRepo: React.FC = (props: any) => {
  return (
    <CardContainer>
      <div className="item-1">
        <GoFileSubmodule />
        <FiGithub />
      </div>
      <div className="item-2">
        <span>{props.name}</span>
        <span>{props.description ? props.description : "Sem descrição"}</span>
      </div>
      <div className="item-3">
        <p>{props.language ? props.language : "Nenhuma linguagem"}</p>
      </div>
    </CardContainer>
  );
};
