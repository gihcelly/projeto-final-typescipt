import styled from 'styled-components'

export const InicioContainer = styled.div `
    display: flex;
    max-width:100vw;
    height:100vh;
    align-items: center;
    justify-content: center;
    background-color: #1C203B;
    
    .item {
        display: flex;
        width: 600px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align:center;

        h1 {
        color:#68E7E7;
        font-weight: 600;
        font-size: 48px;
        }

        p {
            font-size: 34px;
            color: #ffff;
            margin-bottom:30px;
        }

        .input-container {
            display: flex;
            gap:7px;
        }
        input{
            height: 45px;
            width: 304px;
            background: rgba(254, 253, 253, 0.1);
            border: none;
            border-radius: 5px;
            padding-left:10px;
        }

        input::placeholder {
            color: rgba(204, 204, 204, 0.8);
            font-family: 'Montserrat', sans-serif;
            font-size: 20px;
        }

        button{
            display: flex;
            align-items: center;
            justify-content:center;
            background-color: #68E7E7CC;
            width: 48px;
            height: 45px;
            border: none;
            border-radius:5px;
            color: #ffff;
            font-size:30px;
        }
    }   
`