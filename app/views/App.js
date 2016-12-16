/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { SideMenu } from 'react-native-elements'
import NavigationBar from 'react-native-navbar'
import Icon from 'react-native-vector-icons/FontAwesome'

import { SimpleNavigator } from 'components'
import AppMenu from './AppMenu'
import MainView from './MainView'
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

  appMenuItemClick = (menuItem) => {
    this.toggleSideMenu(false)
    this.refs.nav.linkTo(menuItem.link)
  }

  render () {
    const leftButtonConfig = (
      <TouchableOpacity onPress={() => this.toggleSideMenu()} style={{ margin: 5 }}>
        <Icon name="bars" size={30} color={baseStyles.BRAND} />
      </TouchableOpacity>
    )
    const titleConfig = { title: 'Rhinos-app' }

    return (
      <SideMenu MenuComponent={<AppMenu onItemPress={this.appMenuItemClick} style={{ backgroundColor: baseStyles.BRAND_DARK }} />}
                toggled={this.state.toggled}>
        <View style={styles.view}>
          <NavigationBar style={{ backgroundColor: baseStyles.BRAND_LIGHT }} title={titleConfig} leftButton={leftButtonConfig} />

          <SimpleNavigator ref="nav"
                           views={{
                             initialView: MainView,
                             contactUs: ContactUsView,
                             about: AboutView
                           }}
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
