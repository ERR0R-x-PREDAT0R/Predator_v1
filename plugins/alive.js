/* Coded By Ravindu Manoj.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const PR = 'System Status';

const Language = require('../language');
const Lang = Language.getString('sewpropbot');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'aliv', fromMe: true, desc: PR}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://imgur.com/a/SlALUNr.jpeg";
    r_text[1] = "https://imgur.com/a/SlALUNr.jpeg";

    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '_*CODDED BY ALINSHAN*_\n\n'})

    }));
    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: PR}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://imgur.com/a/SlALUNr";
    r_text[1] = "https://imgur.com/a/SlALUNr";

    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '_*CODDED BY ALINSHAN*_\n\n'})      
    }));
    Asena.addCommand({pattern: 'psysd', fromMe: true, desc: PR}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://imgur.com/a/SlALUNr";
    r_text[1] = "https://imgur.com/a/SlALUNr";

    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '_*CODDED BY ALINSHAN*_\n\n'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'aliv', fromMe: false, desc: PR}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://imgur.com/a/SlALUNr.jpeg";
    r_text[1] = "https://imgur.com/a/SlALUNr.jpeg";

    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '_*CODDED BY ALINSHAN*_\n\n'})
    }));
    Asena.addCommand({pattern: 'psysd', fromMe: true, desc: PR}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://imgur.com/a/SlALUNr.jpeg";
    r_text[1] = "https://imgur.com/a/SlALUNr.jpeg";

    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '_*CODDED BY ALINSHAN*_\n\n'})

    }));
    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: PR}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://imgur.com/a/SlALUNr.jpeg";
    r_text[1] = "https://imgur.com/a/SlALUNr.jpeg";

    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '_*CODDED BY ALINSHAN*_\n\n'})

    }));
}

