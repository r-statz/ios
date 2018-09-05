import React, {Component} from 'react'
import {Text, View, Button, TextInput} from 'react-native'


const Body = (props) => {

    // console.log(this.props.state.text, 'propsstatetext')
    return(
      <View>
        <TextInput
          style={{height: 40, borderColor: 'pink', borderWidth: 1}}
          // onChangeText={(text) => setState({text: text})}
          // value={props.state.text}
        />
        <Button
          title='Check'
          style={{height: 40, borderColor: 'pink', borderWidth: 1}}
          onPress={()=> {props.checkUrl()}}
        />

        <Text>
          BODY!!!!!!
        </Text>
      </View>
    )

}

export default Body
