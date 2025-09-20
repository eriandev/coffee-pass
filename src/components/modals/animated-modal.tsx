/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react'
import { Modal, View, Text, StyleSheet, TouchableWithoutFeedback, Animated, Easing, Platform } from 'react-native'

type Props = {
  visible: boolean
  onClose: () => void
  children?: React.ReactNode
}

export function AnimatedModal({ visible, onClose, children }: Props) {
  const [showModal, setShowModal] = useState(visible)

  const prevVisible = useRef(visible)
  const translateY = useRef(new Animated.Value(0)).current
  const overlayOpacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (visible && !prevVisible.current) {
      setShowModal(true)

      Animated.parallel([
        Animated.timing(overlayOpacity, {
          toValue: 1,
          duration: 350,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 1000,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]).start()
    }

    if (!visible && prevVisible.current) {
      Animated.parallel([
        Animated.timing(overlayOpacity, {
          toValue: 0,
          duration: 350,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 2000,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start(() => setShowModal(false))
    }

    prevVisible.current = visible
  }, [visible, overlayOpacity, translateY])

  if (!showModal) return null

  return (
    <Modal transparent visible={showModal} animationType="none" statusBarTranslucent onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <Animated.View style={[styles.overlay, { opacity: overlayOpacity }]} />
      </TouchableWithoutFeedback>

      <View style={styles.centered} pointerEvents="box-none">
        <Animated.View
          style={[
            styles.content,
            { transform: [{ translateY }] },
            Platform.OS === 'android' ? { elevation: 6 } : { shadowOpacity: 0.15 },
          ]}
        >
          {children ?? (
            <>
              <Text style={{ fontSize: 16 }}>Contenido del modal</Text>
              <Text style={{ marginTop: 10, color: 'blue' }} onPress={onClose}>
                Cerrar
              </Text>
            </>
          )}
        </Animated.View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 18,
  },
})
