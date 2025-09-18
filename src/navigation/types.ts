import type { PathConfig, RouteProp, Theme } from '@react-navigation/native'
import type {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import type { CoffeeShop, Component } from '@/shared/types'

export type AppStackNavigationProp = NativeStackNavigationProp<AppStackParams>
export type AppStackParams = {
  home: undefined
  notFound: undefined
  coffeeShop: CoffeeShop
}

type ScreenConfig<K extends keyof AppStackParams> = {
  screen: Component<NativeStackScreenProps<AppStackParams, K>>
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
