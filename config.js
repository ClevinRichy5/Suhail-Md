const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_05_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUzLFxuICAgICAgICAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDM4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgODcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzUsXG4gICAgICAgIDg0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDU1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDgxLFxuICAgICAgICAzMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDg2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1LFxuICAgICAgICAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDczLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNixcbiAgICAgICAgMTE1LFxuICAgICAgICA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDc2LFxuICAgICAgICAxODcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxLFxuICAgICAgICA3NixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUxLFxuICAgICAgICA1NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiME9TOC9kdGEwOEN6NURyOUdzY25aNEttZFNCNXJXSjBuMU1yc28vVzRuND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTUx4bGd3M21RanFCT0E3NVUtY0l1d1wiLFxuICBcInBob25lSWRcIjogXCI2ODg5YTRmNy1iNjNmLTRiYzktYTA1Zi03NmY5YjdhY2FkN2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIzLFxuICAgICAgMTAxLFxuICAgICAgMTgsXG4gICAgICAxMTMsXG4gICAgICAxNjgsXG4gICAgICAxNCxcbiAgICAgIDEzMyxcbiAgICAgIDgsXG4gICAgICAyMzIsXG4gICAgICAyMjgsXG4gICAgICA5MSxcbiAgICAgIDY2LFxuICAgICAgMjA4LFxuICAgICAgMTU0LFxuICAgICAgNTMsXG4gICAgICAxMzQsXG4gICAgICA2OCxcbiAgICAgIDMxLFxuICAgICAgMTIsXG4gICAgICAxNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNyxcbiAgICAgIDIxNyxcbiAgICAgIDM2LFxuICAgICAgMTAyLFxuICAgICAgMjUzLFxuICAgICAgMTMwLFxuICAgICAgMTM0LFxuICAgICAgMzIsXG4gICAgICAxMzQsXG4gICAgICAyOSxcbiAgICAgIDEzMyxcbiAgICAgIDMsXG4gICAgICAxOTMsXG4gICAgICAyMTAsXG4gICAgICAyMjAsXG4gICAgICA0NCxcbiAgICAgIDE2MixcbiAgICAgIDE3NCxcbiAgICAgIDczLFxuICAgICAgMjAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVRZanJFSkVMR0FzTFFHR0JJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0Vmx1VjlzakJhYTJZU1hKMmZ6YnhTSlBiVUptRnkvVjFmUFh4K1l4d0VvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkM4ZUxKRVg1VkhXNVpOWG9Gamhlc2pzK3RVcE9MbTB5Z3Z3Kyt5dDZrL1h2b1gxMU5MQ0hlRVJvbVNjemlnSWw0TzgwNklETWxOajN6ZDVLc2ZiNURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVlaGZEU2J4eThCYTY1YklwL2sxcDc5d0VWN2FldzR5YWdyVDB6SjRnV0FxTG5HVStTOUxUVnZSamhqcVBpZEdBMll3MFJwb1hLK3BiYW5Td2h6aWlnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjkyNDQ2ODUwOjkwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjI0OTM5Nzc1NjE0Njo5MEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY5MjQ0Njg1MDo5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQ1MTEyNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdEdlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0QwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMUFjRVhzMVJzTk1hM3NIV3FiRFZkVHNRV3RTeEovM3Q2YW5VS3FmTEdVdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNTE4OTIwMjYwLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbNCwyLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODI5NTE0ODQ0MVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdEMS5qc29uIjogIntcImtleURhdGFcIjpcIk5ONU1OV2tPeTQvMDJzZnR3dnhMTGVKWVVZWm4rZnBNNzd4TXdqcUFIblU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjUxODkyMDI2MCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzE4Mjk4MzY5MDE4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0QzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYzBLMVFIeEdLcFpSQ3Ywbi83RWRXeCtBY1RPN1k3QTQzUWFVYVNWcDdlUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNTE4OTIwMjYwLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbNSwwLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcxODUzNTkyMTc1NVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdENS5qc29uIjogIntcImtleURhdGFcIjpcIk9qbEdwZDMzbzNYVHJaU2pJZXV0QzkwbnYzZ3BBZUwrRFg0a1JqZmJJeWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjUxODkyMDI2MCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzIsMF19LFwidGltZXN0YW1wXCI6XCIxNzE4NTQyNDI3NTk3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0Q3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibHllR05tcmpvcU4weGJPdGZMazhKdkdaT0Z6dUpYdCtCcHFxVkptTmlSUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNTE4OTIwMjYwLFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbNiwwLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcxODcwNzIwMTgwMlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdEOC5qc29uIjogIntcImtleURhdGFcIjpcImd4Vkl0WHlHUmJBOHVGcm1JNzhuVCs0bUszc3NjbTJYQmxVVDJPNWxCNzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjUxODkyMDI2MCxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzE4NzExNzUyMDExXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0Q5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiYmpkZTNheXEzRk9YVHlMVkMycGdyRGZHYzRuT0V1QXFST0UxUFlQSzBmZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNTE4OTIwMjYwLFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMiw4LDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODg3MjYwMTY5MFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdEci5qc29uIjogIntcImtleURhdGFcIjpcIlU2VjZ4L3diOHF1NWJDZkRyZHRlRlU1elVEalB6WjF2a2thU2oyZzE2cjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjUxODkyMDI2MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzE0ODQ2ODkwMTQ2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0RzLmpzb24iOiAie1wia2V5RGF0YVwiOlwia0o2c0tuMTU1ckdZYWN2NFpmaWlkekIwZnNPSWNYYmhibTB3enVGbXpacz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNTE4OTIwMjYwLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMSwwLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzQ0MzQyNTA0NVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdEdS5qc29uIjogIntcImtleURhdGFcIjpcImZGeVUwR2t6OFpwOGVvdlFKZ3hKS0F3a2NTWUg2ZS9xY3VnUmpwY0p0RDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjUxODkyMDI2MCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTc5ODE0ODE4NDlcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHRHYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRYnBKY1JXUW9kellaZGxDbHZ1UVNWZ2lFd1VRZ1hJdjJzWGlrYkx5YllZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1MTg5MjAyNjAsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlsyLDAsM119LFwidGltZXN0YW1wXCI6XCIxNzE3OTgzMDI5OTMxXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0R4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiMHFXN1RrUy9HWUNTNE9KTC95R2RrajhRTWlnM0tXZmhLbWpoS1lBZ2lOaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNTE4OTIwMjYwLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMywyLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODA4ODMzMTE3NFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdEeS5qc29uIjogIntcImtleURhdGFcIjpcInVkR3E4UVRUVVNjN1pnV3Z1dUFINDBHMG9JMnJyQWhVRXE0alRJRzIrM0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjUxODkyMDI2MCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzE4MTAwMjE4NTc2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0VFLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWjg5OGZDcmtRRTZkOFhwc2VqQkp2UC9lTE5kaDV3SVVSbFNuU0NXTEwxQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNTE4OTIwMjYwLFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbOCwyLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTIyMzAzMTMxNVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdFRi5qc29uIjogIntcImtleURhdGFcIjpcImdsZUlZZkt6MmFsMHQvSkJNNE5zc1BYcmpDRUJTb3RyM1U1Sm5JNTh3aDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjUxODkyMDI2MCxcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzIsMF19LFwidGltZXN0YW1wXCI6XCIxNzE5MjMzMDk2NjQyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0VILmpzb24iOiAie1wia2V5RGF0YVwiOlwiWkYxVWc0SkJRNEd0Sm9NRElRSHdsWXpLNlU4cDFCOE9RZXViRE96OEJ3bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNTE4OTIwMjYwLFwiY3VycmVudEluZGV4XCI6MTAsXCJkZXZpY2VJbmRleGVzXCI6WzksMiwwLDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAwMzEzNjI2NjVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHRUouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMVmRTSnFpU0ozbUNRZjBENXlVeTYvZjlNU0F5eGVDbXM4eDJxdGlsenRVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1MTg5MjAyNjAsXCJjdXJyZW50SW5kZXhcIjoxMCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAwMzEzNzMyNThcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHRUsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvaklYM2pMWEJkYXJWZ0ZvOURwY3B3bG16TjgxZHUyaFowdE9HK0RFQ3NNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1MTg5MjAyNjAsXCJjdXJyZW50SW5kZXhcIjoxMCxcImRldmljZUluZGV4ZXNcIjpbMiwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAwMzEzOTIxOTFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHRU0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWV2pYT3pPY1dCNFRibTVMYnJVMTdtVTVtNnlGei95dnhhM25lVHlaZHYwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1MTg5MjAyNjAsXCJjdXJyZW50SW5kZXhcIjoxMixcImRldmljZUluZGV4ZXNcIjpbMTIsMiwwLDExXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyODEyOTg3NzhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHRU4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYRVk2blA5dkRBdXU3dEo0VGQ2VTkxOXFEOEFCamtyQko5QWY4MzhaQURFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1MTg5MjAyNjAsXCJjdXJyZW50SW5kZXhcIjoxMixcImRldmljZUluZGV4ZXNcIjpbMiwxMiwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyODYyMjMzNDVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHRVAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVTnhybTJRZnd2MmF3c0JCRnl1VmRjY2V6RWx1dUxpbEN0M254Qnp1T0pVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1MTg5MjAyNjAsXCJjdXJyZW50SW5kZXhcIjoxMixcImRldmljZUluZGV4ZXNcIjpbMiwwLDEyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyODk5Nzg0MzJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHRVEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxQnk1SFhHVWs1cVdHNlptOHJRM3V6VHFEMlAxaG1YZ1BOeHZGWmZONFpVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1MTg5MjAyNjAsXCJjdXJyZW50SW5kZXhcIjoxMixcImRldmljZUluZGV4ZXNcIjpbMiwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyODk5OTY5MzVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHRVMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVVEM3c1k4ckRlazZNV1NXN0VDM2JMVjhPTElDU28xOWJyU0Z2OCtrWlE4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1MTg5MjAyNjAsXCJjdXJyZW50SW5kZXhcIjoxNCxcImRldmljZUluZGV4ZXNcIjpbMCwxMywyLDE0XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA0MzQzMTkwODFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHRVUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJheHhZK1djZXkzYVZtcFZmUzZaUnlHVkRXWENBcmUxYlB4OFlVTXJteDlRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1MTg5MjAyNjAsXCJjdXJyZW50SW5kZXhcIjoxNCxcImRldmljZUluZGV4ZXNcIjpbMCwxNCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA0MzQzMjcwNTVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHRVcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJLclU0MHN4N01xNCtDeGVtV0lmZE5lbEdLdFBNV0NBRDdLNlpQbVpJQXNzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1MTg5MjAyNjAsXCJjdXJyZW50SW5kZXhcIjoxNixcImRldmljZUluZGV4ZXNcIjpbMiwwLDE1LDE2XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA0MzYzNDI5NzVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHRVguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwcDZtNE94YTRNSzYzbUd5L1V4YjFwRk5YRi9RKzRUb1lORzFhcmxvQTk4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1MTg5MjAyNjAsXCJjdXJyZW50SW5kZXhcIjoxNixcImRldmljZUluZGV4ZXNcIjpbMiwwLDE1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA0MzcxNDA3NDFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHRVouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJnMVQvSXVtMFh6QXd6ZUtOR0F2QUFIMFFFd0l2RlBEUGl2SFBOenNCZmNJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1MTg5MjAyNjAsXCJjdXJyZW50SW5kZXhcIjoxNyxcImRldmljZUluZGV4ZXNcIjpbMCwyLDE1LDE3XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA0NTA2Njg5NzlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Monsieur Richy",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Monsieur Richy",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
