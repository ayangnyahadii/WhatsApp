const fetch = require('node-fetch')
let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        await conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', wm, 'Bantuan', usedPrefix + 'saha', conn.siapakahaku[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/ayangnyahadii/database/master/games/siapakahaku.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
${json.soal}
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik .saha untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.siapakahaku[id] = [
        await conn.sendButtonLoc(m.chat, fla + 'Aku Siapa?', caption, wm, 'Bantuan', usedPrefix + 'saha', m),
        json, poin,
        setTimeout(async () => {
            if (conn.siapakahaku[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}* \n *${json.deskripsi}*`, wm, 'Aku Siapa?', '.siapaaku', conn.siaakahaku[id][0])
            delete conn.siapkahaku[id]
        }, timeout)
    ]
}
handler.help = ['siapaaku']
handler.tags = ['game']
handler.command = /^siapa(kah)?aku/i
handler.register = true

module.exports = handler
