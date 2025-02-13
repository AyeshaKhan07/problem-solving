const fs = require('fs');

function readFileAsStream(filePath) {
    return new Promise((resolve, reject) => {
        const stream = fs.createReadStream(filePath, { encoding: 'utf-8' });
        let data = '';

        stream.on('data', chunk => {
            data += chunk;
        });

        stream.on('end', () => {
            resolve(data);
        });

        stream.on('error', err => {
            reject(err);
        });
    });
}

module.exports = { readFileAsStream }; // Export function
