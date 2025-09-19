import { Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import type { ModalProps, StyleProp, ViewStyle } from 'react-native'

import { CrossIcon } from '@/components/icons/cross'
import { Button } from '@/components/button'
import type { FC } from '@/shared/types'

type ModalPropsPicked = Pick<
  ModalProps,
  'animationType' | 'presentationStyle' | 'style' | 'testID' | 'transparent' | 'visible' | 'onLayout' | 'onRequestClose'
>

export interface BaseModalProps extends ModalPropsPicked {
  title: string
  closeable?: boolean
  overlayStyle?: StyleProp<ViewStyle>
  onClose?: () => void
}

export const BaseModal: FC<BaseModalProps> = ({
  style,
  title,
  children,
  overlayStyle,
  closeable = false,
  onClose = () => {},
  onLayout = () => {},
  ...modalProps
}) => {
  return (
    <Modal {...modalProps}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={[styles.overlay, overlayStyle]}>
          <TouchableWithoutFeedback>
            <View style={[styles.content, style]} onLayout={onLayout}>
              <View style={styles.header}>
                <Text numberOfLines={1} style={styles.title}>
                  {title}
                </Text>
                {closeable && (
                  <Button onPress={onClose}>
                    <CrossIcon width={20} height={20} color={styles.header.color} />
                  </Button>
                )}
              </View>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    padding: 24,
    width: '100%',
    borderRadius: 24,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  header: {
    width: '100%',
    color: '#000',
    paddingBottom: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    width: 'auto',
    fontWeight: 600,
    color: '#06161C',
  },
})
