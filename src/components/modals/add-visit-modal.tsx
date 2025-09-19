import { useState } from 'react'
import { Text, View } from 'react-native'
import DatePicker from 'react-native-date-picker'

import { Button } from '@/components/button'
import { BaseModal } from '@/components/modals/base-modal'

export interface AddVisitlModalProps {
  visible: boolean
  onClose: () => void
}

export const AddVisitModal = ({ visible, onClose }: AddVisitlModalProps) => {
  const [date, setDate] = useState(new Date())

  const resetDate = () => {
    setDate(new Date())
  }

  const handleClose = () => {
    resetDate()
    onClose()
  }

  const handleAccept = () => {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    console.log(`${day}/${month}/${year}`)

    onClose()
  }

  return (
    <BaseModal
      closeable
      transparent
      visible={visible}
      animationType="fade"
      title="Agregar visita"
      onClose={handleClose}
      onRequestClose={handleClose}
    >
      <View>
        <DatePicker date={date} onDateChange={setDate} mode="date" locale="es" />

        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', columnGap: 16 }}>
          <Button onPress={handleClose}>
            <Text>Cancelar</Text>
          </Button>
          <Button onPress={handleAccept}>
            <Text>Agregar</Text>
          </Button>
        </View>
      </View>
    </BaseModal>
  )
}
