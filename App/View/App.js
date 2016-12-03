/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput
} from 'react-native'
const { GiftedForm } = require('react-native-gifted-form')

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native for {Platform.OS}!!!!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.{Platform.OS}.js YA!
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          { Platform.OS !== "web"?"Cmd+D or shake for dev menu":"" }
        </Text>

        <GiftedForm style={styles.myForm}>
            <GiftedForm.TextInputWidget
                name='firstName'
                title='First name'
                placeholder='First name'
                clearButtonMode='while-editing'
            />
            <GiftedForm.TextInputWidget
                name='lastName'
                title='Last name'
                placeholder='Last name'
                clearButtonMode='while-editing'
            />
        </GiftedForm>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  myForm: {
    width: 400
  }
})