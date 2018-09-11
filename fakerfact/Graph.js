import React, {Animated, Component} from 'react-native'

// class Graph extends Component {
//   constructor () {
//     super()
//     const width = {pts: 30, ast:...}
//     this.state = {
//       pts: new Animated.Value(width.pts)
//       ast: new Animated.Value(width.ast),
//       reb: new Animated.Value(width.reb)
//     }
//   }
//
//   handeleAnimation () {
//     const timing = Animated.timing
//     const width = {pts: 14, ast:...}
//     const indicators = ['pts', 'ast', 'reb']
//     Animated.parallel(indicators.map(item => {
//       return timing(this.state[item], {toValue: width[item]})
//     })).start()
//   }
//
//   render () {
//    const {pts, ast, reb, stl, blk, tov, min} = this.state
//
//    return (
//       <View>
//        {pts &&
//           <Animated.View style={[styles.bar, styles.points, {width: pts}]} />
//         }
//         {ast &&
//           <Animated.View style={[styles.bar, styles.assists, {width: ast}]} />
//         }
//         {reb &&
//           <Animated.View style={[styles.bar, styles.rebounds, {width: reb}]} />
//         }
//         <Text onPress={this.handeleAnimation.bind(this)}>Button</Text>
//       </View>
//    )
//   }
// }
