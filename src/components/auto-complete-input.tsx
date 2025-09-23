import { StyleSheet, Text, View } from 'react-native'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import type {
  AutocompleteDropdownItem,
  IAutocompleteDropdownProps,
  IAutocompleteDropdownRef,
} from 'react-native-autocomplete-dropdown'
import type { RefObject } from 'react'

import { borders, colors, fonts } from '@/theme/values'
import { SearchIcon } from '@/components/icons/search'
import type { FC } from '@/shared/types'

export type AutoCompleteInputItem = AutocompleteDropdownItem
export type AutoCompleteInputController = IAutocompleteDropdownRef
export type AutoCompleteInputProps = Omit<IAutocompleteDropdownProps, 'controller'> & {
  controller?: RefObject<AutoCompleteInputController | null>
  emptyResultText?: string
}

export const AutoCompleteInput: FC<AutoCompleteInputProps> = ({
  debounce = 600,
  inputHeight = 50,
  showClear = false,
  useFilter = false,
  initialValue = '1',
  showChevron = false,
  closeOnBlur = false,
  controller: refController,
  emptyResultText = 'Sin resultados',
  ...restProps
}) => {
  return (
    <AutocompleteDropdown
      controller={(controller) => {
        if (refController) refController.current = controller
      }}
      debounce={debounce}
      showClear={showClear}
      useFilter={useFilter}
      inputHeight={inputHeight}
      showChevron={showChevron}
      closeOnBlur={closeOnBlur}
      initialValue={initialValue}
      enableLoadingIndicator={false}
      textInputProps={{
        autoCorrect: false,
        autoCapitalize: 'none',
        style: styles.inputText,
        placeholder: 'Escribe más de 3 letras',
        placeholderTextColor: colors.text.secondary,
      }}
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      rightButtonsContainerStyle={styles.rightButtonsContainer}
      RightIconComponent={<SearchIcon color={colors.text.primary} />}
      suggestionsListContainerStyle={styles.suggestionsListContainer}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ title }) => <Text style={styles.item}>{title}</Text>}
      EmptyResultComponent={<Text style={styles.item}>{emptyResultText}</Text>}
      {...restProps}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    paddingHorizontal: 20,
  },
  item: {
    padding: 16,
    ...fonts.bodyBold,
    color: colors.text.primary,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: colors.bg.secondary,
  },
  inputContainer: {
    paddingRight: 8,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 4,
    color: colors.text.primary,
    borderColor: colors.border.input,
    backgroundColor: colors.bg.input,
    borderRadius: borders.radius.base,
  },
  inputText: {
    paddingLeft: 16,
    borderRadius: 24,
    ...fonts.bodyBase,
    color: colors.text.primary,
  },
  rightButtonsContainer: {
    right: 8,
    height: 32,
    alignSelf: 'center',
  },
  suggestionsListContainer: {
    backgroundColor: colors.bg.input,
  },
})
