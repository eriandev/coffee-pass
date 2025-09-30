import { useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

import { Button } from '@/components/button'
import { CopyIcon } from '@/components/icons/copy'
import { CheckIcon } from '@/components/icons/check'
import { useClipboard } from '@/hooks/use-clipboard'
import { borders, colors, fonts } from '@/theme/values'
import commingSoonImage from '@/assets/images/comming_soon.webp'
import type { FC } from '@/shared/types'

export interface AddressProps {
  fullAddress: string
  commingSoon?: boolean
  onPress?: () => void
}

export const AddressCard: FC<AddressProps> = ({ commingSoon = false, fullAddress, onPress }) => {
  const { copyToClipboard } = useClipboard()
  const [isCoping, setIsCoping] = useState(false)
  const [cardHeight, setCardHeight] = useState(0)
  const styles = getStyles(cardHeight)

  const handlePress = () => {
    copyToClipboard(fullAddress)

    if (isCoping) return

    setIsCoping(true)
    setTimeout(() => setIsCoping(false), 3000)
  }

  return (
    <Pressable
      style={styles.addressCard}
      onPress={onPress}
      onLayout={({ nativeEvent }) => setCardHeight(nativeEvent.layout.height)}
    >
      {commingSoon && <Image source={commingSoonImage} style={styles.commingSoon} />}
      <View style={styles.addressInfo}>
        <Text style={styles.address}>{fullAddress}</Text>
      </View>
      <View style={styles.addressActions}>
        <Button square variant="secondary" onPress={handlePress}>
          {isCoping ? <CheckIcon color={styles.icon.color} /> : <CopyIcon color={styles.icon.color} />}
        </Button>
      </View>
    </Pressable>
  )
}

const getStyles = (cardHeight: number) =>
  StyleSheet.create({
    addressCard: {
      padding: 20,
      minHeight: 32,
      display: 'flex',
      borderRadius: 20,
      position: 'relative',
      flexDirection: 'row',
      borderWidth: borders.width.lg,
      borderColor: colors.border.card,
      backgroundColor: colors.bg.secondary,
    },
    commingSoon: {
      top: 0,
      left: 0,
      width: '100%',
      opacity: 0.25,
      position: 'absolute',
      height: cardHeight - borders.width.lg * 2,
    },
    addressInfo: {
      width: '85%',
      paddingRight: 12,
      justifyContent: 'center',
    },
    addressActions: {
      width: '15%',
      columnGap: 16,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    address: {
      ...fonts.bodyBase,
      fontSize: fonts.sizes.lg,
    },
    icon: {
      color: colors.text.primary,
    },
  })
