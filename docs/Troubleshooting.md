### Common issues

#### iOS: Red screen error: Unable to resolve module in App.js...

Cause: module caching issue

Solution:
```
$ rm -Rf ~/.yarn-cache/
$ yarn
$ npm start -- --reset-cache
```
