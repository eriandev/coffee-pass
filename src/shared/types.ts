import type { ComponentType, JSX, PropsWithChildren } from 'react'

export type JSXElement = JSX.Element
export type Nullable<T> = T | null | undefined
export type Component<T = unknown> = ComponentType<T>
export type FC<P = unknown> = (props: PropsWithChildren<P>) => JSXElement
export type CoffeeShop = {
  name: string
  keys: string[]
  petFriendly?: boolean
  addresses: Array<{ address: string; district: string; commingSoon?: boolean }>
  socials: Array<{ social: string; link: string }>
}
