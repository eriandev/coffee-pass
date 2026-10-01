import { useCallback, useEffect, useRef, useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

import { Button } from '@/components/button'
import { useToast } from '@/hooks/use-toast'
import { CopyIcon } from '@/components/icons/copy'
import { CheckIcon } from '@/components/icons/check'
import { useClipboard } from '@/hooks/use-clipboard'
import { borders, colors, fonts } from '@/theme/values'
import commingSoonImage from '@/assets/images/comming_soon.webp'
import type { CoffeeShopPlace, FC } from '@/shared/types'

const FEEDBACK_TIMEOUT = 3000

export interface AddressProps extends CoffeeShopPlace {
  fullAddress: string
  onPress?: () => void
}

export const AddressCard: FC<AddressProps> = ({
  fullAddress,
  temporarilyClosed,
  commingSoon = false,
  onPress = () => {},
}) => {
  const { showToast } = useToast()
  const { copyToClipboard } = useClipboard()
  const [isCoping, setIsCoping] = useState(false)
  const feedbackTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(
    () => () => {
      if (feedbackTimeout.current) clearTimeout(feedbackTimeout.current)
    },
    [],
  )

  const handleActionPress = useCallback(() => {
    copyToClipboard(fullAddress)

    if (feedbackTimeout.current) return

    setIsCoping(true)
    feedbackTimeout.current = setTimeout(() => {
      setIsCoping(false)
      feedbackTimeout.current = null
    }, FEEDBACK_TIMEOUT)
  }, [copyToClipboard, fullAddress])

  const handleCardPress = () => {
    if (temporarilyClosed) {
      showToast('Cerrado temporalmente')
      return
    }

    onPress()
  }

  return (
    <Pressable style={styles.addressCard} onPress={handleCardPress}>
      {commingSoon && <Image source={commingSoonImage} style={styles.commingSoon} />}
      <View style={styles.addressInfo}>
        <Text style={styles.address}>{fullAddress}</Text>
      </View>
      <View style={styles.addressActions}>
        <Button square variant="secondary" onPress={handleActionPress}>
          {isCoping ? <CheckIcon color={styles.icon.color} /> : <CopyIcon color={styles.icon.color} />}
        </Button>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
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
    top: borders.width.lg,
    left: borders.width.lg,
    right: borders.width.lg,
    bottom: borders.width.lg,
    opacity: 0.25,
    position: 'absolute',
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
