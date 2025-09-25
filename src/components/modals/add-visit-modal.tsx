import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import DatePicker from 'react-native-date-picker'

import { colors } from '@/theme/values'
import { storage } from '@/shared/storage'
import { Button } from '@/components/button'
import { BaseModal } from '@/components/modals/base-modal'

export interface AddVisitlModalProps {
  visible: boolean
  coffeeShopId: string
  onClose: () => void
}

export const AddVisitModal = ({ coffeeShopId, visible, onClose }: AddVisitlModalProps) => {
  const maximumDate = new Date()
  const minimumDate = new Date('2020-01-01')
  const [date, setDate] = useState(new Date())

  const resetDate = () => {
    setDate(new Date())
  }

  const handleClose = () => {
    resetDate()
    onClose()
  }

  const handleAccept = () => {
    const year = date.getFullYear()
    const day = date.getDate().toString().padStart(2, '00')
    const month = (date.getMonth() + 1).toString().padStart(2, '00')
    storage.setVisit(coffeeShopId, `${year}/${month}/${day}`)

    onClose()
  }

  return (
    <BaseModal
      transparent
      visible={visible}
      animationType="fade"
      title="Agrega una visita"
      onRequestClose={handleClose}
    >
      <View>
        <DatePicker
          date={date}
          mode="date"
          locale="es"
          theme="light"
          onDateChange={setDate}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          dividerColor={colors.text.primary}
        />

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
