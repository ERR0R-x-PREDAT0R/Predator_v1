/* codded by afnanplk
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// PLK Special Functions
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {

 Z_NUMBER: process.env.NUMBER === undefined ? '919383491460' : process.env.NUMBER,
 Z_OWNER: process.env.OWNER_NAME === undefined ? 'Alin' : process.env.OWNER_NAME,

};
