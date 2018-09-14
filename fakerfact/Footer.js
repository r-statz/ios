import React, {Component} from 'react'
import {Text, View} from 'react-native'
import Styles from './Styles'

const Footer = () => {

  return(
    <View style= {Styles.footer}>
      <Text style={Styles.footerText}>
        FakerFact ™ Copyright © 2017. All Rights Reserved
      </Text>
    </View>
  )
}

export default Footer
