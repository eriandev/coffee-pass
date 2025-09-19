import { StyleSheet, Text } from 'react-native'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import type {
  AutocompleteDropdownItem,
  IAutocompleteDropdownProps,
  IAutocompleteDropdownRef,
} from 'react-native-autocomplete-dropdown'
import type { RefObject } from 'react'
import type { FC } from '@/shared/types'

export type AutoCompleteInputItem = AutocompleteDropdownItem
export type AutoCompleteInputController = IAutocompleteDropdownRef
export type AutoCompleteInputProps = Omit<IAutocompleteDropdownProps, 'controller'> & {
  controller?: RefObject<AutoCompleteInputController | null>
  emptyResultText?: string
}

export const AutoCompleteInput: FC<AutoCompleteInputProps> = (props) => {
  const {
    debounce = 600,
    inputHeight = 50,
    showClear = true,
    useFilter = false,
    initialValue = '1',
    showChevron = false,
    closeOnBlur = false,
    controller: refController,
    emptyResultText = 'Sin resultados',
    ...restProps
  } = props

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
      textInputProps={{
        autoCorrect: false,
        autoCapitalize: 'none',
        style: styles.inputText,
        placeholder: 'Escribe más de 3 letras',
      }}
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      rightButtonsContainerStyle={styles.rightButtonsContainer}
      suggestionsListContainerStyle={styles.suggestionsListContainer}
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
  },
  item: {
    color: '#FFF',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  inputContainer: {
    borderRadius: 24,
    borderColor: '#E0E0E0',
  },
  inputText: {
    paddingLeft: 18,
    borderRadius: 24,
    color: '#06161C',
    paddingHorizontal: 8,
  },
  rightButtonsContainer: {
    right: 8,
    height: 32,
    alignSelf: 'center',
  },
  suggestionsListContainer: {
    backgroundColor: '#383b42',
  },
})
