import { useCallback, useRef, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
  AutoCompleteInput,
  AutoCompleteInputController,
  type AutoCompleteInputItem,
} from '@/components/auto-complete-input'

import { coffeeShops } from '@/shared/data'
import { SafeArea } from '@/shared/components/safe-area'
import { useSuggestions } from '@/hooks/use-suggestions'
import type { CoffeeShop } from '@/shared/types'

export const HomeScreen = () => {
  const autocompleteController = useRef<AutoCompleteInputController>(null)
  const [selectedCoffeeShop, setSelectedCoffeeShop] = useState<CoffeeShop | null>(null)
  const { suggestionsList, suggestionsLoading, clearSuggestions, updateSuggestions } = useSuggestions(coffeeShops)

  const onSelectItem = useCallback(
    (item: AutoCompleteInputItem | null) => {
      const coffeeShop = coffeeShops.find(({ name }) => item?.id === name.toLocaleUpperCase().replaceAll(' ', ''))
      if (item == null || coffeeShop == null) return

      clearSuggestions()
      setSelectedCoffeeShop(coffeeShop)
    },
    [coffeeShops],
  )

  const onClear = useCallback(() => {
    autocompleteController.current?.clear()
    clearSuggestions()
  }, [autocompleteController.current])

  return (
    <SafeArea>
      <View style={styles.container}>
        <Text>selectedCoffeeShop {selectedCoffeeShop?.name}</Text>

        <AutoCompleteInput
          direction="up"
          dataSet={suggestionsList}
          loading={suggestionsLoading}
          controller={autocompleteController}
          containerStyle={styles.containerStyle}
          onChangeText={updateSuggestions}
          onSelectItem={onSelectItem}
          onClear={onClear}
        />
      </View>
    </SafeArea>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'relative',
  },
  containerStyle: {
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
})
