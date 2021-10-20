let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [082324867187]
│ • Gopay [082324867187]
│ • No.Rekening [0078-01-083165-50-1]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? wa.me/6282324867187
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
