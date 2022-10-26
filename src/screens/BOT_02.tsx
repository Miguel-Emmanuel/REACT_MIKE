import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

export const BOT_02 = () => {
  return (
    <View>
    <Text >
      The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.
    </Text>
    <Button
      title="BOTON 2"
      onPress={() => Alert.alert('ESTAS EJECUTANFO EL BOTON 2')}
    />
  </View>
  )
}
