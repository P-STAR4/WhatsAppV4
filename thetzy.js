/*
โบ Create By Kizyy Pak - Tzy
โบ Base Ori Azril

๐ฅ KALAU MAU RENAME TARO CREDITS GUA : Kizyy Kanaeru */

const fs = require('fs')
const chalk = require('chalk')
//=================================================//
//โโโโโใ Set Random Image Menu ใโโโโโ//
//gausah di apaยฒ in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//=================================================//
//โโโโโใ Set Kebutuhan Button & Kontak ใโโโโโ//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtube.com/@kizyy_'
global.ig = 'https://instagram.com/kizyyourfavv?igshid=YmMyMTA2M2Y='
global.mygc = 'https://chat.whatsapp.com/JIb8OWFxs4H4LUpZaVkTbi'
global.myweb = 'https://youtube.com/playlist?list=PLfnx8zXCmgN0FtxAZDhJMo-cHJozuvZGz'
global.linkgrupss = "https://chat.whatsapp.com/JIb8OWFxs4H4LUpZaVkTbi"
global.linkpro = 'mailto:support@whatsapp.com?subject=Deactivate%20My%20Account%20Number&body=Please%20Deactivate%20The%20My%20Account%20Number%20%2B62XXXXXXXX%20Immediately%20Because%20The%20Number%20Has%20Been%20Lost'
global.linkun = 'mailto:support@whatsapp.com?subject=ุงููุณุงุนุฏุฉ%20ูู%20ุฅูุบุงุก%20ุญุธุฑ%20ุฑููู&body=Admins%20Whatsapp%20๐ฐkenapa%20nomer%20saya%20(%20+62xx%20)%20di%20blokir%20padahal%20saya%20tidak%20melakukan apa%20apa%20nomer%20saya%20hanya%20di%20pinjam%20oleh%20saudara%20saya%20yang%20tinggal%20di%20amerika๐ข1hari%20kemuadian%20nomernya%20di%20blokir mohon%20atas%20ketidaknyamananya%20di%20perbaiki ๐ฉsalam%20hangat'
global.email = 'kizyy4u@gmail.com'
global.region = 'Indonesia'
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
//โโโโโใ Set Nama Own & Bot ใโโโโโ//
global.nomerOwner = "6283132048663" //Bebas ganti 
global.namaOwner = "ใ ๐๐๐๐๐ ๐๐ ฯใฝ" //Bebas ganti
global.footer = 'ใ ๐๐๐๐๐ ๐๐' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.packname = '๐๐๐๐๐ ๐๐ ฯ'
global.ownerr = ['ใ ๐๐๐๐๐ ๐๐ ฯใฝ๏ธ']
global.author = '[โซนโซบ - ใ ๐๐๐๐๐ ๐๐ ฯใฝ๏ธ]'
global.prefa = ['','!','.',',','๐ค','๐ฟ']
global.sp = 'โญ'
global.mess = {
    wait: 'โณ _*Loading...*_',
    success: "_๐๐ช๐๐๐๐จ๐จใท_",
    group: "_๐พ๐๐ฃ ๐ค๐ฃ๐ก๐ฎ ๐๐ ๐ช๐จ๐๐ ๐๐ฃ ๐๐ง๐ค๐ช๐ฅใท_",
    owner: "_๐พ๐๐ฃ ๐ค๐ฃ๐ก๐ฎ ๐๐ ๐ช๐จ๐๐ ๐๐ฎ ๐ค๐ฌ๐ฃ๐๐งใท_",
    admin: "_๐พ๐๐ฃ ๐ค๐ฃ๐ก๐ฎ ๐๐ ๐ช๐จ๐๐ ๐๐ฎ ๐๐๐ข๐๐ฃใท_",
    badmin: "_๐พ๐๐ฃ ๐ค๐ฃ๐ก๐ฎ ๐๐ ๐ช๐จ๐๐ ๐๐ ๐ฉ๐๐ ๐๐ค๐ฉ ๐๐จ ๐๐ฃ ๐๐๐ข๐๐ฃใท_", 
    nsfw: 'โ?๏ธ _*Fitur NSFW tidak diaktifkan, chat admin grup supaya diaktifkan*_',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
}
global.timeBug = 1 // 1 Menit
//=================================================//
global.thumb = { url: 'https://telegra.ph/file/e8b986fc0257b3bbe4604.jpg' }
global.visoka = { url: 'https://a.uguu.se/fVFNCwix.mp4' }
global.menuimg = { url: 'https://a.uguu.se/fVFNCwix.mp4' }
global.zy = { url: 'https://telegra.ph/file/e8b986fc0257b3bbe4604.jpg' }
global.logonya = fs.readFileSync("./media/gambarnye/thezyren.jpg")
global.thumbnailvid = { url: 'https://a.uguu.se/dLvmNpRp.mp4' }
global.bgv = { url: 'https://a.uguu.se/YHuhGMUw.mp4' }
global.removebgkey = "o9jGwRuAbYFGprJDwZhEAsU1" //Login di https://www.remove.bg
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
