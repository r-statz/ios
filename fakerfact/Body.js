import React, {Component} from 'react'
import {Text, View, Button, TextInput} from 'react-native'


export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return(
      <View>
        <TextInput
          style={{height: 40, borderColor: 'pink', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.props.state.text}
        />
        <Button
          title="Check"
        />

        <Text>
          BODY!!!!!!
        </Text>
      </View>
    )
  }
}
