import { Image, StyleSheet, View } from 'react-native'
import type { ImageStyle, StyleProp, ViewStyle } from 'react-native'

import peruvianCoffee from '@/assets/images/peruvian_coffee.webp'
import veganOptions from '@/assets/images/vegan_options.webp'
import petFriendly from '@/assets/images/pet_friendly.webp'
import parkingLot from '@/assets/images/parking_lot.webp'
import wifiZone from '@/assets/images/wifi_zone.webp'
import type { FC } from '@/shared/types'

const featureBadges = {
  wifiZone,
  parkingLot,
  petFriendly,
  veganOptions,
  peruvianCoffee,
} as const

export interface FeatureBadgeProps {
  name: keyof typeof featureBadges
  size?: number
  style?: StyleProp<ImageStyle>
  containerStyle?: StyleProp<ViewStyle>
}

export const FeatureBadge: FC<FeatureBadgeProps> = ({ name, containerStyle, size = 42, style }) => {
  const styles = getStyles(size)

  return (
    <View style={[styles.container, containerStyle]}>
      <Image source={featureBadges[name]} style={[styles.badge, style]} />
    </View>
  )
}

const getStyles = (size: number) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      borderWidth: 1.5,
      borderRadius: 999,
      width: size * 1.5,
      height: size * 1.5,
      alignItems: 'center',
      borderStyle: 'dashed',
      justifyContent: 'center',
      backgroundColor: '#FAFAFA',
    },
    badge: {
      width: size,
      height: size,
    },
  })
