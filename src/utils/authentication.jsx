import { message } from 'antd';

const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const HEX = 'hex';
const UTF_8 = 'utf8';
const BASE_64 = 'base64';

const algorithm = 'aes-256-cbc';
const PASS_PHRASE = '!@#$%^&*()';

const DIR_AUTH = path.join(__dirname, '..', 'authentication');
const DIR_PUB = `${DIR_AUTH}/public.pem`;
const DIR_PRI = `${DIR_AUTH}/private.pem`;
const DIR_HASH = `${DIR_AUTH}/hash.json`;

const FILE_NOT_FOUND = Symbol('FILE_NOT_FOUND');

const initUser = {
  username: 'admin',
  password: 'admin',
};

class Authentication {
  constructor() {
    this.users = new Map();
    this.init();
  }

  encryptAES = (str) => {
    const text = JSON.stringify(str);
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(text);

    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return {
      iv: iv.toString(HEX),
      encryptedData: encrypted.toString(HEX),
    };
  };

  decryptAES = (text) => {
    const ivd = Buffer.from(text.iv, HEX);
    const encryptedText = Buffer.from(text.encryptedData, HEX);

    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), ivd);
    let decrypted = decipher.update(encryptedText);

    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  };

  encrypt = (toEncrypt, pathPublic) => {
    const absolutePath = path.resolve(pathPublic);
    const publicKey = fs.readFileSync(absolutePath, UTF_8);

    const aes = this.encryptAES(toEncrypt);
    const buffer = Buffer.from(aes.iv, UTF_8);

    const encrypted = crypto.publicEncrypt(publicKey, buffer);
    aes.iv = encrypted.toString(BASE_64);
    return aes;
  };

  decrypt = (toDecrypt, pathPrivate) => {
    const absolutePath = path.resolve(pathPrivate);
    const privateKey = fs.readFileSync(absolutePath, UTF_8);

    const buffer = Buffer.from(toDecrypt.iv, BASE_64);
    const decrypted = crypto.privateDecrypt(
      {
        key: privateKey.toString(),
        passphrase: PASS_PHRASE,
      },
      buffer,
    );
    toDecrypt.iv = decrypted.toString(UTF_8);
    return this.decryptAES(toDecrypt);
  };

  readFileKey = (dir) => {
    try {
      const absolutePath = path.resolve(dir);
      const content = fs.readFileSync(absolutePath, UTF_8);

      return content;
    } catch (e) {
      return FILE_NOT_FOUND;
    }
  };

  writeUserFile = (data, dir) => {
    const absolutePath = path.resolve(dir);
    fs.writeFile(absolutePath, JSON.stringify(data), (err) => {
      if (err) message.warn(JSON.stringify(err));
      return false;
    });
  };

  init = () => {
    const content = this.readFileKey();

    if (content === FILE_NOT_FOUND) {
      this.users.set(initUser.username, initUser);
      return FILE_NOT_FOUND;
    }

    const listItem = JSON.parse(this.decrypt(content, DIR_PRI));

    this.users = new Map(listItem.map((item) => [item.username, item]));
    return true;
  };

  setUser = (user) => {
    const usr = this.users.get(user.username);
    // message.config({ duration: 30 });
    // message.warn(JSON.stringify({ u: usr, dir: DIR_HASH }));
    if (!usr || usr.password !== user.password) return null;

    this.users.set(user.username, user);
    const parseUsers = Array.from(this.users.values());
    const encrypt = this.encrypt(parseUsers, DIR_PUB);
    // message.success(JSON.stringify(encrypt));
    this.writeUserFile(encrypt, DIR_HASH);
    return user;
  };
}

const authentication = new Authentication();

export default authentication;
