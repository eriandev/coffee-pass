import { useCallback, useState } from 'react'

import { coffeeShops } from '@/shared/data'
import type { CoffeeShop } from '@/shared/types'

export function useSuggestions({ minQueryLength = 3 } = {}) {
  const [suggestionsList, setSuggestionsList] = useState<CoffeeShop[]>([])
  const [suggestionsLoading, setSuggestionsLoading] = useState(false)

  const updateSuggestions = useCallback(
    (q: string) => {
      const filterToken = q.toLocaleLowerCase().trim()

      if (typeof q !== 'string' || q.length < minQueryLength) {
        setSuggestionsList([])
        return
      }

      setSuggestionsLoading(true)
      const suggestions = coffeeShops.filter(({ keys }) =>
        keys.some((k) => k.toLocaleLowerCase().includes(filterToken)),
      )

      setSuggestionsList(suggestions)
      setSuggestionsLoading(false)
    },
    [minQueryLength],
  )

  const clearSuggestions = () => {
    setSuggestionsList([])
  }

  return {
    suggestionsList,
    suggestionsLoading,
    clearSuggestions,
    updateSuggestions,
  }
}
