import styled from "styled-components";

export const HomeMain = styled.main`
  * {
    font-family: Inter;
  }

  background: #fcfcfc;

  margin: 0;
  padding: 0;
  box-sizing: border-box;

  height: 100vh;
  width: 100vw;

  h1,
  h3 {
    color: #4f4f4f;
  }

  .example-container div {
    background: purple;
    border-radius: 30px;
    width: 150px;
    height: 150px;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100vw;
  }

  .resume {
    display: flex;
    align-items: center;
    justify-content: space-around;

    background: #ff9f1c;
    color: #4f4f4f;

    border-radius: 5px;

    text-decoration: none;

    font-weight: 700;

    padding: 10px;
    margin: 15px;

    width: 200px;

    transition: 0.2s;

    &:hover {
      background: #ffb347;
    }
  }

  .socials {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 80px;
  }

  .socials a {
    display: flex;
    align-items: center;
    justify-content: space-around;

    background: #54b689;
    color: #fcfcfc;

    border-radius: 5px;

    text-decoration: none;

    font-weight: 500;

    padding: 10px;
    margin: 15px;

    width: 150px;

    transition: 0.2s;

    &:hover {
      background: #70c29c;
    }
  }
`;
