import ReactCalendar from 'react-calendar'
import styled from 'styled-components'

export const Calendar = styled(ReactCalendar)`
  .react-calendar {
    position: relative;

    &__navigation {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      &__label {
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        letter-spacing: -0.02em;
        color: var(--blackTwo);
        background: none;
        padding: 0;
        outline: 0px;
        border: none;
        display: block;
        text-align: center;
        cursor: pointer;
      }

      &__arrow {
        border: none;
        background: none;
        font-size: 24px;
        display: flex;
        align-items: content;
        justify-content: center;
        padding: 0;
        cursor: pointer;
      }

      &__prev-button {
        color: var(--grayTwo);
      }

      &__next-button {
        color: var(--blackTwo);
      }

      &__prev2-button {
        display: none;
      }

      &__next2-button {
        display: none;
      }
    }

    &__month-view {
      &__weekdays {
        margin-bottom: 15px;

        &__weekday {
          text-align: center;

          abbr {
            text-decoration: none;
            font-weight: 400;
            font-size: 14px;
            line-height: 32px;
            letter-spacing: -0.02em;
            color: var(--blackTwo);
          }
        }
      }

      &__days {
        gap: 10px;
        justify-items: center;

        &__day {
          width: 40px !important;
          height: 40px !important;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          border: none;
          border-radius: 10px;
          background-color: var(--white);
          cursor: pointer;
          pointer-events: none;

          &:disabled {
            background: #e0e0e0;
          }

          &.active {
            &:not(:disabled) {
              box-shadow: 4px 5px 15px rgba(0, 0, 0, 0.15);
              pointer-events: initial;

              abbr {
                color: var(--blackTwo);
              }
            }
          }

          &--neighboringMonth {
            opacity: 0;
            cursor: initial;
            pointer-events: none;
          }

          abbr {
            color: var(--grayTwo);
            font-weight: 400;
            font-size: 16px;
            line-height: 32px;
            letter-spacing: -0.02em;
          }
        }
      }
    }
  }
`
