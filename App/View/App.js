/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import AppInit from 'utils/init' // Webpack alias for Web mode: 'init.web.js'

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
          initialView: MainView,
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
