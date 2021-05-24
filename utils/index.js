const STRING_CAMELIZE_REGEXP = /(-|_|\.|\s)+(.)?/g;

function throwMessage(err) {
  throw new Error(err).message;
}

/**
 Returns the Capitalized form of a string
 ```javascript
 'innerHTML'.capitalize()         // 'InnerHTML'
 'action_name'.capitalize()       // 'Action_name'
 'css-class-name'.capitalize()    // 'Css-class-name'
 'my favorite items'.capitalize() // 'My favorite items'
 ```
 @method capitalize
 @param {String} str The string to capitalize.
 @return {String} The capitalized string.
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}

/**
 Returns the lowerCamelCase form of a string.
 ```javascript
 camelize('innerHTML');          // 'innerHTML'
 camelize('action_name');        // 'actionName'
 camelize('css-class-name');     // 'cssClassName'
 camelize('my favorite items');  // 'myFavoriteItems'
 camelize('My Favorite Items');  // 'myFavoriteItems'
 ```
 @method camelize
 @param {String} str The string to camelize.
 @return {String} the camelized string.
 */
function camelize(str) {
  return str
    .replace(STRING_CAMELIZE_REGEXP, (_match, _separator, chr) => {
      return chr ? chr.toUpperCase() : "";
    })
    .replace(/^([A-Z])/, (match) => match.toLowerCase());
}

/**
 Returns the UpperCamelCase form of a string.
 ```javascript
 'innerHTML'.classify();          // 'InnerHTML'
 'action_name'.classify();        // 'ActionName'
 'css-class-name'.classify();     // 'CssClassName'
 'my favorite items'.classify();  // 'MyFavoriteItems'
 ```
 @method classify
 @param {String} str the string to classify
 @return {String} the classified string
 */
function classify(str) {
  return str
    .split(".")
    .map((part) => capitalize(camelize(part)))
    .join(".");
}

module.exports = {
  throwMessage,
  classify,
};
