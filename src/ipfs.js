var IPFS = require('ipfs-api');

// connect to ipfs daemon API server
//var ipfs = ipfsAPI('localhost', '5001', {protocol: 'http'}) // leaving out the arguments will default to these values
var ipfs = IPFS('/ip4/127.0.0.1/tcp/5001')
//const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

export default ipfs;