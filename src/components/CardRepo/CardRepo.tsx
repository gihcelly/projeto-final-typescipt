import React from 'react'
import {GoFileSubmodule} from 'react-icons/go'
import {FiGithub} from 'react-icons/fi'
import {CardContainer} from './CardRepo.styled'

export const CardRepo: React.FC = () => {
  return (
        <CardContainer>
        <div className ='item-1'  >
            <GoFileSubmodule/>
            <FiGithub/> 
        </div>
        <div className='item-2'>
            <span>nome do repositório</span>
            <span>descrição-do-repositório ...</span>
        </div>
        <div className='item-3'>
            <p>liguagens</p>
        </div>
    </CardContainer>
    
  )
}
