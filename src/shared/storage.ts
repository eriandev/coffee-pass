import { createMMKV } from 'react-native-mmkv'

const mmkv = createMMKV({
  id: 'app.storage',
  mode: 'multi-process',
  readOnly: false,
})

const parseVisits = (visitsString: string): string[] => {
  try {
    const parsed = JSON.parse(visitsString)
    return Array.isArray(parsed) ? parsed.filter((date): date is string => typeof date === 'string') : []
  } catch {
    return []
  }
}

export const storage = {
  getVisits: (coffeeShopId: string) => {
    const visitsString = mmkv.getString(`${coffeeShopId}.visits`)
    return visitsString ? parseVisits(visitsString) : []
  },

  setVisit: (coffeeShopId: string, date: string) => {
    const visitsList = [...storage.getVisits(coffeeShopId), date]
    mmkv.set(`${coffeeShopId}.visits`, JSON.stringify(visitsList))
  },
} as const
