function all_properties(val) {
    let arr = [];
    for (let i = 0; i <= val.length; i++) {
      arr.push(i)
    }
    return arr
  }
  //tests
  let Array = ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"];
  console.log(Array)
  