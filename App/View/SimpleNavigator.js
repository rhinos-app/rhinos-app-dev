import React from 'react'
import { View } from 'react-native'

export default class SimpleNavigator extends React.Component {
  state = {
    currentView: null,
    view: null
  }
  currentComp = null
  history = []

  back = () => {
    this.history.pop()
    const lastViewId = this.history[ this.history.length - 1 ]
    this.setState({ currentView: lastViewId })
  }

  linkTo = (viewId) => {
    this.history.push(viewId)
    this.setState({ currentView: viewId })
  }

  render () {
    if (this.state.currentView) {
      this.currentComp = this.props.views[ this.state.currentView ]
    } else {
      this.history = ['index']
      this.currentComp = this.props.views[ 'index' ]
    }
    const viewEl = <this.currentComp nav={this} />

    return (
      <View>
        {viewEl}
      </View>
    )
  }
}
