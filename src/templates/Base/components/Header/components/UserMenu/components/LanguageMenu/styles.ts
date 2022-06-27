import styled, { css } from 'styled-components'
import { LanguageMenuProps } from '.'

export const Wrapper = styled.div<Pick<LanguageMenuProps, 'open'>>`
  position: absolute;
  z-index: -1;
  width: max-content;
  padding-top: 78px;
  top: -10px;
  transform: translateX(-50%) translateY(-50px);
  left: 50%;
  transition: opacity 0.5s, transform 0.3s;
  opacity: 0;
  pointer-events: none;

  ${({ open }) =>
    open &&
    css`
      opacity: 1;
      pointer-events: initial;
      transform: translateX(-50%) translateY(0);
    `};

  ul {
    padding: 20px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
    border-radius: 0px 0px 15px 15px;
    background: var(--white);
    display: grid;
    gap: 14px;

    & > div {
      width: 283px;
      height: 2px;
      background: var(--grayTwo);
      margin-bottom: 16px;
    }
  }

  li {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  button {
    display: flex;
    align-items: center;
    color: var(--blackTwo);
    gap: 50px;
    background: none;
    padding: 0;
    border: none;
    outline: 0px;
    cursor: pointer;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
    }
  }

  label {
    input {
      display: none;

      &:checked {
        & + span {
          background: linear-gradient(251.43deg, #fde48c 3.15%, #f14784 97.02%);

          &::after {
            content: '';
            display: block;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 18px;
            height: 18px;
            background: linear-gradient(
              251.43deg,
              #fde48c 3.15%,
              #f14784 97.02%
            );
            border: 3px solid var(--white);
          }
        }
      }
    }

    span {
      width: 22px;
      height: 22px;
      display: block;
      background: var(--grayTwo);
      border-radius: 50%;
      position: relative;
      cursor: pointer;

      &::after {
        content: '';
        display: block;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 18px;
        height: 18px;
        background: var(--white);
        border: 3px solid var(--white);
      }
    }
  }

  li > span {
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
