import React, { Component } from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import WebInit from 'dummy-pkg' // web only (webpack's alias to webInit.js) - #TODO: improve this.

import SimpleNavigator from './SimpleNavigator'
import MainView from './MainView'
import ContactUsView from './ContactUsView'
import AboutView from './AboutView'

export class App extends Component {
  state = {}

  render () {
    // #TODO: <View> is required for Android, otherwise, it's blank. On web, it works without <View>
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
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    paddingTop: 50
  }
})
