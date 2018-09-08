import React, {Component} from 'react'
import {Text, TextInput, Button, View, Linking} from 'react-native'
import Styles from './Styles'

export default class Body extends Component {

  state = {
    inputUrl: ''
  }
  // checkUrl = (url) => {
  //   this.props.postUrl(url)
  //   this.toggle()
  // }

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
        id='mymom'
        style={{height: 40, borderColor: 'pink', borderWidth: 1}}
        onChangeText={(e) => this.setState({inputUrl: e})}
      />
      <Button
        title='Check'
        style={{height: 40, borderColor: 'pink', borderWidth: 1}}
        onPress={() => { this.props.checkUrl(this.state.inputUrl) }}
      />
      { display }
  </View>
  )
}
}
