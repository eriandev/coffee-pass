import { StatusBar } from 'react-native'
import { SafeAreaView, type SafeAreaViewProps } from 'react-native-safe-area-context'

import type { FC } from '@/shared/types'

export const SafeArea: FC<SafeAreaViewProps> = ({ children, ...restProps }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView {...restProps}>{children}</SafeAreaView>
    </>
  )
}
