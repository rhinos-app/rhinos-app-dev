import React from 'react'
import { Button } from 'react-native-elements'

export default class WideButton extends React.Component {

  render () {
    return (
      <Button
        raised
        backgroundColor="#fff"
        color="#27c1e4"
        icon={{ name: this.props.icon, type: 'font-awesome', color: '#27c1e4' }}
        title={this.props.title}
        onPress={() => this.props.onPress()}
        buttonStyle={{ marginTop: 20 }}
      />
    )
  }
}
