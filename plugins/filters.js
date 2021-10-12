/* Copyright (C) 2020 farhan-dqz.
re codded by raashii 
ZARA V2
*/
const fs = require('fs')
const Asena = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const jid = Config.DISBGM !== undefined ? COnfig.DISBGM.split(',') : [];
const Language = require('../language');
const Lang = Language.getString('filters');

if (Config.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
Asena.addCommand({on: 'text', fromMe: false }, (async (message, match) => {
    if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '916282120758@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
const array = ['name entha','Helo','King','Kooi','Tuttu','Azaru','Ramos','Tentacion','baby','Love','nirthada','Neymar','umma','Music','Kurup','Friend','Rose','aara','Alone','ayilla','bie','Chiri','colony','enth','entha','Fuck','Goal','Hambada','Kanja','Killedi','kuthirappavan','mathi','Meeting','mier','moonji','Name','Oh no','pever','Potta','Serious','Soldier','Sry','Subscribe','thottu','Va','Vada','vimanam','sorry','nanban','Lala','Smile','ghost','La be','Sed','Uff','Legend','music','Fek','Psycho','Town','Pwoli','Uyir','Malang','Bad','Boss','Thamasha','big fan','charlie','gd n8','kar98','love u','Endi','endi','noob','Poweresh','Perfect ok','perfect ok','power','saji','sed','single','waiting','Myr','myr','Malappuram','uyir','thug','avastha','Moodesh','sketched','Cr7','Z aayi','manasilayo','Hi','Hlo','nirtheda','Aarulle','Cr7 back','Portugal','ennitt','Boss',,'Haters','ayn','Kgf','😎','Akshay uyir','sed bgm','Messi','Hehe','hehe','Set aano','set aano','Bot myren','Venda','venda','chadhi','Chadhi','Hbday','hbday','Bot','R yyi padicho','Myre','myre','Oompi','oompi','parayatte','Fresh','fresh','Ok da','ok da','Feel aayi','feel aaayi','Scene','scene','Ok bei','ok bei','Da','Kozhi','kozhi','adi','Adi','kali','Kali','thantha','Thantha','Aysheri','aysheri','thund','Thund','thot','Thot','sneham','Sneham','pm','Pm','paatt','Paatt','njan','Njan','life','Life','Killadi','killadi','good bye','Good bye','evide','Evide','achan','Achan','kunna','Kunna','broken','Broken','why','Why','enth patti','Enth patti','pani','Pani','padicho','Padicho','paad','Paad','Chatho','chatho','lover','Lover','nanayikoode','Nanayikoode','Die','die','hate','Hate','Lamiya engineering','lamiya engineering','nallath','Nallath','Neymer','neymer','patti','Patti','poora','Poora','Rohit','rohit','thall','Thall','Theri','theri','potte','Potte','Pinky','Caption','caption','onn poyi','Onn poyi','problem','Problem','lub','recharge','Recharge','Pinky','chill','Chill','help','Help','kunda','Kunda','povano','Povano','sthalam','Sthalam','tholvi','Tholvi','vannu','Vannu']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
});
    }
    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
else if (Config.WORKTYPE == 'public') {

Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
    
if (Config.PLKBGM == 'one') {  
    
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '916282120758@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/rashii.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: 99978509, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.AFNN) {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/rashii.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: 99978509, quoted : message.data, ptt: true})
        }
const array = ['Help','Gud mng','Nachu','Ali','Aada','Aarum illa','Adi','Adipowli','Advice','Aha','Aliya','Allarum evida','Anik','Ara','Athoke','Avastha','Ayi','Ayo','Aysheri','Bot','Bro','Bye','Chunk','Cr7','Da aliya','Da pina','Da','Dhrishya','Edaa','Enna','Enta mone','Entod','Fans','Fuck','Girls','Ha','Haa','Hi','Hii','Hlo','Hai','Hloo','Hm','I love u','Insult','Ishtaa','Ivana','Jada','K','Kanjaav','Lionel','Makkale','Manas','Mass','Mention','Mm','Mng','Mrng','My','Nalla power','Ni','Niyum','Njamal','Njan','No','Oh','Oho','Ok','Paal','Penn','Pennigal','Piller','Pina','Poda','Podey','Pora','Power evide','Ringtone','Sarulla','Set aak','Set','Silent','Single','Song','Subscribe','Thanks','Thug','Umbi','Vaada','Vada','Wow','Yes','Yo','adich','alive','aliya','an','ayilla','bg','bot','broke','chaya','chunk','come on','da','dey','don','entry','git','help','ho','hot','k','kayari','king','kiss','kozhi','kundan','left','list','love','mention','messi','mood','muth','muthe','myr','myre','nanba','nari','nee','neymar','night','nyt','number save','number','oho','oii','ok','oo','omban','on','one','onn','owner','player','poda','power','rashii','sad','ser','set','setta','she','sir','some','song','stop','text','trance','umbi','va','vanne','vannu','varum','wow','ko','ma','od','sha','ya','an','apo','bomb','ee','machu','menu','mute','onn','pa','so','unmute','wait','adi','army','bye','chaya','edit','ip','kayari','la','mari','money','monu','nallath','rashii','patti','po','poth','Hy','Di','Aarulle','Anthas','Good bye','Hehe','ah','be','Qr','sa','lo','se','ch','by','ban','name entha','King','Tuttu','Azaru','Ramos','Tentacion','baby','Love','nirthada','Neymar','umma','Kurup','Friend','Rose','aara','Alone','ayilla','bie','Chiri','colony','enth','entha','Fuck','Goal','Hambada','Kanja','Killedi','kuthirappavan','Meeting','mier','moonji','Oh no','pever','Potta','Serious','Soldier','Sry','Subscribe','thottu','Va','Vada','vimanam','sorry','nanban','Lala','Smile','ghost','La be','Sed','Uff','Legend','music','Fek','Psycho','Town','Pwoli','Uyir','Malang','Bad','Thamasha','big fan','charlie','gd n8','kar98','love u','Endi','endi','noob','Poweresh','Perfect ok','perfect ok','Power','saji','sed','single','waiting','Myr','Malappuram','uyir','thug','avastha','Moodesh','sketched','Cr7','Z aayi','manasilayo','Poda','nirtheda','Cr7 back','Portugal','ennitt','Boss','Bgm','bgm','Haters','ayn','Kgf','sed bgm','Messi','hehe','Set aano','set aano','Bot myren','Venda','venda','chadhi','Chadhi','Hbday','hbday','R yyi padicho','Myre','myre','Oompi','oompi','parayatte','Fresh','fresh','Ok da','ok da','Feel aayi','feel aaayi','Scene','scene','Ok bei','ok bei','Kozhi','kozhi','adi','kali','Kali','thantha','Thantha','aysheri','thund','Thund','thot','pm','Pm','Thot','sneham','Sneham','paatt','Paatt','njan','Life','Killadi','killadi','good bye','evide','Evide','achan','Achan','kunna','Kunna','broken','Broken','why','Why','enth patti','Enth patti','pani','Pani','padicho','Padicho','paad','Paad','Chatho','bahubali','birthday','dora','nirthada','sugham','onn podo','chatho','lover','Lover','nanayikoode','Nanayikoode','Die','die','hate','Hate','nallath','Nallath','Neymer','neymer','patti','Patti','poora','Poora','thall','Thall','Theri','theri','potte','Potte','Caption','onn poyi','Onn poyi','problem','Problem','Master','Enthupatti','Kariyam','Sed','Sad','Pennu','Para','Pilleru','Theapp','Kakka','Kollam','mathi','Music','music','Sana','Frd','Ponu','ponu','mm','Vedi','vedi','don','Pic','pic','Dj','Oo','T','hi','Thampuran','songs','Ooi','Podi','podi','nee','Don','M','poyi','Nanban','anthas','ayitt','Ayn','Ayin','But y','Ennitt','Entry','Evide','Haha','Happy','Ithentha','Ivanetha','Left','Link','oi','trance','varunnilla','video','welcome','Aswathy','Sayooj','Sayumon','Aa','Aah','Allah','Group','How','Muthe','Nanba','Ni','Odiko','Njn','Photo','converting','avan','caption','link','Admin','Dream','Ee','Fan','free','grp','Hbd','Kooi','Malayalam','Men','Recharge','voice','tagall','Boys','Owner','work','remove','qr','sayooj']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: 99978509, quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
    if (Config.PLKBGM == 'two') {    
    Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {   
        if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '919072790587@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/rashii.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: 99978509,contextInfo: { forwardingScore: 3, isForwarded: true }, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.AFNN) {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/rashii.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
const array = ['Hi','Fek','bgm','Aarulle','aara','Aliya','Anthas','avastha','ayilla','baby','bie','Boss','Bro','Bye','colony','Di','Dj','ennitt','entha','evide','frd','Goal','Killadi','Killedi','Kozhi','Kunna','Rashi','Subscribe','Bgm','life','Life','ayn','welcome','Welcome','Mm','kunda','Kunda','Ayn','Cr7','mass','Uff','list','Mass','Nanban','nanban','uyir','Music','music','Ariyo','lub','love','new','ok da','New','Aysheri','Ayye','Bot','Chill','Da','Delete','Enth','Eppadi','Ethi','Happy','Hehe','Hello','Help','Hlo','How','Kali','Kd','King','Kollum','Kopp','Kundan','Life','Line','Love','Lover','Muthe','Myr','Nallath','Nice','Orakkam','Paatt','Para','Poda','Povoola','Pro','Pwoli','Remove','Sad','Scene','Sed','Sheri','Sherikkum','Single','Thanne','Thund','Vaa','Vanno','Vannu','Vere bot','Wait','Why','ariyo','ayn','aysheri','ayye','baby','chill','da','delete','enth','eppadi','ethi','happy','hehe','hello','help','hlo','how','kali','kd','king','kollum','kopp','kundan','leave','life','line','love','mrng','muthe','myr','nallath','nice','njan','orakkam','paatt','para','poda','podo','povoola','pro','pwoli','remove','sad','scene','sed','sheri','sherikkum','single','tagall','thanne','thund','vaa','vanno','vannu','vere bot','wait','why','Zara','alive','hi']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g')
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./upload/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: 99978509,contextInfo: { forwardingScore: 3, isForwarded: true }, quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    if(Config.STICKERP){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    if (!!message.mention && message.mention[0] == '15862077024@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./stickers/mention.webp'), MessageType.sticker, { mimetype: Mimetype.mp4Audio, contextInfo: { forwardingScore: 1000, isForwarded: true }, quoted : message.data, ptt: false})
    }
const array = ['Predator','Zara','Bye','bye','Dance','Gd mrng','Poyi','poda','podi','Pain','girl','asena','ayin','back','Back','Bot','fuck','Fuck','Hehe','Hello','Kill','kill','kiss','line','love','mwolu','Mwolu','single','tha','thund','z','Z','bie','Bie','list','machu','menu','mute','nee','onn','oo','pa','so','unmute','wait','adi','army','bye','chaya','edit','ip','kayari','la','mari','money','monu','nallath','night','nyt','on','patti','po','poth','sir','a','Hii','ee','Da','food','Hlo','para','love u','set','sed','jada','Hi','sad','don','Loki','Aada','Ara','Bgm','Dance','Dey','Di','Error','Fuck','Group','Muthe','Poli','Remove','Sayooj','Sayumon','Tripp','alive','ayin','bot','come','copy','done','escape','get','help','hm','img','kali','song','let','lost','myr','ni','nice','nokk','not','oh','oru','photo','podey','podi','pottan','run','ser','sex','sorry','truth','mention','welcome','sticker','Bro']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
   await message.client.sendMessage(message.jid, fs.readFileSync('./stickers/' + a + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false})
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
        if (pattern.test(message.message)) {
            await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
        }
    }
);
}));
}
