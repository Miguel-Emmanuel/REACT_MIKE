import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, } from 'react-native';
import {BOT_02}  from './src/screens/BOT_02';
import { exa } from './src/screens/exa';
import { BOT_01 } from './src/screens/BOT_01';
import { BOT_03 } from './src/screens/BOT_03';
import { BOT_04 } from './src/screens/BOT_04';
import { BOT_05 } from './src/screens/BOT_05';

const image = { uri: "https://reactjs.org/logo-og.png" };
export const App = () => {
  return (<View style={{ flex: 1, flexDirection: 'row' }}>
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
       
  );
};







