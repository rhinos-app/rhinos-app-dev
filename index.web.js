/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry } from 'react-native'
import { App } from './App/View/App'

AppRegistry.registerComponent('rhinosapp', () => App)

AppRegistry.runApplication('rhinosapp', {
  rootTag: document.getElementById('react-root')
})
