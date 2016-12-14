import {
  StyleSheet
} from 'react-native'

const CONSTS = {
  BRAND: '#27c1e4',
  BRAND_LIGHT: '#ebeffb',
  BRAND_DARK: '#202d5c',
  BG: '#f5fcff'
}

const style = StyleSheet.create({
  view: {
    padding: 10,
    paddingTop: 10,
    backgroundColor: CONSTS.BG
  },
  h3: {
    fontSize: 20
  },
  link: {
    marginTop: 20
  },
  center: {
    textAlign: 'center'
  }
})
Object.assign(style, CONSTS) // merge CONSTS into style

export default style
