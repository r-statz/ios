import React, {Component} from 'react'
import {AppRegistry, Text, View} from 'react-native'
import Styles from './Styles'
import Color from 'color'

const Graph = ({predictions}) => {

let colorArray = predictions.map(x => Color(x.color).fade(0.85).rgb().string())

let noHate = predictions.slice(0, predictions.length-1)

let bars = noHate.map((x, i) =>
<View key={i} style={Styles.graphBox}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'stretch'}}>

        <View style={{flex: 1, height: 25, alignItems: 'flex-end'}}>
        <Text style={Styles.barText}>{ x.name }</Text>
        </View>

        <View style={{flex: Number(x.value) * Number(2), height: 25, backgroundColor: x.color}} />

        <View style={{flex: (Number(2) - Number(x.value * 2)) , height: 25, backgroundColor: colorArray[i]}} />

      </View>
    </View>

)




  return (
    <View>
        { bars }
    </View>
  )
}

export default Graph
