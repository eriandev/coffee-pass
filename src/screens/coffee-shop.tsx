import { StyleSheet, Text, View, ScrollView } from 'react-native'
import type { StaticScreenProps } from '@react-navigation/native'

import { CopyIcon } from '@/components/icons/copy'
import { MapPinIcon } from '@/components/icons/map-pin'
import { SafeArea } from '@/shared/components/safe-area'
import type { AppStackParams } from '@/navigation/types'

export type CoffeeShopScreenProps = StaticScreenProps<AppStackParams['coffeeShop']>
export function CoffeeShopScreen({ route }: CoffeeShopScreenProps) {
  const { params } = route
  const { addresses, name } = params

  return (
    <SafeArea style={styles.safearea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View style={styles.circle} />
          <Text style={styles.title}>{name}</Text>
        </View>
        <View style={styles.addresses}>
          {addresses.map(({ address, district }) => (
            <View key={address} style={styles.addressRow}>
              <View style={styles.addressInfo}>
                <Text style={styles.address}>
                  {address}, {district}
                </Text>
              </View>
              <View style={styles.addressActions}>
                <CopyIcon color={styles.icon.color} />
                <MapPinIcon color={styles.icon.color} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeArea>
  )
}

const styles = StyleSheet.create({
  safearea: {
    width: '100%',
    height: '100%',
  },
  container: {
    rowGap: 32,
    display: 'flex',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  header: {
    rowGap: 16,
    display: 'flex',
  },
  circle: {
    width: 128,
    height: 128,
    borderRadius: 999,
    backgroundColor: 'green',
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
  },
  addresses: {
    rowGap: 8,
    display: 'flex',
  },
  addressRow: {
    minHeight: 32,
    display: 'flex',
    flexDirection: 'row',
  },
  addressInfo: {
    width: '80%',
    paddingRight: 12,
    justifyContent: 'center',
  },
  addressActions: {
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  address: {
    fontSize: 16,
  },
  icon: {
    color: '#000',
  },
})
