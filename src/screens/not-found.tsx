import { Text } from 'react-native'
import { SafeArea } from '@/shared/components/safe-area'

export const NotFoundScreen = () => {
  return (
    <SafeArea
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
    >
      <Text style={{ color: 'black' }}>Not Found Screen</Text>
    </SafeArea>
  )
}
