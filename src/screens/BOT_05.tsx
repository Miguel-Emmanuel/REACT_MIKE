import React from 'react'
import { StyleSheet,   Button , Text, Alert, View } from 'react-native';

export const BOT_05 = () => {
  return (
    <View>
    <Text >
      Adjust the color in a way that looks standard on each platform. On  iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button.
    </Text>
    <Button
      title="Press me"
      color="#f194ff"
      onPress={() => Alert.alert('ESTAS EJECUTANDO EL BOTON 5')}
    />
  </View>
  )
}
