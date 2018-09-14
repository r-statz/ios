import React, {Component} from 'react'
import {Text, View, ActivityIndicator} from 'react-native'
import Styles from './Styles'

const Spinner = () => {
  return(
    <View style={Styles.body}>
      <View style={Styles.horizontal}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    </View>

  )
}

export default Spinner
