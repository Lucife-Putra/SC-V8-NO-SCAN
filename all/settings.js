const fs = require('fs')
const chalk = require('chalk')

global.owner = "6289528681577"
global.ownerStore = "6289528681577"
global.namabot = "OktzBotz"
global.namaCreator = "OktzOffc"
global.namaStore = "OktzOfc || Digital MarketPlace"
global.autoJoin = false
global.antilink = false
global.anticall = true
global.themeemoji = '🪀'
global.versisc = 'Private'
global.namasc = 'Private'
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.apitokendo = 'dop_v1_9a0906d0b316369de5ba2eec0ef74a045e8e2f22567eff00876bd2194132def1'
global.apilinode = '-'
//SERVER 1
global.domain = 'https://new.pannelvvip.my.id' // Isi Domain Lu
global.apikey = 'ptla_nZ6v1hwUJh10eC5Mnu7UzvEpLiWvI0kGzLbpExHDiPy' // Isi Apikey Plta Lu
global.capikey = 'ptlc_FYMBRNJrLvmwAyQeowK2ncdPYUTAiJytghyid9on6w9' // Isi Apikey Pltc Lu
//SERVER 2
global.domainn = 'https://denzzxxoffc.tokodigital.software' // Isi Domain Lu
global.apikeyy = 'ptla_VFxYtGS1xBo1MAru4YrVi44sr7GuSPOgw8AA1C7yBqU' // Isi Apikey Plta Lu
global.capikeyy = 'ptlc_Ll8PgaQg4XVVbe0cJ5Yk1BnSwOYfKqv6G5xf2EbdeOH' // Isi Apikey Pltc Lu
//SERVER 3
global.domainnn = '-'
global.apikeyyy = '-'
global.capikeyyy = '-'
//BATAS
global.domainotp = "https://claudeotp.com/api"
global.apikeyotp = "-"
global.signature = "hash_hmac('sha256', $merchantCode.$channel.$merchantRef, $privateKey)"
global.merchant = "INV55567"
//MAU PEDIA
global.api_key = "iTn0HbFfeqHVgSEVVFGfRd6z26QuDntcqh0gWnExriecgS2F2PzHojNrgOySz85S"//@zallDev
global.api_id = "s0IJboQFZHznkYQ0"//@zallDev
global.secret = "h&gg#RafatharOffcial976*#"//@zallDev
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./all/sound.mp3")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""
global.tekspushkonv4 = ""
global.packname = ""
global.author = "Sticker By OktzOffc"
global.jumlah = "5"
global.youtube = "Gk punya"
global.grup = "*https://chat.whatsapp.com/IGZ0GQwIHZA3L1kvEpot0g*"
global.telegram = "*-*"
global.instagram = "-"
global.harga1 = "15k"
global.spekvps1 = "8gb Core 4"
global.vps1 = "Digital Ocean"
global.harga2 = "20k"
global.spekvps2 = "8gb Core 4"
global.vps2 = "Linode"
global.harga3 = "25k"
global.spekvps3 = "16gb Core 6"
global.vps3 = "Linode"
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})