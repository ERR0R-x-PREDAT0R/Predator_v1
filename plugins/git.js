const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const config = require('../config');
const fs = require("fs")
const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var rashi = await axios.get(config.RASHI, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer(rashi.data), MessageType.image, {quoted: message.data , thumbnail: fs.readFileSync('./image/r.jpg'), mimetype: Mimetype.png, caption: `*≈≈≈≈PREDATOR_V1≈≈≈≈*
 

        *Github link   _https://github.com/ERR0R-x-PREDAT0R/Predator_v1*
 

`}) 

})); 
