import { useNavigation } from '@react-navigation/native'
import type { AppStackNavigationProp } from '@/navigation/types'

export function useNavigate() {
  return useNavigation<AppStackNavigationProp>()
}
