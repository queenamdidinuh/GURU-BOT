import { download } from 'aptoide-scraper';

let handler = async (m, { conn, usedPrefix: prefix, command, text }) => {
  try {
    if (command === 'apk') {
      if (!text) throw `*Bza , Plzz give a APK Name to 💝 Queen Hentai 💝.*`;

      await conn.reply(m.chat, global.wait, m);
      let data = await download(text);

      if (data.size.replace(' MB', '') > 200) {
        return await conn.sendMessage(m.chat, { text: '*Bza , This file capacity is high,වෙන එකක් try කරාම්.*' }, { quoted: m });
      }

      if (data.size.includes('GB')) {
        return await conn.sendMessage(m.chat, { text: '*Bza , This file capacity is high,වෙන එකක් try කරාම්.*' }, { quoted: m });
      }

      await conn.sendMessage(
        m.chat,
        { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null },
        { quoted: m }
      );
    }
  } catch {
    throw `*Bza ,Plzz give a valid link to 💝 Queen Hentai 💝.*`;
  }
};

handler.command = ['hentaiapk', 'dinuapk']
export default handler;
