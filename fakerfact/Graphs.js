import React, {Component} from 'react'
import {Text, View} from 'react-native'
import Styles from './Styles'
import Graph from './Graph'

const Graphs = ({predictions}) => {


  return (
      <View>
        { predictions.map((x, i) =>
            <Graph
            key={i}
            x={x}
            name={x.name}
            value={x.value}
            color={x.color}
          />
        )}

      </View>
    )
}
export default Graphs
