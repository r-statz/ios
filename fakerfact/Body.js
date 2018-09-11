import React, {Component} from 'react'
import {Text, TextInput, View, Linking} from 'react-native'
import Button from 'react-native-button'
import Styles from './Styles'

export default class Body extends Component {

  render() {
    let display = this.props.toggle ?
      <View>
        <View style={Styles.checkingUrl}>
          <Text style={Styles.checkingUrlText}>Checking URL:</Text>
          <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL(this.props.linkingUrl)}>
          { this.props.linkingUrl }
          </Text>
          </View>
        <View >
          <Text style={Styles.waltSays}>{ this.props.walt}</Text>
        </View>
        <View>
          <Text style={{fontSize: 32}}>
            Hello, Jeff. Graph is in the mail...
          </Text>
        </View>
      </View> : <View></View>

    return (
    <View style={Styles.body}>
      <TextInput
        style={Styles.inputBox}
        onChangeText={(e) => this.props.inputText(e)}
        value={this.props.inputUrl}
        placeholder={this.props.placeHolder}
        clearButtonMode='always'
      />
        <View style={Styles.checkBox}>
          <Button
            containerStyle={Styles.buttonBox}
            title='Check'
            style={Styles.button}
            onPress={ this.props.checkUrl }
            >Check
          </Button>
        </View>
        <View>
          { display }
        </View>
        </View>

  )
}
}
