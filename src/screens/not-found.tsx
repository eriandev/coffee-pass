import { StyleSheet, Text } from 'react-native'
import { SafeArea } from '@/shared/components/safe-area'
import { colors } from '@/theme/values'

export const NotFoundScreen = () => {
  return (
    <SafeArea style={styles.safearea}>
      <Text style={styles.message}>Not Found Screen</Text>
    </SafeArea>
  )
}

const styles = StyleSheet.create({
  safearea: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  message: {
    color: colors.black,
  },
})
