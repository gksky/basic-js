const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct;
  }
  encrypt(message, key) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (message && key) {
      message = message.toUpperCase();
      key = key.toUpperCase();
      let count = 0;
      let aMessage = message.split(' ');
      let arr = aMessage.map((item) => {
        let result = '';
        for (let i = 0; i < item.length; i++) {
          if (alphabet.indexOf(item[i]) != -1) {
            let indexMes = alphabet.indexOf(item[i]);
            if (!key[count]) count = 0;
            let indexKey = alphabet.indexOf(key[count]);
            count++;
            if ((indexMes + indexKey) > 25) {
              result = result + alphabet[indexMes + indexKey - alphabet.length];
            } else {
              result = result + alphabet[indexMes + indexKey];
            }
          } else result = result + item[i];
        }
        if (this.direct == false) {
          result = result.split('').reverse().join('');
        }
        return result;
      });
      if (this.direct == false) return arr.reverse().join(' '); else return arr.join(' ');
    } else {
      throw new Error();
    }
  }
  decrypt(secret, key) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (secret && key) {
      key = key.toUpperCase();
      let count = 0;
      let arr = secret.split(' ');
      let brr = arr.map((item) => {
        let result = '';
        for (let i = 0; i < item.length; i++) {
          if (!key[count]) count = 0;
          let indexKey = alphabet.indexOf(key[count]);
          if (alphabet.indexOf(item[i]) != -1) {
            let indexSec = alphabet.indexOf(item[i]);
            count++;
            let index = Math.abs(indexSec + alphabet.length - indexKey);
            if (index > 25) index = index - alphabet.length;
            result = result + alphabet[index];
          } else result = result + item[i];
        }
        if (this.direct == false) {
          result = result.split('').reverse().join('');
        }
        return result;
      });
      if (this.direct == false) return brr.reverse().join(' '); else return brr.join(' ');
    } else {
      throw new Error();
    }
  }
}

module.exports = VigenereCipheringMachine;
