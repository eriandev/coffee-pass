import BootSplash from 'react-native-bootsplash'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStaticNavigation, DefaultTheme } from '@react-navigation/native'

import { screens } from '@/navigation/screens'
import type { AppStackParams } from '@/navigation/types'

const RootStack = createNativeStackNavigator<AppStackParams>({
  screens,
  initialRouteName: 'home',
  screenOptions: {
    gestureEnabled: true,
    animation: 'slide_from_right',
  },
})

const Navigation = createStaticNavigation(RootStack)

export const AppNavigation = () => {
  return (
    <Navigation
      theme={DefaultTheme}
      onReady={() => {
        BootSplash.hide()
      }}
    />
  )
}
