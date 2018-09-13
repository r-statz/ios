import React, {Component} from 'react'
import {Text, View, ActivityIndicator} from 'react-native'
import Styles from './Styles'

const Spinner = () => {
  console.log( "proops")
  return(
    <View style={Styles.horizontal}>
        <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )
}

export default Spinner
