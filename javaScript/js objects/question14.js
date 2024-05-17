function getAllPropertyValues(obj) {
    return Object.values(obj);
}
  const personObject = { name: 'Mbugua',age: 24,city: 'Nairobi'};
  
  const values = getAllPropertyValues(myObject);
  console.log(values);