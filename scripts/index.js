const {
    generateKeyPairSync
  } = require('crypto');
const fs = require('fs');

  const {
    publicKey,
    privateKey,
  } = generateKeyPairSync('rsa', {
    modulusLength: 1024,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs1',
      format: 'pem',
      cipher: 'aes-256-cbc',
      passphrase: 'vvv-111-ZZZ-777-ddd-@@@-000000-@@@-ddd-777-ZZZ-111-vvv'
    }
  });

  writeUserFile = (data, dir) => {
    fs.writeFileSync(dir, data, (err) => {
      if (err) message.warning(JSON.stringify(err));
      return false;
    });
  };

  writeUserFile(publicKey, 'scripts\\public.pem');
  writeUserFile(privateKey, 'scripts\\private.pem');
console.log(privateKey);