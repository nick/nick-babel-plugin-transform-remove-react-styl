# babel-plugin-transform-remove-react-styl



## Installation

```sh
$ npm install babel-plugin-transform-remove-react-styl
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-remove-react-styl"]
}
```

### Via CLI

```sh
$ babel --plugins transform-remove-react-styl script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-remove-react-styl"]
});
```
