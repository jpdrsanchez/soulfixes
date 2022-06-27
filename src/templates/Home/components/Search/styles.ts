import styled from 'styled-components'

export const Search = styled.section`
  padding-top: 92px;

  h2 {
    color: var(--blackTwo);
    font-family: var(--title);
    font-weight: 700;
    font-size: 42px;
    line-height: 52px;
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    color: var(--blackTwo);
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: -0.02em;
    margin-bottom: 30px;
    text-align: center;
  }

  form {
    width: 100%;
    max-width: 565px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    position: relative;

    & > span {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 900;
      left: 18px;
    }
  }

  input {
    display: block;
    width: 100%;
    border: none;
    outline: 0px;
    padding: 8px 18px 7px 48px;
    background: linear-gradient(var(--white), var(--white)) padding-box,
      linear-gradient(251.43deg, #fde48c 3.15%, #f14784 97.02%) border-box;
    border-radius: 60px;
    border: 2px solid transparent;
    position: relative;
    z-index: 800;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: var(--blackTwo);

    &::placeholder {
      color: var(--grayOne);
    }
  }
`
