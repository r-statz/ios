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
    toggle: false,
    placeHolder: 'Enter a URL'
  }

  componentDidMount = async() => {
    const response = await fetch('https://api.fakerfact.org/api')
    const json = await response.json()
    this.setState({apiUrl: json._links.predictions.href})
  }

  async postUrl(url) {
    try {
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
  } catch(err) {
    console.log(err, "yo mammy")
  }
}

  logoButton = () => {
    this.setState({toggle: false})
  }

  inputText = (e) => {
    console.log(e, 'e')
    this.setState({inputUrl:  e})
  }

  checkUrl = () => {
    this.postUrl(this.state.inputUrl)
    this.setState({toggle: true,
                  placeHolder: 'Enter another URL',
                  inputUrl: ''
                })
  }

  render() {
    console.log(this.state.results.predictions)
    // console.log(this.state.inputURl, 'inputUrl')
    return (

      <View style={Styles.container}>
        <Header
          logoButton = {this.logoButton}
          toggle={this.state.toggle}
        />
        <Body
          postUrl={this.postUrl}
          checkUrl={this.checkUrl}
          walt={ this.state.results.walt_says}
          linkingUrl = {this.state.results.url}
          predictions={this.state.results.predictions}
          toggle={this.state.toggle}
          placeHolder={this.state.placeHolder}
          inputText={this.inputText}
          inputUrl={this.state.inputUrl}
          // logoButton={this.logoButton}
        />
        <Footer />
      </View>
    )
  }
}
