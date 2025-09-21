import { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import type { StaticScreenProps } from '@react-navigation/native'

import { Link } from '@/components/link'
import { colors, fonts } from '@/theme/values'
import { PlusIcon } from '@/components/icons/plus'
import { AddressCard } from '@/components/address-card'
import { SafeArea } from '@/shared/components/safe-area'
import { FeatureBadge } from '@/components/feature-badge'
import { FloatingAction } from '@/components/floating-action'
import { TiktokIcon } from '@/components/icons/socials/tiktok'
import { FacebookIcon } from '@/components/icons/socials/facebook'
import { AddVisitModal } from '@/components/modals/add-visit-modal'
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

  const [showModal, setShowModal] = useState(false)

  return (
    <SafeArea style={styles.safearea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View style={styles.circle} />
          <Text style={styles.title}>{name}</Text>
          <View style={styles.socials}>
            {socials.map(({ link, social }) => (
              <Link key={social} to={link} style={styles.social}>
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

        <View style={styles.addresses}>
          {addresses.map(({ address, district }) => (
            <AddressCard key={address} address={address} district={district} />
          ))}
        </View>

        <View style={styles.pages}>
          {pages.map((page) => (
            <Text key={page} style={styles.page}>
              {page}
            </Text>
          ))}
        </View>
      </ScrollView>

      <FloatingAction style={styles.floatingAction} action={() => setShowModal(true)}>
        <PlusIcon width={32} height={32} color={styles.floatingAction.color} />
      </FloatingAction>

      <AddVisitModal visible={showModal} onClose={() => setShowModal(false)} />
    </SafeArea>
  )
}

const styles = StyleSheet.create({
  safearea: {
    width: '100%',
    position: 'relative',
    backgroundColor: colors.bg.primary,
  },
  container: {
    rowGap: 32,
    paddingTop: 32,
    display: 'flex',
    minHeight: '100%',
    paddingBottom: 140,
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
    marginHorizontal: 'auto',
    backgroundColor: colors.btn.primary.bg,
  },
  title: {
    ...fonts.title,
    textAlign: 'center',
    fontSize: fonts.sizes.hero,
  },
  socials: {
    columnGap: 16,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  social: {
    width: 40,
    height: 40,
    display: 'flex',
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg.secondary,
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
  page: {
    ...fonts.bodyBase,
  },
  addresses: {
    rowGap: 16,
    display: 'flex',
  },
  floatingAction: {
    bottom: 40,
    alignSelf: 'center',
    color: colors.white,
    position: 'absolute',
  },
})
