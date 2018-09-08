import React, {Component} from 'react'
import {Text, View, Button, TextInput, Linking} from 'react-native'
import Styles from './Styles'
import Footer from './Footer'
import Header from './Header'
import Body from './Body'

console.disableYellowBox = true;

export default class App extends Component {
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
  }

  render() {
    return (
      <View style={Styles.container}>
        <Header />
        <Body />
          {/* <TextInput
            id='url'
            style={{height: 40, borderColor: '#7c8287', borderWidth: 1}}
            onChangeText={(e) => this.setState({inputUrl: e})}
          />
          <Button
            title='Check'
            style={Styles.button}
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
      </View> */}
        <Footer />
      </View>
    )
  }
}
