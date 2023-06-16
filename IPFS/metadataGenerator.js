const fs = require('fs');
const path = require('path');

const metadataGenerated = path.join(__dirname, 'metadataGenerated');
if (!fs.existsSync(metadataGenerated)) {
    fs.mkdirSync(metadataGenerated);
}

console.log(__dirname);

for (let i = 0; i < 5; i++) {
    const json = {
        name: `Easy NFT #${i}`,
        description: `This is description for Token #${i}`,
        image: `https://gateway.pinata.cloud/ipfs/QmbhzuWuyYicC9Qj7xS2Q49QY2tkhiBXydYV3u1NtTgHet/${i}.jpg`
    };

    fs.writeFileSync(path.join(metadataGenerated, String(i)), JSON.stringify(json));
}
console.log("metadata successfully generated")
