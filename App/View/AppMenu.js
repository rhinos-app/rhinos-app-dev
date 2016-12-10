import React from 'react'
import { View } from 'react-native'
import { List, ListItem } from 'react-native-elements'

export default class AppMenu extends React.Component {
  render () {
    const list = [{ name: 'Test Menu', subtitle: 'This is a dummy menu', avatar_url: 'http://yahoo.com' }]
    return (
      <View style={{ flex: 1, backgroundColor: '#bcd2d0', paddingTop: 50 }}>
        <List containerStyle={{ marginBottom: 20 }}>
          {
            list.map((item, i) => (
              <ListItem
                roundAvatar
                onPress={() => console.log('something')}
                avatar={{ uri: item.avatar_url }}
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
