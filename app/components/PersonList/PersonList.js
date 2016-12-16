import React from 'react'
import { View, StyleSheet } from 'react-native'
import { List, ListItem } from 'react-native-elements'

export default class PersonList extends React.Component {

  onItemPress = (item) => {
    if (this.props.onItemPress) {
      this.props.onItemPress(item)
    }
  }

  render () {
    return (
      <View style={[ styles.main, this.props.style ]}>
        <List containerStyle={{ marginTop: 0 }}>
          {
            this.props.data.map((item, i) => (
              <ListItem
                roundAvatar
                avatar={{ uri: item.avatarUrl }}
                onPress={() => this.onItemPress(item)}
                key={i}
                title={`${item.firstName} ${item.middleName ? item.middleName + ' ' : ''}${item.lastName}`}
                subtitle={item.bio}
              />
            ))
          }
        </List>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  }
})
