const fs = require('fs');

fs.readdir('./public/img', (err, files) => {
    if (err) return err;
    files.map(file => {
        fs.rename('./public/img/' + file, './public/img/' + file.toLowerCase(), (err) => {
            if (err) return err
        })
    })
})