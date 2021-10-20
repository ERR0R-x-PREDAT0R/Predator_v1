/* codded by Hisham
redited by Rashi
use this git under copyright
dont change credit
*/

const Hisham = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')

// Inbox Block System
// This Plugins By Hisham Muhammed 
const INBO = "Mwonu Pm Msg വേണ്ട , Pm Msg അയച്ചാൽ Block ചെയ്യാൻ മൊയിലാളി പറഞ്ഞു 🦖.ശെരി എന്നാ mwonu take care ട്ടോ🤭"
const Heroku = require('heroku-client');
const heroku = new Heroku({
	token: Config.HEROKU.API_KEY
});

let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

var rashi_desc = ''
var OFF = ''
var ON = ''

if (Config.LANG == 'EN') {

  rashi_desc = 'change pm block mode'
  OFF = 'ᴘᴍ ʙʟᴏᴄᴋ ꜰᴇᴀᴛᴜʀᴇ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ꜱʜᴜᴛᴅᴏᴡɴᴇᴅ \n     ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ ᴀ ꜰᴇᴡ ᴍɪɴᴜᴛᴇ 🧚‍♀️'
  ON = 'ᴘᴍ ʙʟᴏᴄᴋ ꜰᴇᴀᴛᴜʀᴇ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴏᴘᴇɴᴇᴅ \n          ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ ᴀ ꜰᴇᴡ ᴍɪɴᴜᴛᴇ 🧚‍♀️'
}

if (Config.LANG == 'ML') {

  rashi_desc = 'pm block mode മാറ്റാൻ'
  OFF = '*Pm Block Mode OFF ആക്കി💌*'
  ON = '*Pm Block Mode ON ആക്കി💌*'
}

Hisham.addCommand({ pattern: 'pmblock ?(.*)', fromMe: true, desc: rashi_desc, usage: '.pmblock on / off' }, (async (message, match) => {
  if (match[1] == 'off') {
    await heroku.patch(baseURI + '/config-vars', {
      body: {
                        ['PM_BLOCK']: 'false'
      }
    });
    await message.sendMessage(OFF)
  } else if (match[1] == 'on') {
    await heroku.patch(baseURI + '/config-vars', {
      body: {
                        ['PM_BLOCK']: 'true'
      }
    });
    await message.sendMessage(ON)
  }
}));

 if (Config.PM_BLOCK == 'true') {
Hisham.addCommand({on: 'text', fromMe: false, delownsewcmd: false, onlyPm: true }, (async (message, match) => {
        let regexb1ichu = new RegExp('.')
        let regexb2ichu = new RegExp('a')
        let regexb3ichu = new RegExp('e')
        let regexb4ichu = new RegExp('i')
        let regexb5ichu = new RegExp('o')
        let regexb6ichu = new RegExp('u')
// export data -(Hisham-muhammed)
          if (regexb1ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          } 
        else if (regexb2ichu.test(message.message)) {
          
           await message.client.sendMessage(message.jid, '*' + INBO + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb3ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
        else if (regexb4ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb5ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb6ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          
}));

}
