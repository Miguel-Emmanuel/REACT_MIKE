import React from 'react'
import { StyleSheet,   Button , View, SafeAreaView, Text, Alert } from 'react-native';

export const BOT_03 = () => {
  return (
    <View>
    <Text >
      All interaction for the component are disabled.
    </Text>
    <Button
      title="BOTON3"
      disabled
      onPress={() => Alert.alert('ESTAS EJECUTANDO EL BOTON 3')}
    />
  </View>
  )
}
