let handler = async (m, { conn }) => {

 let who
 if (m.isGroup) who = m.mentionedJid[0]
 else who = m.chat
 if (!who) throw 'Tag Orang yang mau diblock!'
 let user = `${who.split("@s.whatsapp.net")[0]}` + '@c.us'
    await conn.blockUser(user, 'add')
  conn.reply(m.chat, `Done!`, m)
}
handler.help = ['banned <@user>']
handler.tags = ['owner']
handler.command = /^banned$/i
handler.owner = true

module.exports = handler
