// Node.js 8.10

var moment = require('moment');
exports.handler = async (event) => {
  var min = 1;
  var max = 6;
  
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  var now = moment().format();
  
  var message = 'Your dice throw resulted in ' + 
  randomNumber + ' and was issued at ' + now;
  
  return message;
};