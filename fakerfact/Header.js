import React, {Component} from 'react'
import {Text, View, TouchableOpacity, Image} from 'react-native'
import Styles from './Styles'

const Header = (props) => {
  return(
      <View style={Styles.header}>
        <TouchableOpacity
          onPress={props.logoButton}>
          <Image source={require('./assets/icon_29pt.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.logoButton}>
        <Text>FakerFact</Text>
        </TouchableOpacity>
      </View>
  )
}

export default Header
