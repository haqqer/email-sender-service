const _ = require('lodash')

function objectKeysToCamelCase (snake_case_object) {
  var camelCaseObject = {};
  _.forEach(snake_case_object, (value, key) => {
      // checks that a value is a plain object or an array - for recursive key conversion
      if (_.isPlainObject(value) || _.isArray(value)) {
        // recursively update keys of any values that are also objects
        value = objectKeysToCamelCase(value);
      }
      camelCaseObject[_.camelCase(key)] = value;
    }
  )
  return camelCaseObject;
};

module.exports = {
  objectKeysToCamelCase
}
