const generatePassword = require('generate-password');

// Generate a random password
const password = generatePassword.generate({
  length: 12,
  numbers: true,
  symbols: true,
  uppercase: true,
  excludeSimilarCharacters: true,
});

console.log('Generated password:', password);
