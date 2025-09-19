import { useRef } from 'react'
import { Animated, Pressable, StyleSheet } from 'react-native'
import type { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native'

import type { FC } from '@/shared/types'

export interface ButtonProps {
  compact?: boolean
  style?: StyleProp<ViewStyle>
  onPress?: (event: GestureResponderEvent) => void
}

export const Button: FC<ButtonProps> = ({ children, compact = false, style, onPress }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current
  const styles = getStyles(compact)

  const handlePressIn = () => {
    Animated.timing(scaleAnim, {
      toValue: 0.9,
      duration: 150,
      useNativeDriver: true,
    }).start()
  }

  const handlePressOut = () => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start()
  }

  return (
    <Pressable onPress={onPress} onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View style={[styles.button, { transform: [{ scale: scaleAnim }] }, style]}>{children}</Animated.View>
    </Pressable>
  )
}

const getStyles = (isCompact: boolean) => {
  return StyleSheet.create({
    button: {
      borderRadius: 8,
      paddingVertical: 8,
      alignItems: 'center',
      paddingHorizontal: 8,
      width: isCompact ? 'auto' : '100%',
    },
  })
}
