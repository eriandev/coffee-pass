import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Button } from '@/components/button'
import { CopyIcon } from '@/components/icons/copy'
import { CheckIcon } from '@/components/icons/check'
import { useClipboard } from '@/hooks/use-clipboard'
import { borders, colors, fonts } from '@/theme/values'
import type { FC } from '@/shared/types'

export interface AddressProps {
  address: string
  district: string
}

export const AddressCard: FC<AddressProps> = ({ address, district }) => {
  const fullAddress = `${address}, ${district}`.trim()
  // const googleMapsPoint = 'https://www.google.com/maps/place/' + fullAddress.replaceAll(' ', '+')

  const { copyToClipboard } = useClipboard()
  const [isCoping, setIsCoping] = useState(false)

  const handlePress = () => {
    copyToClipboard(fullAddress)

    if (isCoping) return

    setIsCoping(true)
    setTimeout(() => setIsCoping(false), 3000)
  }

  return (
    <View key={address} style={styles.addressCard}>
      <View style={styles.addressInfo}>
        <Text style={styles.address}>
          {address}, {district}
        </Text>
      </View>
      <View style={styles.addressActions}>
        <Button square variant="secondary" onPress={handlePress}>
          {isCoping ? <CheckIcon color={styles.icon.color} /> : <CopyIcon color={styles.icon.color} />}
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  addressCard: {
    padding: 20,
    minHeight: 32,
    display: 'flex',
    borderRadius: 20,
    flexDirection: 'row',
    borderWidth: borders.width.lg,
    borderColor: colors.border.card,
    backgroundColor: colors.bg.secondary,
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
