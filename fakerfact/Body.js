import React, {Component} from 'react'
import {Text, View, Button, TextInput} from 'react-native'


export default class Body extends Component {
  constructor(props){
    super(props)
    state={
      text: ''
    }
  }

  checkUrl = () => {

    console.log('state', this.state)
  }

  // inputUrl = (e) => {
  //   this.setState({text: e})
  //   console.log('this state', this.state)
  // }

  render(){
    // console.log(this.props.state.text, 'propsstatetext')
    return(
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

        <Text>
          BODY!!!!!!
        </Text>
      </View>
    )

}
}
