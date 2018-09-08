// import React, {Component} from 'react'
// import {Text, View} from 'react-native'
// import Styles from './Styles'
//
// const Body = (props) => {
//
//   return (
//
//     <View style={Styles.body}>
//       <TextInput
//         id='id'
//         // style={{height: 40, borderColor: 'pink', borderWidth: 1}}
//         onChangeText={(e) => this.setState({inputUrl: e})}
//       />
//       <Button
//         title='Check'
//         style={{height: 40, borderColor: 'pink', borderWidth: 1}}
//         onPress={() => { this.checkUrl(this.state.inputUrl) }}
//       />
//     <Text>Checking URL:</Text>
//     <Text style={{color: 'blue'}}
//       onPress={() => Linking.openURL(this.state.results.url)}>
//       { this.state.results.url }
//     </Text>
//     <Text>{ this.state.results.walt_says}</Text>
//     <View>
//       <Text>
//         { JSON.stringify(this.state.results.predictions) }
//       </Text>
//     </View>
//   </View>
//   )
// }
//
// export default Body
