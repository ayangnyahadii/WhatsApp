const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*ao/i.test(m.quoted.contentText)) return !0
    this.caklontong = this.caklontong ? this.caklontong : {}
    if (!(id in this.caklontong)) return this.sendButton(m.chat, 'Soal itu telah berakhir', wm, 'Lagi?', '.caklontong', m)
    if (m.quoted.id == this.caklontong[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.caklontong[id][1]))
        if (['.lontong', 'Bantuan', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.caklontong[id][2]
            await this.sendButton(m.chat, benar + ` +${this.caklontong[id][2]} XP`, wm, 'Lagi?', '.caklontong', m)
            clearTimeout(this.caklontong[id][3])
            delete this.caklontong[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) this.sendButton(m.chat, dikit, wm, 'Bantuan', '.lontong', m)
        else this.sendButton(m.chat, salah, wm, 'Bantuan', '.lontong', m)
    }
    return !0
}
handler.exp = 0

module.exports = handler
