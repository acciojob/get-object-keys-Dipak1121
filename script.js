//your JS code here. If required.
// Define the student object with a 'name' property
const student = {
  name: "John Doe"
};

// Add a property to the Object prototype called 'getKeys'
Object.prototype.getKeys = function() {
  // Use Object.keys() to get an array of all keys in the object
  return Object.keys(this);
};

// Test the getKeys() method on the 'student' object
const keysArray = student.getKeys();
console.log(keysArray); // Output: ['name']
