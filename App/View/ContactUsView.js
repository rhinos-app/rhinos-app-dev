import React from 'react'
import {
    View,
    Text
} from 'react-native'
import baseStyles from '../baseStyles'

export default class ContactUsView extends React.Component {

  render () {
    return (
      <View style={baseStyles.view}>
        <Text style={baseStyles.h3}>
          Contact Us
        </Text>

        <Text style={baseStyles.link} onPress={() => this.props.nav.linkTo('about')}>
          About Us
        </Text>

        <Text style={baseStyles.link} onPress={() => this.props.nav.back()}>
          &lang; Go Back
        </Text>
      </View>
    )
  }
}
