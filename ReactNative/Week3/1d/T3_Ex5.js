import React from 'react';
import {Text, Image, Button, View, TouchableOpacity, StyleSheet} from 'react-native';
import Eye from './Eye.png';
import Iconzalo from './iconzalo.png';
import Icongoogle from './icogoogle.png';
import Iconface from './iconface.png';
const T3_Ex5 = () => {
  return(
    <View style = {
      {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(49, 170, 82, 0.19)'
      }
    }>

    <View style = {
      {
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: 20,
        width: 100,
        height: 29
      }
    }>
      <Text style = {
        {
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          fontSize: 20
        }
      } 
      >LOGIN</Text>
    </View>

    <View style = {
      {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 100
      }
    }>
    <View style = {
      {
        width: 330,
        height: 54,
        backgroundColor: 'rgba(196, 196, 196, 0.3)',
        borderWidth: 2,
        borderColor: 'rgba(196, 196, 196, 0.3)'
      }
    }> 
      <Text style = {
        {
          fontFamily: 'Roboto',
          fontSize: 14,
          fontWeight: 400,
          paddingTop: 15,
          paddingLeft: 15
        }
      }>Email</Text>
    
    </View>
    <View style = {
      {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: 330,
        height: 54,
        backgroundColor: 'rgba(196, 196, 196, 0.3)',
        borderWidth: 2,
        borderColor: 'rgba(196, 196, 196, 0.3)',
        paddingTop: 15
      }
    }> 
      <Text style = {
        {
          fontFamily: 'Roboto',
          fontSize: 14,
          fontWeight: 400,
          paddingLeft: 15
        }
      }>Password</Text>

      <Image source = {Eye} alt = 'Eye'
        style = {{
          width: 38,
          height: 24.55,
          // paddingTop: 15,
          // paddingLeft: 40
        }}
      >
      </Image>
    </View>
  </View>

    <View style = {
      {
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }
    }>
      <TouchableOpacity style = {
        {
          width: 330,
          height: 45,
          backgroundColor: 'rgba(229, 57, 53, 1)',
          paddingTop: 5
        }
      }>
        <Text style = {
          {
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: 29,
            color: 'white',
            textAlign: 'center'
          }
        }>LOGIN</Text>
      </TouchableOpacity>
    </View>
    
    <View style = {
      {
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 300,
        height: 20
      }}>

      <Text style = {{
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 400
      }}
      >When you agree to terms and conditions</Text>
      
      <Text style = {
        {
          textAlign: 'center',
          fontFamily: 'Roboto',
          fontWeight: 400,
          fontSize: 14
        }
      }>For got your password?</Text>

       <Text style = {
        {
          textAlign: 'center',
          fontFamily: 'Roboto',
          fontWeight: 400,
          fontSize: 14
        }
      }>Or login with</Text>
      </View>

    <View style = {
      {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}>
        <View style = {
          {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: 110,
            height: 45,
            backgroundColor: 'rgba(37, 71, 155, 1)'
          }
        }>
           <Image source = {Iconface} alt = 'iconface'></Image>
        </View>
        <View style = {
          {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: 110,
            height: 45,
            backgroundColor: 'rgba(15, 142, 224, 1)'
          }
        }>
          <Image source = {Iconzalo} alt = 'iconzalo'></Image>
        </View>
        <View style = {
          {
            borderColor: 'rgba(6, 128, 241, 1)',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: 110,
            height: 45,
            backgroundColor: 'rgba(49, 170, 82, 0.19)'
          }
        }>
          <Image source = {Icongoogle} alt = 'icogoogle'></Image>
        </View>
      </View>
      <View style ={
        {
          flex: 0.5,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }
      } ></View>
    </View>
  );
};
export default T3_Ex5;