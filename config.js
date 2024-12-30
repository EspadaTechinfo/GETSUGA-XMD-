const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="bleachtybw@gmail.com"
global.location="HUECO MUNDO,SOUL SOCIETY."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Tokyo/Japan";
global.github=process.env.GITHUB|| "https://github.com/EspadaTechinfo/GETSUGA-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vayxd786mYPMFMVB9A3Y";
global.website=process.env.GURL || "https://chat.whatsapp.com/CicqD04sNCJ37j13LiI51p" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bu7bs1.jpg" || "null" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©𝙄𝘾𝙃𝙄𝙂𝙊☾" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '27710200228') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '27710200228') : ""𝙄𝘾𝙃𝙄𝙂𝙊☾;




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/u0gtcf.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,27710200228";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "27710200228,27710200228";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_05_12_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTksXG4gICAgICAgIDk5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU2LFxuICAgICAgICAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjksXG4gICAgICAgIDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTksXG4gICAgICAgIDk0LFxuICAgICAgICAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODgsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTczLFxuICAgICAgICA3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA2NyxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjksXG4gICAgICAgIDYsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDcyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3LFxuICAgICAgICAxMixcbiAgICAgICAgOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDUxLFxuICAgICAgICA2OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4dlo1MGxYRlhFNnZaVnNhWHlLcTNOSFF5dVcwR3NnNnZ4RmFJbE14YmhrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWbjM1OTRCZVFlV1QzS0tDazR1SDV3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjkyOGY1N2NhLWNhYTktNGFlYi1iZTM5LTZmMmMyYjNlYmZhY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MyxcbiAgICAgIDI4LFxuICAgICAgMjMwLFxuICAgICAgNzMsXG4gICAgICA5MSxcbiAgICAgIDExMCxcbiAgICAgIDI5LFxuICAgICAgMjMyLFxuICAgICAgMTcsXG4gICAgICAyNDEsXG4gICAgICAyMjIsXG4gICAgICA2OCxcbiAgICAgIDIwMSxcbiAgICAgIDYxLFxuICAgICAgMTIxLFxuICAgICAgMjMwLFxuICAgICAgMjUwLFxuICAgICAgMTg2LFxuICAgICAgNjEsXG4gICAgICAyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTgsXG4gICAgICAxMzIsXG4gICAgICAxMjgsXG4gICAgICAyMDIsXG4gICAgICAxMjQsXG4gICAgICAzNixcbiAgICAgIDE2LFxuICAgICAgMjI2LFxuICAgICAgMTc5LFxuICAgICAgMTE5LFxuICAgICAgMTMxLFxuICAgICAgMjA5LFxuICAgICAgMjEzLFxuICAgICAgMTU3LFxuICAgICAgMjAsXG4gICAgICAyMzksXG4gICAgICAyMDMsXG4gICAgICAxNjksXG4gICAgICAxMDMsXG4gICAgICAxMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS1FUQldZWFdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3NzEwMjAwMjI4OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzk5NzM0NTM5OTYyMjE6MjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUN2NFBVR0VNLy94N3NHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJyVVNwSVQ2TU1ySndPU1JWRnpNdklQbEFUZzNIdzFFTDh3ajlUcEhZaEZ3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjR5TXBMd3FUQXZ6RTZNbVJ5MDVWbGNBSUJ3blVCZXJ3OFVVRGFZbytCZWFqWnI5WkNEWGlDbTZWUnpncHdWZktpanVkSjZ6OTlhOHRSQmVqOVZ5SkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjU4Qk5EWS9DL3Q4NFU4MkFzaUJSajhhZ1NaekgrTzlBR0l2dGJhZzhoRnJVcldkU2xBMlVsdjdnZE5EL3lLWVRzVEd0UHE3SmdZaFhPOEFGUjVIemdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NzEwMjAwMjI4OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTUyNDMwNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlNN1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSU03Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiZzQvSng3ZE1GTzB5djNmVUIya1lyUUo2TUtIdFVDTDJqaWVIWUMrU3ZuND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODU3NTU4NDY0LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzUxMjMyNjYxOTBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "𝐆𝐄𝐓𝐒𝐔𝐆𝐀 𝐓𝐄𝐍𝐒𝐇𝐎𝐔", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝙄𝘾𝙃𝙄𝙂𝙊☾",
  ownername:process.env.OWNER_NAME|| "𝐆𝐄𝐓𝐒𝐔𝐆𝐀 𝐓𝐄𝐍𝐒𝐇𝐎𝐔",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
