const MegaClient = require("simple-discord");
 
module.exports = new MegaClient.Comando({
  nombre: "help",
  alias: ["ayuda"],
  descripcion: "Te muestra toda la lista de comandos.",
  cooldown: 3,
  permiso_cooldown: "ADMINISTRATOR",
  ejecutar: (client, message, args) => {
 
   if(client.comandos.size <= 0) return message.channel.send("No hay comandos") //de todos modos por si ocurre algo.

const embed = new MegaClient.RichEmbed()
.setTitle("Comandos de Kali Discord")
.setDescription("El Prefix de **Kali Discord* es **kali!** (Customizable).")
.addField("Moderación", "`soft-ban , ban , kick , hackban , unban , warn, clear`")
.addField(" Información", "`serverinfo , user, avatar`")
.addField(" Administración", "`setprefix`")
.addField(" Desarrollador", "`reload`")
.addField(" Desarrolladores/Developers :", "<@451113058438217740>, <@548326944110805023>, <@471035482789118004>")
.setColor("f1c40f")
.setFooter(message.author.username, message.author.avatarURL)
message.channel.send(embed)

 
  }
 
})