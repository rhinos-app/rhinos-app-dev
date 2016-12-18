import React from 'react'
import { View, StyleSheet } from 'react-native'
import { List, ListItem } from 'react-native-elements'

export default class AppMenu extends React.Component {

  onItemPress = (item) => {
    if (this.props.onItemPress) {
      this.props.onItemPress(item)
    }
  }

  render () {
    const menuItems = [
      {
        name: 'Home', subtitle: 'Home screen', link: 'initialView'
      }, {
        name: 'Contact Us', subtitle: 'Contact Us screen', link: 'contactUs'
      }, {
        name: 'About Us', subtitle: 'About Us screen', link: 'aboutUs'
      }]
    return (
      <View style={[ styles.main, this.props.style ]}>
        <List containerStyle={{ marginBottom: 20 }}>
          {
            menuItems.map((item, i) => (
              <ListItem
                roundAvatar
                onPress={() => this.onItemPress(item)}
                key={i}
                title={item.name}
                subtitle={item.subtitle} />
            ))
          }
        </List>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 50
  }
})
