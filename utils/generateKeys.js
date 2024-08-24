const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// Function to generate RSA key pair
function generateKeys() {
  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048, // Key size
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
    },
  });

  // Save the keys to the file system
  fs.writeFileSync(path.join(__dirname, '../keys/privateKey.pem'), privateKey);
  fs.writeFileSync(path.join(__dirname, '../keys/publicKey.pem'), publicKey);

  console.log('Keys generated and saved to ./keys/');
}

module.exports = { generateKeys };
