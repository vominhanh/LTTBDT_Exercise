import React from 'react';
import {Text, Image, Button, View, TouchableOpacity, StyleSheet} from 'react-native';
import Eye from './Eye.png';
import avatarIcon from './avatar_user.png';
const T3_Ex6 = () => {
  return(
    <View style = {
      {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(251, 203, 0, 1)',
        paddingBottom: 12,
      }
    }>
      <View style = {
        {
          flex: 0.5,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }
      }>
        <Text style = {
          {
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: 20,
            textAlign: 'left',
            paddingRight: 250
          }
        }>LOGIN</Text>
      </View>
      
      <View style = {
        {
          flex: 0.5,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }
      }>
        <View style = {
          {
            flexDirection: 'row',
            width: 330,
            height: 54,
            backgroundColor: 'rgba(196, 196, 196, 0.3)',
            padding: 12,
            borderColor: 'white',
            borderWidth: 2,
            marginBottom: 10
          }
        }>
        <Image style = {
          {
            width: 32,
            height: 32,
            marginRight: 8
          }
        }
        source = {avatarIcon} alt = 'avatar_user'/>
        <Text style = {
          {
            padding: 5,
            fontWeight: 500,
            fontSize: 18,
            fontFamily: 'Roboto'
          }
        }>Name</Text>
        </View>

        <View style = {
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 330,
            height: 54,
            backgroundColor: 'rgba(196, 196, 196, 0.3)',
            padding: 12,
            borderColor: 'white',
            borderWidth: 2,
            marginBottom: 10,
          }
        }>
        <Image style = {
          {
            width: 32,
            height: 32,
            marginRight: 8
          }
        }
        source = {avatarIcon} alt = 'avatar_user'/>
        <Text style = {
          {
            padding: 5,
            fontWeight: 500,
            fontSize: 18,
            fontFamily: 'Roboto',
            paddingRight: 90
          }
        }>PASSWORD</Text>
        <Image style = {
          {
            width: 50,
            height: 32,
            marginRight: 8
          }
        }
        source = {Eye} alt = 'Eye'/>
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
            backgroundColor: 'black',
            padding: 12
          }
        }>
          <Text style = {
            {
              fontFamily: 'Roboto',
              fontWeight: 700,
              fontSize: 20,
              color: 'white',
              textAlign: 'center'
            }
          }>LOGIN</Text>
        </TouchableOpacity>
      </View>
    
      <View style = {
        {
          flex: 0.5,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}>
        <Text style = {
          {
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: 20,
          }
        }>CREATE ACCOUNT</Text>
      </View>
    
    
    </View>
  );
};
export default T3_Ex6;