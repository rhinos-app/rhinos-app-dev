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

export default class FirstView extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'First' },
      { key: '2', title: 'Second' },
    ]
  }

  _handleChangeTab = (index) => {
    this.setState({ index })
  }

  _renderHeader = (props) => {
    return <TabBarTop {...props} tabStyle={{ backgroundColor: baseStyles.brandLight }} labelStyle={{ color: '#596698' }} />
  }

  _renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return <View style={[ styles.page, { backgroundColor: '#F5FCFF' } ]}>
          <Text style={baseStyles.center}>
            Welcome to React Native for {Platform.OS}!{'\n'}
            To get started, edit App.js{'\n\n'}
            Press Cmd+R to reload{'\n'}
            { Platform.OS !== 'web' ? 'Cmd+D or shake for dev menu' : '' }
          </Text>

          <Button
            raised
            backgroundColor={baseStyles.brand}
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
        return <View style={[ styles.page, { backgroundColor: '#a4caff' } ]} />
      default:
        return null;
    }
  };

  render () {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  page: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: 20
  }
})
