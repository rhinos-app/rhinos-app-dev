import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import SimpleNavigator from './SimpleNavigator'
import MainView from './MainView'
import ContactUsView from './ContactUsView'
import AboutView from './AboutView'

export class App extends Component {
  state = {}

  render () {
    return (
      <View style={styles.view}>
        <SimpleNavigator views={{
          index: MainView,
          contactUs: ContactUsView,
          about: AboutView
        }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 50
  }
})
