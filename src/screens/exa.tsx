import React from 'react'
import { StyleSheet,   Button , Text, Alert, View } from 'react-native';

export const exa = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 2, backgroundColor: 'blue',}}>

        <Text style={{
marginBottom: 80,
marginTop: 80,
textAlign: 'center'
        }}>
PROYECTO GUIA DE ESTUDIO    </Text>
    <Button
      title="BOTON 1"
      onPress={() => Alert.alert('ESTAS EJECUTANDO EL BOTON 1')}
    />
    
    <View style={{
      marginTop: 80,
    }}>
    <Button
      title="BOTON 2"
      onPress={() => Alert.alert('ESTAS EJECUTANDO EL BOTON 2')}
    />
    </View>
          
        </View>
        
        <View style={{ flex: 3, flexDirection: 'column' }}>
      <View style={{flex:1, backgroundColor:'red', flexDirection:'row'}}>
      <View style={{flex:4, backgroundColor:'red', flexDirection:'row'}}>

</View>  
<View style={{flex:5, backgroundColor:'gray', flexDirection:'row'}}>
  <Text>
   USUARIO:
   <Button
          title="Ingresa tu usuario"
          onPress={() => Alert.alert('NO SE COMO PONER INPUTS EN REACT')}
    

    />
  </Text>
  


  <Text>
   PASSWORD:
   <Button
          title="ingresa tu contrasena"
          onPress={() => Alert.alert('NO SE COMO PONER INPUTS EN REACT')}
    

    />
  </Text>
  <Text
  style={{marginTop:200,
  marginLeft: 250}}>
    <Button
          title="LOGIN"
          onPress={() => Alert.alert('DESEAS INCIAR SESION')}
    

    />
  </Text>

</View>  
      </View>  
      <View style={{flex:1, backgroundColor:'orange', flexDirection:'row'}}>
        <Text style={{
          textAlign:'center',
          marginBottom: 80,
        }}>
          MIGUEL EMMANUEL ARRIOLA ORTEGA
        </Text>

</View>   
      </View>
       </View>
       

  )
}
