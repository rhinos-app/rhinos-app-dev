# rhinos-app-dev

Rhinos-app is a react-native app which uses [react-native-web](https://github.com/necolas/react-native-web) to achieve cross-platform design. 

![Demo image](https://s3-us-west-1.amazonaws.com/usw-files/581cae09337cb42aa7ab9365.e01c8e85-6249-4a2b-b323-7413bd02c478.jpg)

## FEATURES:

  * Runs on Android, iOS, Web (can run as a Windows/MacOS/Linux desktop app with Electron)
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
$ npm run web
```

### Run on Android

  * open Android Emulator
  * in Terminal, make sure you have ANDROID_HOME=/Users/username/Library/Android/sdk
  * run in another Terminal: $ npm start

``` 
    $ react-native run-android
``` 

### Run on iOS

  * open iOS Emulator
  * run in another Terminal: $ npm start

```    
    $ react-native run-ios
```

## CONTRIBUTING

PR, Stars ✭ and Issue Reporting are always welcome :)
