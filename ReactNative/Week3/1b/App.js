import React from 'react';
import {Text, Image, Button, View, TouchableOpacity} from 'react-native';
import LockIcon from './lock3.icon.png';
import MailIcon from './mailicon.png';

const T3_Ex3 = () => {
  return(
    <View style = {{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(199, 244, 246, 1)'
    }}>
      <View style = {{
        flex: 0.2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
       
      }}>
        <Image source = {LockIcon} alt = 'lock3'/>
      </View>
      
      <View style = {{
        flex: 0.2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style = {{
          color: 'black',
          fontWeight: 'bold',
          fontFamily: 'Roboto',
          fontSize: '25',
          textAlign: 'center'
        }}>FORGET {'\n'} PASSWORD</Text>
      </View>
      
      <View style = {{
        flex: 0.1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text style = {{
        fontWeight: '700',
        fontFamily: 'Roboto',
        fontSize: '15',
        textAlign: 'center'
      }}>Provide your account’s email for which you {'\n'} want to reset your password</Text>
      </View>
      
      <View style = {{
        flex: 0.1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style = {
          {
            flexDirection:'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(196, 196, 196, 1)',
            width: 305,
            height: 45
          }
        }>
          <Image source = {MailIcon} alt = 'mailicon'/>
          <Text style = {{
              fontWeight: '400',
              fontSize : 15,
              fontFamily : 'Roboto',
              flex: 1,
            }}>Email</Text>
        </View>
      </View>
      
      <View style = {
        {
          flex: 0.1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }
      }>
        <TouchableOpacity
          style = {{
            backgroundColor: 'rgba(227, 192, 0, 1)',
            width: 305,
            height: 45
          }}
        >
        <Text style = {
          {
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'center',
            paddingTop: 15
          }
        }>NEXT</Text>
        </TouchableOpacity>
      </View>
    
    </View>
  
  );
};
export default T3_Ex3;