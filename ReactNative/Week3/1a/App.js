import React from 'react';
import {Text, Image, View, Button, TouchableOpacity} from 'react-native';
import Ellipse from './Ellipse.png'
const T3_Ex1 = () => {
  return (
    <View style = {{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 204,249, 1)'
    }}>

      <View style = {{
        flex: 0.2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source = {Ellipse} alt = 'Ellipse'/>
      </View>

      <View style = {{
        flex: 0.2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style = {{
          fontFamily: 'Roboto',
          fontSize: 25,
          fontWeight: 700,
          textAlign: 'center'
        }}>GROW {'\n'} YOUR BUSINESS</Text>
      </View>

      <View style = {{
        flex: 0.2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style = {{
          textAlign: 'center',
          fontFamily: 'Roboto',
          fontSize: 15,
          fontWeight: 700
        }}>We will help you to grow your business using {'\n'} online server</Text>
      </View>

      <View style = {{
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
      }}>
        <TouchableOpacity style = {{
          width: 119,
          height: 48,
          backgroundColor: 'rgba(227, 192, 0, 1)'
        }}>
          <Text style = {{
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: 20,
            textAlign: 'center',
            paddingTop: 14
          }}>LOGIN</Text>
        </TouchableOpacity>

         <TouchableOpacity style = {{
          width: 119,
          height: 48,
          backgroundColor: 'rgba(227, 192, 0, 1)'
        }}>
          <Text style = {{
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: 20,
            textAlign: 'center',
            paddingTop: 14
          }}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
};

export default T3_Ex1;