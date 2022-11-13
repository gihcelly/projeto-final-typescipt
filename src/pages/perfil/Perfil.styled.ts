import styled from "styled-components";

export const BoxContainerBack = styled.div`
  position: absolute;
  left: -75px;
  top: -75px;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const PerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  padding-top: 120px;
  background-color: #1c203b;
  gap: 100px;

  .box-1 {
    width: 700px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    position: relative;

    h2 {
      color: #68e7e7;
      font-size: 48px;
      margin-bottom: 20px;
    }
    p {
      color: #ffff;
      font-size: 14px;
    }

    img {
      width: 141px;
      height: 141px;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
    }

    .item-1 {
      display: flex;
      gap: 7px;
      font-size: 14px;
      color: #ffff;
      margin-bottom: 21px;
    }

    .item-2 {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #ffff;
      gap: 20px;

      .item {
        display: flex;
        align-items: center;
        gap: 7px;
      }
    }
  }

  .box-2 {
    display: flex;
    align-items: center;
    flex-direction: column;

    h2 {
      color: #68e7e7;
      font-size: 48px;
      margin-bottom: 30px;
    }

    .item {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: repeat(4, 1fr);
      gap: 22px;
    }
  }
`;
