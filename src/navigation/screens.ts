import { HomeScreen } from '@/screens/home'
import { NotFoundScreen } from '@/screens/not-found'
import type { Screens } from '@/navigation/types'

export const screens: Screens = {
  home: {
    screen: HomeScreen,
    options: { headerShown: false },
  },
  notFound: {
    screen: NotFoundScreen,
    linking: { path: '*' },
    options: { title: '404' },
  },
}
