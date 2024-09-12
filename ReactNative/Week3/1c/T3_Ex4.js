import React from 'react';
import {Text, Image, Button, View, TouchableOpacity, StyleSheet} from 'react-native';
import Rectangle from './Rectangle1.png';

const T3_Ex4 = () => {
  return(
    <View style = {
      {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(199, 244, 246, 1)'
      }
    }>
      <View style = {
      {
        flex: 0.2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
        }
      }>
        <Text style = {
          {
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            fontSize: 60,
          }
        }>CODE</Text>
      </View>
      
      <View style = {
        {
          flex: 0.1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }>
        <Text style = {
          {
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            fontSize: 20,
            paddingTop: 40
          }
        }
        >VERIFICATION</Text>
      </View>
      <View style = {{
        flex: 0.2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'
      }}>
        <Text style = {
          {
            fontFamily: 'Roboto',
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'center'
          }
        }
        >Enter ontime password sent on {'\n'} ++849092605798</Text>
      </View>

      <View style = {
        {
          flex: 0.2,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <View style = {
          {
            width: 50,
            height: 50,
            borderColor: 'black',
            borderWidth: 2
          }
        }></View>
        <View style = {
          {
            width: 50,
            height: 50,
            borderColor: 'black',
            borderWidth: 2
          }
        }></View>
        <View style = {
          {
            width: 50,
            height: 50,
            borderColor: 'black',
            borderWidth: 2
          }
        }></View>
        <View style = {
          {
            width: 50,
            height: 50,
            borderColor: 'black',
            borderWidth: 2
          }
        }></View>
        <View style = {
          {
            width: 50,
            height: 50,
            borderColor: 'black',
            borderWidth: 2
          }
        }></View>
        <View style = {
          {
            width: 50,
            height: 50,
            borderColor: 'black',
            borderWidth: 2
          }
        }></View>
        <View style = {
          {
            width: 50,
            height: 50,
            borderColor: 'black',
            borderWidth: 2
          }
        }></View>
      </View>
      <View style = {{
        flex: 0.1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'
      }}>
        <TouchableOpacity style = {
          {
            backgroundColor: 'yellow',
            width: 339,
            height: 50,
          }
        }>
          <Text style = {
            {
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              fontSize: 15,
              paddingTop: 20,
              textAlign: 'center'
            }
          }>VERIFY CODE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default T3_Ex4;