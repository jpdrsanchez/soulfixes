import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'

import * as S from './styles'
import useCalendar from './useCalendar'

interface CalendarProps {
  availableDates: string[]
}

const Calendar = (props: CalendarProps) => {
  const calendar = useCalendar(props.availableDates)

  return (
    <S.Calendar
      locale="en-US"
      nextLabel={<IoChevronForwardOutline />}
      prevLabel={<IoChevronBackOutline />}
      tileDisabled={calendar.disablePastDates}
      tileClassName={calendar.styleAvailabeDates}
      minDetail="month"
    />
  )
}

export default Calendar
