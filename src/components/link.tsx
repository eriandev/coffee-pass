import { useCallback } from 'react'
import { Linking, Pressable, type PressableProps } from 'react-native'
import type { FC } from '@/shared/types'

export interface LinkProps extends Omit<PressableProps, 'onPress'> {
  to: string
  onError?: (targetURL: string) => void
}

export const Link: FC<LinkProps> = ({ to: targetURL, children, onError, ...restProps }) => {
  const handlePress = useCallback(async () => {
    try {
      await Linking.openURL(targetURL)
    } catch {
      onError?.(targetURL)
    }
  }, [targetURL, onError])

  return (
    <Pressable {...restProps} onPress={handlePress}>
      {children}
    </Pressable>
  )
}
