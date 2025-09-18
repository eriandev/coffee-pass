import { useCallback, useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  AutoCompleteInput,
  AutoCompleteInputController,
  type AutoCompleteInputItem,
} from '@/components/auto-complete-input'

import { coffeeShops } from '@/shared/data'
import { useNavigate } from '@/navigation/navigate'
import { SafeArea } from '@/shared/components/safe-area'
import { useSuggestions } from '@/hooks/use-suggestions'

export const HomeScreen = () => {
  const navigation = useNavigate()
  const autocompleteController = useRef<AutoCompleteInputController>(null)
  const { suggestionsList, suggestionsLoading, clearSuggestions, updateSuggestions } = useSuggestions(coffeeShops)

  const onSelectItem = useCallback(
    (item: AutoCompleteInputItem | null) => {
      const coffeeShop = coffeeShops.find(({ name }) => item?.id === name.toLocaleUpperCase().replaceAll(' ', ''))
      if (item == null || coffeeShop == null) return

      clearSuggestions()
      navigation.navigate('coffeeShop', coffeeShop)
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
