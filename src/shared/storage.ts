import { MMKV, Mode } from 'react-native-mmkv'

const mmkv = new MMKV({
  id: 'app.storage',
  mode: Mode.MULTI_PROCESS,
  readOnly: false,
})

export const storage = {
  getVisits: (coffeeShopId: string) => {
    const visitsString = mmkv.getString(`${coffeeShopId}.visits`)
    return visitsString ? (JSON.parse(visitsString) as string[]) : []
  },

  setVisit: (coffeeShopId: string, date: string) => {
    const visits = storage.getVisits(coffeeShopId)
    const visitsList = visits ? ([...visits, date] as string[]) : [date]
    mmkv.set(`${coffeeShopId}.visits`, JSON.stringify(visitsList))
  },
} as const
