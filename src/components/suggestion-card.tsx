import { Pressable, StyleSheet, Text, View } from 'react-native'
import type { PressableProps, StyleProp, ViewStyle } from 'react-native'

import { borders, colors, fonts } from '@/theme/values'
import type { FC } from '@/shared/types'

export interface SuggestionCardProps {
  title?: string
  style?: StyleProp<ViewStyle>
  onPress: PressableProps['onPress']
}

export const SuggestionCard: FC<SuggestionCardProps> = ({ children, style, title, onPress }) => {
  const styles = getStyles()

  return (
    <Pressable style={[styles.card, style]} onPress={onPress}>
      {title && (
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
      {children}
    </Pressable>
  )
}

const getStyles = () =>
  StyleSheet.create({
    card: {
      padding: 24,
      paddingRight: 8,
      borderTopWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 4,
      color: colors.text.primary,
      borderColor: colors.border.input,
      backgroundColor: colors.bg.input,
      borderRadius: borders.radius.base,
    },
    header: {
      paddingBottom: 12,
    },
    title: {
      ...fonts.bodyBold,
      fontSize: fonts.sizes.lg,
    },
  })
