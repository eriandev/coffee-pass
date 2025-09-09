import type { PropsWithChildren } from 'react'

export type JSXElement = React.JSX.Element
export type Nullable<T> = T | null | undefined
export type Component<T = unknown> = React.ComponentType<T>
export type FC<P = unknown> = (props: PropsWithChildren<P>) => JSXElement
