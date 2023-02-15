const fs = require('fs');

const fileExistsPromise = (filePath) => {
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

const fileExists = async (filePath) => {
    await fileExistsPromise(filePath);
}

const fileExistStat = (filePath) => {
    try {
        fs.statSync(filePath);
        return true;
    } catch (err) {
        if (err.code === 'ENOENT') return false;
    }
};

module.exports = { fileExists, fileExistsPromise, fileExistStat };