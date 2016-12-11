/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { SideMenu, Button } from 'react-native-elements'
import NavigationBar from 'react-native-navbar'
import Icon from 'react-native-vector-icons/FontAwesome'

import AppMenu from './AppMenu'
import FirstView from './FirstView'
import SimpleNavigator from './SimpleNavigator'
import ContactUsView from './ContactUsView'
import AboutView from './AboutView'
import baseStyles from '../baseStyles'
import AppInit from 'utils/init' // Webpack alias for Web mode: 'init.web.js'

export class App extends Component {
  state = {
    toggled: false
  }

  toggleSideMenu = (showFlag) => {
    this.setState({
      toggled: (typeof showFlag !== 'undefined' ? showFlag : !this.state.toggled)
    })
  }

  render () {
    const leftButtonConfig = (
      <TouchableOpacity onPress={() => this.toggleSideMenu()} style={{ margin: 5 }}>
        <Icon name="bars" size={30} color={baseStyles.brand} />
      </TouchableOpacity>
    )
    const titleConfig = { title: 'Rhinos-app' }

    return (
      <SideMenu
        MenuComponent={<AppMenu />}
        toggled={this.state.toggled}
      >
        <View style={styles.view}>
          <NavigationBar title={titleConfig} leftButton={leftButtonConfig} />

          <SimpleNavigator views={{
                             initialView: FirstView,
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
    backgroundColor: '#fff'
  }
})
