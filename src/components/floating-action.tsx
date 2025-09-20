import { useRef } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import type { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native'

import { colors } from '@/theme/values'
import type { FC } from '@/shared/types'

export interface FloatingActionProps {
  size?: number
  floating?: boolean
  style?: StyleProp<ViewStyle>
  action: (event: GestureResponderEvent) => void
}

export const FloatingAction: FC<FloatingActionProps> = ({ children, size = 64, style, action }) => {
  const styles = getStyles(size)
  const scaleValue = useRef(new Animated.Value(1)).current

  const handleResponderGrant = () => {
    Animated.timing(scaleValue, {
      toValue: 0.95,
      duration: 150,
      useNativeDriver: true,
    }).start()
  }

  const handleResponderRelease = (event: GestureResponderEvent) => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start()

    action(event)
  }

  return (
    <Animated.View
      onStartShouldSetResponder={() => true}
      onResponderGrant={handleResponderGrant}
      onResponderRelease={handleResponderRelease}
      style={[styles.container, { transform: [{ scale: scaleValue }] }, style]}
    >
      <View style={styles.button}>{children}</View>
    </Animated.View>
  )
}

export const getStyles = (size: number) => {
  return StyleSheet.create({
    container: {
      borderWidth: 1,
      borderRadius: 999,
      borderTopWidth: 0,
      borderBottomWidth: 4,
      borderColor: colors.btn.primary.border,
      backgroundColor: colors.btn.primary.bg,
    },
    button: {
      width: size,
      height: size,
      borderRadius: 999,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
}
