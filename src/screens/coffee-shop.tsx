import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import type { StaticScreenProps } from '@react-navigation/native'

import { Link } from '@/components/link'
import { CopyIcon } from '@/components/icons/copy'
import { useClipboard } from '@/hooks/use-clipboard'
import { MapPinIcon } from '@/components/icons/map-pin'
import { SafeArea } from '@/shared/components/safe-area'
import { FeatureBadge } from '@/components/feature-badge'
import { TiktokIcon } from '@/components/icons/socials/tiktok'
import { FacebookIcon } from '@/components/icons/socials/facebook'
import { InstagramIcon } from '@/components/icons/socials/instagram'
import type { AppStackParams } from '@/navigation/types'

const socialIcons = {
  instagram: <InstagramIcon />,
  facebook: <FacebookIcon />,
  tiktok: <TiktokIcon />,
} as const

export type CoffeeShopScreenProps = StaticScreenProps<AppStackParams['coffeeShop']>
export function CoffeeShopScreen({ route }: CoffeeShopScreenProps) {
  const { params } = route
  const { addresses, name, pages, parkingLot, peruvianCoffee, petFriendly, socials, veganOptions, wifiZone } = params

  const { copyToClipboard } = useClipboard()

  return (
    <SafeArea style={styles.safearea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View style={styles.circle} />
          <Text style={styles.title}>{name}</Text>
          <View style={styles.socials}>
            {socials.map(({ link, social }) => (
              <Link key={social} to={link}>
                {socialIcons[social]}
              </Link>
            ))}
          </View>
        </View>
        <View style={styles.badges}>
          {peruvianCoffee && <FeatureBadge name="peruvianCoffee" />}
          {wifiZone && <FeatureBadge name="wifiZone" />}
          {petFriendly && <FeatureBadge name="petFriendly" />}
          {parkingLot && <FeatureBadge name="parkingLot" />}
          {veganOptions && <FeatureBadge name="veganOptions" containerStyle={styles.badgeVeganOptions} />}
        </View>
        <View style={styles.pages}>
          {pages.map((page) => (
            <Text key={page}>{page}</Text>
          ))}
        </View>
        <View style={styles.addresses}>
          {addresses.map(({ address, district }) => {
            const fullAddress = `${address}, ${district}`.trim()
            const googleMapsPoint = 'https://www.google.com/maps/place/' + fullAddress.replaceAll(' ', '+')

            return (
              <View key={address} style={styles.addressRow}>
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
          })}
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
  socials: {
    columnGap: 16,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  badges: {
    rowGap: 8,
    columnGap: 12,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  badgeVeganOptions: {
    paddingLeft: 8,
  },
  pages: {
    columnGap: 8,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
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
    columnGap: 16,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  address: {
    fontSize: 16,
  },
  icon: {
    color: '#000',
  },
})
