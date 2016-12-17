import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import baseStyles from '../../baseStyles'

export default class PersonDetails extends React.Component {

  onItemPress = (item) => {
    if (this.props.onItemPress) {
      this.props.onItemPress(item)
    }
  }

  render () {
    return (
      <View style={[ styles.main, this.props.style ]}>
        <Text>Person Details</Text>

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

const styles = StyleSheet.create({
  main: {
    flex: 1
  }
})
