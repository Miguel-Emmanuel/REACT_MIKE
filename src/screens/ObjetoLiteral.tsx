import React from 'react'
import { View, Text } from 'react-native';

export const ObjetoLiteral = () => {
    const persona ={
        nombre:'MIGUEL',
        edad:20,
    }
  return (
  
    <View style={{
        backgroundColor: 'blue',
        flexDirection: 'column',
    }}>
        <Text
        style={{
            backgroundColor:'pink',
            textAlign: 'center',
            
            padding:80 
        }}>
 HOLA MUNDO AMIKO SOY MIKE
        </Text>
        <Text>
{JSON.stringify(persona,null,
     )}

        </Text>
  

     
     
        </View>
  )
}

