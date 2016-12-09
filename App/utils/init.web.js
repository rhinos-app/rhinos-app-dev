// App Init for Web
// check webpack config file > alias for 'utils/init'

const fontAwesome = require('react-native-vector-icons/Fonts/FontAwesome.ttf')
// Web Mode only - generate required css
const reactNativeVectorIconsRequiredStyles = '@font-face { src:url(' + fontAwesome + ');font-family: FontAwesome; }'
// create stylesheet
const style = document.createElement('style')
style.type = 'text/css'
if (style.styleSheet) {
  style.styleSheet.cssText = reactNativeVectorIconsRequiredStyles
} else {
  style.appendChild(document.createTextNode(reactNativeVectorIconsRequiredStyles))
}
// inject stylesheet
document.head.appendChild(style)

export default {}
