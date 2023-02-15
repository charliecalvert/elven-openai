
function fileExists(fileName) {
    var http = new XMLHttpRequest();
    http.open("HEAD", fileName, false);
    http.send();
    return http.status != 404;
}

const fs = require('fs');
const fileExists = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                resolve(false);
            }
            else {
                resolve(true);
            }
        });
    });
}

module.exports = fileExists;
