/* Copyright © 2021 TERROR BOY.
   re-codded ----»»» alinshan
*/

const Ktb = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('whatsappstatus');

// WHATSAPP STATUS 

// THIS PLUGIN IS OWNED BY KARTHIK_TERROR-BOY


if (Config.WORKTYPE == 'private') {

    Ktb.addCommand({pattern: 'ws', fromMe: true, desc: Lang.WS}, (async (message, match) => {
        
     var reply = await message.client.sendMessage(message.jid,'*꧁٭Downloading Status٭꧂*', MessageType.text);
 
        var r_text = new Array ();

        r_text[0] = "https://i.imgur.com/WXEksN4.mp4";
        r_text[1] = "https://imgur.com/3VOuEfg.mp4";
        r_text[2] = "https://imgur.com/rbGjIBI.mp4";
        r_text[3] = "https://imgur.com/tt2gMXr.mp4";
        r_text[4] = "https://imgur.com/kR4XGKY.mp4";
        r_text[5] = "https://imgur.com/3PHv4Uu.mp4";
        r_text[6] = "https://imgur.com/4O5pLdC.mp4";
        r_text[7] = "https://imgur.com/Q6REjY0.mp4";
        r_text[8] = "https://imgur.com/5m5TDEJ.mp4";
        r_text[9] = "https://i.imgur.com/j8EHCh6.mp4";
        r_text[10] = "https://i.imgur.com/j8EHCh6.mp4";
        r_text[11] = "https://i.imgur.com/IUb17JQ.mp4";
        r_text[12] = "https://i.imgur.com/SH3tyRo.mp4";
        r_text[13] = "https://i.imgur.com/mSAFD9c.mp4";
        r_text[14] = "https://imgur.com/a/yY48lMK.mp4";
        r_text[15] = "https://imgur.com/64FWq3W.mp4";
        r_text[16] = "https://imgur.com/aZlS1bV.mp4";
        r_text[17] = "https://imgur.com/ed0X9m5.mp4";
        r_text[18] = "https://imgur.com/nDlrBug.mp4";
        r_text[19] = "https://imgur.com/3AczL5y.mp4";
        r_text[20] = "https://imgur.com/CeizCwC.mp4";
        r_text[21] = "https://imgur.com/XQNNBxg.mp4";
        
        

        var i = Math.floor(22*Math.random())

        var respovideo = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
        
// EXPORTING
        reply = await message.client.sendMessage(message.jid,'*꧁٭Uploading Status٭꧂*', MessageType.text);
        await message.client.sendMessage(message.jid, Buffer(respovideo.data), MessageType.video, {mimetype: Mimetype.mp4, quoted: message.data, caption: '◄━━━⦁⦁*PREDATOR_V1💞*⦁⦁━━━►'})

        
    }));
}
else if (Config.WORKTYPE == 'public') {

    Ktb.addCommand({pattern: 'ws', fromMe: false, desc: Lang.WS}, (async (message, match) => {
        
      var reply = await message.client.sendMessage(message.jid,'*꧁٭Downloading Status٭꧂*',MessageType.text);
 
     
        
        var r_text = new Array ();

        r_text[0] = "https://i.imgur.com/WXEksN4.mp4";
        r_text[1] = "https://imgur.com/3VOuEfg.mp4";
        r_text[2] = "https://imgur.com/rbGjIBI.mp4";
        r_text[3] = "https://imgur.com/tt2gMXr.mp4";
        r_text[4] = "https://imgur.com/kR4XGKY.mp4";
        r_text[5] = "https://imgur.com/3PHv4Uu.mp4";
        r_text[6] = "https://imgur.com/4O5pLdC.mp4";
        r_text[7] = "https://imgur.com/Q6REjY0.mp4";
        r_text[8] = "https://imgur.com/5m5TDEJ.mp4";
        r_text[9] = "https://i.imgur.com/j8EHCh6.mp4";
        r_text[10] = "https://i.imgur.com/j8EHCh6.mp4";
        r_text[11] = "https://i.imgur.com/IUb17JQ.mp4";
        r_text[12] = "https://i.imgur.com/SH3tyRo.mp4";
        r_text[13] = "https://i.imgur.com/mSAFD9c.mp4";
        r_text[14] = "https://imgur.com/a/yY48lMK.mp4";
        r_text[15] = "https://imgur.com/64FWq3W.mp4";
        r_text[16] = "https://imgur.com/aZlS1bV.mp4";
        r_text[17] = "https://imgur.com/ed0X9m5.mp4";
        r_text[18] = "https://imgur.com/nDlrBug.mp4";
        r_text[19] = "https://imgur.com/3AczL5y.mp4";
        r_text[20] = "https://imgur.com/CeizCwC.mp4";
        r_text[21] = "https://imgur.com/XQNNBxg.mp4";
        
        

        var i = Math.floor(22*Math.random())

        var respovideo = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
        
// EXPORTING
        reply = await message.client.sendMessage(message.jid,'*꧁٭Uploading Status٭꧂*',MessageType.text);
        await message.client.sendMessage(message.jid, Buffer(respovideo.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '◄━━━⦁⦁*PREDATOR_V1💞*⦁⦁━━━►',})

    }));

} 
