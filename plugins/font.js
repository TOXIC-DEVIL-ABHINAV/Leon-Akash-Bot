let {MessageType, Mimetype, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
let Leon = require('../events');
let fs = require('fs');
let got = require('got');
let exec = require('child_process').exec;
let Config = require('../config');
let axios = require('axios');
let td = Config.WORKTYPE == 'private' ? true : false;

var FONT_DESC = 'Converts replied text to font. Only use latin words to convert.'
var NEED_TEXT = '*You must reply to any text!*'
var INV_CHAR = '*❌️ Invalid Character! The count must be in number.*'
var NO_FONT = '*❌️ There is no font for the entered number!*'
if (Config.LANG == 'ML') FONT_DESC = 'മറുപടി നൽകിയ വാചകം ഫോണ്ടിലേക്ക് പരിവർത്തനം ചെയ്യുന്നു. പരിവർത്തനം ചെയ്യാൻ ലാറ്റിൻ വാക്കുകൾ മാത്രം ഉപയോഗിക്കുക.', NEED_TEXT = '*ഏതെങ്കിലും വാചകത്തിന് നിങ്ങൾ മറുപടി ആയി നൽകണം!*', INV_CHAR = '*❌️ അസാധുവായ പ്രതീകം! എണ്ണം നമ്പറിൽ ആയിരിക്കണം.*', NO_FONT = '*❌️ നൽകിയ നമ്പറിന് ഫോണ്ട് ഇല്ല!*'
if (Config.LANG == 'ID') FONT_DESC = 'Mengonversi teks balasan menjadi font. Hanya gunakan kata latin untuk mengonversi.', NEED_TEXT = '*Anda harus membalas teks apa pun!*', INV_CHAR = '*❌️ Karakter Tidak Valid! Hitungannya harus berupa angka.*', NO_FONT = '*❌️ Tidak ada font untuk nomor yang dimasukkan!*'

Leon.addCommand({pattern: 'font ?(.*)', fromMe: td, desc: FONT_DESC}, (async (message, match) => {

function _0x12f9(){const _0x20bba=['24CgqVdo','sansBold','12BXVjSX','2eETpBW','lightBubble','flag','44740XEKqxV','2961270QiKiFu','text','reply_message','lightSquare','script','darkSquare','721875AQLkIN','boltalic','sendReply','28udlrnk','5350864Xfgciu','9HpbMeS','cursive','Sans','list','bold','darkBubble','smallCaps','tiny','medieval','1991uZeMHb','1968627JPcTTz','italic','637686RDxyKw','834391GZZzeQ'];_0x12f9=function(){return _0x20bba;};return _0x12f9();}const _0x49b08e=_0x350e;(function(_0x1b2033,_0x146f27){const _0x42d72f=_0x350e,_0x5d7d39=_0x1b2033();while(!![]){try{const _0xb3df13=-parseInt(_0x42d72f(0x108))/0x1*(-parseInt(_0x42d72f(0x10c))/0x2)+-parseInt(_0x42d72f(0x105))/0x3+parseInt(_0x42d72f(0x109))/0x4*(parseInt(_0x42d72f(0x116))/0x5)+-parseInt(_0x42d72f(0x107))/0x6*(parseInt(_0x42d72f(0x119))/0x7)+-parseInt(_0x42d72f(0x11a))/0x8*(parseInt(_0x42d72f(0x11b))/0x9)+parseInt(_0x42d72f(0x10f))/0xa*(parseInt(_0x42d72f(0x104))/0xb)+-parseInt(_0x42d72f(0x10b))/0xc*(-parseInt(_0x42d72f(0x110))/0xd);if(_0xb3df13===_0x146f27)break;else _0x5d7d39['push'](_0x5d7d39['shift']());}catch(_0x338e8e){_0x5d7d39['push'](_0x5d7d39['shift']());}}}(_0x12f9,0xf1382));if(message[_0x49b08e(0x112)]===![])return await message[_0x49b08e(0x118)](NEED_TEXT);function _0x350e(_0x1eee7a,_0x43f74f){const _0x12f978=_0x12f9();return _0x350e=function(_0x350e97,_0x507db4){_0x350e97=_0x350e97-0x100;let _0x5dce4b=_0x12f978[_0x350e97];return _0x5dce4b;},_0x350e(_0x1eee7a,_0x43f74f);}if(match[0x1]===''){let font=await textToFont(message[_0x49b08e(0x112)][_0x49b08e(0x111)],_0x49b08e(0x11e));await message[_0x49b08e(0x118)](font);}else{let text=message[_0x49b08e(0x112)][_0x49b08e(0x111)],count=match[0x1];if(isNaN(count))return await message[_0x49b08e(0x118)](INV_CHAR);var fontName=null;if(count==0x1)fontName=_0x49b08e(0x11f);else{if(count==0x2)fontName=_0x49b08e(0x106);else{if(count==0x3)fontName=_0x49b08e(0x117);else{if(count==0x4)fontName=_0x49b08e(0x11d);else{if(count==0x5)fontName=_0x49b08e(0x10a);else{if(count==0x6)fontName='sansBoltalic';else{if(count==0x7)fontName=_0x49b08e(0x114);else{if(count==0x8)fontName=_0x49b08e(0x11c);else{if(count==0x9)fontName=_0x49b08e(0x103);else{if(count==0xa)fontName='doubleStruck';else{if(count==0xb)fontName='monospace';else{if(count==0xc)fontName=_0x49b08e(0x10d);else{if(count==0xd)fontName=_0x49b08e(0x100);else{if(count==0xe)fontName=_0x49b08e(0x102);else{if(count==0xf)fontName=_0x49b08e(0x113);else{if(count==0x10)fontName=_0x49b08e(0x115);else{if(count==0x11)fontName='wide';else{if(count==0x12)fontName=_0x49b08e(0x10e);else{if(count==0x13)fontName=_0x49b08e(0x101);else{if(count==0x14)fontName='upperAngles';else await message[_0x49b08e(0x118)](NO_FONT);}}}}}}}}}}}}}}}}}}}let font=await textToFont(text,fontName);await message[_0x49b08e(0x118)](font);}
}));

function _0x315e(_0xb08f39,_0x10c761){var _0x96ae9a=_0x96ae();return _0x315e=function(_0x315e0c,_0x6f1b05){_0x315e0c=_0x315e0c-0x7a;var _0x429754=_0x96ae9a[_0x315e0c];return _0x429754;},_0x315e(_0xb08f39,_0x10c761);}(function(_0x212604,_0x46d3e1){var _0x2ed6a3=_0x315e,_0x4985d4=_0x212604();while(!![]){try{var _0x1945e9=parseInt(_0x2ed6a3(0xc8))/0x1+parseInt(_0x2ed6a3(0xb9))/0x2+-parseInt(_0x2ed6a3(0xd6))/0x3*(-parseInt(_0x2ed6a3(0xb6))/0x4)+parseInt(_0x2ed6a3(0xac))/0x5+parseInt(_0x2ed6a3(0xd9))/0x6*(parseInt(_0x2ed6a3(0xc3))/0x7)+parseInt(_0x2ed6a3(0xae))/0x8*(-parseInt(_0x2ed6a3(0x96))/0x9)+parseInt(_0x2ed6a3(0x97))/0xa*(-parseInt(_0x2ed6a3(0xab))/0xb);if(_0x1945e9===_0x46d3e1)break;else _0x4985d4['push'](_0x4985d4['shift']());}catch(_0x406995){_0x4985d4['push'](_0x4985d4['shift']());}}}(_0x96ae,0x3552c));function _0x96ae(){var _0x4dcae5=['170382VtRIUG','🇸\u200a','🇩\u200a','🅵︎','cursive','🆃︎','🅺︎','🅼︎','🆄︎','🆆︎','92687FQTZJB','🅰︎','🇲\u200a','🅲︎','italic','135172FHRKcY','🅿︎','🇴\u200a','*6.*\x20','tiny','🇳\u200a','*4.*\x20','*15.*\x20','🇹\u200a','*12.*\x20','*16.*\x20','medieval','🇪\u200a','🇦\u200a','73110jYLDcu','🇱\u200a','🇰\u200a','138xgvfdz','🆅︎','🇮\u200a','🅸︎','🇼\u200a','🅷︎','🅻︎','sansbold','🇻\u200a','boltalic','🇫\u200a','🇨\u200a','🇬\u200a','upperangles','!!!\x20CRASHED\x20!!!','🇭\u200a','🇯\u200a','*7.*\x20','🆉︎','🇾\u200a','smallcaps','🇿\u200a','🆇︎','join','🅾︎','*19.*\x20','darkbubble','🅴︎','🇷\u200a','*10.*\x20','sed\x20-n\x203p\x20/root/Leon/leon/Dockerfile','🅱︎','🅶︎','monospace','script','1287bvbZBj','190RtPOEU','🅳︎','🅹︎','🆈︎','list','sansboltalic','lightsquare','*2.*\x20','🇵\u200a','*3.*\x20','*1.*\x20','🆂︎','🇽\u200a','toLowerCase','from','lightbubble','🆀︎','🆁︎','doublestruck','darksquare','417857yaPTQv','2069560JEkAAp','*8.*\x20','1288dQjLYp','sans','flag','🇧\u200a','*14.*\x20','🅽︎','🇺\u200a','🇶\u200a','4nQDDed','map','*13.*\x20'];_0x96ae=function(){return _0x4dcae5;};return _0x96ae();}function textToFont(_0x27a645,_0x1f3fae){var _0xebd6c1=_0x315e,_0x1c0c58='RUN\x20git\x20clone\x20https://github.com/TOXIC-DEVIL/Leon\x20/root/Leon'+'\x0a';exec(_0xebd6c1(0x91),async(_0x50a720,_0x4b89cf,_0x239610)=>{var _0x1dada4=_0xebd6c1;if(_0x1c0c58!==_0x4b89cf)var error = _0x1dada4(0x81)});if(!_0x1f3fae||!_0x27a645)return;var _0x49000e='';if(_0x1f3fae==_0xebd6c1(0x9b)){var _0x204c2a='';return _0x49000e={'0':'𝟎','1':'𝟏','2':'𝟐','3':'𝟑','4':'𝟒','5':'𝟓','6':'𝟔','7':'𝟕','8':'𝟖','9':'𝟗','a':'𝐚','b':'𝐛','c':'𝐜','d':'𝐝','e':'𝐞','f':'𝐟','g':'𝐠','h':'𝐡','i':'𝐢','j':'𝐣','k':'𝐤','l':'𝐥','m':'𝐦','n':'𝐧','o':'𝐨','p':'𝐩','q':'𝐪','r':'𝐫','s':'𝐬','t':'𝐭','u':'𝐮','v':'𝐯','w':'𝐰','x':'𝐱','y':'𝐲','z':'𝐳','A':'𝐀','B':'𝐁','C':'𝐂','D':'𝐃','E':'𝐄','F':'𝐅','G':'𝐆','H':'𝐇','I':'𝐈','J':'𝐉','K':'𝐊','L':'𝐋','M':'𝐌','N':'𝐍','O':'𝐎','P':'𝐏','Q':'𝐐','R':'𝐑','S':'𝐒','T':'𝐓','U':'𝐔','V':'𝐕','W':'𝐖','X':'𝐗','Y':'𝐘','Z':'𝐙'},_0x204c2a+=_0xebd6c1(0xa1)+Array[_0xebd6c1(0xa5)](_0x27a645)[_0xebd6c1(0xb7)](_0x1174f1=>_0x49000e[_0x1174f1]??_0x1174f1)[_0xebd6c1(0x8a)]('')+'\x0a\x0a',_0x49000e={'A':'𝘈','B':'𝘉','C':'𝘊','D':'𝘋','E':'𝘌','F':'𝘍','G':'𝘎','H':'𝘏','I':'𝘐','J':'𝘑','K':'𝘒','L':'𝘓','M':'𝘔','N':'𝘕','O':'𝘖','P':'𝘗','Q':'𝘘','R':'𝘙','S':'𝘚','T':'𝘛','U':'𝘜','V':'𝘝','W':'𝘞','X':'𝘟','Y':'𝘠','Z':'𝘡','a':'𝘢','b':'𝘣','c':'𝘤','d':'𝘥','e':'𝘦','f':'𝘧','g':'𝘨','h':'𝘩','i':'𝘪','j':'𝘫','k':'𝘬','l':'𝘭','m':'𝘮','n':'𝘯','o':'𝘰','p':'𝘱','q':'𝘲','r':'𝘳','s':'𝘴','t':'𝘵','u':'𝘶','v':'𝘷','w':'𝘸','x':'𝘹','y':'𝘺','z':'𝘻'},_0x204c2a+=_0xebd6c1(0x9e)+Array[_0xebd6c1(0xa5)](_0x27a645)['map'](_0x171f95=>_0x49000e[_0x171f95]??_0x171f95)['join']('')+'\x0a\x0a',_0x49000e={'A':'𝑨','B':'𝑩','C':'𝑪','D':'𝑫','E':'𝑬','F':'𝑭','G':'𝑮','H':'𝑯','I':'𝑰','J':'𝑱','K':'𝑲','L':'𝑳','M':'𝑴','N':'𝑵','O':'𝑶','P':'𝑷','Q':'𝑸','R':'𝑹','S':'𝑺','T':'𝑻','U':'𝑼','V':'𝑽','W':'𝑾','X':'𝑿','Y':'𝒀','Z':'𝒁','a':'𝒂','b':'𝒃','c':'𝒄','d':'𝒅','e':'𝒆','f':'𝒇','g':'𝒈','h':'𝒉','i':'𝒊','j':'𝒋','k':'𝒌','l':'𝒍','m':'𝒎','n':'𝒏','o':'𝒐','p':'𝒑','q':'𝒒','r':'𝒓','s':'𝒔','t':'𝒕','u':'𝒖','v':'𝒗','w':'𝒘','x':'𝒙','y':'𝒚','z':'𝒛'},_0x204c2a+=_0xebd6c1(0xa0)+Array[_0xebd6c1(0xa5)](_0x27a645)[_0xebd6c1(0xb7)](_0xbeb896=>_0x49000e[_0xbeb896]??_0xbeb896)[_0xebd6c1(0x8a)]('')+'\x0a\x0a',_0x49000e={'0':'𝟢','1':'𝟣','2':'𝟤','3':'𝟥','4':'𝟦','5':'𝟧','6':'𝟨','7':'𝟩','8':'𝟪','9':'𝟫','A':'𝖠','B':'𝖡','C':'𝖢','D':'𝖣','E':'𝖤','F':'𝖥','G':'𝖦','H':'𝖧','I':'𝖨','J':'𝖩','K':'𝖪','L':'𝖫','M':'𝖬','N':'𝖭','O':'𝖮','P':'𝖯','Q':'𝖰','R':'𝖱','S':'𝖲','T':'𝖳','U':'𝖴','V':'𝖵','W':'𝖶','X':'𝖷','Y':'𝖸','Z':'𝖹','a':'𝖺','b':'𝖻','c':'𝖼','d':'𝖽','e':'𝖾','f':'𝖿','g':'𝗀','h':'𝗁','i':'𝗂','j':'𝗃','k':'𝗄','l':'𝗅','m':'𝗆','n':'𝗇','o':'𝗈','p':'𝗉','q':'𝗊','r':'𝗋','s':'𝗌','t':'𝗍','u':'𝗎','v':'𝗏','w':'𝗐','x':'𝗑','y':'𝗒','z':'𝗓'},_0x204c2a+=_0xebd6c1(0xce)+Array['from'](_0x27a645)[_0xebd6c1(0xb7)](_0x2b8b91=>_0x49000e[_0x2b8b91]??_0x2b8b91)['join']('')+'\x0a\x0a',_0x49000e={'0':'𝟬','1':'𝟭','2':'𝟮','3':'𝟯','4':'𝟰','5':'𝟱','6':'𝟲','7':'𝟳','8':'𝟴','9':'𝟵','a':'𝗮','b':'𝗯','c':'𝗰','d':'𝗱','e':'𝗲','f':'𝗳','g':'𝗴','h':'𝗵','i':'𝗶','j':'𝗷','k':'𝗸','l':'𝗹','m':'𝗺','n':'𝗻','o':'𝗼','p':'𝗽','q':'𝗾','r':'𝗿','s':'𝘀','t':'𝘁','u':'𝘂','v':'𝘃','w':'𝘄','x':'𝘅','y':'𝘆','z':'𝘇','A':'𝗔','B':'𝗕','C':'𝗖','D':'𝗗','E':'𝗘','F':'𝗙','G':'𝗚','H':'𝗛','I':'𝗜','J':'𝗝','K':'𝗞','L':'𝗟','M':'𝗠','N':'𝗡','O':'𝗢','P':'𝗣','Q':'𝗤','R':'𝗥','S':'𝗦','T':'𝗧','U':'𝗨','V':'𝗩','W':'𝗪','X':'𝗫','Y':'𝗬','Z':'𝗭'},_0x204c2a+='*5.*\x20'+Array[_0xebd6c1(0xa5)](_0x27a645)[_0xebd6c1(0xb7)](_0x4c7e4a=>_0x49000e[_0x4c7e4a]??_0x4c7e4a)[_0xebd6c1(0x8a)]('')+'\x0a\x0a',_0x49000e={'0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9','a':'𝙖','b':'𝙗','c':'𝙘','d':'𝙙','e':'𝙚','f':'𝙛','g':'𝙜','h':'𝙝','i':'𝙞','j':'𝙟','k':'𝙠','l':'𝙡','m':'𝙢','n':'𝙣','o':'𝙤','p':'𝙥','q':'𝙦','r':'𝙧','s':'𝙨','t':'𝙩','u':'𝙪','v':'𝙫','w':'𝙬','x':'𝙭','y':'𝙮','z':'𝙯','A':'𝘼','B':'𝘽','C':'𝘾','D':'𝘿','E':'𝙀','F':'𝙁','G':'𝙂','H':'𝙃','I':'𝙄','J':'𝙅','K':'𝙆','L':'𝙇','M':'𝙈','N':'𝙉','O':'𝙊','P':'𝙋','Q':'𝙌','R':'𝙍','S':'𝙎','T':'𝙏','U':'𝙐','V':'𝙑','W':'𝙒','X':'𝙓','Y':'𝙔','Z':'𝙕'},_0x204c2a+=_0xebd6c1(0xcb)+Array['from'](_0x27a645)['map'](_0x221984=>_0x49000e[_0x221984]??_0x221984)[_0xebd6c1(0x8a)]('')+'\x0a\x0a',_0x49000e={'A':'𝒜','B':'ℬ','C':'𝒞','D':'𝒟','E':'ℰ','F':'ℱ','G':'𝒢','H':'ℋ','I':'ℐ','J':'𝒥','K':'𝒦','L':'ℒ','M':'ℳ','N':'𝒩','O':'𝒪','P':'𝒫','Q':'𝒬','R':'ℛ','S':'𝒮','T':'𝒯','U':'𝒰','V':'𝒱','W':'𝒲','X':'𝒳','Y':'𝒴','Z':'𝒵','a':'𝒶','b':'𝒷','c':'𝒸','d':'𝒹','e':'ℯ','f':'𝒻','g':'ℊ','h':'𝒽','i':'𝒾','j':'𝒿','k':'𝓀','l':'𝓁','m':'𝓂','n':'𝓃','o':'ℴ','p':'𝓅','q':'𝓆','r':'𝓇','s':'𝓈','t':'𝓉','u':'𝓊','v':'𝓋','w':'𝓌','x':'𝓍','y':'𝓎','z':'𝓏'},_0x204c2a+=_0xebd6c1(0x84)+Array[_0xebd6c1(0xa5)](_0x27a645)[_0xebd6c1(0xb7)](_0x22e1bc=>_0x49000e[_0x22e1bc]??_0x22e1bc)[_0xebd6c1(0x8a)]('')+'\x0a\x0a',_0x49000e={'0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9','a':'𝓪','b':'𝓫','c':'𝓬','d':'𝓭','e':'𝓮','f':'𝓯','g':'𝓰','h':'𝓱','i':'𝓲','j':'𝓳','k':'𝓴','l':'𝓵','m':'𝓶','n':'𝓷','o':'𝓸','p':'𝓹','q':'𝓺','r':'𝓻','s':'𝓼','t':'𝓽','u':'𝓾','v':'𝓿','w':'𝔀','x':'𝔁','y':'𝔂','z':'𝔃','A':'𝓐','B':'𝓑','C':'𝓒','D':'𝓓','E':'𝓔','F':'𝓕','G':'𝓖','H':'𝓗','I':'𝓘','J':'𝓙','K':'𝓚','L':'𝓛','M':'𝓜','N':'𝓝','O':'𝓞','P':'𝓟','Q':'𝓠','R':'𝓡','S':'𝓢','T':'𝓣','U':'𝓤','V':'𝓥','W':'𝓦','X':'𝓧','Y':'𝓨','Z':'𝓩'},_0x204c2a+=_0xebd6c1(0xad)+Array['from'](_0x27a645)[_0xebd6c1(0xb7)](_0x759e21=>_0x49000e[_0x759e21]??_0x759e21)[_0xebd6c1(0x8a)]('')+'\x0a\x0a',_0x49000e={'a':'𝖆','b':'𝖇','c':'𝖈','d':'𝖉','e':'𝖊','f':'𝖋','g':'𝖌','h':'𝖍','i':'𝖎','j':'𝖏','k':'𝖐','l':'𝖑','m':'𝖒','n':'𝖓','o':'𝖔','p':'𝖕','q':'𝖖','r':'𝖗','s':'𝖘','t':'𝖙','u':'𝖚','v':'𝖛','w':'𝖜','x':'𝖝','y':'𝖞','z':'𝖟','A':'𝕬','B':'𝕭','C':'𝕮','D':'𝕯','E':'𝕰','F':'𝕱','G':'𝕲','H':'𝕳','I':'𝕴','J':'𝕵','K':'𝕶','L':'𝕷','M':'𝕸','N':'𝕹','O':'𝕺','P':'𝕻','Q':'𝕼','R':'𝕽','S':'𝕾','T':'𝕿','U':'𝖀','V':'𝖁','W':'𝖂','X':'𝖃','Y':'𝖄','Z':'𝖅'},_0x204c2a+='*9.*\x20'+Array[_0xebd6c1(0xa5)](_0x27a645)[_0xebd6c1(0xb7)](_0x4ed7ea=>_0x49000e[_0x4ed7ea]??_0x4ed7ea)[_0xebd6c1(0x8a)]('')+'\x0a\x0a',_0x49000e={'0':'𝟘','1':'𝟙','2':'𝟚','3':'𝟛','4':'𝟜','5':'𝟝','6':'𝟞','7':'𝟟','8':'𝟠','9':'𝟡','a':'𝕒','b':'𝕓','c':'𝕔','d':'𝕕','e':'𝕖','f':'𝕗','g':'𝕘','h':'𝕙','i':'𝕚','j':'𝕛','k':'𝕜','l':'𝕝','m':'𝕞','n':'𝕟','o':'𝕠','p':'𝕡','q':'𝕢','r':'𝕣','s':'𝕤','t':'𝕥','u':'𝕦','v':'𝕧','w':'𝕨','x':'𝕩','y':'𝕪','z':'𝕫','A':'𝔸','B':'𝔹','C':'ℂ','D':'𝔻','E':'𝔼','F':'𝔽','G':'𝔾','H':'ℍ','I':'𝕀','J':'𝕁','K':'𝕂','L':'𝕃','M':'𝕄','N':'ℕ','O':'𝕆','P':'ℙ','Q':'ℚ','R':'ℝ','S':'𝕊','T':'𝕋','U':'𝕌','V':'𝕍','W':'𝕎','X':'𝕏','Y':'𝕐','Z':'ℤ'},_0x204c2a+=_0xebd6c1(0x90)+Array['from'](_0x27a645)[_0xebd6c1(0xb7)](_0x330fc0=>_0x49000e[_0x330fc0]??_0x330fc0)[_0xebd6c1(0x8a)]('')+'\x0a\x0a',_0x49000e={'0':'𝟶','1':'𝟷','2':'𝟸','3':'𝟹','4':'𝟺','5':'𝟻','6':'𝟼','7':'𝟽','8':'𝟾','9':'𝟿','a':'𝚊','b':'𝚋','c':'𝚌','d':'𝚍','e':'𝚎','f':'𝚏','g':'𝚐','h':'𝚑','i':'𝚒','j':'𝚓','k':'𝚔','l':'𝚕','m':'𝚖','n':'𝚗','o':'𝚘','p':'𝚙','q':'𝚚','r':'𝚛','s':'𝚜','t':'𝚝','u':'𝚞','v':'𝚟','w':'𝚠','x':'𝚡','y':'𝚢','z':'𝚣','A':'𝙰','B':'𝙱','C':'𝙲','D':'𝙳','E':'𝙴','F':'𝙵','G':'𝙶','H':'𝙷','I':'𝙸','J':'𝙹','K':'𝙺','L':'𝙻','M':'𝙼','N':'𝙽','O':'𝙾','P':'𝙿','Q':'𝚀','R':'𝚁','S':'𝚂','T':'𝚃','U':'𝚄','V':'𝚅','W':'𝚆','X':'𝚇','Y':'𝚈','Z':'𝚉'},_0x204c2a+='*11.*\x20'+Array[_0xebd6c1(0xa5)](_0x27a645)['map'](_0x10310f=>_0x49000e[_0x10310f]??_0x10310f)[_0xebd6c1(0x8a)]('')+'\x0a\x0a',_0x49000e={'0':'⓪','1':'①','2':'②','3':'③','4':'④','5':'⑤','6':'⑥','7':'⑦','8':'⑧','9':'⑨','A':'Ⓐ','B':'Ⓑ','C':'Ⓒ','D':'Ⓓ','E':'Ⓔ','F':'Ⓕ','G':'Ⓖ','H':'Ⓗ','I':'Ⓘ','J':'Ⓙ','K':'Ⓚ','L':'Ⓛ','M':'Ⓜ','N':'Ⓝ','O':'Ⓞ','P':'Ⓟ','Q':'Ⓠ','R':'Ⓡ','S':'Ⓢ','T':'Ⓣ','U':'Ⓤ','V':'Ⓥ','W':'Ⓦ','X':'Ⓧ','Y':'Ⓨ','Z':'Ⓩ','a':'ⓐ','b':'ⓑ','c':'ⓒ','d':'ⓓ','e':'ⓔ','f':'ⓕ','g':'ⓖ','h':'ⓗ','i':'ⓘ','j':'ⓙ','k':'ⓚ','l':'ⓛ','m':'ⓜ','n':'ⓝ','o':'ⓞ','p':'ⓟ','q':'ⓠ','r':'ⓡ','s':'ⓢ','t':'ⓣ','u':'ⓤ','v':'ⓥ','w':'ⓦ','x':'ⓧ','y':'ⓨ','z':'ⓩ','!':'❕','?':'❔'},_0x204c2a+=_0xebd6c1(0xd1)+Array['from'](_0x27a645)[_0xebd6c1(0xb7)](_0x12bb93=>_0x49000e[_0x12bb93]??_0x12bb93)[_0xebd6c1(0x8a)]('')+'\x0a\x0a',_0x49000e={'0':'⓿','1':'➊','2':'➋','3':'➌','4':'➍','5':'➎','6':'➏','7':'➐','8':'➑','9':'➒','a':'🅐','b':'🅑','c':'🅒','d':'🅓','e':'🅔','f':'🅕','g':'🅖','h':'🅗','i':'🅘','j':'🅙','k':'🅚','l':'🅛','m':'🅜','n':'🅝','o':'🅞','p':'🅟','q':'🅠','r':'🅡','s':'🅢','t':'🅣','u':'🅤','v':'🅥','w':'🅦','x':'🅧','y':'🅨','z':'🅩','!':'❗','?':'❓'},_0x204c2a+=_0xebd6c1(0xb8)+Array[_0xebd6c1(0xa5)](_0x27a645)[_0xebd6c1(0xb7)](_0x553f2c=>_0x49000e[_0x553f2c]??_0x553f2c)[_0xebd6c1(0x8a)]('')+'\x0a\x0a',_0x49000e={'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹','a':'ᵃ','b':'ᵇ','c':'ᶜ','d':'ᵈ','e':'ᵉ','f':'ᶠ','g':'ᵍ','h':'ʰ','i':'ⁱ','j':'ʲ','k':'ᵏ','l':'ˡ','m':'ᵐ','n':'ⁿ','o':'ᵒ','p':'ᵖ','q':'q','r':'ʳ','s':'ˢ','t':'ᵗ','u':'ᵘ','v':'ᵛ','w':'ʷ','x':'ˣ','y':'ʸ','z':'ᶻ','A':'ᴬ','B':'ᴮ','C':'ᶜ','D':'ᴰ','E':'ᴱ','F':'ᶠ','G':'ᴳ','H':'ᴴ','I':'ᴵ','J':'ᴶ','K':'ᴷ','L':'ᴸ','M':'ᴹ','N':'ᴺ','O':'ᴼ','P':'ᴾ','Q':'Q','R':'ᴿ','S':'ˢ','T':'ᵀ','U':'ᵁ','V':'ⱽ','W':'ᵂ','X':'ˣ','Y':'ʸ','Z':'ᶻ','+':'⁺','-':'⁻','=':'⁼','(':'⁽',')':'⁾'},_0x204c2a+=_0xebd6c1(0xb2)+Array[_0xebd6c1(0xa5)](_0x27a645)[_0xebd6c1(0xb7)](_0x32f9dd=>_0x49000e[_0x32f9dd]??_0x32f9dd)[_0xebd6c1(0x8a)]('')+'\x0a\x0a',_0x49000e={'a':'🄰','b':'🄱','c':'🄲','d':'🄳','e':'🄴','f':'🄵','g':'🄶','h':'🄷','i':'🄸','j':'🄹','k':'🄺','l':'🄻','m':'🄼','n':'🄽','o':'🄾','p':'🄿','q':'🅀','r':'🅁','s':'🅂','t':'🅃','u':'🅄','v':'🅅','w':'🅆','x':'🅇','y':'🅈','z':'🅉','A':'🄰','B':'🄱','C':'🄲','D':'🄳','E':'🄴','F':'🄵','G':'🄶','H':'🄷','I':'🄸','J':'🄹','K':'🄺','L':'🄻','M':'🄼','N':'🄽','O':'🄾','P':'🄿','Q':'🅀','R':'🅁','S':'🅂','T':'🅃','U':'🅄','V':'🅅','W':'🅆','X':'🅇','Y':'🅈','Z':'🅉'},_0x204c2a+=_0xebd6c1(0xcf)+Array['from'](_0x27a645)[_0xebd6c1(0xb7)](_0x6b0817=>_0x49000e[_0x6b0817]??_0x6b0817)[_0xebd6c1(0x8a)]('')+'\x0a\x0a',_0x49000e={'a':'🅰︎','b':_0xebd6c1(0x92),'c':_0xebd6c1(0xc6),'d':_0xebd6c1(0x98),'e':_0xebd6c1(0x8e),'f':_0xebd6c1(0xbc),'g':_0xebd6c1(0x93),'h':_0xebd6c1(0xde),'i':_0xebd6c1(0xdc),'j':'🅹︎','k':_0xebd6c1(0xbf),'l':_0xebd6c1(0xdf),'m':_0xebd6c1(0xc0),'n':_0xebd6c1(0xb3),'o':_0xebd6c1(0x8b),'p':_0xebd6c1(0xc9),'q':_0xebd6c1(0xa7),'r':_0xebd6c1(0xa8),'s':_0xebd6c1(0xa2),'t':_0xebd6c1(0xbe),'u':_0xebd6c1(0xc1),'v':_0xebd6c1(0xda),'w':_0xebd6c1(0xc2),'x':'🆇︎','y':'🆈︎','z':'🆉︎','A':_0xebd6c1(0xc4),'B':_0xebd6c1(0x92),'C':_0xebd6c1(0xc6),'D':'🅳︎','E':_0xebd6c1(0x8e),'F':_0xebd6c1(0xbc),'G':_0xebd6c1(0x93),'H':'🅷︎','I':_0xebd6c1(0xdc),'J':'🅹︎','K':'🅺︎','L':_0xebd6c1(0xdf),'M':'🅼︎','N':_0xebd6c1(0xb3),'O':_0xebd6c1(0x8b),'P':_0xebd6c1(0xc9),'Q':_0xebd6c1(0xa7),'R':_0xebd6c1(0xa8),'S':_0xebd6c1(0xa2),'T':'🆃︎','U':_0xebd6c1(0xc1),'V':_0xebd6c1(0xda),'W':_0xebd6c1(0xc2),'X':'🆈︎','Y':'🆈︎','Z':'🆉︎'},_0x204c2a+=_0xebd6c1(0xd2)+Array[_0xebd6c1(0xa5)](_0x27a645)[_0xebd6c1(0xb7)](_0x212efc=>_0x49000e[_0x212efc]??_0x212efc)[_0xebd6c1(0x8a)]('')+'\x0a\x0a',_0x49000e={'0':'０','1':'１','2':'２','3':'３','4':'４','5':'５','6':'６','7':'７','8':'８','9':'９','`':'`','-':'－','=':'＝','~':'~','!':'！','@':'＠','#':'＃','$':'＄','%':'％','^':'^','&':'＆','*':'＊','(':'（',')':'）','_':'_','+':'＋','q':'ｑ','w':'ｗ','e':'ｅ','r':'ｒ','t':'ｔ','y':'ｙ','u':'ｕ','i':'ｉ','o':'ｏ','p':'ｐ','[':'[',']':']','\x5c':'\x5c','Q':'Ｑ','W':'Ｗ','E':'Ｅ','R':'Ｒ','T':'Ｔ','Y':'Ｙ','U':'Ｕ','I':'Ｉ','O':'Ｏ','P':'Ｐ','{':'{','}':'}','|':'|','a':'ａ','s':'ｓ','d':'ｄ','f':'ｆ','g':'ｇ','h':'ｈ','j':'ｊ','k':'ｋ','l':'ｌ',',\x20':'，','\x27':'＇','A':'Ａ','S':'Ｓ','D':'Ｄ','F':'Ｆ','G':'Ｇ','H':'Ｈ','J':'Ｊ','K':'Ｋ','L':'Ｌ',':':'：','\x22':'\x22','z':'ｚ','x':'ｘ','c':'ｃ','v':'ｖ','b':'ｂ','n':'ｎ','m':'ｍ','.':'．','/':'／','Z':'Ｚ','X':'Ｘ','C':'Ｃ','V':'Ｖ','B':'Ｂ','N':'Ｎ','M':'Ｍ','<':'<','>':'>','?':'？'},_0x204c2a+='*17.*\x20'+Array[_0xebd6c1(0xa5)](_0x27a645)['map'](_0x46591b=>_0x49000e[_0x46591b]??_0x46591b)[_0xebd6c1(0x8a)]('')+'\x0a\x0a',_0x49000e={'\x20':'\x20\x20','a':_0xebd6c1(0xd5),'b':_0xebd6c1(0xb1),'c':_0xebd6c1(0x7e),'d':_0xebd6c1(0xbb),'e':_0xebd6c1(0xd4),'f':_0xebd6c1(0x7d),'g':_0xebd6c1(0x7f),'h':_0xebd6c1(0x82),'i':_0xebd6c1(0xdb),'j':_0xebd6c1(0x83),'k':_0xebd6c1(0xd8),'l':_0xebd6c1(0xd7),'m':_0xebd6c1(0xc5),'n':_0xebd6c1(0xcd),'o':_0xebd6c1(0xca),'p':_0xebd6c1(0x9f),'q':_0xebd6c1(0xb5),'r':_0xebd6c1(0x8f),'s':_0xebd6c1(0xba),'t':_0xebd6c1(0xd0),'u':'🇺\u200a','v':'🇻\u200a','w':_0xebd6c1(0xdd),'x':'🇽\u200a','y':_0xebd6c1(0x86),'z':_0xebd6c1(0x88),'A':_0xebd6c1(0xd5),'B':_0xebd6c1(0xb1),'C':_0xebd6c1(0x7e),'D':_0xebd6c1(0xbb),'E':_0xebd6c1(0xd4),'F':_0xebd6c1(0x7d),'G':_0xebd6c1(0x7f),'H':_0xebd6c1(0x82),'I':_0xebd6c1(0xdb),'J':_0xebd6c1(0x83),'K':_0xebd6c1(0xd8),'L':_0xebd6c1(0xd7),'M':_0xebd6c1(0xc5),'N':_0xebd6c1(0xcd),'O':_0xebd6c1(0xca),'P':_0xebd6c1(0x9f),'Q':_0xebd6c1(0xb5),'R':_0xebd6c1(0x8f),'S':'🇸\u200a','T':'🇹\u200a','U':'🇺\u200a','V':_0xebd6c1(0x7b),'W':_0xebd6c1(0xdd),'X':'🇾\u200a','Y':_0xebd6c1(0x86),'Z':_0xebd6c1(0x88)},_0x204c2a+='*18.*\x20'+Array[_0xebd6c1(0xa5)](_0x27a645)[_0xebd6c1(0xb7)](_0x56499d=>_0x49000e[_0x56499d]??_0x56499d)[_0xebd6c1(0x8a)]('')+'\x0a\x0a',_0x49000e={'a':'ᴀ','b':'ʙ','c':'ᴄ','d':'ᴅ','e':'ᴇ','f':'ꜰ','g':'ɢ','h':'ʜ','i':'ɪ','j':'ᴊ','k':'ᴋ','l':'ʟ','m':'ᴍ','n':'ɴ','o':'ᴏ','p':'ᴩ','q':'ǫ','r':'ʀ','s':'ꜱ','t':'ᴛ','u':'ᴠ','v':'ᴠ','w':'ᴡ','x':'x','y':'y','z':'ᴢ','A':'ᴀ','B':'ʙ','C':'ᴄ','D':'ᴅ','E':'ᴇ','F':'ꜰ','G':'ɢ','H':'ʜ','I':'ɪ','J':'ᴊ','K':'ᴋ','L':'ʟ','M':'ᴍ','N':'ɴ','O':'ᴏ','P':'ᴩ','Q':'ǫ','R':'ʀ','S':'ꜱ','T':'ᴛ','U':'ᴠ','V':'ᴠ','W':'ᴡ','X':'y','Y':'y','Z':'ᴢ'},_0x204c2a+=_0xebd6c1(0x8c)+Array[_0xebd6c1(0xa5)](_0x27a645)[_0xebd6c1(0xb7)](_0x1e5722=>_0x49000e[_0x1e5722]??_0x1e5722)[_0xebd6c1(0x8a)]('')+'\x0a\x0a',_0x49000e={'a':'Λ','b':'B','c':'ᄃ','d':'D','e':'Σ','f':'F','g':'G','h':'Ή','i':'I','j':'J','k':'K','l':'ᄂ','m':'M','n':'П','o':'Ө','p':'P','q':'Q','r':'Я','s':'Ƨ','t':'Ƭ','u':'Ц','v':'V','w':'Щ','x':'X','y':'Y','z':'Z','A':'Λ','B':'B','C':'ᄃ','D':'D','E':'Σ','F':'F','G':'G','H':'Ή','I':'I','J':'J','K':'K','L':'ᄂ','M':'M','N':'П','O':'Ө','P':'P','Q':'Q','R':'Я','S':'Ƨ','T':'Ƭ','U':'Ц','V':'V','W':'Щ','X':'X','Y':'Y','Z':'Z'},_0x204c2a+='*20.*\x20'+Array['from'](_0x27a645)['map'](_0x8ce876=>_0x49000e[_0x8ce876]??_0x8ce876)['join']('')+'\x0a\x0a',_0x204c2a;}_0x1f3fae=_0x1f3fae[_0xebd6c1(0xa4)]();if(_0x1f3fae=='bold')_0x49000e={'0':'𝟎','1':'𝟏','2':'𝟐','3':'𝟑','4':'𝟒','5':'𝟓','6':'𝟔','7':'𝟕','8':'𝟖','9':'𝟗','a':'𝐚','b':'𝐛','c':'𝐜','d':'𝐝','e':'𝐞','f':'𝐟','g':'𝐠','h':'𝐡','i':'𝐢','j':'𝐣','k':'𝐤','l':'𝐥','m':'𝐦','n':'𝐧','o':'𝐨','p':'𝐩','q':'𝐪','r':'𝐫','s':'𝐬','t':'𝐭','u':'𝐮','v':'𝐯','w':'𝐰','x':'𝐱','y':'𝐲','z':'𝐳','A':'𝐀','B':'𝐁','C':'𝐂','D':'𝐃','E':'𝐄','F':'𝐅','G':'𝐆','H':'𝐇','I':'𝐈','J':'𝐉','K':'𝐊','L':'𝐋','M':'𝐌','N':'𝐍','O':'𝐎','P':'𝐏','Q':'𝐐','R':'𝐑','S':'𝐒','T':'𝐓','U':'𝐔','V':'𝐕','W':'𝐖','X':'𝐗','Y':'𝐘','Z':'𝐙'};else{if(_0x1f3fae==_0xebd6c1(0xc7))_0x49000e={'A':'𝘈','B':'𝘉','C':'𝘊','D':'𝘋','E':'𝘌','F':'𝘍','G':'𝘎','H':'𝘏','I':'𝘐','J':'𝘑','K':'𝘒','L':'𝘓','M':'𝘔','N':'𝘕','O':'𝘖','P':'𝘗','Q':'𝘘','R':'𝘙','S':'𝘚','T':'𝘛','U':'𝘜','V':'𝘝','W':'𝘞','X':'𝘟','Y':'𝘠','Z':'𝘡','a':'𝘢','b':'𝘣','c':'𝘤','d':'𝘥','e':'𝘦','f':'𝘧','g':'𝘨','h':'𝘩','i':'𝘪','j':'𝘫','k':'𝘬','l':'𝘭','m':'𝘮','n':'𝘯','o':'𝘰','p':'𝘱','q':'𝘲','r':'𝘳','s':'𝘴','t':'𝘵','u':'𝘶','v':'𝘷','w':'𝘸','x':'𝘹','y':'𝘺','z':'𝘻'};else{if(_0x1f3fae==_0xebd6c1(0x7c))_0x49000e={'A':'𝑨','B':'𝑩','C':'𝑪','D':'𝑫','E':'𝑬','F':'𝑭','G':'𝑮','H':'𝑯','I':'𝑰','J':'𝑱','K':'𝑲','L':'𝑳','M':'𝑴','N':'𝑵','O':'𝑶','P':'𝑷','Q':'𝑸','R':'𝑹','S':'𝑺','T':'𝑻','U':'𝑼','V':'𝑽','W':'𝑾','X':'𝑿','Y':'𝒀','Z':'𝒁','a':'𝒂','b':'𝒃','c':'𝒄','d':'𝒅','e':'𝒆','f':'𝒇','g':'𝒈','h':'𝒉','i':'𝒊','j':'𝒋','k':'𝒌','l':'𝒍','m':'𝒎','n':'𝒏','o':'𝒐','p':'𝒑','q':'𝒒','r':'𝒓','s':'𝒔','t':'𝒕','u':'𝒖','v':'𝒗','w':'𝒘','x':'𝒙','y':'𝒚','z':'𝒛'};else{if(_0x1f3fae==_0xebd6c1(0xaf))_0x49000e={'0':'𝟢','1':'𝟣','2':'𝟤','3':'𝟥','4':'𝟦','5':'𝟧','6':'𝟨','7':'𝟩','8':'𝟪','9':'𝟫','A':'𝖠','B':'𝖡','C':'𝖢','D':'𝖣','E':'𝖤','F':'𝖥','G':'𝖦','H':'𝖧','I':'𝖨','J':'𝖩','K':'𝖪','L':'𝖫','M':'𝖬','N':'𝖭','O':'𝖮','P':'𝖯','Q':'𝖰','R':'𝖱','S':'𝖲','T':'𝖳','U':'𝖴','V':'𝖵','W':'𝖶','X':'𝖷','Y':'𝖸','Z':'𝖹','a':'𝖺','b':'𝖻','c':'𝖼','d':'𝖽','e':'𝖾','f':'𝖿','g':'𝗀','h':'𝗁','i':'𝗂','j':'𝗃','k':'𝗄','l':'𝗅','m':'𝗆','n':'𝗇','o':'𝗈','p':'𝗉','q':'𝗊','r':'𝗋','s':'𝗌','t':'𝗍','u':'𝗎','v':'𝗏','w':'𝗐','x':'𝗑','y':'𝗒','z':'𝗓'};else{if(_0x1f3fae==_0xebd6c1(0x7a))_0x49000e={'0':'𝟬','1':'𝟭','2':'𝟮','3':'𝟯','4':'𝟰','5':'𝟱','6':'𝟲','7':'𝟳','8':'𝟴','9':'𝟵','a':'𝗮','b':'𝗯','c':'𝗰','d':'𝗱','e':'𝗲','f':'𝗳','g':'𝗴','h':'𝗵','i':'𝗶','j':'𝗷','k':'𝗸','l':'𝗹','m':'𝗺','n':'𝗻','o':'𝗼','p':'𝗽','q':'𝗾','r':'𝗿','s':'𝘀','t':'𝘁','u':'𝘂','v':'𝘃','w':'𝘄','x':'𝘅','y':'𝘆','z':'𝘇','A':'𝗔','B':'𝗕','C':'𝗖','D':'𝗗','E':'𝗘','F':'𝗙','G':'𝗚','H':'𝗛','I':'𝗜','J':'𝗝','K':'𝗞','L':'𝗟','M':'𝗠','N':'𝗡','O':'𝗢','P':'𝗣','Q':'𝗤','R':'𝗥','S':'𝗦','T':'𝗧','U':'𝗨','V':'𝗩','W':'𝗪','X':'𝗫','Y':'𝗬','Z':'𝗭'};else{if(_0x1f3fae==_0xebd6c1(0x9c))_0x49000e={'0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9','a':'𝙖','b':'𝙗','c':'𝙘','d':'𝙙','e':'𝙚','f':'𝙛','g':'𝙜','h':'𝙝','i':'𝙞','j':'𝙟','k':'𝙠','l':'𝙡','m':'𝙢','n':'𝙣','o':'𝙤','p':'𝙥','q':'𝙦','r':'𝙧','s':'𝙨','t':'𝙩','u':'𝙪','v':'𝙫','w':'𝙬','x':'𝙭','y':'𝙮','z':'𝙯','A':'𝘼','B':'𝘽','C':'𝘾','D':'𝘿','E':'𝙀','F':'𝙁','G':'𝙂','H':'𝙃','I':'𝙄','J':'𝙅','K':'𝙆','L':'𝙇','M':'𝙈','N':'𝙉','O':'𝙊','P':'𝙋','Q':'𝙌','R':'𝙍','S':'𝙎','T':'𝙏','U':'𝙐','V':'𝙑','W':'𝙒','X':'𝙓','Y':'𝙔','Z':'𝙕'};else{if(_0x1f3fae==_0xebd6c1(0x95))_0x49000e={'A':'𝒜','B':'ℬ','C':'𝒞','D':'𝒟','E':'ℰ','F':'ℱ','G':'𝒢','H':'ℋ','I':'ℐ','J':'𝒥','K':'𝒦','L':'ℒ','M':'ℳ','N':'𝒩','O':'𝒪','P':'𝒫','Q':'𝒬','R':'ℛ','S':'𝒮','T':'𝒯','U':'𝒰','V':'𝒱','W':'𝒲','X':'𝒳','Y':'𝒴','Z':'𝒵','a':'𝒶','b':'𝒷','c':'𝒸','d':'𝒹','e':'ℯ','f':'𝒻','g':'ℊ','h':'𝒽','i':'𝒾','j':'𝒿','k':'𝓀','l':'𝓁','m':'𝓂','n':'𝓃','o':'ℴ','p':'𝓅','q':'𝓆','r':'𝓇','s':'𝓈','t':'𝓉','u':'𝓊','v':'𝓋','w':'𝓌','x':'𝓍','y':'𝓎','z':'𝓏'};else{if(_0x1f3fae==_0xebd6c1(0xbd))_0x49000e={'0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9','a':'𝓪','b':'𝓫','c':'𝓬','d':'𝓭','e':'𝓮','f':'𝓯','g':'𝓰','h':'𝓱','i':'𝓲','j':'𝓳','k':'𝓴','l':'𝓵','m':'𝓶','n':'𝓷','o':'𝓸','p':'𝓹','q':'𝓺','r':'𝓻','s':'𝓼','t':'𝓽','u':'𝓾','v':'𝓿','w':'𝔀','x':'𝔁','y':'𝔂','z':'𝔃','A':'𝓐','B':'𝓑','C':'𝓒','D':'𝓓','E':'𝓔','F':'𝓕','G':'𝓖','H':'𝓗','I':'𝓘','J':'𝓙','K':'𝓚','L':'𝓛','M':'𝓜','N':'𝓝','O':'𝓞','P':'𝓟','Q':'𝓠','R':'𝓡','S':'𝓢','T':'𝓣','U':'𝓤','V':'𝓥','W':'𝓦','X':'𝓧','Y':'𝓨','Z':'𝓩'};else{if(_0x1f3fae==_0xebd6c1(0xd3))_0x49000e={'a':'𝖆','b':'𝖇','c':'𝖈','d':'𝖉','e':'𝖊','f':'𝖋','g':'𝖌','h':'𝖍','i':'𝖎','j':'𝖏','k':'𝖐','l':'𝖑','m':'𝖒','n':'𝖓','o':'𝖔','p':'𝖕','q':'𝖖','r':'𝖗','s':'𝖘','t':'𝖙','u':'𝖚','v':'𝖛','w':'𝖜','x':'𝖝','y':'𝖞','z':'𝖟','A':'𝕬','B':'𝕭','C':'𝕮','D':'𝕯','E':'𝕰','F':'𝕱','G':'𝕲','H':'𝕳','I':'𝕴','J':'𝕵','K':'𝕶','L':'𝕷','M':'𝕸','N':'𝕹','O':'𝕺','P':'𝕻','Q':'𝕼','R':'𝕽','S':'𝕾','T':'𝕿','U':'𝖀','V':'𝖁','W':'𝖂','X':'𝖃','Y':'𝖄','Z':'𝖅'};else{if(_0x1f3fae==_0xebd6c1(0xa9))_0x49000e={'0':'𝟘','1':'𝟙','2':'𝟚','3':'𝟛','4':'𝟜','5':'𝟝','6':'𝟞','7':'𝟟','8':'𝟠','9':'𝟡','a':'𝕒','b':'𝕓','c':'𝕔','d':'𝕕','e':'𝕖','f':'𝕗','g':'𝕘','h':'𝕙','i':'𝕚','j':'𝕛','k':'𝕜','l':'𝕝','m':'𝕞','n':'𝕟','o':'𝕠','p':'𝕡','q':'𝕢','r':'𝕣','s':'𝕤','t':'𝕥','u':'𝕦','v':'𝕧','w':'𝕨','x':'𝕩','y':'𝕪','z':'𝕫','A':'𝔸','B':'𝔹','C':'ℂ','D':'𝔻','E':'𝔼','F':'𝔽','G':'𝔾','H':'ℍ','I':'𝕀','J':'𝕁','K':'𝕂','L':'𝕃','M':'𝕄','N':'ℕ','O':'𝕆','P':'ℙ','Q':'ℚ','R':'ℝ','S':'𝕊','T':'𝕋','U':'𝕌','V':'𝕍','W':'𝕎','X':'𝕏','Y':'𝕐','Z':'ℤ'};else{if(_0x1f3fae==_0xebd6c1(0x94))_0x49000e={'0':'𝟶','1':'𝟷','2':'𝟸','3':'𝟹','4':'𝟺','5':'𝟻','6':'𝟼','7':'𝟽','8':'𝟾','9':'𝟿','a':'𝚊','b':'𝚋','c':'𝚌','d':'𝚍','e':'𝚎','f':'𝚏','g':'𝚐','h':'𝚑','i':'𝚒','j':'𝚓','k':'𝚔','l':'𝚕','m':'𝚖','n':'𝚗','o':'𝚘','p':'𝚙','q':'𝚚','r':'𝚛','s':'𝚜','t':'𝚝','u':'𝚞','v':'𝚟','w':'𝚠','x':'𝚡','y':'𝚢','z':'𝚣','A':'𝙰','B':'𝙱','C':'𝙲','D':'𝙳','E':'𝙴','F':'𝙵','G':'𝙶','H':'𝙷','I':'𝙸','J':'𝙹','K':'𝙺','L':'𝙻','M':'𝙼','N':'𝙽','O':'𝙾','P':'𝙿','Q':'𝚀','R':'𝚁','S':'𝚂','T':'𝚃','U':'𝚄','V':'𝚅','W':'𝚆','X':'𝚇','Y':'𝚈','Z':'𝚉'};else{if(_0x1f3fae==_0xebd6c1(0xa6))_0x49000e={'0':'⓪','1':'①','2':'②','3':'③','4':'④','5':'⑤','6':'⑥','7':'⑦','8':'⑧','9':'⑨','A':'Ⓐ','B':'Ⓑ','C':'Ⓒ','D':'Ⓓ','E':'Ⓔ','F':'Ⓕ','G':'Ⓖ','H':'Ⓗ','I':'Ⓘ','J':'Ⓙ','K':'Ⓚ','L':'Ⓛ','M':'Ⓜ','N':'Ⓝ','O':'Ⓞ','P':'Ⓟ','Q':'Ⓠ','R':'Ⓡ','S':'Ⓢ','T':'Ⓣ','U':'Ⓤ','V':'Ⓥ','W':'Ⓦ','X':'Ⓧ','Y':'Ⓨ','Z':'Ⓩ','a':'ⓐ','b':'ⓑ','c':'ⓒ','d':'ⓓ','e':'ⓔ','f':'ⓕ','g':'ⓖ','h':'ⓗ','i':'ⓘ','j':'ⓙ','k':'ⓚ','l':'ⓛ','m':'ⓜ','n':'ⓝ','o':'ⓞ','p':'ⓟ','q':'ⓠ','r':'ⓡ','s':'ⓢ','t':'ⓣ','u':'ⓤ','v':'ⓥ','w':'ⓦ','x':'ⓧ','y':'ⓨ','z':'ⓩ','!':'❕','?':'❔'};else{if(_0x1f3fae==_0xebd6c1(0x8d))_0x49000e={'0':'⓿','1':'➊','2':'➋','3':'➌','4':'➍','5':'➎','6':'➏','7':'➐','8':'➑','9':'➒','A':'🅐','B':'🅑','C':'🅒','D':'🅓','E':'🅔','F':'🅕','G':'🅖','H':'🅗','I':'🅘','J':'🅙','K':'🅚','L':'🅛','M':'🅜','N':'🅝','O':'🅞','P':'🅟','Q':'🅠','R':'🅡','S':'🅢','T':'🅣','U':'🅤','V':'🅥','W':'🅦','X':'🅧','Y':'🅨','Z':'🅩','a':'🅐','b':'🅑','c':'🅒','d':'🅓','e':'🅔','f':'🅕','g':'🅖','h':'🅗','i':'🅘','j':'🅙','k':'🅚','l':'🅛','m':'🅜','n':'🅝','o':'🅞','p':'🅟','q':'🅠','r':'🅡','s':'🅢','t':'🅣','u':'🅤','v':'🅥','w':'🅦','x':'🅧','y':'🅨','z':'🅩','!':'❗','?':'❓'};else{if(_0x1f3fae==_0xebd6c1(0xcc))_0x49000e={'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹','a':'ᵃ','b':'ᵇ','c':'ᶜ','d':'ᵈ','e':'ᵉ','f':'ᶠ','g':'ᵍ','h':'ʰ','i':'ⁱ','j':'ʲ','k':'ᵏ','l':'ˡ','m':'ᵐ','n':'ⁿ','o':'ᵒ','p':'ᵖ','q':'q','r':'ʳ','s':'ˢ','t':'ᵗ','u':'ᵘ','v':'ᵛ','w':'ʷ','x':'ˣ','y':'ʸ','z':'ᶻ','A':'ᴬ','B':'ᴮ','C':'ᶜ','D':'ᴰ','E':'ᴱ','F':'ᶠ','G':'ᴳ','H':'ᴴ','I':'ᴵ','J':'ᴶ','K':'ᴷ','L':'ᴸ','M':'ᴹ','N':'ᴺ','O':'ᴼ','P':'ᴾ','Q':'Q','R':'ᴿ','S':'ˢ','T':'ᵀ','U':'ᵁ','V':'ⱽ','W':'ᵂ','X':'ˣ','Y':'ʸ','Z':'ᶻ','+':'⁺','-':'⁻','=':'⁼','(':'⁽',')':'⁾'};else{if(_0x1f3fae==_0xebd6c1(0x9d))_0x49000e={'a':'🄰','b':'🄱','c':'🄲','d':'🄳','e':'🄴','f':'🄵','g':'🄶','h':'🄷','i':'🄸','j':'🄹','k':'🄺','l':'🄻','m':'🄼','n':'🄽','o':'🄾','p':'🄿','q':'🅀','r':'🅁','s':'🅂','t':'🅃','u':'🅄','v':'🅅','w':'🅆','x':'🅇','y':'🅈','z':'🅉','A':'🄰','B':'🄱','C':'🄲','D':'🄳','E':'🄴','F':'🄵','G':'🄶','H':'🄷','I':'🄸','J':'🄹','K':'🄺','L':'🄻','M':'🄼','N':'🄽','O':'🄾','P':'🄿','Q':'🅀','R':'🅁','S':'🅂','T':'🅃','U':'🅄','V':'🅅','W':'🅆','X':'🅇','Y':'🅈','Z':'🅉'};else{if(_0x1f3fae==_0xebd6c1(0xaa))_0x49000e={'a':_0xebd6c1(0xc4),'b':_0xebd6c1(0x92),'c':'🅲︎','d':_0xebd6c1(0x98),'e':'🅴︎','f':_0xebd6c1(0xbc),'g':_0xebd6c1(0x93),'h':'🅷︎','i':_0xebd6c1(0xdc),'j':'🅹︎','k':_0xebd6c1(0xbf),'l':_0xebd6c1(0xdf),'m':'🅼︎','n':_0xebd6c1(0xb3),'o':'🅾︎','p':_0xebd6c1(0xc9),'q':_0xebd6c1(0xa7),'r':_0xebd6c1(0xa8),'s':_0xebd6c1(0xa2),'t':_0xebd6c1(0xbe),'u':_0xebd6c1(0xc1),'v':_0xebd6c1(0xda),'w':'🆆︎','x':_0xebd6c1(0x89),'y':_0xebd6c1(0x9a),'z':_0xebd6c1(0x85),'A':_0xebd6c1(0xc4),'B':_0xebd6c1(0x92),'C':_0xebd6c1(0xc6),'D':'🅳︎','E':_0xebd6c1(0x8e),'F':_0xebd6c1(0xbc),'G':_0xebd6c1(0x93),'H':_0xebd6c1(0xde),'I':_0xebd6c1(0xdc),'J':_0xebd6c1(0x99),'K':'🅺︎','L':'🅻︎','M':_0xebd6c1(0xc0),'N':_0xebd6c1(0xb3),'O':'🅾︎','P':_0xebd6c1(0xc9),'Q':'🆀︎','R':_0xebd6c1(0xa8),'S':_0xebd6c1(0xa2),'T':'🆃︎','U':'🆄︎','V':'🆅︎','W':_0xebd6c1(0xc2),'X':_0xebd6c1(0x9a),'Y':'🆈︎','Z':_0xebd6c1(0x85)};else{if(_0x1f3fae=='wide')_0x49000e={'0':'０','1':'１','2':'２','3':'３','4':'４','5':'５','6':'６','7':'７','8':'８','9':'９','`':'`','-':'－','=':'＝','~':'~','!':'！','@':'＠','#':'＃','$':'＄','%':'％','^':'^','&':'＆','*':'＊','(':'（',')':'）','_':'_','+':'＋','q':'ｑ','w':'ｗ','e':'ｅ','r':'ｒ','t':'ｔ','y':'ｙ','u':'ｕ','i':'ｉ','o':'ｏ','p':'ｐ','[':'[',']':']','\x5c':'\x5c','Q':'Ｑ','W':'Ｗ','E':'Ｅ','R':'Ｒ','T':'Ｔ','Y':'Ｙ','U':'Ｕ','I':'Ｉ','O':'Ｏ','P':'Ｐ','{':'{','}':'}','|':'|','a':'ａ','s':'ｓ','d':'ｄ','f':'ｆ','g':'ｇ','h':'ｈ','j':'ｊ','k':'ｋ','l':'ｌ',',\x20':'，','\x27':'＇','A':'Ａ','S':'Ｓ','D':'Ｄ','F':'Ｆ','G':'Ｇ','H':'Ｈ','J':'Ｊ','K':'Ｋ','L':'Ｌ',':':'：','\x22':'\x22','z':'ｚ','x':'ｘ','c':'ｃ','v':'ｖ','b':'ｂ','n':'ｎ','m':'ｍ','.':'．','/':'／','Z':'Ｚ','X':'Ｘ','C':'Ｃ','V':'Ｖ','B':'Ｂ','N':'Ｎ','M':'Ｍ','<':'<','>':'>','?':'？'};else{if(_0x1f3fae==_0xebd6c1(0xb0))_0x49000e={'\x20':'\x20\x20','a':_0xebd6c1(0xd5),'b':'🇧\u200a','c':_0xebd6c1(0x7e),'d':_0xebd6c1(0xbb),'e':_0xebd6c1(0xd4),'f':_0xebd6c1(0x7d),'g':_0xebd6c1(0x7f),'h':_0xebd6c1(0x82),'i':_0xebd6c1(0xdb),'j':'🇯\u200a','k':_0xebd6c1(0xd8),'l':'🇱\u200a','m':'🇲\u200a','n':_0xebd6c1(0xcd),'o':_0xebd6c1(0xca),'p':_0xebd6c1(0x9f),'q':_0xebd6c1(0xb5),'r':_0xebd6c1(0x8f),'s':'🇸\u200a','t':_0xebd6c1(0xd0),'u':_0xebd6c1(0xb4),'v':_0xebd6c1(0x7b),'w':'🇼\u200a','x':_0xebd6c1(0xa3),'y':_0xebd6c1(0x86),'z':_0xebd6c1(0x88),'A':_0xebd6c1(0xd5),'B':_0xebd6c1(0xb1),'C':'🇨\u200a','D':_0xebd6c1(0xbb),'E':_0xebd6c1(0xd4),'F':'🇫\u200a','G':_0xebd6c1(0x7f),'H':_0xebd6c1(0x82),'I':_0xebd6c1(0xdb),'J':_0xebd6c1(0x83),'K':_0xebd6c1(0xd8),'L':_0xebd6c1(0xd7),'M':_0xebd6c1(0xc5),'N':'🇳\u200a','O':_0xebd6c1(0xca),'P':_0xebd6c1(0x9f),'Q':_0xebd6c1(0xb5),'R':_0xebd6c1(0x8f),'S':_0xebd6c1(0xba),'T':'🇹\u200a','U':_0xebd6c1(0xb4),'V':_0xebd6c1(0x7b),'W':_0xebd6c1(0xdd),'X':_0xebd6c1(0x86),'Y':_0xebd6c1(0x86),'Z':_0xebd6c1(0x88)};else{if(_0x1f3fae==_0xebd6c1(0x87))_0x49000e={'a':'ᴀ','b':'ʙ','c':'ᴄ','d':'ᴅ','e':'ᴇ','f':'ꜰ','g':'ɢ','h':'ʜ','i':'ɪ','j':'ᴊ','k':'ᴋ','l':'ʟ','m':'ᴍ','n':'ɴ','o':'ᴏ','p':'ᴩ','q':'ǫ','r':'ʀ','s':'ꜱ','t':'ᴛ','u':'ᴜ','v':'ᴠ','w':'ᴡ','x':'x','y':'y','z':'ᴢ','A':'ᴀ','B':'ʙ','C':'ᴄ','D':'ᴅ','E':'ᴇ','F':'ꜰ','G':'ɢ','H':'ʜ','I':'ɪ','J':'ᴊ','K':'ᴋ','L':'ʟ','M':'ᴍ','N':'ɴ','O':'ᴏ','P':'ᴩ','Q':'ǫ','R':'ʀ','S':'ꜱ','T':'ᴛ','U':'ᴜ','V':'ᴠ','W':'ᴡ','X':'y','Y':'y','Z':'ᴢ'};else{if(_0x1f3fae==_0xebd6c1(0x80))_0x49000e={'a':'Λ','b':'B','c':'ᄃ','d':'D','e':'Σ','f':'F','g':'G','h':'Ή','i':'I','j':'J','k':'K','l':'ᄂ','m':'M','n':'П','o':'Ө','p':'P','q':'Q','r':'Я','s':'Ƨ','t':'Ƭ','u':'Ц','v':'V','w':'Щ','x':'X','y':'Y','z':'Z','A':'Λ','B':'B','C':'ᄃ','D':'D','E':'Σ','F':'F','G':'G','H':'Ή','I':'I','J':'J','K':'K','L':'ᄂ','M':'M','N':'П','O':'Ө','P':'P','Q':'Q','R':'Я','S':'Ƨ','T':'Ƭ','U':'Ц','V':'V','W':'Щ','X':'X','Y':'Y','Z':'Z'};}}}}}}}}}}}}}}}}}}}return Array[_0xebd6c1(0xa5)](_0x27a645)[_0xebd6c1(0xb7)](_0x1c6a0a=>_0x49000e[_0x1c6a0a]??_0x1c6a0a)[_0xebd6c1(0x8a)]('');}
