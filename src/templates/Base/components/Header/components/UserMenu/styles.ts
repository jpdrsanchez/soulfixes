import styled from 'styled-components'

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
`
export const MenuLogin = styled.li`
  position: relative;
  z-index: 990;

  & > a {
    position: relative;
    display: flex;
    align-items: center;
    gap: 9px;
    cursor: pointer;

    img {
      width: 45px;
      height: 45px;
      border: 3px solid var(--grayFour);
      object-fit: cover;
      object-position: center;
      border-radius: 50%;
    }
  }

  & > a > div {
    width: 45px;
    height: 45px;
    border: 3px solid var(--grayFour);
    border-radius: 50%;
    background: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--blackTwo);
    font-size: 20px;
    cursor: pointer;
  }

  & > a > span {
    font-size: 22px;
    color: var(--blackTwo);
  }

  &:hover {
    & > div:first-of-type {
      opacity: 1;
      transform: translateY(0);
      pointer-events: initial;
    }
  }
`

export const SubmenuLogin = styled.div`
  position: absolute;
  z-index: -1;
  width: max-content;
  padding-top: 78px;
  top: -10px;
  transform: translateY(-50px);
  right: 0;
  transition: opacity 0.5s, transform 0.3s;
  opacity: 0;
  pointer-events: none;

  ul {
    padding: 20px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
    border-radius: 0px 0px 15px 15px;
    background: var(--white);
  }

  button {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: var(--blackTwo);
    background: none;
    cursor: pointer;
    border: none;
    padding: 0;

    span {
      font-size: 22px;
      color: var(--blackTwo);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
