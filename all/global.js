const fs = require('fs')
const chalk = require('chalk')

require("./color")
require("./settings")
require("./spinner")
require("./upload")
require("./mess")
require("./exif")
require("./button")
require("./jadibot")
require("./tiktok")
require("./canvas")

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})