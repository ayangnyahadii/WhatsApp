let handler = async (m, { conn }) => {
     conn.reply(m.chat, `Bot ini Menggunakan Script Private, Jika ingin Script Seperti ini bisa cek Script ORI cari sja di github Family-Md ,makasi!`, m)
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler


