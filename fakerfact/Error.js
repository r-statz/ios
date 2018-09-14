import React, {Component} from 'react'
import {Text, View, Linking} from 'react-native'
import Styles from './Styles'


const Error = (props) => {

  return (
      <View style={Styles.errorBox}>
        <Text style={Styles.errorOhno}>
          Oh no!
        </Text>
        <Text style={Styles.errorWalt}>
          Something has gone wrong and Walt can't make a prediction about this url.
        </Text>
        <Text style={Styles.errorUrl}
          onPress={() => Linking.openURL(props.error.url)}>
          { props.error.url }
        </Text>
      <View style={Styles.errorPinkBox}>
        <Text style={Styles.errorMessage}>
          { props.error.errors[0].message }
        </Text>
      </View>
      </View>
  )
}

export default Error
