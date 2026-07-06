export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const userAgent = request.headers.get('User-Agent') || '';

    // 1. Anti-Ban & Crawler Protection (Googlebot, Social Media Crawlers ko filter karna)
    const isBot = /googlebot|bingbot|yandex|twitterbot|facebookexternalhit|whatsapp|telegrambot/i.test(userAgent);

    if (isBot || path === "/" || path === "/favicon.ico") {
      return new Response("⚡ Traffic Routing Engine: All Systems Operational (Status: 200 OK)", {
        status: 200,
        headers: { "Content-Type": "text/plain" }
      });
    }

    // 2. Dynamic Path Extraction (User kya type karke aaya hai)
    const cleanParam = path.replace(/^\/+/, '').replace(/[^a-zA-Z0-9_-]/g, '_') || 'default_traffic';

    // 3. Telegram Deep-Link Generation
    // NOTE: Agar aapke bot ka naam @BypassBot hai, toh yahan sirf BypassBot likhein (bina @ ke)
    const BOT_USERNAME = "YourBypassBot"; 
    const telegramDeepLink = `https://t.me/${BOT_USERNAME}?start=${cleanParam}`;

    // 4. User ko seedha Telegram app me redirect karna (307 Temporary Redirect)
    return Response.redirect(telegramDeepLink, 307);
  },
};
