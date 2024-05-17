function getProperty(obj) {
  let propertyName = [];
  propertyName = propertyName.concat(Object.getOwnPropertyNames(obj))
  let prototype = Object.getPrototypeOf(obj);
  while (prototype != null) {
    propertyName = propertyName.concat(Object.getOwnPropertyNames(prototype));
    prototype = Object.getPrototypeOf(prototype);
  }

  return propertyName;
}

var obj = {
  name: 'John',
  age: 30
};

var propertyName = getProperty(obj);
console.log(propertyName);
