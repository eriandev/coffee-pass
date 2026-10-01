import { useCallback, useState } from 'react'
import Clipboard from '@react-native-clipboard/clipboard'

export function useClipboard() {
  const [copiedText, setCopiedText] = useState('')

  const copyToClipboard = useCallback((text: string) => {
    Clipboard.setString(text)
    setCopiedText(text)
  }, [])

  return {
    copiedText,
    copyToClipboard,
  }
}
