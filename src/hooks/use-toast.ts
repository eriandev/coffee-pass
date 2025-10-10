// eslint-disable-next-line react-native/split-platform-components
import { ToastAndroid } from 'react-native'

export function useToast() {
  const showToast = (message: string, { duration = ToastAndroid.SHORT } = {}) => {
    ToastAndroid.show(message, duration)
  }

  return { showToast }
}
