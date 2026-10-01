import BootSplash from 'react-native-bootsplash'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStaticNavigation, DarkTheme } from '@react-navigation/native'

import { screens } from '@/navigation/screens'
import type { AppStackParams } from '@/navigation/types'

export const AppNavigation = () => {
  const RootStack = createNativeStackNavigator<AppStackParams>({
    screens,
    initialRouteName: 'home',
    screenOptions: {
      gestureEnabled: true,
      animation: 'slide_from_right',
    },
  })
  const Navigation = createStaticNavigation(RootStack)

  return (
    <Navigation
      theme={DarkTheme}
      onReady={() => {
        BootSplash.hide()
      }}
    />
  )
}
