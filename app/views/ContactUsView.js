import React from 'react'
import {
    View,
    Text
} from 'react-native'
import { Button } from 'react-native-elements'
import baseStyles from '../baseStyles'

export default class ContactUsView extends React.Component {

  render () {
    return (
      <View style={baseStyles.view}>
        <Text style={baseStyles.h3}>
          Contact Us
        </Text>

        <Button
          raised
          backgroundColor={baseStyles.BRAND}
          icon={{ name: 'info-circle', type: 'font-awesome' }}
          title="Go to About Us"
          onPress={() => this.props.nav.linkTo('about')}
          buttonStyle={baseStyles.link}
        />

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
