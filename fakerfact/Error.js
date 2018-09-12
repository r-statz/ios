import React, {Component} from 'react'
import {Text, View} from 'react-native'
import Styles from './Styles'


const Error = (props) => {


  return (
    <View>
      <Text style={{color: 'blue'}}
        onPress={() => Linking.openURL(props.inputUrl)}>
      { props.inputUrl }
      </Text>
    </View>
  )
}

export default Error
