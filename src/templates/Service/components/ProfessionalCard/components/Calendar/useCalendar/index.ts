import { isBefore, isEqual, subDays } from 'date-fns'
import * as React from 'react'
import { CalendarTileProperties } from 'react-calendar'

const useCalendar = (availableDates: string[]) => {
  const disablePastDates = React.useCallback(
    (params: CalendarTileProperties) => {
      if (params.view === 'month')
        return isBefore(params.date, subDays(new Date(), 1))

      return false
    },
    []
  )

  const styleAvailabeDates = React.useCallback(
    (params: CalendarTileProperties) => {
      if (params.view === 'month')
        if (availableDates.find(date => isEqual(new Date(date), params.date)))
          return 'active'

      return ''
    },
    [availableDates]
  )

  return {
    disablePastDates,
    styleAvailabeDates
  }
}

export default useCalendar
