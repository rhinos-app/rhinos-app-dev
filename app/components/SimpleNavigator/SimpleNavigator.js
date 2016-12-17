import React from 'react'
import { Animated } from 'react-native'

DEFAULT_FX = { prop: 'opacity', fromValue: 0, toValue: 1 }

export default class SimpleNavigator extends React.Component {
  state = {
    currentView: null,
    view: null,
    fxValue: new Animated.Value(0)
  }
  currentComp = null
  history = []

  startViewAnimation (fx) {
    Animated.timing(this.state.fxValue, fx).start()
  }

  componentDidMount () {
    this.startViewAnimation(DEFAULT_FX)
  }

  back = () => {
    this.history.pop()
    const lastViewId = this.history[ this.history.length - 1 ]
    this.setState({ currentView: lastViewId })
  }

  linkTo = (viewId) => {
    this.history.push(viewId)
    const { fx } = this.getViewObject(viewId)
    this.setState({ currentView: viewId, fxValue: new Animated.Value(fx.fromValue) })
  }

  getViewObject = (viewId) => {
    const obj = this.props.views[ viewId ]
    if (typeof obj === 'object') {
      // example: views={{ personDetails: { component: PersonDetails, fx: fxObject } }}
      return { component: obj.component, fx: obj.fx }
    } else {
      // example: views={{ contactUs: ContactUs }}
      return { component: obj, fx: DEFAULT_FX }
    }
  }

  render () {
    let currentFx = DEFAULT_FX
    if (this.state.currentView) {
      const { component, fx } = this.getViewObject(this.state.currentView)
      this.currentComp = component
      currentFx = fx
      this.startViewAnimation(fx)
    } else {
      this.history = ['initialView']
      const { component } = this.getViewObject('initialView')
      this.currentComp = component
    }

    return (
      <Animated.View style={{ flex: 1, [currentFx.prop]: this.state.fxValue }}>
        <this.currentComp nav={this} />
      </Animated.View>
    )
  }
}
