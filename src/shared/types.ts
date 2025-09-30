import type { StaticScreenProps } from '@react-navigation/native'
import type { ComponentType, JSX, PropsWithChildren } from 'react'

import type { AppStackParams } from '@/navigation/types'

export type JSXElement = JSX.Element
export type Nullable<T> = T | null | undefined
export type Component<T = unknown> = ComponentType<T>
export type FC<P = unknown> = (props: PropsWithChildren<P>) => JSXElement
export type ScreenProps<T extends keyof AppStackParams> = StaticScreenProps<AppStackParams[T]>
export type CoffeeShop = {
  id: string
  name: string
  keys: string[]
  pages: number[]
  wifiZone: boolean
  menuLink?: string
  parkingLot: boolean
  petFriendly: boolean
  veganOptions: boolean
  peruvianCoffee: boolean
  places: CoffeeShopPlace[]
  socials: CoffeeShopSocial[]
  schedules?: Array<{
    openingTime: `${string}:${string}`
    closingTime: `${string}:${string}`
    weekday: 'lunes' | 'martes' | 'miércoles' | 'jueves' | 'viernes' | 'sábado' | 'domingo'
  }>
}
export type CoffeeShopPlace = {
  address: string
  district: string
  fullAddress?: string
  commingSoon?: boolean
  temporarilyClosed?: boolean
  placeMenuLink?: CoffeeShop['menuLink']
  placeSchedules?: CoffeeShop['schedules']
}
export type CoffeeShopSocial = {
  link: string
  social: 'instagram' | 'facebook' | 'tiktok'
}
