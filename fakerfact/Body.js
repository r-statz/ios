import React, {Component} from 'react'
import {Text, TextInput, View, Linking} from 'react-native'
import Button from 'react-native-button'
import Styles from './Styles'

export default class Body extends Component {

  render() {
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
        ref='peanuts'
        style={Styles.inputBox}
        placeholder={this.props.placeHolder}
        onChangeText={(e) => this.props.inputUrl(e)}
      />
      <View style={Styles.box}>
          <Button
            containerStyle={Styles.buttonBox}
            title='Check'
            style={Styles.button}
            onPress={ (e) =>  {this.props.checkUrl(e)}}
            >Check
          </Button>
        </View>

      { display }
    </View>

  )
}
}
