import { message } from 'antd';
import { TOKEN_KEY } from 'renderer/constants';
import crypto from 'crypto';

const { fs, path } = window.nodeJs;

export const dirAuth =
  path.resolve() +
  (process.env.NODE_ENV === 'development'
    ? '\\assets\\oooooo-55555-vvvvv-55555-ooooooo'
    : '\\resources\\assets\\oooooo-55555-vvvvv-55555-ooooooo');

const HEX = 'hex';
const UTF_8 = 'utf8';
const PASS_PHRASE = 'vvv-111-ZZZ-777-ddd-@@@-000000-@@@-ddd-777-ZZZ-111-vvv';

const DIR_PUB = `${dirAuth}\\hhh-444-xxx-333-iii-lll.pem`;
const DIR_PRI = `${dirAuth}\\yyy-jjj-111-zzz-444-fff.pem`;
const DIR_HASH = `${dirAuth}\\xxxxxx-444444-00000-444444-xxxxxx`;
const FILE_NOT_FOUND = Symbol('FILE_NOT_FOUND');

const initUser = {
  username: 'admin',
  password: 'admin',
};

class Authentication {
  constructor() {
    this.users = new Map();
  }

  init = () => {
    let data = this.getSecretData();
    if (!data) {
      this.users.set(initUser.username, initUser);
      data = JSON.stringify(Array.from(this.users.values()));
    } else {
      data = this.descrypt(data);
    }
    data = Buffer.from(data).toString();
    const parseData = JSON.parse(data);

    for (let user of parseData) {
      this.users.set(user.username, user);
    }

    this.enscrypt(data);
  };

  getSecretData = () => {
    try {
      const secretData = Buffer.from(fs.readFileSync(DIR_HASH)).toString();
      //console.log(secretData);
      return secretData;
    } catch (error) {
      //console.log('no Data', error.message);
      return null;
    }
  };

  enscrypt = (data) => {
    const pubK = Buffer.from(fs.readFileSync(DIR_PUB)).toString();
    const buf = Buffer.from(data, UTF_8);
    const secretData = crypto.publicEncrypt(pubK, buf);

    this.writeUserFile(secretData.toString(HEX), DIR_HASH);
    return secretData.toString(HEX);
  };

  descrypt = (secretData) => {
   // console.log("secretData", secretData);
    const privK = Buffer.from(fs.readFileSync(DIR_PRI)).toString();
   // console.log("privK", privK);
    const hashData = Buffer.from(secretData, HEX);
   // console.log("hashData", hashData);
    const origData = crypto.privateDecrypt(
      {
        key: privK,
        passphrase: PASS_PHRASE,
      },
      hashData
    );
    //  console.log("origData", origData);
    return origData;
  };

  writeUserFile = (data, dir) => {
    fs.writeFileSync(dir, data, (err) => {
      if (err) message.warning(JSON.stringify(err));
      return false;
    });
  };

  userLogin = (req) => {
   // console.log(req, this.users, dirAuth);
    const user = this.users.get(req.username);
    if (user && user.password === req.password) {
      localStorage.setItem(TOKEN_KEY, JSON.stringify(req));
      return true;
    }
    return false;
  };
}

const authentication = new Authentication();
export default authentication;
