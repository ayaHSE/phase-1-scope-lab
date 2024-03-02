// Declare customerName to be 'bob' in global scope
var customerName = 'bob';

// Function to modify the customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); // Convert 'bob' to 'BOB'
}

// Function to set the best customer
function setBestCustomer() {
  bestCustomer = 'not bob'; // Declare bestCustomer in global scope
}

// Function to overwrite the best customer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Modify bestCustomer variable
}

// Function to unsuccessfully try to reassign the least favorite customer
function changeLeastFavoriteCustomer() {
    try {
      leastFavoriteCustomer = 'Jane'; // Attempting to change a constant will result in an error
    } catch (error) {
      throw new Error("Assignment to constant variable."); // Throw an error with the required message
    }
  }
  
  module.exports = {
    upperCaseCustomerName,
    setBestCustomer,
    overwriteBestCustomer,
    changeLeastFavoriteCustomer,
  };
  