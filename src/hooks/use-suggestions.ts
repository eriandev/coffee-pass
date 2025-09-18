import { useCallback, useState } from 'react'
import { AutoCompleteInputItem } from '@/components/auto-complete-input'

export function useSuggestions(
  data: { name: string; keys: string[] }[] & Record<string, unknown>[],
  { minQueryLength = 3 } = {},
) {
  const [suggestionsList, setSuggestionsList] = useState<AutoCompleteInputItem[] | null>(null)
  const [suggestionsLoading, setSuggestionsLoading] = useState(false)

  const updateSuggestions = useCallback(
    (q: string) => {
      const filterToken = q.toLocaleLowerCase().trim()

      if (typeof q !== 'string' || q.length < minQueryLength) {
        setSuggestionsList(null)
        return
      }

      setSuggestionsLoading(true)
      const suggestions = data
        .filter(({ keys }) => keys.some((k) => k.toLowerCase().includes(filterToken)))
        .map(({ name }) => ({
          title: name,
          id: name.toLocaleUpperCase().replaceAll(' ', ''),
        }))

      setSuggestionsList(suggestions)
      setSuggestionsLoading(false)
    },
    [data, minQueryLength],
  )

  const clearSuggestions = () => {
    setSuggestionsList(null)
  }

  return {
    suggestionsList,
    suggestionsLoading,
    clearSuggestions,
    updateSuggestions,
  }
}
