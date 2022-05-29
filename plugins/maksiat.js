let fetch = require('node-fetch') 
let handler  = async (m) => {
  let res = await fetch(global.API('https://raw.githubusercontent.com', '/ayangnyahadii/database/master/scraper/premium.json'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  m.reply(pickRandom(json))
}
handler.help = ['maksiat']
handler.tags = ['premium']
handler.command = /^(maksiat)$/i
handler.register = true
handler.premium = true
handler.private = true

module.exports = handler

function pickRandom(list) {
  return list[Math.round(Math.random() * list.length)]
}
