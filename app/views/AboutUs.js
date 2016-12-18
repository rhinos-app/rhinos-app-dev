import React from 'react'
import {
    View,
    Text
} from 'react-native'
import { WideButton } from 'components'
import baseStyles from '../baseStyles'

export default class AboutView extends React.Component {

  render () {
    return (
      <View style={baseStyles.view}>
        <Text style={baseStyles.h3}>
          About Us
        </Text>

        <WideButton icon="chevron-left" title="Go Back" onPress={() => this.props.nav.back()} />
      </View>
    )
  }
}
