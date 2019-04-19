const contractAddress = "0x372Ae82c2c667dA5b0c3Bc8D75E6f421b1f2966e"
const abi = [{"anonymous":false,"inputs":[{"indexed":false,"name":"_sender","type":"address"},{"indexed":true,"name":"_text","type":"string"},{"indexed":true,"name":"_time","type":"uint256"}],"name":"Recorded","type":"event","signature":"0xe4af93ca7e370881e6f1b57272e42a3d851d3cc6d951b4f4d2e7a963914468a2"},{"constant":true,"inputs":[],"name":"getList","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x942b765a"},{"constant":false,"inputs":[{"name":"text","type":"string"},{"name":"time","type":"uint256"}],"name":"add","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x36555b85"},{"constant":true,"inputs":[{"name":"time","type":"uint256"}],"name":"get","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x9507d39a"}]

export {contractAddress, abi}