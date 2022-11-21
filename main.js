
const {Messages} = require('./schema.js')
const fs = require('fs');
const { Client, Collection, Intents,MessageEmbed,WebhookClient } = require('discord.js');
const mongoose = require('mongoose');
const { stringify } = require('querystring');
const { StringDecoder } = require('string_decoder');
const { builtinModules } = require('module');
const { hyperlink } = require('@discordjs/builders');

const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/1043831139313389598/E_kcPSJUlPwtfn-QdJ83lv_auO5JAyqbu0dAD_LjWhht1PzeKARcNGL5OXL9Mh21kD1e'} )
const All = new Intents(7796)
const client = new Client({partials:['MESSAGE','CHANNEL','GUILD_MEMBER','USER'], intents: [Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILDS,Intents.FLAGS.MESSAGE_CONTENT,Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILD_INTEGRATIONS] });
let repeatDaily = async () => {
const DailyFetch = Messages.find({ }).select('dailyMsg).sort({'dailyMsg':-1}).exec()
const exampleEmbed = {
	color: 0x0099ff,
	title: 'Daily Leaderboard',
    description: "Daily AnimeIndian Leaderboard!",
    fields: [
      {
        name: `1: <@${DailyFetch[0].userid}>`,
        value: '\u200b'
      },

      {
        name: `2: <@${DailyFetch[1].userid}>`,
        value: '\u200b'
      },
      {
        name: `3: <@${DailyFetch[2].userid}>`,
        value: '\u200b'
      },
      {
        name: `4: <@${DailyFetch[3].userid}>`,
        value: '\u200b'
      },
      {
        name: `5: <@${DailyFetch[4].userid}>`,
        value: '\u200b'
      },
    
      {
        name: `6: <@${DailyFetch[5].userid}>`,
        value: '\u200b'
      },
    
      {
        name: `7: <@${DailyFetch[6].userid}>`,
        value: '\u200b'},

      {
        name: `8: <@${DailyFetch[7].userid}>`,
        value: '\u200b'
      },

      {
        name: `9: <@${DailyFetch[8].userid}>`,
        value: '\u200b'
      },

      {
        name: `10: <@${DailyFetch[9].userid}>`,
        value: '\u200b'
      },
    ]}
await webhookClient.editMessage('1043894977295548508',{embeds:exampleEmbed})}

client.on('ready',async ()=>{
  setInterval(repeatDaily,120000)
})

 
// When the client is ready, run this code (only once)

client.login(process.env.TOKEN);
