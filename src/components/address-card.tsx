import { Pressable, StyleSheet, Text, View } from 'react-native'

import { MapPinIcon } from '@/components/icons/map-pin'
import { useClipboard } from '@/hooks/use-clipboard'
import { CopyIcon } from '@/components/icons/copy'
import { Link } from '@/components/link'
import type { FC } from '@/shared/types'

export interface AddressProps {
  address: string
  district: string
}

export const AddressCard: FC<AddressProps> = ({ address, district }) => {
  const fullAddress = `${address}, ${district}`.trim()
  const googleMapsPoint = 'https://www.google.com/maps/place/' + fullAddress.replaceAll(' ', '+')

  const { copyToClipboard } = useClipboard()

  return (
    <View key={address} style={styles.addressCard}>
      <View style={styles.addressInfo}>
        <Text style={styles.address}>
          {address}, {district}
        </Text>
      </View>
      <View style={styles.addressActions}>
        <Pressable onPress={() => copyToClipboard(fullAddress)}>
          <CopyIcon color={styles.icon.color} />
        </Pressable>
        <Link to={googleMapsPoint}>
          <MapPinIcon color={styles.icon.color} />
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  addressCard: {
    padding: 20,
    minHeight: 32,
    display: 'flex',
    borderWidth: 1.5,
    borderRadius: 20,
    flexDirection: 'row',
    borderColor: '#000',
    backgroundColor: '#FAFAFA',
  },
  addressInfo: {
    width: '80%',
    paddingRight: 12,
    justifyContent: 'center',
  },
  addressActions: {
    width: '20%',
    columnGap: 16,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  address: {
    fontSize: 18,
  },
  icon: {
    color: '#000',
  },
})
