const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// Function to sign the message
function signMessage(message) {
  // Load the private key
  const privateKey = fs.readFileSync(path.join(__dirname, '../keys/privateKey.pem'), 'utf8');

  // Create a signer object
  const signer = crypto.createSign('sha256');
  signer.update(message);
  signer.end();

  // Sign the message and output signature in base64
  const signature = signer.sign(privateKey, 'base64');
  return signature;
}

module.exports = { signMessage };
