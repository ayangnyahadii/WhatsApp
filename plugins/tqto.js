/**
* jangan dihapus/diganti ya kontol
* lu itu cuma make jadi jangan diapa apain ya bangsat
* mending lu tambahin deh nama lu jangan hapus kreditnya
**/

let handler = async (m, { conn, usedPrefix }) => {
conn.sendButton(m.chat, `*BIG THANKS TO*

Nurutomo: 
https://github.com/Nurutomo
Istikmal: 
https://github.com/BochilGaming
Ariffb: 
https://github.com/Ariffb25
Aguz Familia:
https://github.com/FokusDotId
Amelia Lisa:
https://github.com/Ameliascrf
Aniq12
https://github.com/aniq12
Ilman: 
https://github.com/ilmanhdyt
Amirul: 
https://github.com/amiruldev20
Irwan:
https://github.com/irwanx
Rasel:
https://github.com/raselcomel
Family-Md
https://github.com/fokusdotid/family-md
hdiiofficial:
https://trakteer.id/hdiiofficial
`.trim(), wm, 'Menu', '.menu', global.ftroli)
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits?|thanks?to|tqto|ttq)$/i

module.exports = handler
