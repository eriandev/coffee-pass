import { useCallback, useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  AutoCompleteInput,
  AutoCompleteInputController,
  type AutoCompleteInputItem,
} from '@/components/auto-complete-input'

import { colors } from '@/theme/values'
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
    [navigation, clearSuggestions],
  )

  const onClear = useCallback(() => {
    autocompleteController.current?.clear()
    clearSuggestions()
  }, [autocompleteController, clearSuggestions])

  return (
    <View style={{ backgroundColor: colors.bg.primary }}>
      <SafeArea style={styles.safearea}>
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
    </View>
  )
}

const styles = StyleSheet.create({
  safearea: {
    paddingBottom: 32,
    backgroundColor: colors.bg.primary,
  },
  container: {
    height: '100%',
    position: 'relative',
    marginHorizontal: 16,
  },
  containerStyle: {
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
})
