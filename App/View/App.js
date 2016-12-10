/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { SideMenu } from 'react-native-elements'
import NavigationBar from 'react-native-navbar'
import Icon from 'react-native-vector-icons/FontAwesome'

import AppMenu from './AppMenu'
import SimpleNavigator from './SimpleNavigator'
import MainView from './MainView'
import ContactUsView from './ContactUsView'
import AboutView from './AboutView'
import AppInit from 'utils/init' // Webpack alias for Web mode: 'init.web.js'

export class App extends Component {
  state = { toggled: false }

  toggleSideMenu = (showFlag) => {
    this.setState({
      toggled: (typeof showFlag !== 'undefined' ? showFlag : !this.state.toggled)
    })
  }

  render () {
    const leftButtonConfig = (
      <TouchableOpacity onPress={() => this.toggleSideMenu()} style={{ margin: 5 }}>
        <Icon name="bars" size={30} color="#008a7d" />
      </TouchableOpacity>
    )
    const titleConfig = { title: 'Rhinos-app' }

    return (
      <SideMenu
        MenuComponent={<AppMenu />}
        toggled={this.state.toggled}
      >
        <View style={styles.view}>
          <NavigationBar
            title={titleConfig}
            leftButton={leftButtonConfig} />
          <SimpleNavigator views={{
                             initialView: MainView,
                             contactUs: ContactUsView,
                             about: AboutView
                           }}
                           onClick={() => this.toggleSideMenu(false)}
          />
        </View>
      </SideMenu>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  }
})
