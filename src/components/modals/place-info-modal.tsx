import { StyleSheet, Text, View } from 'react-native'

import { Link } from '@/components/link'
import { Button } from '@/components/button'
import { colors, fonts } from '@/theme/values'
import { BaseModal } from '@/components/modals/base-modal'
import { ExternalLinkIcon } from '@/components/icons/external-link'
import type { CoffeeShop, CoffeeShopPlace } from '@/shared/types'

export interface PlaceInfoModalProps {
  visible: boolean
  info: CoffeeShopPlace
  menuLink?: CoffeeShop['menuLink']
  schedules?: CoffeeShop['schedules']
  onClose: () => void
}

export const PlaceInfoModal = ({ info, visible, menuLink, schedules, onClose }: PlaceInfoModalProps) => {
  const { commingSoon = false, fullAddress, placeMenuLink, placeSchedules, temporarilyClosed } = info
  const hasSchedules = schedules && schedules?.length > 0
  const hasPlaceSchedules = placeSchedules && placeSchedules.length > 0
  const theSchedules = hasPlaceSchedules ? placeSchedules : (schedules ?? [])

  const hasPlaceMenuLink = placeMenuLink != null
  const theMenuLink = hasPlaceMenuLink ? placeMenuLink : menuLink

  const mapsPointLink = fullAddress ? 'https://www.google.com/maps/place/' + fullAddress.replaceAll(' ', '+') : null
  const styles = getStyles(hasSchedules && !commingSoon)

  return (
    <BaseModal
      transparent
      visible={visible}
      animationType="fade"
      titleStyle={styles.title}
      title="Información del local"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        {hasSchedules && !commingSoon && !temporarilyClosed && (
          <>
            <Text style={styles.subtitle}>Horarios</Text>
            <View style={styles.schedules}>
              {theSchedules.map(({ weekday, openingTime, closingTime }, index) => (
                <View key={weekday + index} style={styles.schedule}>
                  <Text style={styles.bodyText}>{weekday}</Text>
                  <View style={styles.scheduleTime}>
                    <Text style={styles.bodyText}>{openingTime}</Text>
                    <Text style={styles.bodyText}> — </Text>
                    <Text style={styles.bodyText}>{closingTime}</Text>
                  </View>
                </View>
              ))}
            </View>
          </>
        )}

        {temporarilyClosed && <Text style={styles.closed}>🚧 Cerrado temporalmente 🚧</Text>}

        <View style={styles.actions}>
          <View>
            {theMenuLink && (
              <Link to={theMenuLink} style={styles.action}>
                <Text style={styles.subtitle}>Carta</Text>
                <ExternalLinkIcon color={colors.text.primary} width={18} height={18} strokeWidth={3} />
              </Link>
            )}

            {mapsPointLink && (
              <Link to={mapsPointLink} style={styles.action}>
                <Text style={styles.subtitle}>Ubicación</Text>
                <ExternalLinkIcon color={colors.text.primary} width={18} height={18} strokeWidth={3} />
              </Link>
            )}
          </View>
          <Button variant="primary" label="OK" onPress={onClose} />
        </View>
      </View>
    </BaseModal>
  )
}

const getStyles = (needTitlePadding = false) =>
  StyleSheet.create({
    container: {
      width: '100%',
    },
    title: {
      width: '100%',
      textAlign: 'center',
      paddingBottom: needTitlePadding ? 12 : 0,
    },
    subtitle: {
      fontSize: 20,
      ...fonts.bodyBold,
      textAlign: 'center',
      color: colors.text.primary,
    },
    closed: {
      fontSize: 20,
      paddingTop: 12,
      ...fonts.bodyBold,
      textAlign: 'center',
      color: colors.text.primary,
    },
    bodyText: {
      fontSize: 16,
      ...fonts.bodyBase,
    },
    schedules: {
      width: '70%',
      paddingTop: 4,
      marginHorizontal: 'auto',
    },
    schedule: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    scheduleTime: {
      display: 'flex',
      flexDirection: 'row',
    },
    actions: {
      rowGap: 16,
      paddingTop: 16,
      flexDirection: 'column',
    },
    action: {
      columnGap: 4,
      paddingVertical: 8,
      alignItems: 'center',
      flexDirection: 'row',
      marginHorizontal: 'auto',
    },
  })
