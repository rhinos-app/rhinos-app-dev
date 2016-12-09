<img src="http://cdn.shopify.com/s/files/1/0249/0754/products/Rhino_1.jpg?v=1470910706" width="100">

# Rhinos-app

Rhinos-app is a react-native app which uses [react-native-web](https://github.com/necolas/react-native-web) to achieve cross-platform design. 

*Demo video:*
[![Demo video](docs/assets/demo.png)](https://www.youtube.com/watch?v=tJRVfUz6vbI)

## FEATURES: :star2:

  * :iphone: :computer: Runs on Android, iOS, Web (can run as a Windows/MacOS/Linux desktop app with [Electron](https://github.com/electron/electron))
  * [SimpleNavigator](App/View/SimpleNavigator.js) with transition Fx (using Animated)
  * [React-native-gifted-form](https://github.com/FaridSafi/react-native-gifted-form)
  * [React-native-elements](https://github.com/react-native-community/react-native-elements), react-native-vector-icons (FontAwesome)
  * Miscellaneous features: ESLint, Webpack

## PREREQUISITES:

  * Android SDK
  * XCode
  * npm global modules:
```
$ npm install -g yarn
$ npm install -g react-native-cli
$ npm install -g http-server
```

## BUILD & RUN

### Install:

```
$ git clone <URL>
$ cd rhinos-app-dev
$ npm install   (yarn is not working yet due to a PR)
```

### Run on Web

```
DEV mode:
  $ npm run web
  
PRODUCTION mode:
  $ npm run build-web
  $ http-server ./web/static/
```

### Run on Android

  * open Android Emulator
  * in Terminal, make sure you have ANDROID_HOME=/Users/username/Library/Android/sdk
  * run in another Terminal: $ npm start -- --reset-cache

``` 
    $ react-native run-android
``` 

### Run on iOS

  * open iOS Emulator
  * run in another Terminal: $ npm start -- --reset-cache

```    
    $ react-native run-ios
```

## CONTRIBUTING

PRs, Stars :star: and Issue Reporting :beetle: are always welcome :)
