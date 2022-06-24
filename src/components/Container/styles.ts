import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 575px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1160px;
  }
`
