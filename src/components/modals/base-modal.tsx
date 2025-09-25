import { Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import type { ModalProps, StyleProp, ViewStyle } from 'react-native'

import { CrossIcon } from '@/components/icons/cross'
import { colors, fonts } from '@/theme/values'
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
                  <Button variant="ghost" onPress={onClose}>
                    <CrossIcon color={styles.header.color} />
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
    backgroundColor: colors.bg.overlay,
  },
  content: {
    padding: 24,
    width: '100%',
    borderWidth: 2,
    borderRadius: 24,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderColor: colors.border.modal,
    backgroundColor: colors.bg.primary,
  },
  header: {
    width: '100%',
    paddingBottom: 8,
    alignItems: 'center',
    flexDirection: 'row',
    color: colors.text.primary,
    justifyContent: 'space-between',
  },
  title: {
    width: 'auto',
    ...fonts.title,
    color: colors.text.primary,
    fontSize: fonts.sizes.title,
  },
})
