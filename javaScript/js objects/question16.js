function reverse(obj) {
    let reversedObj = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        reversedObj[obj[key]] = key
      }
    }
    return reversedObj;
  }