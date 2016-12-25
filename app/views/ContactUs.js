import React from 'react'
import {
    View,
    Text
} from 'react-native'
import { Button } from 'react-native-elements'
import { WideButton } from 'components'
import baseStyles from '../baseStyles'

export default class ContactUs extends React.Component {

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
          onPress={() => this.props.nav.linkTo(this, 'aboutUs')}
          buttonStyle={baseStyles.link}
        />

        <WideButton icon="chevron-left" title="Back" onPress={() => this.props.nav.back()} />
      </View>
    )
  }
}
