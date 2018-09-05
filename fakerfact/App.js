import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import Footer from './Footer'
import Header from './Header'
import Body from './Body'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

type Props = {}


export default class App extends Component<Props> {
  state = {
    text: '',
    json: {}
  }

  checkUrl = () => {

    console.log('hi ty')
  }

  componentDidMount = async() => {
    const response = await fetch('https://api.fakerfact.org/api')
    const json = await response.json()
    this.setState({json})

  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Body
          state={this.state}
          checkUrl={this.checkUrl}
        />
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
