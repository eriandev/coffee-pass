import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
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
    console.warn(`${day}/${month}/${year}`)

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

        <View style={styles.actions}>
          <Button variant="secondary" label="Cancelar" onPress={handleClose} />
          <Button variant="primary" label="Agregar" onPress={handleAccept} />
        </View>
      </View>
    </BaseModal>
  )
}

const styles = StyleSheet.create({
  actions: {
    columnGap: 16,
    paddingTop: 32,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
})
