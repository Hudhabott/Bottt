let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://database.tioclkp02.repl.co/1240fb4a4d600fb02355b.png', m, { packname: "Sama Sama by", author: "Hudha:)" })
}

handler.customPrefix = /^(Terima Kasih|Thanks|tq|Thnks|Makasih|thnks)$/i
handler.command = new RegExp

module.exports = handler
