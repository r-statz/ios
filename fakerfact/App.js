import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native'
import Footer from './Footer'
import Header from './Header'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

// type Props = {}
export default class App extends Component<Props> {
  state = {
    text: '',
    json: {}
  }

  componentDidMount = async() => {
    const response = await fetch('https://api.fakerfact.org/api')
    const json = await response.json()
    this.setState({json})

  }

  checkUrl = () => {
    console.log('state', this.state.text)
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View>
          <TextInput
            id='id'
            style={{height: 40, borderColor: 'pink', borderWidth: 1}}
            onChangeText={(e) => this.setState({text: e})}
            // value={this.props.state.text}
          />
          <Button
            title='Check'
            style={{height: 40, borderColor: 'pink', borderWidth: 1}}
            onPress={() => { this.checkUrl() }}
          />
        </View>
        <Text style={styles.welcome}>{JSON.stringify(this.state.json)}</Text>
        <Footer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
