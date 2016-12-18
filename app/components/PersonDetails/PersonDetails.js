import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import baseStyles from '../../baseStyles'

export default class PersonDetails extends React.Component {

  onItemPress = (item) => {
    if (this.props.onItemPress) {
      this.props.onItemPress(item)
    }
  }

  render () {
    const person = this.props.navParams || {}
    return (
      <View style={[ styles.main, this.props.style ]}>
        <View style={styles.profile}>
          <Image style={styles.avatar}
                 source={{ uri: person.avatarUrl }} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileText}>{person.firstName + ' ' + person.lastName}</Text>
            <Text style={styles.profileText}>{person.bio}</Text>
          </View>
        </View>
        <View style={styles.content}>
        </View>

        <Button
          raised
          backgroundColor={'#fff'}
          color={baseStyles.BRAND}
          icon={{ name: 'chevron-left', type: 'font-awesome', color: baseStyles.BRAND }}
          title="Go Back"
          onPress={() => this.props.nav.back({ tabIndex: 1 })}
          buttonStyle={baseStyles.link}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 120,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  profileInfo: {
    flex: 1
  },
  profileText: {
    marginTop: 10
  },
  avatar: {
    width: 100, height: 100, borderRadius: 50, margin: 10
  },
  content: {
    flex: 1
  }
})
