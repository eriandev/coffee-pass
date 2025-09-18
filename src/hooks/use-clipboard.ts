import { useState } from 'react'
import Clipboard from '@react-native-clipboard/clipboard'

export function useClipboard() {
  const [copiedText, setCopiedText] = useState('')

  const copyToClipboard = (text: string) => {
    Clipboard.setString(text)
    setCopiedText(text)
  }

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString()
    setCopiedText(text)
  }

  return {
    copiedText,
    copyToClipboard,
    fetchCopiedText,
  }
}
