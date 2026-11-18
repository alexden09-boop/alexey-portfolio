export const groups = {
  commerce: 'Магазины и каталоги', business: 'Компании и услуги',
  digital: 'Веб-сервисы', personal: 'Портфолио',
};

// Use the work itself as the index artwork. Paths are relative to the public catalog.
export const projects = [
  { id: 'homesart', name: 'HomesArt', group: 'commerce', kind: 'Мебель на заказ', image: 'art/homesart/interior.webp', position: '65% 50%' },
  { id: 'duckcomics', name: 'DuckComics', group: 'commerce', kind: 'Магазин комиксов', image: 'stills/duckcomics.webp' },
  { id: 'meganrg', name: 'МегаЭнерджи', group: 'commerce', kind: 'Спортивное питание', image: 'stills/meganrg.webp' },
  { id: 'meta-lingva', name: 'Мета-Лингва', group: 'business', kind: 'Языковая школа', image: 'art/meta-lingva/class.webp' },
  { id: 'capsule', name: 'Капсула времени', group: 'digital', kind: 'Отложенные видеопослания', image: 'stills/capsule.webp' },
  { id: 'soyuz', name: 'SOYUZ bc', group: 'commerce', kind: 'Хоккейная экипировка', image: 'art/soyuz/rink.webp', position: '75% 50%' },
  { id: 'atelier', name: 'Подарочное ателье', group: 'commerce', kind: 'Подарочные корзины', image: 'stills/atelier.webp' },
  { id: 'hikikomori', name: 'Hikikomori Kai', group: 'commerce', kind: 'Магазин одежды', image: 'art/hikikomori/banner.webp', position: '69% 50%' },
  { id: 'energy', name: 'ENERGY', group: 'business', kind: 'Сайт VPN-сервиса', image: 'stills/energy.webp' },
  { id: 'beta-trading', name: 'Beta Trading', group: 'business', kind: 'Дизайн и разработка', image: 'art/beta-trading/coffee.webp' },
  { id: 'author', name: 'Цао Шэнь Мин', group: 'business', kind: 'Авторский сайт', image: 'art/author/portrait.webp', position: '50% 35%' },
  { id: 'aero', name: 'AERO', group: 'business', kind: 'Сайт дизайн-студии', image: 'stills/aero.webp', framed: true },
  { id: 'roman', name: 'Портфолио Романа', group: 'personal', kind: 'Моушн-портфолио', image: 'roman/edition/sculpture.svg', framed: true },
];
