import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown'
import { AppNavigation } from '@/navigation'

export const App = () => (
  <AutocompleteDropdownContextProvider>
    <AppNavigation />
  </AutocompleteDropdownContextProvider>
)
