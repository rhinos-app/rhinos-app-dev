import React from 'react'
import {
    View,
    Text
} from 'react-native'
import baseStyles from '../baseStyles'

export default class AboutView extends React.Component {

  render () {
    return (
      <View style={baseStyles.view}>
        <Text style={baseStyles.h3}>
          About Us
        </Text>

        <Text style={baseStyles.link} onPress={() => this.props.nav.back()}>
          &lang; Go Back
        </Text>
      </View>
    )
  }
}
