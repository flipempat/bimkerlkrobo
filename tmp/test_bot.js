async function testBot() {
  const url = "https://shopee.co.id/Isi-100-Stik-Dupa-Wangi-Harum-Natural-Model-Lidi-Panjang-27cm-i.1325294054.51717893560";
  const bots = [
    "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",
    "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)",
    "Twitterbot/1.0",
    "WhatsApp/2.21.12.21 A"
  ];
  for (const bot of bots) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": bot } });
      console.log(bot.slice(0, 20), res.status);
      const text = await res.text();
      console.log("Length:", text.length);
      const prices = text.match(/Rp\s*[\d\.\,]+/gi) || text.match(/"price":\s*[\d\.]+/gi);
      console.log("Prices:", prices);
      const title = text.match(/<title[^>]*>([^<]*)<\/title>/i);
      console.log("Title:", title ? title[1] : "none");
    } catch (e) {
      console.log("Error:", e.message);
    }
  }
}
testBot();
