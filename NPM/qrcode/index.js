var QRCode = require('qrcode')
const { program } = require('commander');

program.arguments("<qrcodetext>","qr code text")
    .action(function(qrcodetext){
        QRCode.toString(qrcodetext,{type:'terminal'}, function (err, url) {
            console.log(url)
          })
    })
// QRCode.toDataURL('I am a pony!', function (err, url) {
//   console.log(url)
// })

QRCode.toString('I am a pony!',{type:'terminal'}, function (err, url) {
    console.log(url)
  })