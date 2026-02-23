const baseTracks = [
  {
    id: 'base-1',
    title: 'Никаких больше вечеринок',
    artist: 'Cream Soda',
    coverUrl: 'https://cdn.stocksnap.io/img-thumbs/280h/headphones-music_1IXTRXOWOE.jpg',
    iframeSrc: 'https://music.yandex.ru/iframe/track/80092264/16388667',
  },
  {
    id: 'base-2',
    title: 'Вахтерам',
    artist: 'Бумбокс',
    coverUrl: 'https://cdn.stocksnap.io/img-thumbs/280h/microphone-music_GHFULOSCA1.jpg',
    iframeSrc: 'https://music.yandex.ru/iframe/track/26606393/3141087',
  },
  {
    id: 'base-3',
    title: 'Breathe',
    artist: 'The Prodigy',
    coverUrl: 'https://cdn.stocksnap.io/img-thumbs/280h/dj-record_ZSOYMYCJAZ.jpg',
    iframeSrc: 'https://music.yandex.ru/iframe/track/508573/56580',
  },
  {
    id: 'base-4',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    coverUrl: 'https://cdn.stocksnap.io/img-thumbs/280h/woman-nightlife_XZY7ZMPPVY.jpg',
    iframeSrc: 'https://music.yandex.ru/iframe/track/65064384/10887119',
  },
  {
    id: 'base-5',
    title: 'Believer',
    artist: 'Imagine Dragons',
    coverUrl: 'https://cdn.stocksnap.io/img-thumbs/280h/music-guitar_BWLHIIOGVX.jpg',
    iframeSrc: 'https://music.yandex.ru/iframe/track/42104011/6664801',
  },
  {
    id: 'base-6',
    title: 'Лабиринт',
    artist: 'Miyagi',
    coverUrl: 'https://cdn.stocksnap.io/img-thumbs/280h/concert-band_9OE1NIPQTX.jpg',
    iframeSrc: 'https://music.yandex.ru/iframe/track/62351004/10284765',
  },
]

const copiesPerTrack = 10

export const tracks = baseTracks.flatMap((track) =>
  Array.from({ length: copiesPerTrack }, (_, index) => ({
    ...track,
    id: `${track.id}-${index + 1}`,
  })),
)
