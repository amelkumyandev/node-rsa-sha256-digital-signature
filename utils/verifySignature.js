const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// Function to verify the signature
function verifySignature(message, signature) {
  // Load the public key
  const publicKey = fs.readFileSync(path.join(__dirname, '../keys/publicKey.pem'), 'utf8');

  // Create a verifier object
  const verifier = crypto.createVerify('sha256');
  verifier.update(message);
  verifier.end();

  // Verify the signature using the public key
  const isVerified = verifier.verify(publicKey, signature, 'base64');
  return isVerified;
}

module.exports = { verifySignature };
