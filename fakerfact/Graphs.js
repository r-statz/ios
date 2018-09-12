import React, {Component} from 'react'
import {AppRegistry, Text, View} from 'react-native'
import Styles from './Styles'
// import Graph from './Graph'

const Graphs = ({predictions}) => {

let bars = predictions.map((x, i) =>
<View key={i} style={Styles.graphBox}>
  <View style={Styles.barBox}>
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'stretch'}}>

        <View style={{flex: 1, height: 25, alignItems: 'flex-end'}}>
        <Text style={Styles.barText}>{ x.name }</Text>
        </View>

        <View style={{flex: x.value, height: 25, backgroundColor: 'pink'}} />

        <View style={{flex: (Number(2) - Number(x.value)), height: 25, backgroundColor: 'steelblue'}} />

      </View>
    </View>
  </View>
</View>

)




  return (
    <View>
        { bars }
    </View>
  //     <View style={Styles.graphBox}>
  //     <View style={{flex: 1, flexDirection: 'column'}}>
  //       <View style={{flex: 1, flexDirection: 'row', alignItems: 'stretch'}}>
  //
  //       <View style={{width: 25, height: 25, alignItems: 'flex-end'}}>
  //         <Text>NAME</Text>
  //       </View>
  //
  //       <View style={{width: 25, height: 25, backgroundColor: 'skyblue'}} />
  //
  //       <View style={{width: 25, height: 25, backgroundColor: 'steelblue'}} />
  //
  //     </View>
  //
  //   </View>
  // </View>

  )
}

export default Graphs
AppRegistry.registerComponent('FakerFact', () => FlexDirectionBasics)
