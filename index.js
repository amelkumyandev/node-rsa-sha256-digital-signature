const { generateKeys } = require('./utils/generateKeys');
const { signMessage } = require('./utils/signMessage');
const { verifySignature } = require('./utils/verifySignature');

// Generate RSA keys
generateKeys();

// The message to be signed
const message = "Hello, World!";

// Sign the message
const signature = signMessage(message);
console.log("Signature:", signature);

// Verify the signature
const isValid = verifySignature(message, signature);
console.log("Is the signature valid?", isValid);
