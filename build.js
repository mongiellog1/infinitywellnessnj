const fs = require("fs");
fs.writeFileSync('./.env', `SNIPCART_API_KEY=${process.env.SNIPCART_API_KEY}
IWNJ_address=${process.env.IWNJ_ADDRESS}
SHOP_address=${process.env.SHOP_ADDRESS}
\n`)
