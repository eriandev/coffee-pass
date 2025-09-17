import { StatusBar, useColorScheme } from 'react-native'
import { SafeAreaView, type SafeAreaViewProps } from 'react-native-safe-area-context'

import type { FC } from '@/shared/types'

export const SafeArea: FC<SafeAreaViewProps> = ({ children, ...restProps }) => {
  const isDarkMode = useColorScheme() === 'dark'
  const barStyle = isDarkMode ? 'light-content' : 'dark-content'

  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView {...restProps}>{children}</SafeAreaView>
    </>
  )
}
