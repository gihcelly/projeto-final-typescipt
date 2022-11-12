import styled from 'styled-components'

export const CardContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: white;
    width: 200px;
    height: 200px;
    background-color: rgba(254, 253, 253, 0.1);
    border-radius: 10px;
    padding: 20px 14px;
    gap:8px;

    .item-1 {
        display: flex;
        width:100%;
        justify-content: space-between;
        font-size:36px;
        
    }

    .item-2 {
        font-size: 12px;
        width: 100%;

        span {
            overflow: hidden; 
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            margin-bottom:20px;
            
        }
    }

    .item-3 {
        display: flex;
        flex-direction: column;
        align-items: center;
        width:100%;
        font-size: 12px;
        gap: 13px;   
    }
`
