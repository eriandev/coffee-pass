import { useColorScheme } from 'react-native'
import BootSplash from 'react-native-bootsplash'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStaticNavigation, DarkTheme, DefaultTheme } from '@react-navigation/native'

import { screens } from '@/navigation/screens'
import type { AppStackParams } from '@/navigation/types'

export const AppNavigation = () => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme
  const RootStack = createNativeStackNavigator<AppStackParams>({
    screens,
    initialRouteName: 'home',
  })
  const Navigation = createStaticNavigation(RootStack)

  return (
    <Navigation
      theme={theme}
      onReady={() => {
        BootSplash.hide()
      }}
    />
  )
}
