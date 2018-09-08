import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Button, TextInput, Linking} from 'react-native'
import Footer from './Footer'
import Header from './Header'
console.ignoredYellowBox = ['Remote debugger'];
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// })

// type Props = {}
export default class App extends Component<Props> {
  state = {
    inputUrl: '',
    apiUrl: '',
    results: {},
    toggle: false
  }

  componentDidMount = async() => {
    const response = await fetch('https://api.fakerfact.org/api')
    const json = await response.json()
    this.setState({apiUrl: json._links.predictions.href})
  }

  async postUrl(url) {
    // console.log(this.state.newsUrl, 'url')
    const response = await fetch(this.state.apiUrl, {
      method: 'POST',
      body: JSON.stringify({ 'url': url}),
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json'
        }
    })
    const json = await response.json()
    this.setState({results: json})
  }

  toggle = () => {
    this.state.toggle = !this.state.toggle
  }


  checkUrl = (url) => {
    this.postUrl(url)
    this.toggle()
    // console.log(this.state, "toggle")
  }

  render() {
    console.log(this.state, "render")
    return (
      // <View style={styles.container}>
      //   <View style={{flex: 1}}>
      //   <View style={{flex: 1, backgroundColor: 'powderblue'}} />
      //   <View style={{flex: 2, backgroundColor: 'skyblue'}} />
      //   <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      // </View>
        <Header />
          <TextInput
            id='id'
            style={{height: 40, borderColor: 'pink', borderWidth: 1}}
            onChangeText={(e) => this.setState({inputUrl: e})}
          />
          <Button
            title='Check'
            style={{height: 40, borderColor: 'pink', borderWidth: 1}}
            onPress={() => { this.checkUrl(this.state.inputUrl) }}
          />
        <Text>Checking URL:</Text>
        <Text style={{color: 'blue'}}
          onPress={() => Linking.openURL(this.state.results.url)}>
          { this.state.results.url }
        </Text>
        <Text>{ this.state.results.walt_says}</Text>
        <View>
          <Text>
            { JSON.stringify(this.state.results.predictions) }
          </Text>
        </View>
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
