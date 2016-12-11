import React from 'react'
import { View } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import baseStyles from '../baseStyles'

export default class AppMenu extends React.Component {

  onItemPress = (item) => {
    this.props.nav.linkTo(item.link)
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
      <View style={{ flex: 1, backgroundColor: baseStyles.BRAND_DARK, paddingTop: 50 }}>
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
