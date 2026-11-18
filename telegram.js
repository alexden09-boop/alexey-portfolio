export function telegramContact(value) {
  if (typeof value !== 'string' || !value.trim()) return null;
  try {
    const url = new URL(value);
    if (!['https:', 'http:'].includes(url.protocol) || !['t.me', 'telegram.me'].includes(url.hostname)) return null;
    const profile = /^\/([a-z\d_]+)\/?$/i.exec(url.pathname);
    return { url: url.href, label: profile ? '@' + profile[1] : 'Написать в Telegram' };
  } catch {
    return null;
  }
}
