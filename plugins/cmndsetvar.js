/* created by saidali liyamolbotz
re edited by alinshan
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const Ln = "*SETVAR SETTING COMMADS* "
 const code = "*Hi 👾 Do Yo Want Know Setvar Commands 💌*\n\n*nigale setvar command use cheyyan njan ningale sahayikkam*\n\n*setvar commads here*\n👇👇👇👇👇👇👇\n\n*.setvar SUDO:91xxxxxxxxx,0 nigalude number sudo akkuvan*\n```💌Example:.setvar SUDO:919383491460,0```\n\n*.setvar ALIVE_MESSAGE:alive msg sett cheyyan*\n```💌Example:.setvar ALIVE_MESSAGE:hey bro i am alive```\n\n*.setvar ALL_CAPTION:all image/video caption mattan*\n```💌Example:.setvar ALL_CAPTION:made by predator wa bot```\n\n*.setvar BAN_MESSAGE:ban msg sett cheyyan*\n```💌Example:.setvar BAN_MESSAGE:sheri ennal```\n\n*.setvar BOT_NAME:bot name sett cheyyan*\n```💌Example:.setvar BOT_NAME:Predator_v1```\n\n*.setvar KICKME_MESSAGE:kick msg diloge sett akkan*\n```💌Example:.setvar KICKME_MESSAGE:Njan pokunnu bye```\n\n*.setvar MUTE_MESSAGE:mute msg set akkan*\n```💌Example:.setvar MUTE_MESSAGE:Muted By Predator```\n\n*.setvar OWNER_NAME:owner name mattan*\n```💌Example:.setvar OWNER_NAME:Rasheed Ikka```\n\n*.setvar PROMOTE_MESSAGE:admin akkumbol ulla msg sett akkuvan*\n```💌Example:.setvar PROMOTE_MESSAGE:promoted```\n\n*.setvar SONGD:song downloading aavumbol ulla text maattan*\n```💌Example:.setvar SONGD:Downloading aan wait mwonu```\n\n*.setvar SONGU:song uploading aavumbol ulla text maattan*\n```💌Example:.setvar SONGU:Ippo varum```\n\n*.setvar TAG_HEADER:mention tagil heading sett akkuvan*\n```💌Example:.setvar TAG_HEADER:Our members ⬇️```\n\n*.setvar TAG_REPLY:nigale mention vekkumbol audio/sticker varan ex 91xxxxxxxxxx@s.whatsapp.net*\n```💌Example:.setvar TAG_REPLAY:919383491460@s.whatsapp.net```\n\n\n\n*true and false Meaning*\n\n*ture=on*\n*false=off*\n\n*.setvar ALL_LINK_BAN:*\n```💌Example:.setvar ALL_LINK_BAN:false```\n\n*.setvar ANTİ_LİNK:*\n```💌Example:.setvar ANTİ_LİNK:false```\n\n*.setvar AUTO_BİO:*\n```💌Example:.setvar AUTO_BİO:false```\n\n*.setvar BGM_BGM_FILTER:*\n```💌Example:.setvar BGM_FILTER:false```\n\n*.setvar DEBUG:*\n```💌Example:.setvar DEBUG:false```\n\n*.setvar FULL_EVA:*\n```💌Example:.setvar FULL_EVA:false```\n\n*.setvar NO_LOG:*\n```💌Example:.setvar NO_LOG:false```\n\n*.setvar NO_ONLINE:*\n```💌Example:.setvar NO_ONLINE:true```\n\n*.setvar SEND_READ:*\n```💌Example:.setvar SEND_READ:true```\n\n*.setvar STICKER_REPLY:*\n```💌Example:.setvar STICKER_REPLAY:true```\n\n*.setvar THERI_KICK:*\n```💌Example:.setvar THERI_KICK:false```\n\n\n *WORK TYPE CHANGE METHORD*\n*.setvar WORK_TYPE:private*\n*.setvar WORK_TYPE:public*\n *SOME SHORT KEYS*\n*.autobio on/off*\n*.mlink on/off*\n*.theri no/yes*\n*.greet gif/pp*\n*.fulleva on/off*\n\n\n*«ɴᴇᴡ»\n*.theriblock on/off*\n*(pm il theri vilichal block cheyyan)*\n\n*.pmblock on/off*\n*(pm il msg ittal block cheyyan)*\n\n\n\n 💌" 
{
    
      Asena.addCommand({pattern: 'varhelp', fromMe: true, desc: Ln,}, (async (message, match) => {

    await message.client.sendMessage(
  
      message.jid,code, MessageType.text, {quoted: message.data});
  
  }));
  }
