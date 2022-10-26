import React from 'react'
import { StyleSheet,   Button , View, SafeAreaView, Text, Alert } from 'react-native';

export const BOT_04 = () => {
  return (
    <View>
    <Text >
      This layout strategy lets the title define the width of the button.
    </Text>
    <View >
      <Button
        title="BOTON 4"
        onPress={() => Alert.alert('ESTAS EJECUTANDO EL BOTON 4')}
      />
    
    </View>
  </View>
  )
}
