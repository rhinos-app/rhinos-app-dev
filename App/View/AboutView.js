import React from 'react'
import {
    View,
    Text
} from 'react-native'
import { Button } from 'react-native-elements'
import baseStyles from '../baseStyles'

export default class AboutView extends React.Component {

  render () {
    return (
      <View style={baseStyles.view}>
        <Text style={baseStyles.h3}>
          About Us
        </Text>

        <Button
          raised
          backgroundColor={'#fff'}
          color={baseStyles.BRAND}
          icon={{ name: 'chevron-left', type: 'font-awesome', color: baseStyles.BRAND }}
          title="Go Back"
          onPress={() => this.props.nav.back()}
          buttonStyle={baseStyles.link}
        />
      </View>
    )
  }
}
