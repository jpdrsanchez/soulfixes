import styled, { css } from 'styled-components'

export type Variant = 'white' | 'purple' | 'orange'

export interface WrapperStyleProps {
  variant?: Variant
}

interface Bg {
  shadowBg: {
    sm: string
    md: string
  }
  bodyBg: {
    sm: string
    md: string
  }
}

const wrapperBackgrounds: Record<Variant, Bg> = {
  white: {
    shadowBg: {
      sm: 'linear-gradient(180deg, #e2b39d 0%, rgba(226, 179, 157, 0) 100%)',
      md: `url('/images/Home/main-detail-one.svg') no-repeat bottom 17px left 0, url('/images/Home/main-detail-two.svg') no-repeat bottom 45px right 0, linear-gradient(180deg, #e2b39d 0%, rgba(226, 179, 157, 0) 100%)`
    },
    bodyBg: {
      sm: 'none',
      md: `url('/images/Home/main-detail-three.svg') no-repeat bottom 773px left, url('/images/Home/main-detail-four.svg') no-repeat bottom 238px right, url('/images/Home/main-detail-five.svg') no-repeat bottom left`
    }
  },
  purple: {
    shadowBg: {
      sm: 'linear-gradient(180deg, #EBD7FF 0%, rgba(235, 215, 255, 0) 100%)',
      md: `url('/images/Services/main-detail-one.svg') no-repeat bottom 13px left 0, url('/images/Services/main-detail-two.svg') no-repeat bottom 45px right 0, linear-gradient(180deg, #EBD7FF 0%, rgba(235, 215, 255, 0) 100%)`
    },
    bodyBg: {
      sm: 'none',
      md: 'none'
    }
  },
  orange: {
    bodyBg: {
      sm: 'none',
      md: 'none'
    },
    shadowBg: {
      sm: 'linear-gradient(180deg, #FABB8A 0%, rgba(255, 120, 120, 0) 71.87%)',
      md: `url('/images/Services/orange-detail-one.svg') no-repeat bottom 13px left 0, url('/images/Services/orange-detail-two.svg') no-repeat bottom 45px right 0, linear-gradient(180deg, #FABB8A 0%, rgba(255, 120, 120, 0) 71.87%)`
    }
  }
}

export const Wrapper = styled.div<WrapperStyleProps>`
  position: relative;
  width: 100%;
  min-height: 1970px;

  ${({ variant = 'white' }) => css`
    background: ${wrapperBackgrounds[variant].bodyBg.sm};

    @media (min-width: 768px) {
      background: ${wrapperBackgrounds[variant].bodyBg.md};
    }

    & > div:first-child {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      height: 597px;
      background: ${wrapperBackgrounds[variant].shadowBg.sm};

      @media (min-width: 768px) {
        background: ${wrapperBackgrounds[variant].shadowBg.md};
      }
    }
  `};
`
