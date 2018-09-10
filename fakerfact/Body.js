import React, {Component} from 'react'
import {Text, TextInput, View, Linking} from 'react-native'
import Button from 'react-native-button'
import Styles from './Styles'

export default class Body extends Component {

  state = {
    inputUrl: ''
  }

  render() {
    // console.log(this.state, "body props")
    let display = this.props.toggle ?
      <View>
        <Text>Checking URL:</Text>
        <Text style={{color: 'blue'}}
          onPress={() => Linking.openURL(this.props.linkingUrl)}>
          { this.props.linkingUrl }
        </Text>
        <Text>{ this.props.walt}</Text>
        <View>
          <Text>
            { JSON.stringify(this.props.predictions) }
          </Text>
        </View>
      </View> : <View></View>

    return (

    <View style={Styles.body}>
      <TextInput
        id='inputBox'
        style={Styles.inputBox}
        onChangeText={(e) => this.setState({inputUrl: e})}
      />
      <Button
        title='Check'
        style={Styles.button}
        onPress={() => { this.props.checkUrl(this.state.inputUrl) }}
        >Check
      </Button>
      { display }
      </View>
  )
}
}
