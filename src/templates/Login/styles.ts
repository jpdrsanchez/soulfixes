import styled from 'styled-components'

export const Login = styled.main`
  padding-top: 120px;
  padding-bottom: 120px;
`

export const LoginWrapper = styled.div`
  max-width: 764px;
  margin: 0 auto;
  background: var(--white);
  padding: 60px 30px 90px;
  border-radius: 30px;

  h1 {
    color: var(--blackTwo);
    font-family: var(--title);
    font-weight: 700;
    font-size: 42px;
    line-height: 89.5%;
    text-align: center;
    margin-bottom: 30px;
  }
`

export const LoginLogo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 54px;
`

export const LoginForm = styled.form`
  max-width: 565px;
  margin: 0 auto;

  input[type='text'],
  input[type='password'] {
    padding: 7px 21px 6px;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: var(--blackTwo);
    display: block;
    width: 100%;
    outline: 0px;
    background: linear-gradient(var(--white), var(--white)) padding-box,
      linear-gradient(251.43deg, #fde48c 3.15%, #f14784 97.02%) border-box;
    border-radius: 60px;
    border: 2px solid var(--grayTwo);

    &:focus {
      border-color: transparent;
    }

    &.active {
      border-color: transparent;
    }

    &:disabled {
      pointer-events: none;
      cursor: not-allowed;
    }

    &::placeholder {
      color: var(--grayOne);
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    gap: 10px 30px;
    flex-wrap: wrap;

    label {
      display: flex;
      align-items: center;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      letter-spacing: -0.02em;
      color: var(--grayOne);
      gap: 9px;
      cursor: pointer;

      input {
        display: none;

        &:checked + span {
          border-width: 0px;
          background: linear-gradient(251.43deg, #c28cde 3.15%, #884acc 97.02%);
        }
      }

      span {
        border: 2px solid var(--grayTwo);
        border-radius: 5px;
        width: 26px;
        height: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--white);
        font-size: 22px;
      }
    }

    a {
      background: linear-gradient(251.43deg, #c28cde 3.15%, #884acc 97.02%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 700;
      font-size: 16px;
      line-height: 32px;
      letter-spacing: -0.02em;
    }
  }

  button {
    cursor: pointer;
    background: linear-gradient(251.43deg, #fde48c 3.15%, #f14784 97.02%);
    border-radius: 60px;
    display: block;
    width: 100%;
    padding: 10px;
    border: none;
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: -0.02em;
    line-height: 32px;
    color: var(--white);
  }
`

export const LoginRegister = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: var(--blackOne);
  margin-top: 28px;

  a {
    background: linear-gradient(251.43deg, #c28cde 3.15%, #884acc 97.02%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
  }
`

export const InputError = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  min-height: 24px;
  background: linear-gradient(251.43deg, #482020 3.15%, #a57373 97.02%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`
