const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// File path of the .env file
const filePath = 'C:\\Users\\karol\\Downloads\\PlayWrightAutomation\\PlayWrightAutomation\\utils_ts\\testData.env'; 

// Encryption settings
const algorithm = 'aes-256-cbc';
const password = 'my-very-secret-password'; // Use a strong password and share it securely with your friend
const salt = crypto.randomBytes(16); // Generate a random salt
const key = crypto.scryptSync(password, salt, 32); // Derive key from password and salt
const iv = crypto.randomBytes(16); // Initialization vector (should be random)

// Encrypt function
const encrypt = (text) => {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return { iv: iv.toString('hex'), salt: salt.toString('hex'), encryptedData: encrypted };
};

// Read the .env file content
const data = fs.readFileSync(filePath, 'utf8');

// Encrypt the .env content
const encryptedData = encrypt(data);

// Output encrypted data to a new file
const encryptedFilePath = path.join(__dirname, 'testData.env.enc'); // Output file
fs.writeFileSync(encryptedFilePath, JSON.stringify(encryptedData), 'utf8');

console.log(`Encryption complete. Encrypted file created at: ${encryptedFilePath}`);
