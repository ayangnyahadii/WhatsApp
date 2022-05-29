let handler = async (m, { conn }) => {
     conn.reply(m.chat, `BOT INI MENGGUNAKAN REPOSITORY/SOURCE CODE PRIVATE!!!\n\nJIKA ANDA INGIN MEMBUAT BOT SEPERTI BOT INI ANDA BISA MENGGUNAKAN SOURCE CODE / REPOSITORY ORIGINAL DARI BOT INI.\n\nTHANKS TO\nFAMILY-MD\n• https://github.com/fokusdotid/Family-Md\n\nJangan lupa kalo pake fork dan starnya lu itu cuma make seengaknya ngehargain yang bikin!!`, global.ftroli)
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler


