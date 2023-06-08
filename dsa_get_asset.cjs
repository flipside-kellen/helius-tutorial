require('dotenv').config();
console.log(process.env);

const url = `https://rpc.helius.xyz/?api-key=${process.env.HELIUS_API_KEY}`

const getAsset = async () => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'my-id',
      method: 'getAsset',
      params: {
        id: 'F9Lw3ki3hJ7PF9HQXsBzoY8GyE6sPoEZZdXJBsTTD2rk'
      },
    }),
  });
  const { result } = await response.json();
  console.log("Asset: ", result);
};
getAsset();
