import React from 'react'
import { StyleSheet,   Button , Text, Alert, View } from 'react-native';


export const SECCION = () => {
  return (
    <View style={{
        flexDirection: 'column',
        justifyContent: 'center',
            }}>
             
        <Text
        style={{
            backgroundColor:'',
            textAlign: 'center',
            flexDirection: 'column',
            padding:40,
        }}>
  
  MENU PRINCIPAL
</Text>
<Text
        style={{textAlign: 'center'}}>
           <Button
      title="BOTON 1"
      onPress={() => Alert.alert('ESTAS EJECUTANDO EL BOTON 1')}
    />
        </Text>

        <Text
        style={{textAlign: 'center'}}>
           <Button
      title="BOTON 2"
      onPress={() => Alert.alert('ESTAS EJECUTANDO EL BOTON 2')}
    />
        </Text>
  
    </View>
    
 
        
  )
}
