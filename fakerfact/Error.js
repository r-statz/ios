import React, {Component} from 'react'
import {Text, View, Linking} from 'react-native'
import Styles from './Styles'


const Error = (props) => {
  console.log(props, 'props error')

  return (
      <View>
        <Text >
          Oh no!
        </Text>
        <Text >
          Something has gone wrong and Walt can't make a prediction about this url.
        </Text>
        <Text
          onPress={() => Linking.openURL(props.error.url)}>
          { props.error.url }
        </Text>
      <View >
        <Text >
          { props.error.errors[0].message }
        </Text>
      </View>
      </View>
  )
}

export default Error
