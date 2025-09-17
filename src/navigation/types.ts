import type { PathConfig, RouteProp, Theme } from '@react-navigation/native'
import type { NativeStackNavigationOptions, NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { Component } from '@/shared/types'

export type AppStackNavigationProp = NativeStackNavigationProp<AppStackParams>
export type AppStackParams = {
  home: undefined
  notFound: undefined
}

type ScreenConfig<K extends keyof AppStackParams> = {
  screen: Component
  initialParams?: Partial<AppStackParams[K]>
  linking?: string | PathConfig<AppStackParams>
  options?:
    | NativeStackNavigationOptions
    | ((props: {
        theme: Theme
        route: RouteProp<AppStackParams, K>
        navigation: NativeStackNavigationProp<AppStackParams, K>
      }) => NativeStackNavigationOptions)
}

export type Screens = {
  [K in keyof AppStackParams]: ScreenConfig<K>
}
