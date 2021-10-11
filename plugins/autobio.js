/* Copyright (C)  2020  Raashii.
 */

const Raashii = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
  token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

var rashi_desc = ''
var OFF = ''
var ON = ''

if (config.LANG == 'EN') {

  rashi_desc = 'change Auto bio mode'
  OFF = 'ᴀᴜᴛᴏ ʙɪᴏ ꜰᴇᴀᴛᴜʀᴇ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ꜱʜᴜᴛ ᴅᴏᴡɴᴇᴅ \n    ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ ᴀ ꜰᴇᴡ ᴍɪɴᴜᴛᴇ 😼'
  ON = 'ᴀᴜᴛᴏ ʙɪᴏ ꜰᴇᴀᴛᴜʀᴇ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴏᴘᴇɴᴇᴅ \n          ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ ᴀ ꜰᴇᴡ ᴍɪɴᴜᴛᴇ 😼'
}

if (config.LANG == 'ML') {

  rashi_desc = 'Auto bio mode മാറ്റാൻ'
  OFF = '*AUTO BIO OFF ആക്കി💌*'
  ON = '*AUTO BIO ON ആക്കി💌*'
}

Raashii.addCommand({ pattern: 'autobio ?(.*)', fromMe: true, desc: rashi_desc, usage: '.autobio on / off' }, (async (message, match) => {
  if (match[1] == 'off') {
    await heroku.patch(baseURI + '/config-vars', {
      body: {
                        ['AUTO_BİO']: 'false'
      }
    });
    await message.sendMessage(OFF)
  } else if (match[1] == 'on') {
    await heroku.patch(baseURI + '/config-vars', {
      body: {
                        ['AUTO_BİO']: 'true'
      }
    });
    await message.sendMessage(ON)
  }
}));
