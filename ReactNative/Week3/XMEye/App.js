import React from 'react';
import {Text, Image, Button, View, TouchableOpacity, StyleSheet} from 'react-native';
import Eye from './eyeballicon.png';
import FaceIcon from './faceicon.png';
import HumanIcon from './humanicon.png';
import HumanPlusIcon from './humanplusicon.png';
import LockIcon from './lockicon.png';
import LineIcon from './Lineicon.png';
import LineIcon1 from './Lineicon1.png';
import WifiIcon from './wifiicon.png';
const T3_Ex7 = () => {
  return(
    <View style = {
      {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 12,
      }
    }>
      <View style = {
        {
          flex: 0.2,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
      <Image source = {Eye} alt = 'eyeballicon'/>
      </View>

      <View style = {
        {
          flex: 0.2,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <View style = {
          {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: 330,
            height: 54,
          }}>
          <Image source = {HumanIcon} alt = 'humanicon'/>
          <Text style = {
            {
              color: 'gray',
              fontWeight: 400,
              fontSize: 18,
              fontFamily: 'Roboto',
              paddingLeft: 20,
              paddingRight: 60
            }
          }>Please input user name</Text>
        </View>
        <View style = {
          {
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            height: 10
          }}>
          <Image style = {{
            width: 300
          }}
          source = {LineIcon} alt = 'Lineicon'/>
        </View>

         <View style = {
          {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: 330,
            height: 54,
            paddingTop: 20
          }}>
          <Image source = {LockIcon} alt = 'lockicon'/>
          <Text style = {
            {
              color: 'gray',
              fontWeight: 400,
              fontSize: 18,
              fontFamily: 'Roboto',
              paddingLeft: 20,
              paddingRight: 60
            }
          }>Please input user name</Text>
        </View>
        <View style = {
          {
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            height: 10
          }}>
          <Image style = {{
            width: 300
          }}
          source = {LineIcon} alt = 'Lineicon'/>
        </View>
      </View>

      <View style = {{
        flex: 0.1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
        <TouchableOpacity style = {{
          width: 330,
          height: 54,
          backgroundColor: 'rgba(56, 111, 252, 1)'
        }}>
          <Text style = {{
            color: 'white',
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: 18,
            textAlign: 'center',
            paddingTop: 17
          }}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <View style = {{
        flex: 0.1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style = {{
          flexDirection: 'row',
          width: 330,
        }}>
        <Text style = {{
          fontFamily: 'Roboto',
          fontWeight: 400,
          fontSize: 18,
          paddingRight: 130
        }}>Register</Text>
        <Text style = {{
          fontFamily: 'Roboto',
          fontWeight: 400,
          fontSize: 18,
          textAlign: 'center'
        }}>Forgot Password</Text>
        </View>
      </View>
      <View style = {
        {
          flex: 0.1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image source = {LineIcon1} alt = 'Lineicon1'/>
          <Text style = {{
              fontFamily: 'Roboto',
              fontWeight: 400,
              fontSize: 18,
              paddingRight: 2,
              paddingLeft: 2
          }}>Other Login Methods</Text>
          <Image source = {LineIcon1} alt = 'Lineicon1'/>
      </View>

      <View style = {{
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 330,
        height: 54
      }}>
        <Image source = {HumanPlusIcon} alt = 'humanplusicon'/>
        <Image source = {WifiIcon} alt = 'wifiicon'/>
        <Image style = {{
            width: 80,
            height: 80,
            backgroundColor: 'rgba(58, 87, 156, 1)'
        }} 
        source = {FaceIcon} alt = 'faceicon'
        />
      </View>
    
    </View>
  );
};
export default T3_Ex7;