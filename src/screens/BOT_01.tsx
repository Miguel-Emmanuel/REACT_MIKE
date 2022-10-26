import React from 'react'
import { StyleSheet,   Button , Text, Alert, View } from 'react-native';

export const BOT_01 = () => {
  return (
    <View>
    <Text >
      The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.
    </Text>
    <Button
      title="BOTON 1"
      onPress={() => Alert.alert('ESTAS EJECUTANDO EL BOTON 1')}
    />
  </View>
  )
}
