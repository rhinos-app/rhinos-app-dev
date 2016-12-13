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
    const list = [
      {
        name: 'Home', subtitle: 'Home screen', link: 'initialView'
      }, {
        name: 'Contact Us', subtitle: 'Contact Us screen', link: 'contactUs'
      }, {
        name: 'About Us', subtitle: 'About Us screen', link: 'about'
      }]
    return (
      <View style={[ styles.menu, this.props.style ]}>
        <List containerStyle={{ marginBottom: 20 }}>
          {
            list.map((item, i) => (
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
  menu: {
    flex: 1,
    paddingTop: 50
  }
})
