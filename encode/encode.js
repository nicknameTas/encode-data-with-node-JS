var crypto = require('crypto');
const SaltLenght = 9;

function dataEn(text) {
    console.log('Input Data' + ': ' + text);
    var salt = generateSalt(SaltLenght);
    var hash = md5(text + salt);
    var SH = salt + hash;
    var token = Buffer.from(SH).toString('base64'); // สร้าง Token โดยการเข้ารหัส md5 + salt เเล้วนำมา base64 จะได้ชุดข้อมูลที่ผ่านการเข้ารหัสเป็น 64bit
    return token;
}

function generateSalt(len) { // สร้างฟังก์ชันเข้ารหัสแบบ salt
    var set = '0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ',
        setLen = set.length,
        salt = '';
    for (var i = 0; i < len; i++) {
        var p = Math.floor(Math.random() * setLen);
        salt += set[p];
    }
    return salt;
}

function md5(string) { // สร้างฟังก์ชันเข้ารหัสแบบ md5
    return crypto.createHash('md5').update(string).digest('hex');
}


module.exports = dataEn;