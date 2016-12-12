import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native'
import { Button } from 'react-native-elements'
import { TabViewAnimated, TabBarTop } from 'react-native-tab-view'
import baseStyles from '../baseStyles'

const { GiftedForm } = require('react-native-gifted-form')

export default class MainView extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'First' },
      { key: '2', title: 'Second' },
      { key: '3', title: 'Third' }
    ]
  }

  onTabChange = (index) => {
    this.setState({ index })
  }

  renderTabBarTop = (props) => {
    const styleObj = {}
    if (Platform.OS === 'web') {
      styleObj.width = '102%' // fix an UI issue on web
    }
    return <TabBarTop {...props}
                      tabStyle={{ backgroundColor: baseStyles.BRAND_LIGHT, opacity: 1, marginBottom: 2 }}
                      indicatorStyle={{ backgroundColor: baseStyles.BRAND }}
                      pressColor="#fff"
                      labelStyle={{ color: '#596698' }} style={styleObj} />
  }

  renderTabScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return <View style={[ styles.tabView, { backgroundColor: baseStyles.BG } ]}>
          <Text style={baseStyles.center}>
            Welcome to React Native for {Platform.OS}!
          </Text>
          <Text style={baseStyles.center}>
            To get started, edit App.js
          </Text>
          <Text style={baseStyles.center}>
            Press Cmd+R to reload{'\n'}
            { Platform.OS !== 'web' ? 'Cmd+D or shake for dev menu' : '' }
          </Text>

          <Button
            raised
            backgroundColor={baseStyles.BRAND}
            icon={{ name: 'paper-plane-o', type: 'font-awesome' }}
            title="Go to Contact Us"
            onPress={() => this.props.nav.linkTo('contactUs')}
            buttonStyle={baseStyles.link}
          />

          <GiftedForm style={styles.myForm}>
            <GiftedForm.TextInputWidget
              name="firstName"
              title="First name"
              placeholder="First name"
              clearButtonMode="while-editing"
            />
            <GiftedForm.TextInputWidget
              name="lastName"
              title="Last name"
              placeholder="Last name"
              clearButtonMode="while-editing"
            />
          </GiftedForm>
        </View>
      case '2':
        return <View style={[ styles.tabView, { backgroundColor: baseStyles.BRAND } ]} />
      case '3':
        return <View style={[ styles.tabView, { backgroundColor: '#a4caff' } ]} />
      default:
        return null;
    }
  };

  render () {
    return (
      <TabViewAnimated
        style={styles.tabContainer}
        navigationState={this.state}
        renderScene={this.renderTabScene}
        renderHeader={this.renderTabBarTop}
        onRequestChangeTab={this.onTabChange}
      />
    )
  }
}

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1
  },
  tabView: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: 20
  }
})
