import { useCallback, useRef } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { AutoCompleteInput, AutoCompleteInputController } from '@/components/auto-complete-input'

import { version } from '@/shared/consts'
import { colors, fonts } from '@/theme/values'
import { useNavigate } from '@/navigation/navigate'
import { SafeArea } from '@/shared/components/safe-area'
import { useSuggestions } from '@/hooks/use-suggestions'
import { SuggestionCard } from '@/components/suggestion-card'
import type { CoffeeShop } from '@/shared/types'

export const HomeScreen = () => {
  const navigation = useNavigate()
  const autocompleteController = useRef<AutoCompleteInputController>(null)
  const { suggestionsList, suggestionsLoading, clearSuggestions, updateSuggestions } = useSuggestions()

  const onSelectItem = useCallback(
    (item: CoffeeShop | null) => {
      if (item == null) return
      navigation.navigate('coffeeShop', item)
    },
    [navigation],
  )

  const onClear = useCallback(() => {
    autocompleteController.current?.clear()
    clearSuggestions()
  }, [autocompleteController, clearSuggestions])

  return (
    <View style={styles.screen}>
      <SafeArea style={styles.safearea}>
        <View style={styles.container}>
          <FlatList
            scrollEnabled
            data={suggestionsList}
            showsVerticalScrollIndicator
            keyExtractor={({ id }) => id}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={({ item }) => {
              const uniqueDistricts = [...new Set(item.places.map((p) => p.district))]
              const districtsJoined = uniqueDistricts.join(' — ')

              return (
                <SuggestionCard key={item.id} title={item.name} onPress={() => onSelectItem(item)}>
                  <View style={styles.addresses}>
                    <Text>{districtsJoined}</Text>
                  </View>
                </SuggestionCard>
              )
            }}
          />

          <AutoCompleteInput
            dataSet={[]}
            direction="up"
            showItems={false}
            loading={suggestionsLoading}
            controller={autocompleteController}
            containerStyle={styles.containerStyle}
            onChangeText={updateSuggestions}
            onClear={onClear}
          />
          <Text style={styles.version}>v{version}</Text>
        </View>
      </SafeArea>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.bg.primary,
  },
  safearea: {
    paddingVertical: 32,
  },
  container: {
    height: '100%',
    position: 'relative',
    marginHorizontal: 16,
  },
  contentContainerStyle: {
    rowGap: 16,
    paddingBottom: 72,
  },
  addresses: {
    rowGap: 4,
    paddingRight: 16,
  },
  containerStyle: {
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  version: {
    right: 4,
    bottom: 58,
    fontSize: 10,
    ...fonts.bodyBase,
    position: 'absolute',
    color: colors.text.primary,
  },
})
