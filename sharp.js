const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Root Images
const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
}

fs.readdirSync(target)
    .forEach((image) => {
        const extension = image.split('.')[1] === 'png' ? 'png' : 'jpg';
        if (image.includes('hero-image_4')) {
            sharp(`${target}/${image}`)
                .resize(1200)
                .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
                    .slice(0, -1)
                    .join('.')}-large.${extension}`));

            sharp(`${target}/${image}`)
                .resize(800)
                .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
                    .slice(0, -1)
                    .join('.')}-medium.${extension}`));

            sharp(`${target}/${image}`)
                .resize(600)
                .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
                    .slice(0, -1)
                    .join('.')}-small.${extension}`));
        }
    });
