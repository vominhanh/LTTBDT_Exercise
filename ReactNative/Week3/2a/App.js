import React from 'react';
import {Text, Image, Button, View, TouchableOpacity, StyleSheet} from 'react-native';
import EyeIcon from './Eye.png';
import RoundIcon from './roundicon.png';
const T3_Ex8 = () => {
  return(
    <View style = {
      {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(49, 170, 82, 0.19)',
      }
    }>

    <View style = {
      {
        flex: 0.1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }
    }>
      <Text style = {
        {
          fontFamily: 'Roboto',
          fontWeight: '700',
          fontSize: 25
        }
      } 
      >REGISTER</Text>
    </View>

    <View style = {
      {
        flex: 0.4,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 12
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
        }>Name</Text>
      
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
        }>Phone</Text>
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
      </View><View style = {
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
        }>Birthday</Text>
      </View>
  </View>

  <View style = {
      {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }
    }>
      <Image source = {RoundIcon} alt = 'roundicon'/>
      <Text style = {{
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 400,
        paddingLeft: 10,
        paddingRight: 50
      }}>Male</Text>

      <Image source = {RoundIcon} alt = 'roundicon'/>
      <Text style = {{
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 400,
        paddingLeft: 10
      }}>Female</Text>
  </View>
    
  <View style = {
      {
        flex: 0.1,
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
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}>
        <TouchableOpacity style = {{
          width: 330,
          height: 45,
          backgroundColor: 'rgba(229, 57, 53, 1)'
        }}>
          <Text style = {{
            fontFamily: 'Roboto',
            fontSize: 20,
            fontWeight: 700,
            color: 'white',
            textAlign: 'center',
            paddingTop: 10
          }}>REGISTER</Text>
        </TouchableOpacity>
    </View>

    <View style = {{
      flex: 0.1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style = {{
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 14
      }}>When you agree to terms and conditions</Text>
    </View>
  </View>
  );
};
export default T3_Ex8;