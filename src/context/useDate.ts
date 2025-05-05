import { create } from 'zustand'
import { DateRange } from 'react-day-picker'
import { addDays } from 'date-fns'

interface DateState {
  dateValue: DateRange | undefined
  setDateValue: (value: DateRange | undefined) => void
}

const useDate = create<DateState>((set) => ({
  dateValue: {
    from: new Date(),
    to: addDays(new Date(), 7)
  },
  setDateValue: (value) => set({ dateValue: value }),
}))

export default useDate