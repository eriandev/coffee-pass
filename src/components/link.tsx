import { useCallback } from 'react'
import { Linking, Pressable, type PressableProps } from 'react-native'
import type { FC } from '@/shared/types'

export interface LinkProps extends Omit<PressableProps, 'onPress'> {
  to: string
}

export const Link: FC<LinkProps> = ({ to: targetURL, children, ...restProps }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(targetURL)
    if (supported) await Linking.openURL(targetURL)
  }, [targetURL])

  return (
    <Pressable {...restProps} onPress={handlePress}>
      {children}
    </Pressable>
  )
}
