import React from 'react'
import { Animated } from 'react-native'

export default class SimpleNavigator extends React.Component {
  state = {
    currentView: null,
    view: null,
    fadeFxValue: new Animated.Value(0)
  }
  currentComp = null
  history = []

  startViewAnimation () {
    Animated.timing(this.state.fadeFxValue, { toValue: 1 }).start()
  }

  componentDidMount () {
    this.startViewAnimation()
  }

  back = () => {
    this.history.pop()
    const lastViewId = this.history[ this.history.length - 1 ]
    this.setState({ currentView: lastViewId })
  }

  linkTo = (viewId) => {
    this.history.push(viewId)
    this.setState({ currentView: viewId, fadeFxValue: new Animated.Value(0) })
  }

  render () {
    if (this.state.currentView) {
      this.currentComp = this.props.views[ this.state.currentView ]
      this.startViewAnimation()
    } else {
      this.history = ['index']
      this.currentComp = this.props.views[ 'index' ]
    }

    return (
      <Animated.View
        style={{ opacity: this.state.fadeFxValue }}
      >
        <this.currentComp nav={this} />
      </Animated.View>
    )
  }
}
