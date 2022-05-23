let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Bot 」
│ • all payment
│ • trakteer.id/hdiiofficial
│ • saweria.co/hdiiofficial
│ • sociabuzz.com/hdiiofficial/tribe
│ • Dana  [085700921759]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6285701399751
│ atau bisa langsung TF data diatas
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────

Berapapun donasi kalian sangat berarti bagi kami.
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
