import { HomeScreen } from '@/screens/home'
import { NotFoundScreen } from '@/screens/not-found'
import { CoffeeShopScreen } from '@/screens/coffee-shop'
import type { Screens } from '@/navigation/types'

export const screens: Screens = {
  home: {
    screen: HomeScreen,
    options: { headerShown: false },
  },
  coffeeShop: {
    screen: CoffeeShopScreen,
    options: { headerShown: false },
  },
  notFound: {
    screen: NotFoundScreen,
    linking: { path: '*' },
    options: { title: '404' },
  },
}
