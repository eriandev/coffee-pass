import { useRef } from 'react'
import { Animated, Pressable, StyleSheet, Text } from 'react-native'
import type { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native'

import { colors, fonts } from '@/theme/values'
import type { FC } from '@/shared/types'

export interface ButtonProps {
  label?: string
  square?: boolean
  compact?: boolean
  style?: StyleProp<ViewStyle>
  variant?: keyof typeof colors.btn
  onPress?: (event: GestureResponderEvent) => void
}

export const Button: FC<ButtonProps> = ({
  label,
  style,
  children,
  square = false,
  compact = false,
  variant = 'primary',
  onPress,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current
  const styles = getStyles(compact, square, variant)

  const handlePressIn = () => {
    Animated.timing(scaleAnim, {
      toValue: 0.95,
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
      <Animated.View style={[styles.button, { transform: [{ scale: scaleAnim }] }, style]}>
        {label ? <Text style={styles.text}>{label}</Text> : children}
      </Animated.View>
    </Pressable>
  )
}

const getStyles = (isCompact: boolean, isSquare: boolean, variant: ButtonProps['variant'] = 'primary') => {
  return StyleSheet.create({
    button: {
      borderWidth: 2,
      borderRadius: 8,
      paddingVertical: 12,
      alignItems: 'center',
      borderBottomWidth: 4,
      width: isCompact ? 'auto' : '100%',
      paddingHorizontal: isSquare ? 12 : 16,
      borderColor: colors.btn[variant].border,
      backgroundColor: colors.btn[variant].bg,
    },
    text: {
      ...fonts.bodyBold,
      fontSize: fonts.sizes.sm,
      color: colors.btn[variant].text,
    },
  })
}
